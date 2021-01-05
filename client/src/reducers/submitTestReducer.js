const submitTestReducer =(state={},action)=>{
    switch(action.type){
        case "SUBMIT_TEST":
            return action.payload;
        default:
            return state;
    }
}

export default submitTestReducer;