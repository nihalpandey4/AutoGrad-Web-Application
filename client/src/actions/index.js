import history from "../components/history";

export const signIn = (userId) =>{
    history.push("/teacher");
    return {
        type: "SIGN_IN",
        payload: userId
    };
};

export  const signOut = ()=>{
    history.push("/");
    return {
        type: "SIGN_OUT"
    };
};

export const getTestId = (testId)=>{
    return {
        type: "GET_TEST_ID",
        payload : testId
    }
};
