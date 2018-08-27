import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./store";
import Posts from "./posts.tsx";
import "antd/dist/antd.css";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const App = () => (
  <div>
    <Provider store={createStoreWithMiddleware(reducer)}>
      <div style={{ margin: "20px 100px" }}>
        <Posts />
      </div>
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));
