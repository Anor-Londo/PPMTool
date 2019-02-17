import { combineReducers } from "redux";
import errorReduser from "./errorReduser";
import projectReducer from "./projectReducer";

export default combineReducers({
  errors: errorReduser,
  project: projectReducer
});
