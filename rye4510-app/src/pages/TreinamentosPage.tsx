import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { Play, ClipboardCheck, Users, GraduationCap } from 'lucide-react';

interface VideoModule {
  title: string;
  vimeoId: string;
  evaluationUrl?: string;
}

interface TrainingLevel {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  modules: VideoModule[];
  generalEvaluation?: string;
}

const TreinamentosPage: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState('tre1');

  const trainingLevels: TrainingLevel[] = [
    {
      id: 'tre1',
      title: '1º Treinamento',
      subtitle: 'Módulos Iniciais de Orientação',
      icon: <GraduationCap />,
      modules: [
        { title: 'Módulo 1', vimeoId: '923800938', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScDWvVsBN6Z47Pr-s2jWBc6Edpz1y7zedcEb4Wa_TdlCbPYDw/viewform' },
        { title: 'Módulo 2', vimeoId: '952676005', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeJ8MI9BHW5Plv5BLVUHZn3pNMRqj6x_yyNPbhz1WBU32mJbQ/viewform' },
        { title: 'Módulo 3', vimeoId: '952676236', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdeE2d0I_RLcXs_J_Aa-0LoCDT_n-6FI4nFUYcN1ZUjemCTkA/viewform' },
        { title: 'Módulo 4', vimeoId: '952676899', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScy8XUz6iFJmxBryu3vAHcnBT0FxdMbILViylyS2PHnY3BSzQ/viewform' },
        { title: 'Módulo 5', vimeoId: '952677389', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfLRCtQLkZWzTxWTNrweKoU7yfPe5tqk0G91Q1-VoSEyepcBA/viewform' },
        { title: 'Módulo 6', vimeoId: '952677736', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScwKOlzHf4ChGTobm6Kz2BRbm6iC-KsOZ0Qf49fq4EU_P-jfw/viewform' },
      ]
    },
    {
      id: 'tre2',
      title: '2º Treinamento',
      subtitle: 'Aprofundamento e Preparação',
      icon: <Users />,
      modules: [
        { title: 'Módulo 1', vimeoId: '1018936343', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdbP6rC6fMC6hkOdMV7xMLINlcd-VqnUqro0gIxWJyRC5yVpA/viewform' },
        { title: 'Módulo 2', vimeoId: '1018937125', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScJ__SyucRs3i2TMlMsS-TigJ8IgTGt0pF2GJeqsY-PGZ3L2g/viewform' },
        { title: 'Módulo 3', vimeoId: '1018937508', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeWtNepPCnLoxfClqhsJ5SGT-f5GA_vMJybzH--YMab4rhONg/viewform' },
        { title: 'Módulo 4', vimeoId: '1018937862', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdmMIaS_xq7wBFzGiau8XafCmuOsEqnoFmfoTvc_bM9SGBcYg/viewform' },
      ]
    },
    {
      id: 'tre3',
      title: '3º Treinamento',
      subtitle: 'Desafios e Simulações',
      icon: <Play />,
      modules: [
        { title: 'Módulo 1', vimeoId: '1026644988' },
        { title: 'Módulo 2', vimeoId: '1026645389' },
        { title: 'Módulo 3', vimeoId: '1026686317' },
        { title: 'Módulo 4', vimeoId: '1026649413' },
        { title: 'Módulo 5', vimeoId: '1026651705' },
        { title: 'Módulo 6', vimeoId: '1026685259' },
      ],
      generalEvaluation: 'https://docs.google.com/forms/d/e/1FAIpQLScwKOlzHf4ChGTobm6Kz2BRbm6iC-KsOZ0Qf49fq4EU_P-jfw/viewform'
    },
    {
      id: 'familias',
      title: 'Para Famílias',
      subtitle: 'Treinamento Exclusivo Anfitriãs',
      icon: <Users />,
      modules: [
        { title: 'Introdução', vimeoId: '1039971614' },
        { title: 'Módulo 1', vimeoId: '1039971800' },
        { title: 'Módulo 2', vimeoId: '1039972171' },
        { title: 'Módulo 3', vimeoId: '1039972443' },
        { title: 'Módulo 4', vimeoId: '1039972575' },
        { title: 'Módulo 5', vimeoId: '1039972707' },
        { title: 'Módulo 6', vimeoId: '1039972818' },
        { title: 'Módulo 7', vimeoId: '1039972954' },
        { title: 'Módulo 8', vimeoId: '1039973052' },
      ],
      generalEvaluation: 'https://docs.google.com/forms/d/e/1FAIpQLSebOAzHq-yfsurFuTTjsiWB9Fo-i8Bi7xsnkpuuBoM4DH6Qvg/viewform'
    }
  ];

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
                    src={`https://player.vimeo.com/video/${module.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`} 
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
