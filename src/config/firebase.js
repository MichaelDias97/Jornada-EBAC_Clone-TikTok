
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyDEqNHrixYmsTbCXioHsoP9ItH3AtY7Tis",
    authDomain: "tiktok---jornada-443f0.firebaseapp.com",
    projectId: "tiktok---jornada-443f0",
    storageBucket: "tiktok---jornada-443f0.appspot.com",
    messagingSenderId: "1058719832664",
    appId: "1:1058719832664:web:dd945db32da37a252d082d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;