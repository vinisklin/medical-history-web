import React from 'react';

import AppContainer from '../../components/AppContainer';

import { SideMenu, MainContent } from './styles';

const Appointments: React.FC = () => {
  return (
    <AppContainer>
      <SideMenu>
        <a href="/#">CRIAR NOVA</a>
        <input type="text" />
        <h3>ESPECIALIDADE MÉDICA</h3>
        <div>
          <input type="checkbox" name="area1" id="area1" />
          <label htmlFor="area1">Dermatologista</label>
        </div>
        <div>
          <input type="checkbox" name="area2" id="area2" />
          <label htmlFor="area2">Cardiologista</label>
        </div>
        <div>
          <input type="checkbox" name="area3" id="area3" />
          <label htmlFor="area3">Dentista</label>
        </div>

        <h3>STATUS</h3>
        <div>
          <input type="checkbox" name="status1" id="status1" />
          <label htmlFor="status1">Agendado</label>
        </div>
        <div>
          <input type="checkbox" name="status2" id="status2" />
          <label htmlFor="status2">Aguardando exame</label>
        </div>
        <div>
          <input type="checkbox" name="status3" id="status3" />
          <label htmlFor="status3">Retorno marcado</label>
        </div>
        <div>
          <input type="checkbox" name="status4" id="status4" />
          <label htmlFor="status4">Finalizado</label>
        </div>
      </SideMenu>

      <MainContent>
        <h1>3 CONSULTAS</h1>
      </MainContent>
    </AppContainer>
  );
};

export default Appointments;
