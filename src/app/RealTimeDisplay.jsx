"use client";
// importing necessary functions and hooks from Firebase + React
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import UpdateRealTimeForm from "./UpdateRealTimeForm";

export default function RealTimeDisplay() {
  //state management for real-time messages and editing
  const [realTimeMessages, setRealTimeMessages] = useState([]);
  const [editing, setEditing] = useState(false);

  //side effects to subscribe to real-time updates from Firestore
  useEffect(() => {
    // subscribe to real-time updates from the 'realTimeMessages' collection
    const unsub = onSnapshot(collection(db, "realTimeMessages"), (snapshot) => {
      //map snapshot documents to messagesArray
      const messagesArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // update the state with the new messages array
      setRealTimeMessages(messagesArray);
    });
    //clean up subscription when component unmounts
    return () => unsub();
  }, []);

  // function to handle deletion
  async function handleDelete(id) {
    try {
      //delete the document with specified ID from Firestore
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
