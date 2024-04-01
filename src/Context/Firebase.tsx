import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Database, getDatabase, ref, set } from "firebase/database";
import React, { createContext } from "react";

type FirebaseProviderType = {
  children: React.ReactElement;
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo3zx4PbkDXdAVNjH5daoLbLl79toEIS4",
  authDomain: "auth-ab9ea.firebaseapp.com",
  projectId: "auth-ab9ea",
  storageBucket: "auth-ab9ea.appspot.com",
  messagingSenderId: "474291459831",
  appId: "1:474291459831:web:25dfb0a3db91c1c6eea5f2",
  databaseURL: "https://auth-ab9ea-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext<any>(null);
const FirebaseProvider = (props: FirebaseProviderType) => {
  const putData = (key: any, data: any) => set(ref(database, key), data);
  return (
    <FirebaseContext.Provider value={""}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
