import React from "react";
import ReactDOM  from "react-dom";
import {Provider} from "react-redux";
import {createStore,applyMiddleware,compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App"
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);


//GoogleOAuth client ID - 235695202461-2gvmgao3ec2j9u8733p7aasvjsp3hep5.apps.googleusercontent.com