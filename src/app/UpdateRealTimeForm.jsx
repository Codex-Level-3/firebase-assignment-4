"use client";

import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "./firebaseConfig";

export default function UpdateRealTimeForm({ msg }) {
  //state management
  const [user, setUser] = useState(msg.user);
  const [message, setMessage] = useState(msg.message);

  //function to handle update submissions
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const msgRef = doc(db, "realTimeMessages", msg.id);
      await updateDoc(msgRef, { user, message });
    } catch (error) {
      console.error("Error updating messages: ", error);
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

        <button>Update Message!</button>
      </form>
    </div>
  );
}
