# Firestore Real-Time Data Integration with Next.js

## Objective

Enhance your Firebase and Next.js integration skills by recreating a project similar to Firebase Assignment 3, this time incorporating real-time data listening with Firestore. This assignment focuses on understanding and implementing live data synchronization within a Next.js application.

## Project Overview

This project demonstrates the integration of Firebase Firestore with a Next.js application to achieve real-time data synchronization. Users can add, view, update, and delete messages in real-time using Firestore's capabilities.

## Setting Up & Configuring Firebase

1. **Create a Firebase Project :**
   - Go to the Firebase Console
   - Click on `Add Project` and follow the instructions to create a new project.
2. **Set up Firestore Database :**
   - In the newly created project, click on `Build` then `Firestore Database` located in the left sidebar.
   - Click the `Create database` button, and choose preferred location.
   ```
   Note: The location cannot be changed after set.
   ```
   - Start in `test mode` and click `create`.
3. **Get Firebase Configuration :**
   - In the left sidebar click `Project Overview`.
   - Under project title click ont the web app icon (</>) to add a new web app.
   - Register your app by giving it a nickname and click `Register App`.
   - Copy the Firebase configuration object provided.
4. Install Firebase SDK:
   - In the Next.js project directory, install the Firebase SDK by running:
   ```bash
   npm install firebase
   ```
5. **Initialize Firebase :**
   - Create a file named `firebaseConfig.js`.
   - Paste the Firebase configuration object you copied earlier into this file.

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHEytdRc5aR6j9tDsd2LQEnIul6UbWGXg",
  authDomain: "real-time-data-55c43.firebaseapp.com",
  projectId: "real-time-data-55c43",
  storageBucket: "real-time-data-55c43.appspot.com",
  messagingSenderId: "468099788972",
  appId: "1:468099788972:web:688c3c639ef0491fd5ef09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
```

## Components

### RealTimeForm Component

The RealTimeForm component lets users input new messages, which are then added to the Firestore database in real-time. It uses Firebase functions to interact with Firestore, such as adding documents to the `realTimeMessages` collection. When users submit the form, their message details are stored in Firestore, with React state hooks managing the form input fields.

### RealTimeDisplay Component

RealTimeDisplay listens for real-time updates from the `realTimeMessages` collection in Firestore using `onSnapshot`. As new messages are added, updated, or deleted in Firestore, this component automatically reflects those changes in the UI. It sets up a subscription to the Firestore collection when the component mounts and cleans it up when unmounting. The UI dynamically renders the messages, ensuring users see the latest changes instantly.

### UpdateRealTimeForm Component

UpdateRealTimeForm enables users to edit existing messages in real-time. It fetches the message details from Firestore, allows users to make modifications, and updates the Firestore collection accordingly. This component uses Firestore functions to fetch and update documents in the `realTimeMessages`collection. When users submit edits, the component updates the corresponding document in Firestore, ensuring changes are reflected in real-time.

## Site ScreenShots

![alt text](image.png)  
**Updating Daffy's Message :**  
![alt text](image-1.png)  
**Adding User & Message :**  
![alt text](image-2.png)  
**Firebase Database Collection :**
![alt text](image-3.png)
**Deleting Porky Pig:**
![alt text](image-5.png)
![alt text](image-4.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
