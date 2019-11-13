import styled from "styled-components";
import { tablet } from "styles/mediaQueries";

export const Wrapper = styled.div`
  width: 85%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  /* padding-bottom: 200px; */
  padding: 0 10px 50px;
  text-align: center;

  ${tablet} {
    width: 96%;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin-top: 24px;
  margin-bottom: 26px;
`;
