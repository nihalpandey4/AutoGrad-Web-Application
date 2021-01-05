import {combineReducers} from "redux"
import {reducer as formReducer} from "redux-form";

import authReducer from "./authReducer";
import testsReducer  from "./testsReducer";
import getTestsForStudentReducer from "./getTestForStudentReducer";
import submitTestReducer from "./submitTestReducer";

export default combineReducers({
    auth: authReducer,
    form:formReducer,
    allTests:testsReducer,
    testPaper:getTestsForStudentReducer,
    submittedTest:submitTestReducer
});