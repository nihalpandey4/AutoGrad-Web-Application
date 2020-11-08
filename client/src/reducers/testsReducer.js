import _ from "lodash";
import {
    GET_ALL_TESTS,
    GET_TEST_FOR_TEACHER,
    CREATE_TEST,
    UPDATE_TEST,
    DELETE_TEST
} from "../actions/types"

const testsReducer=(state={},action)=>{
    switch(action.type){
        case GET_TEST_FOR_TEACHER:
            return {...state,[action.payload.testId]:action.payload};
        case CREATE_TEST:
            return {...state,[action.payload.testId]:action.payload};
        case UPDATE_TEST:
            return {...state,[action.payload.testId]:action.payload};
        case DELETE_TEST:
            return _.omit(state,action.payload);
        case GET_ALL_TESTS:
            return {..._.mapKeys(action.payload,"testId")};
        default:
            return state;
    }
}

export default testsReducer;