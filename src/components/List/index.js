import React from "react";
import ListItem from "../ListItem";
import { ListWrapper } from "./styles";
/* import { connect } from "react-redux";
import { fetchStories } from "store/story/actions"; */

const List = ({ stories }) => {
  /* componentDidMount() {
    this.props.fetchStories(this.props.stories, this.props.page);
  }

  renderList = () => {
    return this.props.story.stories.map(story => <ListItem />);
  }; */

  return (
    <ListWrapper>
      {stories.map(story => (
        <ListItem key={story.id} {...story} />
      ))}
    </ListWrapper>
  );
};

export default List;
