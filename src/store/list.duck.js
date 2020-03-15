//ACTION-TYPES
const LIST = {
  ADD_NEW_TASK: "ADD_NEW_TASK",
  SET_TASK: "SET_TASK",
  DELETE_TASK: "DELETE_TASK"
};

//STATE
const list = localStorage.getItem("tasks");
const initialState = {
  tasks: list ? JSON.parse(list) : []
};

//ACTIONS
export const addNewTask = newTask => ({
  type: LIST.ADD_NEW_TASK,
  payload: newTask
});
export const setTask = (id, newValue, status) => ({
  type: LIST.SET_TASK,
  payload: {id, newValue, status}
});
export const deleteTask = taskID => ({
  type: LIST.DELETE_TASK,
  payload: taskID
});

//REDUCERS
export function reducer(state = initialState, action) {
  let newState = {...state};

  switch (action.type) {
    case LIST.ADD_NEW_TASK:
      newState = {
        ...state,
        tasks: state.tasks
          .concat({title: action.payload, status: false})
          .sort((prev, next) => {
            if ( prev.title > next.title ) return -1;
            if ( prev.title > next.title ) return 1;
          })
      };
      localStorage.setItem("tasks", JSON.stringify(newState.tasks));
      break;
    case LIST.SET_TASK:
      const tasks = [...state.tasks];
      tasks.splice(action.payload.id, 1, {title: action.payload.newValue, status: action.payload.status});
      tasks.sort((prev, next) => {
        if ( prev.title > next.title ) return -1;
        if ( prev.title > next.title ) return 1;
      });
      newState = {
        ...state,
        tasks: tasks
      };
      localStorage.setItem("tasks", JSON.stringify(newState.tasks));
      break;
    case LIST.DELETE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.filter((task, id) => id !== action.payload)
      };
      localStorage.setItem("tasks", JSON.stringify(newState.tasks));
      break;
    default:
      break;
  }
  return newState;
}
