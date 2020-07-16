import React from 'react';

import { Container, AppHeader, TabContainer, Content } from './styles';

const AppContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <AppHeader>
        <TabContainer>
          <a href="/#">CONSULTAS</a>
          <a href="/#">EXAMES</a>
        </TabContainer>
        <a href="/#">CONFIG</a>
        <a href="/#">SAIR</a>
      </AppHeader>
      <Content>{children}</Content>
    </Container>
  );
};

export default AppContainer;
