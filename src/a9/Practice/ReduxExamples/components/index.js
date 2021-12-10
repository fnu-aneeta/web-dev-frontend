import React from "react";
import HelloReduxExampleComponent from "../../redux-examples/components/HelloReduxExampleComponent";
import Todos from "../../redux-examples/components/Todos";
import {Provider} from "react-redux";
import hello from "../reducers/hello";
import todos from "../reducers/todos";
import {createStore, combineReducers} from "redux";
const reducers = combineReducers({hello, todos})
const store = createStore(reducers);

const ReduxExamples = () => {
    return(
        <Provider store={store}>
        <div>
            <h2>Redux Examples</h2>
            <Todos/>
            <HelloReduxExampleComponent/>
        </div>
        </Provider>
    );
};
export default ReduxExamples;
