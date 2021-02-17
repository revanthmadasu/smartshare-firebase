import * as functions from "firebase-functions";
import * as adminFunctions from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
adminFunctions.initializeApp({
  apiKey: "AIzaSyDVME3gMY15tmL8Tw5qZ_yMlGJzWu0gnQM",                             // Auth / General Use
  appId: "1:27992087142:web:ce....",      // General Use
  projectId: "my-firebase-project",               // General Use
  authDomain: "YOUR_APP.firebaseapp.com",         // Auth with popup/redirect
  databaseURL: "https://YOUR_APP.firebaseio.com", // Realtime Database
  storageBucket: "YOUR_APP.appspot.com",          // Storage
  messagingSenderId: "123456789",                  // Cloud Messaging
  measurementId: "G-12345"                        // Analytics
})
const UserBuilder = new functions.auth.UserBuilder(() => {
  return "";
});
export const createRecordOnCreate = UserBuilder.onCreate((user, context) => {
  const uid: String = user.uid;
  adminFunctions.database().ref("users").update({
    uid: uid,
  });
});
