import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { ClipboardCheck, Play } from 'lucide-react';
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

          <div className="training-grid">
            {currentLevel?.modules.map((module, idx) => (
              <div key={idx} className="training-card">
                <div className="video-container">
                  <iframe 
                    src={`https://player.vimeo.com/video/${module.vimeoId}${module.vimeoId.includes('?') ? '&' : '?'}badge=0&autopause=0&player_id=0&app_id=58479`} 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    title={module.title}
                  ></iframe>
                </div>
                <div className="training-info">
                  <h4>{module.title}</h4>
                  {module.evaluationUrl && (
                    <a href={module.evaluationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm mt-2 w-100">
                      <ClipboardCheck size={16} className="me-2" />
                      Avaliação do Módulo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {currentLevel?.generalEvaluation && (
            <div className="text-center mt-5">
              <a href={currentLevel.generalEvaluation} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold">
                <ClipboardCheck className="me-2" />
                Avaliação Geral do {currentLevel.title}
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
