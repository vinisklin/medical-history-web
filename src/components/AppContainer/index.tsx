import React from 'react';
import { Link } from 'react-router-dom';

import { Container, AppHeader, TabContainer, Content } from './styles';

const AppContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <AppHeader>
        <TabContainer>
          <Link to="/appointments">CONSULTAS</Link>
          <Link to="/exams">EXAMES</Link>
        </TabContainer>
        <Link to="/#">CONFIG</Link>
        <Link to="/#">SAIR</Link>
      </AppHeader>
      <Content>{children}</Content>
    </Container>
  );
};

export default AppContainer;
