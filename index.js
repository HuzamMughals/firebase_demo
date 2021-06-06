import React from "react";
import { render } from "react-dom";
import firebase from "firebase/app";
import "firebase/firestore";

import {
  FirestoreProvider,
  FirestoreMutation,
} from "@react-firebase/firestore";

import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

import { config } from "./config";

const App = () => {
  return (
    <div>
      <FirestoreProvider firebase={firebase} {...config}>
        <FirestoreMutation type="add" path="/upwork-form">
          {({ runMutation }) => <CreatePost runMutation={runMutation} />}
        </FirestoreMutation>

        {/* List of all post documents */}
        <PostList />
      </FirestoreProvider>
    </div>
  );
};

render(<App />, document.getElementById("root"));
