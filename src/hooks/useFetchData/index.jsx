import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "../../firebaseConfig";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const useFetchData = () => {
  // states
  const [data, setData] = useState();
  const array = [];
  // firebase
  const database = firebase.firestore();

  const dados = async (id) => {
    database
      .collection("usuarios")
      .doc(id)
      .onSnapshot((doc) => {
        array.push(doc.data());
        // setData(array);
      });

  };
  const doFetch = async () => {
    database
      .collection("usuarios")
      .get()
      .then((querySnapshot) => {
        //  setMaxUsers(querySnapshot);
        querySnapshot.forEach((doc) => {
          const docRef = database.collection("usuarios").doc(doc.id);
          dados(docRef.id);
        },
        setData(array),
        
        );
      });
      return array;
  }
  return [doFetch, data];
};
