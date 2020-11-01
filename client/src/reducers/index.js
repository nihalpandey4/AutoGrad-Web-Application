import {combineReducers} from "redux"
// import {reducer as formReducer} from "redux-form";

import authReducer from "./authReducer";
import testIdReducer from "./testIdReducer";

export default combineReducers({
    auth: authReducer,
    testId:testIdReducer
});