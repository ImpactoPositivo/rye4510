import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { Play } from 'lucide-react';
import { trainingLevels } from '../data/treinamentosData';

const TreinamentosPage: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState('1treinamento');

  const currentLevel = trainingLevels.find(l => l.id === activeLevel);

  return (
    <div className="treinamentos-page">
      <PageHero 
        title="Treinamentos Online" 
        subtitle="Capacitação para candidatos, pais e famílias anfitriãs."
        breadcrumbActive="Treinamentos"
      />

      <section className="section bg-light">
        <div className="container">
          <div className="row g-4 justify-content-center mb-5">
            {trainingLevels.map((level) => (
              <div key={level.id} className="col-6 col-md-3">
                <button 
                  className={`btn w-100 p-3 rounded-4 transition-all ${activeLevel === level.id ? 'btn-primary shadow' : 'btn-white text-muted shadow-sm border'}`}
                  onClick={() => setActiveLevel(level.id)}
                >
                  <div className="mb-2 d-flex justify-content-center">{level.icon}</div>
                  <span className="fw-bold d-block">{level.title}</span>
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mb-5">
            <h2 className="fw-bold">{currentLevel?.title}</h2>
            <p className="lead text-muted">{currentLevel?.subtitle}</p>
          </div>

          <div className="row g-4 tre-esp">
            {currentLevel?.modules.map((module, idx) => (
              <div key={idx} className="col-lg-6 col-xl-4">
                <div className="causes-item">
                  <div className="causes-img">
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                      <iframe 
                        src={`https://player.vimeo.com/video/${module.vimeoId}${module.vimeoId.includes('?') ? '&' : '?'}badge=0&autopause=0&player_id=0&app_id=58479`} 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        title={module.title}
                      ></iframe>
                    </div>
                  </div>
                  <div className="causes-content p-4">
                    <h4 className="mib-3">{module.title}</h4>
                    {module.evaluationUrl && (
                      <a href={module.evaluationUrl} target="_blank" rel="noopener noreferrer" className="btn-hover-bg btn btn-primary text-white py-2 px-3">
                        Avaliação
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {currentLevel?.generalEvaluation && (
            <div className="text-center mt-5">
              <a href={currentLevel.generalEvaluation} target="_blank" rel="noopener noreferrer" className="btn-hover-bg btn btn-primary text-white py-3 px-5 fs-5">
                Avaliação Geral do Módulo
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4">
                <h3 className="mb-4">Informações Importantes</h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-start">
                        <div className="bg-primary-light text-primary rounded-circle p-1 me-3 mt-1"><Play size={14} /></div>
                        <span>Os vídeos devem ser assistidos obrigatoriamente pelo candidato e seus pais.</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <div className="bg-primary-light text-primary rounded-circle p-1 me-3 mt-1"><Play size={14} /></div>
                        <span>As avaliações servem para garantir a compreensão total do programa.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-start">
                        <div className="bg-primary-light text-primary rounded-circle p-1 me-3 mt-1"><Play size={14} /></div>
                        <span>A conclusão dos módulos é pré-requisito para as próximas etapas do intercâmbio.</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <div className="bg-primary-light text-primary rounded-circle p-1 me-3 mt-1"><Play size={14} /></div>
                        <span>Garantimos a segurança e confidencialidade dos dados conforme a LGPD.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreinamentosPage;
