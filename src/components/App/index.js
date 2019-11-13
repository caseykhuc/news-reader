import React from "react";
import { ThemeProvider } from "styled-components";
import { colorsDark, colorsLight } from "styles/palette";
import List from "components/List";
import Grid from "components/Grid";
import { Wrapper } from "./styles";
import { connect } from "react-redux";
import { fetchStoryIds, fetchStories } from "store/story/actions";
/* import { hasMoreStoriesSelector } from "store/story/selectors"; */
import Loader from "../Loader";
import Pagination from "../Pagination";
import Nav from "../Nav";

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

  renderGrid(stories) {
    if (stories.length > 0) return <Grid stories={stories} />;
    return <Loader />;
  }

  handlePageClick() {
    return;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }

  setBodyBackgroundColor() {
    if (this.props.theme === "light") {
      document.body.style = `background-color: ${colorsLight.background};`;
    } else {
      document.body.style = `background-color: ${colorsDark.background};`;
    }
  }

  render() {
    const { stories, theme, layout } = this.props;
    return (
      <ThemeProvider theme={theme == "dark" ? colorsDark : colorsLight}>
        <div>
          <Wrapper>
            <Nav />
            {layout === "list"
              ? this.renderList(stories)
              : this.renderGrid(stories)}
            <Pagination />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  console.log("state");
  console.log(state);
  return {
    stories: state.story.stories,
    theme: state.app.theme,
    layout: state.app.layout
  };
};

export default connect(
  mapStateToProps,
  { fetchStoryIds, fetchStories }
)(App);
