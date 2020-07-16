import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1170px;
  width: 90vw;
  margin: 10px auto;

  border-radius: 10px;
`;

export const AppHeader = styled.header`
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 24px;

  a {
    padding: 0 30px;
  }
`;

export const TabContainer = styled.div`
  flex: 1;
  height: 100%;

  display: flex;

  a {
    height: 100%;
    width: 370px;

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

  background: #f8f8ff;
`;
