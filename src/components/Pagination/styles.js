import styled from "styled-components";

export const PagiList = styled.div`
  margin-top: 50px;
`;

export const PagiButton = styled.button`
  background-color: transparent;
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.textSecondary};
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  text-decoration: none;
  padding: 10px 15px;
  margin-left: 5px;
  margin-right: 5px;
`;
