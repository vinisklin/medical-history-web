import styled from 'styled-components';

export const SideMenu = styled.div`
  flex: 4;

  display: flex;
  flex-direction: column;

  a {
    height: 5rem;
    max-width: 23rem;
    border-radius: 10px;

    text-align: center;
    line-height: 5rem;

    background-color: #c4c4c4;
    color: #fff;
  }

  & > input {
    height: 3rem;
    max-width: 23rem;

    margin-top: 3rem;
  }

  input {
    border-radius: 0px;
    border: 0px;

    background-color: #e5e5e5;
  }

  h3 {
    margin-top: 3rem;

    color: #adadad;
    font-size: 1.8rem;
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
    font-size: 2.4rem;
    margin-bottom: 2.4rem;
  }
`;
