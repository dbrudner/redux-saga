import * as React from "react";
import { Input, Button, List } from "antd";
import Downshift from "downshift";
import { connect } from "react-redux";
import { getVisiblePosts } from "./store";
import * as R from "ramda";

// const Search = props => (
//   <AntInput onChange={e => props.dispatch({type: "UPDATED_SEARCH", payload: e.target.value})} />
// )

const renderList = posts => {
  return posts.map((post: any) => {
    const { id, title, body } = post;
    return (
      <List.Item key={id}>
        <List.Item.Meta title={title} description={body} />
      </List.Item>
    );
  });
};

const filterPosts = (posts, term) => {
  return posts.filter(post => post.title.match(term));
};

const Search = props => (
  <Downshift>
    {({ getInputProps, getRootProps, isOpen, inputValue }) => (
      <div style={{ position: "relative" }}>
        <Input.Search {...getInputProps()} />
        {renderList(
          filterPosts(props.posts, inputValue).slice(0, props.displayPosts)
        )}
      </div>
    )}
  </Downshift>
);

export default connect(state => {
  const { posts, displayPosts } = state;

  return { posts, displayPosts };
})(Search);
