import React, { useState, useRef, useEffect } from "react";
import { deleteTask, setTask } from "../../../store/list.duck";
import { useDispatch } from "react-redux";

import classNames from 'classnames';
import style from "./Task.module.sass";

export const Task = props => {
  const [value, setValue] = useState('');
  const [isEditable, setEditableMode] = useState(false);
  const [isDone, setDone] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    setValue(props.task.title);
    setDone(props.task.status);
  },[props.task]);

  useEffect(() => {
    inputRef.current.disabled = !isEditable;
  });

  const handleValueChange = e => {
    setValue(e.target.value);
  };
  const handleEditableToggle = () => {
    setEditableMode(!isEditable);
  };
  const handleDoneToggle = () => {
    dispatch(setTask(props.id, inputRef.current.value, !isDone));
    setDone(!isDone);
  };
  const handleListRefresh = () => {
    dispatch(setTask(props.id, inputRef.current.value, isDone));
    setEditableMode(!isEditable);
  };
  const handleTaskDel = () => {
    dispatch(deleteTask(props.id));
  };

  const inputClass = classNames(
    style.task,
    isDone && style.done
  );

  return (
    <div>
      <input checked={isDone} onChange={handleDoneToggle} type="checkbox" name="" id=""/>
      <input
        ref={inputRef}
        onChange={handleValueChange}
        className={inputClass}
        value={value}
      />
      {
        !isDone &&
        <React.Fragment>
          <button onClick={isEditable ? handleListRefresh : handleEditableToggle}>
            {isEditable ? "save" : "edit"}
          </button>
          <button onClick={handleTaskDel}>delete</button>
        </React.Fragment>
      }
    </div>
  );
};
