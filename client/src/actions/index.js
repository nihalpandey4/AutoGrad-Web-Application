export const signIn = (userId) =>{
    return {
        type: "SIGN_IN",
        payload: userId
    };
};

export  const signOut = ()=>{
    return {
        type: "SIGN_OUT"
    };
};

export const getTestId = (testId)=>{
    return {
        type: "GET_TEST_ID",
        payload : testId
    }
}