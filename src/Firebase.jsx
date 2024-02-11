// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBsQMWn3AC697EZZeHmQiRsuVfn7TZXffU',
  authDomain: 'instantchat-5e9ba.firebaseapp.com',
  projectId: 'instantchat-5e9ba',
  storageBucket: 'instantchat-5e9ba.appspot.com',
  messagingSenderId: '42967402757',
  appId: '1:42967402757:web:8b1885f23c0f5da75a0f6c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
