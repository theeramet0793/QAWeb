import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDKFcmwgaG50mMdzpg3I5c7xsL6G2rYKzQ",
  authDomain: "qa-web-for-finding-movie.firebaseapp.com",
  projectId: "qa-web-for-finding-movie",
  storageBucket: "qa-web-for-finding-movie.appspot.com",
  messagingSenderId: "1030453119955",
  appId: "1:1030453119955:web:892449acdfb8a4cb517d26"
}

export const appFirebase = initializeApp(firebaseConfig)
export const storage = getStorage(appFirebase)