import React from "react";
import { PagiList, PagiButton } from "./styles";
import { connect } from "react-redux";
import { fetchStories, cleanStories } from "store/story/actions";

class Pagination extends React.Component {
  onPageClicked = btn => {
    if (btn === "pre" && this.props.page > 0) {
      this.props.cleanStories();
      this.props.fetchStories(this.props.storyIds, this.props.page - 1);
    }
    if (btn === "next" && this.props.page < 25) {
      this.props.cleanStories();
      this.props.fetchStories(this.props.storyIds, this.props.page + 1);
    }
  };

  render() {
    return (
      <PagiList>
        <PagiButton onClick={() => this.onPageClicked("pre")}>
          <i className="fas fa-chevron-left" />
          {"  Prev"}
        </PagiButton>
        <PagiButton onClick={() => this.onPageClicked("next")}>
          {"Next  "}
          <i className="fas fa-chevron-right" />
        </PagiButton>
      </PagiList>
    );
  }
}

const mapStateToProps = state => {
  return { page: state.story.page, storyIds: state.story.storyIds };
};

export default connect(
  mapStateToProps,
  { fetchStories, cleanStories }
)(Pagination);
