"use client";

import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "./firebaseConfig";

export default function RealTimeForm() {
  //state management
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  //function to add new docs to Firestore collection
  async function addMessage(msg) {
    try {
      const docRef = await addDoc(collection(db, "realTimeMessages"), msg);
      console.log("Document created with an ID of: ", docRef.id);
    } catch (error) {
      console.error("Error submitting data to firestore: ", error);
    }
  }

  //function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newMessage = {
        user: user,
        message: message,
      };
      await addMessage(newMessage);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <input
            onChange={(e) => setUser(e.target.value)}
            value={user}
            type="text"
            name="user"
            id="user"
          />
        </label>

        <label>
          Message:
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            name="message"
            id="message"
          />
        </label>

        <button>Submit Message!</button>
      </form>
    </div>
  );
}
