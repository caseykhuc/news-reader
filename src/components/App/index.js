import React from "react";
import { ThemeProvider } from "styled-components";
import { colorsDark } from "styles/palette";
import List from "components/List";
import { Wrapper, Title } from "./styles";
import { connect } from "react-redux";
import { fetchStoryIds, fetchStories } from "store/story/actions";

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

  render() {
    const { stories } = this.props.story;
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>News Reader</Title>
            <List stories={stories} />
          </Wrapper>
        </div>
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
