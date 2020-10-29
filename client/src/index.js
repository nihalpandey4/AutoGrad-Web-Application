import React from "react";
import ReactDOM  from "react-dom";
import {Provider} from "react-redux";
import {createStore } from "redux";

import App from "./components/App"
import reducer from "./reducers";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

//GoogleOAuth client ID - 235695202461-2gvmgao3ec2j9u8733p7aasvjsp3hep5.apps.googleusercontent.com