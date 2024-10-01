import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: EXPO_PUBLIC_FIREBASE_APP_ID,
    measurementId: EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);