import React from 'react';
import PageHero from '../components/PageHero';
import DistrictMap from '../components/DistrictMap';

const DistritoPage: React.FC = () => {
  return (
    <div className="distrito-page">
      <PageHero 
        title="O Distrito 4510" 
        breadcrumbActive="Distrito"
      />

      <div className="container-fluid causes py-5">
        <div className="container py-3">
          <div className="text-center mx-auto pb-3" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Nossa Visão</h5>
            <h1 className="mb-4">O Intercâmbio de Jovens do Rotary é mais que uma experiência cultural</h1>
            <p className="mb-0">
              Acreditamos que os estudantes de intercâmbio desenvolvem habilidades essenciais para a vida, resiliência, adaptabilidade e um forte senso de cidadania global. Nosso objetivo é garantir que cada estudante retorne para casa não apenas como um viajante, mas como um futuro líder, um agente global, um agente de paz, preparado para fazer a diferença no mundo.<strong>O Intercâmbio de Jovens do Rotary uma Academia de Liderança Juvenil</strong>. 
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid causes py-3">
        <div className="container py-1">
          <div className="text-center mx-auto pb-3" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Nossa Localização</h5>
            <h1 className="mb-4">O distrito 4510 está localizado a sudoeste do Estado de São Paulo</h1>
            <p className="mb-0">
              Estamos em 37 cidades, organizados em 74 clubes, compostos por 1509 rotarianos, também 26 Rotaract Clubs, compostos por 267 jovens profissionais de até 30 anos, 29 Interact Clubs, formados por 361 ativos jovens de até 18 anos.
            </p>
          </div>
        </div>
      </div>

      {/* mapa em svg Start */}
      <div className="d4510-area">
        <div className="map-container">
          <DistrictMap />
        </div>
        <div className="legenda">
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Legenda do Mapa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="color-box" style={{ backgroundColor: '#f7a81b' }}></td>
                <td className="status">Cidades sem Rotary Clubes</td>
              </tr>
              <tr>
                <td className="color-box" style={{ backgroundColor: '#b9d9eb' }}></td>
                <td className="status">Cidades sem clubes certificados</td>
              </tr>
              <tr>
                <td className="color-box" style={{ backgroundColor: '#0067c8' }}></td>
                <td className="status">Cidades com clubes certificados</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* mapa em svg End */}
    </div>
  );
};

export default DistritoPage;
