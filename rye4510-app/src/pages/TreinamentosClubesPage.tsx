import React from 'react';
import PageHero from '../components/PageHero';

const modules = [
  {
    title: 'Módulo 1',
    vimeoId: '461464264?h=d67d8b1cb5',
    evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScDw5py-_i99WrlqB9SdzaGK06q9sXzZ-Di4zwNEvSmsM5BPQ/viewform'
  },
  {
    title: 'Módulo 2',
    vimeoId: '462200849?h=b0415f75f0',
    evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd1DiYMa_GAUQZggYVCHON5jI9y9WwvUGded4e4Qvv0BBRHSQ/viewform'
  },
  {
    title: 'Módulo 3',
    vimeoId: '462240919?h=dd2f293690',
    evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfeawT2FJU6lWVr50YDpHmi9izqCAWoVYjvPVws9Z0T8a7k1A/viewform'
  },
  {
    title: 'Módulo 4',
    vimeoId: '465012305?h=044f3f1ebd',
    evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScJhP_6qDciJeMISkneuEGtXJfurdJHAzKUODNXPWS_sXg7hg/viewform'
  },
  {
    title: 'Módulo 5 - Parte 1',
    vimeoId: '465114475?h=de9448b848',
    evaluationUrl: null
  },
  {
    title: 'Módulo 5 - Parte 2',
    vimeoId: '465574453?h=7a5ad58a16',
    evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeNd0yIJNQCbPsMHaol5elxELR9Niol_SaM9hYB0uVJCSldpQ/viewform'
  },
  {
    title: 'Módulo 6',
    vimeoId: '465593089?h=c79e43016e',
    evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Uluelb7sGmzBeJkAn8ltlDcu2hXq2GLDVvYY1u0E90IAlQ/viewform'
  },
  {
    title: 'Módulo 7',
    vimeoId: '465768770?h=af49a43aa5',
    evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdCGedUoUxImSVt8faS5bZ1R2OaB3cAA4EYrugbde2NJKkjcg/viewform'
  }
];

const TreinamentosClubesPage: React.FC = () => {
  return (
    <div className="treinamentos-clubes-page">
      <PageHero 
        title="Treinamento Online" 
        subtitle="Programa de Treinamento Online para Clubes"
        breadcrumbActive="Treinamentos"
      />

      {/* Introdução */}
      <section className="section py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-xl-5">
              <picture className="img-fluid w-100 rounded-4 shadow-sm overflow-hidden d-block">
                <source media="(min-width: 1301px)" src="/img/club-1.png" />
                <source media="(max-width: 1300px)" src="/img/club-down-1.png" />
                <img src="/img/club-down-1.png" className="img-fluid w-100" alt="Treinamento de Clubes" />
              </picture>
            </div>
            <div className="col-xl-7">
              <h5 className="text-uppercase text-primary fw-bold mb-3">PROGRAMA DE TREINAMENTO ONLINE DE CLUBES</h5>
              <p className="lead mb-4">Este treinamento online é projetado para capacitar os clubes a organizarem e implementarem programas de intercâmbio de maneira eficaz. Abrangendo um amplo espectro de tópicos, o conteúdo deste treinamento inclui:</p>
              
              <ul className="list-unstyled mb-4">
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                  <span>A definição das atribuições e responsabilidades dos distritos, clubes e participantes envolvidos no programa.</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                  <span>Instruções detalhadas sobre os procedimentos para enviar e receber estudantes de intercâmbio.</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                  <span>Diretrizes para o preenchimento adequado dos formulários de candidatura ao intercâmbio.</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                  <span>Uma variedade de recursos disponíveis para apoiar a execução eficiente do Programa de Intercâmbio de Jovens.</span>
                </li>
              </ul>

              <p>Enfatiza-se a importância da exposição a diferentes culturas como um meio poderoso de promover a paz e a compreensão internacional. O Programa de Intercâmbio de Jovens semeia a compreensão global ao proporcionar a milhares de estudantes a chance de explorar novas sociedades e experimentar culturas distintas.</p>
              
              <p>Os benefícios do programa são extensos, beneficiando não apenas os jovens participantes, que ganham maturidade e ampliam sua visão de mundo através da experiência em um país estrangeiro, mas também os clubes anfitriões e a comunidade em geral. Os participantes desenvolvem suas habilidades acadêmicas e pessoais, enquanto os membros dos Rotary Clubs, as famílias anfitriãs e a comunidade ampliam seu entendimento cultural através da interação com os jovens.</p>
              
              <p>Para aprimorar a eficácia deste treinamento, o programa é estruturado em 7 módulos, com o Módulo 5 sendo dividido em duas partes. Ao final de cada módulo, é proposta uma avaliação. Isso permite que tanto o oficial de intercâmbio quanto o conselheiro avaliem seu conhecimento sobre o programa. Além disso, com a autorização apropriada do comitê do YEP, os clubes podem, mediante a avaliação feita com seu oficial, ser certificados para operacionalizar o programa de intercâmbio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos de Vídeo */}
      <section className="section bg-light py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary fw-bold">VÍDEOS E AVALIAÇÕES</h5>
            <h2 className="display-6 fw-bold">Módulos de Treinamento</h2>
          </div>
          
          <div className="row g-4">
            {modules.map((module, idx) => (
              <div key={idx} className="col-md-6 col-lg-4 col-xl-3">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-up">
                  <div className="video-container" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <iframe 
                      src={`https://player.vimeo.com/video/${module.vimeoId.includes('?') ? module.vimeoId + '&' : module.vimeoId + '?'}badge=0&autopause=0&player_id=0&app_id=58479`} 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      title={module.title}
                    ></iframe>
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <h4 className="h5 fw-bold mb-3">{module.title}</h4>
                    {module.evaluationUrl ? (
                      <a 
                        href={module.evaluationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary btn-sm mt-auto w-100 py-2"
                      >
                        Fazer Avaliação
                      </a>
                    ) : (
                      <button disabled className="btn btn-outline-secondary btn-sm mt-auto w-100 py-2">
                        Sem avaliação
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hover-up {
          transition: all 0.3s ease;
        }
        .hover-up:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .video-container iframe {
          border-bottom: 3px solid var(--primary);
        }
      `}</style>
    </div>
  );
};

export default TreinamentosClubesPage;
