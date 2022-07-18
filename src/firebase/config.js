// Import the functions you need from the SDKs you need
import {v4} from "uuid";
import { initializeApp } from "firebase/app";
import { getStorage, ref ,uploadBytes, getDownloadURL} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEZs9z_UUHTNSb98NfeIZTDFCj7OQw_LA",
  authDomain: "react-firebase-images-94664.firebaseapp.com",
  projectId: "react-firebase-images-94664",
  storageBucket: "react-firebase-images-94664.appspot.com",
  messagingSenderId: "827281580553",
  appId: "1:827281580553:web:cd60e53ddca0f3c5d7ced8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

/**
 * Upload a file to firebase storage
 * @param {File} file - The file to be uploaded 
 * @returns {Promise<string>} url of the uploaded file
 */
export async function uploadFile(file){
    const storageRef= ref(storage, v4());
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
}
