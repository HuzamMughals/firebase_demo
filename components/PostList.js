import React from "react";
import { FirestoreCollection } from "@react-firebase/firestore";

export default ListPost = ({ runMutation }) => {
  return (
    <div>
      <FirestoreCollection path="/upwork-form">
        {(posts) => {
          return (
            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {posts.value?.map((post, key) => (
                  <tr key={key}>
                    <td>{post.email}</td>
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
