const testIdReducer = (testId="",action)=>{
    if(action.type ==="GET_TEST_ID"){
        return action.payload;
    }
    return testId;
}

export default testIdReducer;