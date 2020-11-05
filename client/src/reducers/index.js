import {combineReducers} from "redux"
import {reducer as formReducer} from "redux-form";

import authReducer from "./authReducer";
import testIdReducer from "./testIdReducer";
import testsReducer  from "./testsReducer";
import testsListOfCurrentUserReducer from "./testsListOfCurrentUserReducer";

export default combineReducers({
    auth: authReducer,
    testId:testIdReducer,
    form:formReducer,
    allTests:testsReducer,
    testsByCurrentUser:testsListOfCurrentUserReducer
});