import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  padding-top: 50px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const LoginBox = styled.div`
  min-height: 400px;
  padding: 50px 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  background-color: #f8f8ff;

  h1 {
    margin: 0 auto;
    font-size: 72px;
  }

  form {
    input {
      display: flex;
      align-items: center;

      margin-bottom: 8px;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        padding: 5px 0;
        width: 50%;
        border: 1px;
        border-radius: 10px;

        background-color: #66ffaa;
        transition: background-color 0.5s;

        &:hover {
          background-color: ${shade(0.2, '#66ffaa')};
        }
      }

      a {
        text-decoration: none;
      }
    }
  }
`;
