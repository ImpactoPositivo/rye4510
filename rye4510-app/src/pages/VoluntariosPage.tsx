import React from 'react';
import PageHero from '../components/PageHero';

const governors = [
  {
    name: 'Marco A Araújo',
    title: 'Governador 2025-26',
    image: '/img/vol-governador.png'
  },
  {
    name: 'Monaliza Marega',
    title: 'Governadora Eleita 2026-27',
    image: '/img/vol-gov-eleito.png'
  },
  {
    name: 'Paulo Montefusco',
    title: 'Governador Indicado 2027-28',
    image: '/img/vol-gov-indicado.png'
  }
];

const committee = [
  {
    name: 'Andréa D Rossi',
    role: 'Chair Person 2024-2027',
    image: '/img/vol-andrea.png'
  },
  {
    name: 'Marco Campagnucci',
    role: 'Former Chair Coordenador de Curta',
    image: '/img/vol-marco.png'
  },
  {
    name: 'Ronan Ribeiro',
    role: 'Former Chair Contato Asia-Oceania',
    image: '/img/vol-ronan.png'
  },
  {
    name: 'Luiz Begosso',
    role: 'Former Chair Contato Europa-África',
    image: '/img/vol-begosso.png'
  },
  {
    name: 'Chico Ferro',
    role: 'Former Chair Contato North America',
    image: '/img/vol-chico.png'
  },
  {
    name: 'Alonso Campoi',
    role: 'Former Chair Coordenador Inbound',
    image: '/img/vol-alonso.png'
  }
];

const VoluntariosPage: React.FC = () => {
  return (
    <div className="voluntarios-page">
      <PageHero 
        title="Comitê RYE 4510" 
        subtitle="O Comitê do Intercâmbio de Jovens do Rotary do Distrito 4510"
        breadcrumbActive="Voluntários"
      />

      <section className="section py-5">
        <div className="container">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 fw-bold mb-4">Comitê de Intercâmbio, Distrito 4510</h1>
            <p className="lead text-muted">O Comitê do Programa de Intercâmbio de Jovens do Distrito 4510: 50 anos promovendo a cidadania global e a inovação entre os jovens por meio de intercâmbios dinâmicos.</p>
          </div>

          {/* Liderança Distrital - Centralizada */}
          <div className="row g-4 justify-content-center mb-5">
            {governors.map((gov, idx) => (
              <div key={idx} className="col-sm-6 col-md-4 col-lg-3">
                <div className="volunteer-card">
                  <div className="volunteer-img-wrapper">
                    <img src={gov.image} className="img-fluid w-100" alt={gov.name} />
                    <div className="volunteer-overlay">
                      <h5 className="text-white fw-bold mb-1">{gov.name}</h5>
                      <p className="text-white-50 small mb-0">{gov.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comitê Executivo */}
          <div className="row g-4">
            {committee.map((member, idx) => (
              <div key={idx} className="col-6 col-md-4 col-lg-2">
                <div className="volunteer-card small-card">
                  <div className="volunteer-img-wrapper">
                    <img src={member.image} className="img-fluid w-100" alt={member.name} />
                    <div className="volunteer-overlay">
                      <h6 className="text-white fw-bold mb-1" style={{ fontSize: '0.9rem' }}>{member.name}</h6>
                      <p className="text-white-50" style={{ fontSize: '0.7rem', lineHeight: '1.2' }}>{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '900px' }}>
            <h2 className="display-6 fw-bold mb-4">Distrito 4510, mais de 130 anos de experiência acumulada</h2>
            <div className="text-start text-muted">
              <p className="mb-4">O Comitê do Programa de Intercâmbio de Jovens do Distrito 4510, com uma história que abrange mais de 50 anos, incorpora a essência do comprometimento e da diversidade em suas operações. Originalmente formado por um coletivo de ex-presidentes, o comitê hoje é uma vibrante assembleia de indivíduos que serviram à comunidade com dedicação, garantindo a manutenção de parcerias internacionais vitais para o sucesso do programa.</p>
              <p className="mb-4">Embora cada membro traga sua perspectiva única para a mesa, é o Presidente do comitê que é especificamente eleito para um mandato de três anos, uma prática projetada para manter uma representação democrática. Essa abordagem garante uma liderança renovada enquanto sustenta o entusiasmo necessário para trabalhar com jovens — um demográfico que prospera na dinâmica e na inovação.</p>
              <p className="mb-4">A principal responsabilidade do comitê reside na orquestração de intercâmbios de entrada e saída, facilitando um diálogo intercultural que enriquece a vida dos jovens. Além dos aspectos logísticos de organizar esses intercâmbios, o papel do comitê se estende à comunicação regular com o Rotary International, garantindo a adesão aos altos padrões e valores da organização.</p>
              <p className="mb-0">Isso inclui proteger os participantes de qualquer forma de dano e garantir um ambiente seguro e enriquecedor que promove o crescimento pessoal e habilidades de liderança. A dedicação dos membros do comitê, juntamente com o apoio de inúmeros voluntários, sublinha a missão do Rotary de "Dar de Si Antes de Pensar em Si", fazendo do Programa de Intercâmbio Juvenil uma pedra angular dos esforços do Rotary para construir um mundo mais pacífico e interconectado.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .volunteer-card {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          aspect-ratio: 1 / 1.2;
        }
        .volunteer-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .volunteer-img-wrapper {
          position: relative;
          height: 100%;
        }
        .volunteer-img-wrapper img {
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .volunteer-card:hover img {
          transform: scale(1.1);
        }
        .volunteer-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 103, 200, 0.95));
          padding: 20px 15px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .small-card .volunteer-overlay {
          padding: 15px 10px;
        }
        
        @media (max-width: 768px) {
          .volunteer-card {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default VoluntariosPage;
