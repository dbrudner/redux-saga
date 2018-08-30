import * as React from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import * as types from "./store";

const ShowMore = props => (
  <Button onClick={() => props.dispatch({ type: types.SHOW_MORE_SELECTED })}>
    Show More
  </Button>
);

export default connect(state => state)(ShowMore);
