"use client";

import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import UpdateRealTimeForm from "./UpdateRealTimeForm";

export default function RealTimeDisplay() {
  //state management
  const [realTimeMessages, setRealTimeMessages] = useState([]);
  const [editing, setEditing] = useState(false);

  //side effects
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "realTimeMessages"), (snapshot) => {
      const messagesArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRealTimeMessages(messagesArray);
    });
    return () => unsub();
  }, []);

  // function to handle deletes
  async function handleDelete(id) {
    try {
      const msgRef = doc(db, "realTimeMessages", id);
      await deleteDoc(msgRef);
    } catch (error) {
      console.error("Error Deleting Document: ", error);
    }
  }

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {realTimeMessages.map((msg) => (
          <li key={msg.id}>
            <h3>{msg.user}</h3>
            <p>{msg.message}</p>
            {editing && <UpdateRealTimeForm msg={msg} />}
            <button onClick={() => setEditing(!editing)}>Edit</button>
            <button onClick={() => handleDelete(msg.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
