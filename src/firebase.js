import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDLhtDPV0KECK79qbIjynDWDkmkx-ExRCM",
    authDomain: "netflix-clone-d615b.firebaseapp.com",
    projectId: "netflix-clone-d615b",
    storageBucket: "netflix-clone-d615b.appspot.com",
    messagingSenderId: "828227317378",
    appId: "1:828227317378:web:115b4119406653b0364e9b"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore()
  const auth=firebase.auth();

  export {auth};
  export default db;