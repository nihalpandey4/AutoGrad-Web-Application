import history from "../components/history";
import flask from "../components/apis/flask-api";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_TEST,
  GET_ALL_TESTS,
  DELETE_TEST,
  GET_TEST_FOR_ASSESSMENT,
  GET_TEST_FOR_TEACHER,
} from "./types";

export const renderProgrammaticNav = () =>async(dispatch,getState)=>{
  const isSignedIn = await getState().auth.isSignedIn;
  if(isSignedIn===true){
    history.push("/teacher");
  }
  dispatch({
    type:"NAV"
  })
}

export const signIn = (userId) =>(dispatch)=> {
  dispatch({
    type: SIGN_IN,
    payload: userId,
  });
};

export const signOut = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
  });
  history.push("/");
};

export const createTest = (formValues) => {
  history.push("/");
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await flask.post(`/${userId}`, formValues);
    dispatch({
      type: CREATE_TEST,
      payload: response.data,
    });
  };
};

export const getAllTests = (userId) => async (dispatch) => {
  const response = await flask.get(`/${userId}`);
  dispatch({
    type: GET_ALL_TESTS,
    payload: response.data,
  });
};

export const getTestForTeacher = (testId) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await flask.get(`/${userId}/${testId}`);
  dispatch({
    type: GET_TEST_FOR_TEACHER,
    payload: response.data,
  });
};

export const getTestForAssessment = (testId) => async (dispatch) => {
  const response = await flask.get(`/tests/${testId}`);
  if (response.data.message === "Error") {
    alert("Enter correct Test Id");
  } else {
    dispatch({
      type: GET_TEST_FOR_ASSESSMENT,
      payload: response.data,
    });
    history.push(`/student/${testId}`);
  }
};

export const deleteTest = (testId) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await flask.delete(`/${userId}/${testId}`);
  dispatch({
    type: DELETE_TEST,
    payload: response.data,
  });
  history.push("/");
};

export const updateTest = (testId, formValues) => async (
  dispatch,
  getState
) => {
  const userId = getState().auth.userId;
  const response = await flask.put(`/${userId}/${testId}`, formValues);
  dispatch({
    type: "UPDATE_TEST",
    payload: response.data,
  });
};

export const submitTest = (testId, formValues,to="/") => async dispatch=> {
  const response = await flask.put(`/tests/${testId}`, formValues);
  dispatch({
    type: "SUBMIT_TEST",
    payload: formValues,
  });
  history.push(to);
};


export const evaluate=(testId, formValues)=>async dispatch=>{
  const response = await flask.post(`/tests/${testId}`,formValues);
  dispatch({
    type:"EVALUATING",
      payload:response.data
  })
}