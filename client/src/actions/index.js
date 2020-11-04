import history from "../components/history";

import dummy from "../components/apis/dummy-api";
import {SIGN_IN,SIGN_OUT,GET_TEST_ID,CREATE_TEST,GET_ALL_TESTS, DELETE_TEST} from "./types"

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
    history.push("/");
    return async (dispatch)=>{
        const response = await dummy.post("/tests",formValues);
        dispatch({
            type:CREATE_TEST,
            payload:response.data
        });
    }
}

export const getAllTests=()=>async (dispatch)=>{
    const response = await dummy.get("/tests");
    dispatch({
        type:GET_ALL_TESTS,
        payload:response.data
    });
}

export const getTest=(id)=>async (dispatch)=>{
    const response  = await dummy.get(`/tests/${id}`);
    dispatch({
        type:"GET_TEST",
        payload:response.data
    })
}

export const deleteTest= (id)=>async (dispatch)=>{
    const response = await dummy.delete(`{/tests/${id}}`);
    dispatch({
        type:DELETE_TEST,
        payload:response.data
    })
}

export const updateTest=(id,formValues)=>async(dispatch)=>{
    const response = await dummy.put(`tests/${id}`,formValues);
    dispatch({
        type:"UPDATE_TEST",
        payload:response.data
    })
}