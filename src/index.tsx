import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./store";
import createSagaMiddleware from "redux-saga";
import Posts from "./posts";
import "antd/dist/antd.css";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const App = () => (
  <div>
    <Provider store={store}>
      <div style={{ margin: "20px 100px" }}>
        <Posts />
      </div>
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));
