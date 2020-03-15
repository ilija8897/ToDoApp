import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../store/list.duck";

export const Form = props => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleAddTask = () => {
    if(inputRef.current.value !== '') {
      dispatch(addNewTask(inputRef.current.value));
    }
    inputRef.current.value = "";
  };

  return (
    <div className="form">
      <input autoFocus ref={inputRef} type="text" />
      <button onClick={handleAddTask}>Add new task</button>
    </div>
  );
};
