import React from 'react';
import PageHero from '../components/PageHero';
import { Heart, Globe, Shield, HelpCircle } from 'lucide-react';

const VoluntariosPage: React.FC = () => {
  return (
    <div className="voluntarios-page">
      <PageHero 
        title="Voluntários" 
        subtitle="O coração do Programa de Intercâmbio de Jovens do Rotary."
        breadcrumbActive="Voluntários"
      />

      <section className="section">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Quem são os Voluntários?</h2>
              <p className="lead mb-4">
                O intercâmbio do Rotary é mantido integralmente por voluntários dedicados — rotarianos e não rotarianos — 
                que doam seu tempo e talento para garantir a segurança e o sucesso de cada jovem.
              </p>
              <p className="text-muted mb-4">
                Desde os Oficiais de Intercâmbio nos clubes até os Conselheiros e as Famílias Anfitriãs, 
                todos trabalham em conjunto para criar uma rede de apoio global.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-light p-4 rounded-4">
                <div className="row g-4">
                  <div className="col-6">
                    <div className="card border-0 p-3 text-center shadow-sm h-100">
                      <div className="text-primary mb-2"><Heart size={32} className="mx-auto" /></div>
                      <h5 className="small fw-bold">Dedicados</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card border-0 p-3 text-center shadow-sm h-100">
                      <div className="text-primary mb-2"><Globe size={32} className="mx-auto" /></div>
                      <h5 className="small fw-bold">Globais</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card border-0 p-3 text-center shadow-sm h-100">
                      <div className="text-primary mb-2"><Shield size={32} className="mx-auto" /></div>
                      <h5 className="small fw-bold">Seguros</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card border-0 p-3 text-center shadow-sm h-100">
                      <div className="text-primary mb-2"><HelpCircle size={32} className="mx-auto" /></div>
                      <h5 className="small fw-bold">Mentores</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-5">
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-primary text-white p-4 rounded-4 shadow">
                <h4>Oficial de Intercâmbio (YEO)</h4>
                <p className="small opacity-75">Responsável pela coordenação do programa no âmbito do Rotary Club local.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white p-4 rounded-4 shadow-sm border">
                <h4 className="text-primary">Conselheiro</h4>
                <p className="small text-muted">Acompanha o intercambista durante todo o ano, sendo o seu principal elo de ligação.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-white p-4 rounded-4 shadow-sm border">
                <h4 className="text-primary">Família Anfitriã</h4>
                <p className="small text-muted">Abre as portas de sua casa e seu coração para receber um jovem de outro país.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Quer ser um voluntário?</h2>
          <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            Não é necessário ser rotariano para se envolver. Se você compartilha dos nossos valores e quer fazer a diferença na vida de um jovem, entre em contato.
          </p>
          <a href="/contato" className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold">Quero Ajudar</a>
        </div>
      </section>
    </div>
  );
};

export default VoluntariosPage;
