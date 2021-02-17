import * as adminFunctions from "firebase-admin";

export class User {
  uid: string = "";
  email: string = "";
  authType: string = "";
  displayName: string = "";
  constructor(user: adminFunctions.auth.UserRecord) {
    this.uid = user.uid;
    this.displayName = user.displayName || "";
    this.email = user.email || "";
    this.authType = "email";
  }
}
