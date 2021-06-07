import React from "react";
import { render } from "react-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import {
  FirestoreProvider,
  FirestoreMutation,
} from "@react-firebase/firestore";

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
} from "@react-firebase/auth";

import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import FacebookLogin from "./components/FacbookLogin";

import { config } from "./config";

const App = () => {
  return (
    <div>
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <FirestoreProvider firebase={firebase} {...config}>
          <IfFirebaseAuthed>
            <FirestoreMutation type="add" path="/upwork-form">
              {({ runMutation }) => (
                <FirebaseAuthConsumer>
                  {({ isSignedIn, user, providerId }) => (
                    <CreatePost runMutation={runMutation} user={user} />
                  )}
                </FirebaseAuthConsumer>
              )}
            </FirestoreMutation>
            {/* List of all post documents */}
            <PostList />
          </IfFirebaseAuthed>
        </FirestoreProvider>
        <FacebookLogin />
      </FirebaseAuthProvider>
    </div>
  );
};

render(<App />, document.getElementById("root"));
