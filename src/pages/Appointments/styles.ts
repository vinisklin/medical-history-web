import styled from 'styled-components';

export const SideMenu = styled.div`
  flex: 4;

  display: flex;
  flex-direction: column;

  a {
    height: 50px;
    max-width: 230px;
    border-radius: 10px;

    text-align: center;
    line-height: 50px;

    background-color: #c4c4c4;
    color: #fff;
  }

  & > input {
    height: 30px;
    max-width: 230px;

    margin-top: 30px;
  }

  input {
    border-radius: 0px;
    border: 0px;

    background-color: #e5e5e5;
  }

  h3 {
    margin-top: 30px;

    color: #adadad;
    font-size: 18px;
  }

  div {
    margin-top: 5px;

    display: flex;
    align-items: center;

    & > * {
      cursor: pointer;
      margin-right: 5px;
    }
  }
`;

export const MainContent = styled.div`
  max-width: 700px;
  flex: 9;

  border: 2px solid blue;

  h1 {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;
