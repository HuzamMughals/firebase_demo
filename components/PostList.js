import React, { useState } from "react";
import {
  FirestoreProvider,
  FirestoreMutation,
  FirestoreCollection,
} from "@react-firebase/firestore";

export default ListPost = ({ runMutation }) => {
  return (
    <div>
      <FirestoreCollection path="/upwork-form">
        {(posts) => {
          return (
            <table>
              <tbody>
                {posts.value?.map((post, key) => (
                  <tr key={key}>
                    <td>{post.date}</td>
                    <td>{post.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }}
      </FirestoreCollection>
    </div>
  );
};
