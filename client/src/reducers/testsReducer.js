import _ from "lodash";
import {
    GET_ALL_TESTS,
    GET_TEST,
    CREATE_TEST,
    UPDATE_TEST,
    DELETE_TEST
} from "../actions/types"

const testsReducer=(state={},action)=>{
    switch(action.type){
        case GET_TEST:
            return {...state,[action.payload.id]:action.payload};
        case CREATE_TEST:
            return {...state,[action.payload.id]:action.payload};
        case UPDATE_TEST:
            return {...state,[action.payload.id]:action.payload};
        case DELETE_TEST:
            return _.omit(state,action.payload);
        case GET_ALL_TESTS:
            return {...state,..._.mapKeys(action.payload,"id")};
        default:
            return state;
    }
}

export default testsReducer;