import React from "react";
import { connect } from "react-redux";
import actions from "store/app/actions";
import { Title, Icon, NavSection, Container } from "./styles";

const Nav = ({ layout, theme, setLayout, setTheme }) => {
  return (
    <Container>
      <Title>Hacker News Reader</Title>
      <NavSection>
        {theme === "dark" ? (
          <Icon onClick={() => setTheme("light")}>
            <i className="fas fa-sun" />
          </Icon>
        ) : (
          <Icon onClick={() => setTheme("dark")}>
            <i className="fas fa-moon" />
          </Icon>
        )}

        {layout === "grid" ? (
          <Icon onClick={() => setLayout("list")}>
            <i className="fas fa-th-list" />
          </Icon>
        ) : (
          <Icon onClick={() => setLayout("grid")}>
            <i className="fas fa-th-large" />
          </Icon>
        )}
      </NavSection>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    layout: state.app.layout,
    theme: state.app.theme
  };
};

export default connect(
  mapStateToProps,
  actions
)(Nav);
