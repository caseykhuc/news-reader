import React from "react";
import { ThemeProvider } from "styled-components";
import { colorsDark } from "styles/palette";
import List from "components/List";
import { Wrapper, Title } from "./styles";
import { connect } from "react-redux";
import { fetchStoryIds, fetchStories } from "store/story/actions";
import Loader from "../Loader";

class App extends React.Component {
  componentDidMount() {
    console.log("fetched");
    this.props.fetchStoryIds();
  }

  /* componentDidUpdate() {
    if (this.props.story && !this.props.story.stories) {
      console.log("sdf");
      this.props.fetchStories(this.props.story.storyIds, 0);
    }
  } */

  renderList(stories) {
    if (stories.length > 0) return <List stories={stories} />;
    return <Loader />;
  }

  render() {
    const { stories } = this.props.story;
    return (
      <ThemeProvider theme={colorsDark}>
        <Wrapper>
          <Title>News Reader</Title>
          {this.renderList(stories)}
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
