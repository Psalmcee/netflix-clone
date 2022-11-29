import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB9UKsOIWGeTArmCd3om_dHmQ9sskARcDs",
    authDomain: "my-netflix-4f443.firebaseapp.com",
    projectId: "my-netflix-4f443",
    storageBucket: "my-netflix-4f443.appspot.com",
    messagingSenderId: "580673158340",
    appId: "1:580673158340:web:67000c6f8e949370489d91",
    /* measurementId: "G-Y5RVFME62T" */
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export {db}