import React from "react";
import {
  Item,
  ExternalLink,
  Host,
  Title,
  Description,
  CommentLink
} from "./styles";

const LINK_REL = "nofollow noreferrer noopener";

const ListItem = () => {
  return (
    <Item>
      <ExternalLink>
        <Title>
          The Developer Community <Host>(gitconnected.com)</Host>
        </Title>
      </ExternalLink>
      <CommentLink>
        9000 points by{" "}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          Test User
        </CommentLink>{" "}
        1 Hour Ago{" | "}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          42 Comments
        </CommentLink>
      </CommentLink>
    </Item>
  );
};

export default ListItem;
