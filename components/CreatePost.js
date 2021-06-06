import React, { useState } from "react";

export default CreatePost = ({ runMutation }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <h1>Upwork Demo Firebase:</h1>
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
      <button
        onClick={() => {
          runMutation({
            date,
            name,
          }).then((res) => {
            console.log("Record saved ", res);
          });
        }}
      >
        Save Record
      </button>
    </div>
  );
};
