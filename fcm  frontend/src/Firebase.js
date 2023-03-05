import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage} from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyCWfIigiDUNbb9nBTztwBGB25WuYO8wteE",
  authDomain: "pushnotification-67cb2.firebaseapp.com",
  projectId: "pushnotification-67cb2",
  storageBucket: "pushnotification-67cb2.appspot.com",
  messagingSenderId: "333547889629",
  appId: "1:333547889629:web:e6f1940b0565fa48cc8c34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
// Add the public key generated from the console here.

export const fetchToken = () => {
  return getToken(messaging, {vapidKey: "BCFulFoPRs9F6dBV_YWqKBhNEfoP2vNQbYQzDNvc2JImv-7nqJQAznUvROu4Rlbn0Lrv_Mw77yfPU-OWXDpBAkk"}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
    
    } else {
      console.log('No registration token available. Request permission to generate one.');
     
    
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  
  });
}


export const onMessageListener = ()=>
  new Promise((resolve)=>{
   onMessage(messaging,(payload)=>{
    console.log(payload);
      resolve(payload);
   });
  });