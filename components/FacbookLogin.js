import React from "react";
import { FirebaseAuthConsumer } from "@react-firebase/auth";

export default FacbookLogin = () => {
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        return (
          <pre style={{ height: 300, overflow: "auto" }}>
            {isSignedIn ? (
              ""
            ) : (
              <button
                onClick={() => {
                  const facebookAuthProvider =
                    new firebase.auth.FacebookAuthProvider();
                  firebase.auth().signInWithPopup(facebookAuthProvider);
                }}
              >
                Sign In with Facebook
              </button>
            )}
          </pre>
        );
      }}
    </FirebaseAuthConsumer>
  );
};
