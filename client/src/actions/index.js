import history from "../components/history";

import dummy from "../components/apis/dummy-api";
import {SIGN_IN,SIGN_OUT,GET_TEST_ID} from "./types"

export const signIn = (userId) =>{
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export  const signOut = ()=>{
    history.push("/");
    return {
        type: SIGN_OUT
    };
};

export const getTestId = (testId)=>{
    return {
        type: GET_TEST_ID,
        payload : testId
    }
};

export const createTest = (formValues)=>{
    return async (dispatch)=>{
        dummy.post("/tests",formValues);
    }
}