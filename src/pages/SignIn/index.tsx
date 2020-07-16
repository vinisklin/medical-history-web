import React, { FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, LoginBox } from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    history.push('/appointments');
  };

  return (
    <Container>
      <LoginBox>
        <h1>LOGO</h1>

        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="E-mail" />

          <input type="password" placeholder="Senha" />

          <div>
            <button type="submit">ENTRAR</button>
            <Link to="/signup">Criar conta</Link>
          </div>
        </form>
      </LoginBox>
    </Container>
  );
};

export default SignIn;
