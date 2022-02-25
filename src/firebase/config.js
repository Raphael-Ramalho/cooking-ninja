import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByANvjfeXAtR3KWvI3SEG2NYHGplmfJPM",
  authDomain: "cooking-ninja-site-4c909.firebaseapp.com",
  projectId: "cooking-ninja-site-4c909",
  storageBucket: "cooking-ninja-site-4c909.appspot.com",
  messagingSenderId: "433619483155",
  appId: "1:433619483155:web:361c847ada71f491b3dde6",
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }