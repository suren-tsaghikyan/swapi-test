import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYFFl4mARq-g4IbA9i-ff3YSjzt71TOV8",
  authDomain: "swapi-mini-site.firebaseapp.com",
  projectId: "swapi-mini-site",
  storageBucket: "swapi-mini-site.firebasestorage.app",
  messagingSenderId: "897258319278",
  appId: "1:897258319278:web:5940515ce97b3a13d46c3f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
};

export const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
};
