import {GET_TESTS_BY_CURRENT_USER} from "../actions/types"; 

const testsListOfCurrentUserReducer = (state=[],action)=>{
    switch(action.type){
        case GET_TESTS_BY_CURRENT_USER:
            return action.payload;
        default:
            return state;
    }
}

export default testsListOfCurrentUserReducer;