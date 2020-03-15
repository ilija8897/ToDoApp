import React from "react";
import { useSelector } from "react-redux";
import { Task } from "./Task/Task";

import style from "./List.module.sass";

export const List = () => {
  const tasksArr = useSelector(state => state.tasks);
  const tasks = tasksArr.map((task, id) => {
    return <Task key={id} task={task} id={id} />;
  });

  return (
    <div className={style.list}>{tasks.length ? tasks : "Add first task"}</div>
  );
};
