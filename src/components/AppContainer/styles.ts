import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1170px;
  width: 90vw;
  margin: 10px auto;
`;

export const AppHeader = styled.header`
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 24px;

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
    max-width: 370px;

    background: #f8f8ff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    & + a {
      margin-left: 30px;
    }
  }
`;

export const Content = styled.div`
  min-height: 600px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  padding: 50px 70px;

  display: flex;

  background: #f8f8ff;
`;
