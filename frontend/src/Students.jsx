import React, { useState } from "react";
import { addStudents as addStud } from "./slice/studentSlice";
import { useDispatch } from "react-redux";
const Students = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  //   const [student, setStudent] = useState([]);
  const addStudents = () => {
    if (input) {
      //   setStudent((prev) => [...prev, input]);
      dispatch(addStud(input));
      //   console.log(input);
      setInput("");
    }
  };
  return (
    <div>
      <h1>Redux basics</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addStudents}>submit</button>
    </div>
  );
};

export default Students;
