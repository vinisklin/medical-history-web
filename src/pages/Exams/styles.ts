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

  h1 {
    font-size: 2.4rem;
    margin-bottom: 2.4rem;
  }

  .double-size {
    flex: 2;
    margin-right: 10px;
  }

  .single-size {
    flex: 1;
    margin-right: 10px;
  }
`;

export const ExamsHeader = styled.div`
  min-width: 50rem;
  width: 90%;

  display: flex;

  border-bottom: 1px solid #adadad;

  h2 {
    font-size: 1.8rem;
    color: #adadad;
    padding-bottom: 1rem;
  }
`;

export const ExamRow = styled.div`
  min-width: 50rem;
  width: 90%;
  height: 8rem;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #adadad;
  background-color: #f8f8ff;
  transition: transform ease-out 0.2s;

  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    border-top: 1px solid #adadad;
  }

  h3 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
  }

  span {
    padding: 0 3px;
    border: 1px solid #adadad;
    border-radius: 25px;

    font-size: 1.2rem;
    color: #adadad;
    text-align: center;
  }
`;
