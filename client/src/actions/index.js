import history from "../components/history";
import flask from "../components/apis/flask-api";
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
    return async (dispatch,getState)=>{
        const userId =getState().auth.userId;
        const response = await flask.post(`/${userId}`,formValues);
        dispatch({
            type:CREATE_TEST,
            payload:response.data
        });
    }
}

export const getAllTests=(userId)=>async (dispatch)=>{
    const response = await flask.get(`/${userId}`);
    dispatch({
        type:GET_ALL_TESTS,
        payload:response.data
    });
}

export const getTest=(testId)=>async (dispatch,getState)=>{
    const userId =getState().auth.userId;
    const response  = await flask.get(`/${userId}/${testId}`);
    dispatch({
        type:"GET_TEST",
        payload:response.data
    })
}

export const deleteTest= (id)=>async (dispatch,getState)=>{
    const userId =getState().auth.userId;
    const response = await flask.delete(`{/${userId}/${id}}`);
    dispatch({
        type:DELETE_TEST,
        payload:response.data
    })
}

export const updateTest=(id,formValues)=>async(dispatch,getState)=>{
    const userId =getState().auth.userId;
    const response = await flask.put(`/${userId}/${id}`,formValues);
    dispatch({
        type:"UPDATE_TEST",
        payload:response.data
    })
}