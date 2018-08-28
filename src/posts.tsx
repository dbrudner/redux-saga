import * as React from "react";
import { connect } from "react-redux";
import { fetchPosts, loadMore } from "./root-saga";
import { List, Button, Spin } from "antd";
import { getVisiblePosts } from "./store";

class Posts extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleChange = (id: number) => {
    this.props.selectPost(id);
  };

  render() {
    if (this.props.loading) {
      return <Spin />;
    }

    return (
      <List>
        {this.props.posts.map((post: any) => {
          const { id, title, body } = post;
          return (
            <List.Item key={id}>
              <List.Item.Meta title={title} description={body} />
            </List.Item>
          );
        })}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button onClick={this.props.loadMore}>Load more </Button>
        </div>
      </List>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => fetchPosts(),
    loadMore: () => dispatch({ type: "MORE_LOADED" })
  };
};

const mapStateToProps = state => {
  const { posts, loading } = state;
  return {
    loading: state.loading,
    posts: getVisiblePosts(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
