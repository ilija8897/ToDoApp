import { createStore } from "redux";
import { reducer } from "./list.duck";

export default createStore(reducer);
