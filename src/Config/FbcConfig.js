import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNZ8PAo5MX6KSEI4WiHFYXKLG0olPuFJw",
  authDomain: "musicman-e8e82.firebaseapp.com",
  projectId: "musicman-e8e82",
  storageBucket: "musicman-e8e82.appspot.com",
  messagingSenderId: "675356045419",
  appId: "1:675356045419:web:d50e58df15a7e63412012e",
  measurementId: "G-GB3SE3K1TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);