import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1170px;
  width: 90vw;
  margin: 1rem auto;
`;

export const AppHeader = styled.header`
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 2.4rem;

  a {
    flex: 1;
  }
`;

export const TabContainer = styled.div`
  flex: 10;
  height: 100%;

  display: flex;

  a {
    height: 100%;
    max-width: 37rem;

    background: #f8f8ff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    & + a {
      margin-left: 3rem;
    }
  }
`;

export const Content = styled.div`
  min-height: 600px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  padding: 4rem 7rem;

  display: flex;

  background: #f8f8ff;
`;
