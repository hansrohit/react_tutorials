import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteStudent } from "./slice/studentSlice";
const StudentView = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <>
      <div>
        <h1>Students list</h1>
        <ul style={{ listStyle: "none" }}>
          {students.map((student, id) => (
            <li key={id}>
              {student} <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StudentView;
