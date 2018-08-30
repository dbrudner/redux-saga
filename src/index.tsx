import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./store";
import createSagaMiddleware from "redux-saga";
import Posts from "./posts";
import "antd/dist/antd.css";
import rootSaga from "./root-saga";
import Search from "./search";
import ShowMore from "./show-more";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const App = () => (
  <div>
    <Provider store={store}>
      <div style={{ margin: "20px 100px" }}>
        <h1>Posts</h1>
        <Search />
        <ShowMore />
      </div>
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));
