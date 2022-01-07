const admin = require("firebase-admin");

/**
 * `firebase` service.
 */
const app = admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const test = () => {
  console.log("test here", app.projectManagement().listAndroidApps());
  app
    .messaging()
    .send({ token: "rr" })
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
};

module.exports = {
  // exampleService: (arg1, arg2) => {
  //   return isUserOnline(arg1, arg2);
  // }
  test,
};
