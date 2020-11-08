import {GET_TEST_FOR_ASSESSMENT} from "../actions/types"

const getTestsForStudentReducer = (state={},action)=>{
    switch (action.type){
        case GET_TEST_FOR_ASSESSMENT:
            return action.payload;
        default:
            return state;
    }
}

export default  getTestsForStudentReducer;