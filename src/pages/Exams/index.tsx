import React from 'react';

import AppContainer from '../../components/AppContainer';

import { SideMenu, MainContent, ExamsHeader, ExamRow } from './styles';

const Appointments: React.FC = () => {
  return (
    <AppContainer>
      <SideMenu>
        <a href="/#">CRIAR NOVO</a>
        <input type="text" />
        <h3>ÁREA MÉDICA</h3>
        <div>
          <input type="checkbox" name="area1" id="area1" />
          <label htmlFor="area1">Dermatologia</label>
        </div>
        <div>
          <input type="checkbox" name="area2" id="area2" />
          <label htmlFor="area2">Cardiologia</label>
        </div>
        <div>
          <input type="checkbox" name="area3" id="area3" />
          <label htmlFor="area3">Odontologia</label>
        </div>

        <h3>STATUS</h3>
        <div>
          <input type="checkbox" name="status1" id="status1" />
          <label htmlFor="status1">Liberar guia</label>
        </div>
        <div>
          <input type="checkbox" name="status2" id="status2" />
          <label htmlFor="status2">Para agendar</label>
        </div>
        <div>
          <input type="checkbox" name="status3" id="status3" />
          <label htmlFor="status3">Agendado</label>
        </div>
        <div>
          <input type="checkbox" name="status4" id="status4" />
          <label htmlFor="status4">Realizado</label>
        </div>
      </SideMenu>

      <MainContent>
        <h1>4 EXAMES</h1>

        <ExamsHeader>
          <h2 className="double-size">EXAME</h2>
          <h2 className="double-size">SOLICITADO POR</h2>
          <h2 className="single-size">DATA</h2>
          <h2 className="single-size">STATUS</h2>
        </ExamsHeader>

        <ExamRow>
          <div className="double-size">
            <h3>Eletrocardiograma</h3>
            <p>Cardiologia</p>
          </div>
          <div className="double-size">
            <h3>Cardiologista</h3>
            <p>em 14/07/20</p>
          </div>
          <h3 className="single-size">-</h3>
          <span className="single-size">Para agendar</span>
        </ExamRow>
        <ExamRow>
          <div className="double-size">
            <h3>Holter</h3>
            <p>Cardiologia</p>
          </div>
          <div className="double-size">
            <h3>Cardiologista</h3>
            <p>em 14/07/20</p>
          </div>
          <h3 className="single-size">-</h3>
          <span className="single-size">Liberar guia</span>
        </ExamRow>
        <ExamRow>
          <div className="double-size">
            <h3>Eletrocardiograma</h3>
            <p>Cardiologia</p>
          </div>
          <div className="double-size">
            <h3>Cardiologista</h3>
            <p>em 13/04/18</p>
          </div>
          <h3 className="single-size">18/04/18</h3>
          <span className="single-size">Realizado</span>
        </ExamRow>
        <ExamRow>
          <div className="double-size">
            <h3>Teste de esforço</h3>
            <p>Cardiologia</p>
          </div>
          <div className="double-size">
            <h3>Conta própria</h3>
          </div>
          <h3 className="single-size">12/01/18</h3>
          <span className="single-size">Realizado</span>
        </ExamRow>
      </MainContent>
    </AppContainer>
  );
};

export default Appointments;
