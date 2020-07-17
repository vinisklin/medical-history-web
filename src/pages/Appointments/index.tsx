import React from 'react';

import AppContainer from '../../components/AppContainer';

import {
  SideMenu,
  MainContent,
  AppointmentsHeader,
  AppointmentRow,
} from './styles';

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

        <AppointmentsHeader>
          <h2 className="double-size">CONSULTA</h2>
          <h2 className="double-size">MOTIVO</h2>
          <h2 className="single-size">DATA</h2>
          <h2 className="single-size">STATUS</h2>
        </AppointmentsHeader>

        <AppointmentRow>
          <div className="double-size">
            <h3>Cardiologista</h3>
            <p>Dr. Drauzio Varella</p>
          </div>
          <h3 className="double-size">Dor no peito</h3>
          <h3 className="single-size">14/07/20</h3>
          <span className="single-size">Aguard. exame</span>
        </AppointmentRow>
        <AppointmentRow>
          <div className="double-size">
            <h3>Cardiologista</h3>
            <p>Dr. Drauzio Varella</p>
          </div>
          <h3 className="double-size">Coração acelerado</h3>
          <h3 className="single-size">26/02/20</h3>
          <span className="single-size">Finalizado</span>
        </AppointmentRow>
        <AppointmentRow>
          <div className="double-size">
            <h3>Cardiologista</h3>
            <p>Dr. Gregory House</p>
          </div>
          <h3 className="double-size">Coração batendo mais forte</h3>
          <h3 className="single-size">13/04/18</h3>
          <span className="single-size">Finalizado</span>
        </AppointmentRow>
      </MainContent>
    </AppContainer>
  );
};

export default Appointments;
