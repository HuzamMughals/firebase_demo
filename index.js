import React, { useState, useRef } from "react";
import { render } from "react-dom";
import firebase from "firebase/app";
import "firebase/firestore";

import {
  FirestoreProvider,
  FirestoreMutation,
  FirestoreCollection,
} from "@react-firebase/firestore";

import { config } from "./config";

const App = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const nameRef = useRef();
  nameRef.current = name;

  const dateRef = useRef();
  dateRef.current = date;

  return (
    <div>
      Upwork Demo Firebase:
      <br />
      <br />
      <br />
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <br />
      <FirestoreProvider firebase={firebase} {...config}>
        <FirestoreMutation type="add" path="/upwork-form">
          {({ runMutation }) => {
            return (
              <div>
                <button
                  onClick={() => {
                    if (!dateRef.current || !nameRef.current) return;
                    runMutation({
                      date: dateRef.current,
                      name: nameRef.current,
                    }).then((res) => {
                      console.log("Ran mutation ", res);
                    });
                  }}
                >
                  Save Record
                </button>
              </div>
            );
          }}
        </FirestoreMutation>

        <FirestoreCollection path="/upwork-form">
          {(d) => {
            return (
              <table>
                <tbody>
                  {d.value?.map((item, key) => (
                    <tr key={key}>
                      <td>{item.date}</td>
                      <td>{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          }}
        </FirestoreCollection>
      </FirestoreProvider>
    </div>
  );
};

render(<App />, document.getElementById("root"));
