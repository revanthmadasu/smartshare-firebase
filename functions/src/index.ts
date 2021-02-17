import * as functions from "firebase-functions";
import * as adminFunctions from "firebase-admin";
import {User} from "./model/user";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

adminFunctions.initializeApp({
  credential: adminFunctions.credential.applicationDefault(),
  projectId: "smartshare-b34bf", // General Use
  databaseURL:
    "https://smartshare-b34bf-default-rtdb.europe-west1.firebasedatabase.app", // Realtime Database
  storageBucket: "gs://smartshare-b34bf.appspot.com", // Storage
});
const UserBuilder = new functions.auth.UserBuilder(() => {
  return "";
});
export const createRecordOnCreate = UserBuilder.onCreate((user, context) => {
  const userModel: User = new User(user);
  console.log(user);
  adminFunctions.database().ref("users").push({
    [userModel.uid]: {
      userModel
    }
  });
});
