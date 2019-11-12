import React from "react";
import { ThemeProvider } from "styled-components";
import { colorsDark } from "styles/palette";
import List from "components/List";
import { Wrapper, Title } from "./styles";
import { connect } from "react-redux";
import { fetchStoryIds, fetchStories } from "store/story/actions";
/* import { hasMoreStoriesSelector } from "store/story/selectors"; */
import Loader from "../Loader";
import Pagination from "../Pagination";

class App extends React.Component {
  componentDidMount() {
    console.log("fetched");
    this.props.fetchStoryIds();
  }
  /* this.props.fetchStories(this.props.story.storyIds, this.props.story.page); */

  renderList(stories) {
    if (stories.length > 0) return <List stories={stories} />;
    return <Loader />;
  }

  handlePageClick() {
    return;
  }

  render() {
    const { stories } = this.props.story;
    return (
      <ThemeProvider theme={colorsDark}>
        <Wrapper>
          <Title>News Reader</Title>
          {this.renderList(stories)}
          <Pagination />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  console.log("state");
  console.log(state);
  return { story: state.story };
};

export default connect(
  mapStateToProps,
  { fetchStoryIds, fetchStories }
)(App);
