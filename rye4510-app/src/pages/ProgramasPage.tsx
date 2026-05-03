import React from 'react';
import PageHero from '../components/PageHero';
import { Globe, Clock, GraduationCap, Plane } from 'lucide-react';

const ProgramasPage: React.FC = () => {
  const programs = [
    {
      id: 'longa',
      title: 'Longa Duração (LTEP)',
      icon: <GraduationCap size={40} />,
      description: 'O programa mais tradicional do Rotary. Viva um ano acadêmico em outro país, more com famílias anfitriãs e estude em uma escola local.',
      details: [
        'Duração de 10 a 12 meses',
        'Idade entre 15 e 18 anos',
        'Imersão total na cultura local',
        'Aprendizado fluente de um novo idioma',
        'Crescimento pessoal e maturidade'
      ]
    },
    {
      id: 'curta',
      title: 'Curta Duração (STEP)',
      icon: <Clock size={40} />,
      description: 'Ideal para quem quer ter uma experiência internacional durante as férias escolares, sem perder o ano letivo.',
      details: [
        'Duração de 3 a 8 semanas',
        'Geralmente ocorre em Dezembro/Janeiro ou Julho',
        'Focado em intercâmbio familiar (você recebe e depois vai)',
        'Ótima oportunidade para fazer amizades globais',
        'Menor custo e tempo'
      ]
    },
    {
      id: 'novas-geracoes',
      title: 'Novas Gerações (NGSE)',
      icon: <Globe size={40} />,
      description: 'Programa voltado para jovens universitários ou profissionais recém-formados, com foco em desenvolvimento profissional.',
      details: [
        'Idade entre 18 e 30 anos',
        'Foco em estágios ou observação profissional',
        'Duração de 3 semanas a 6 meses',
        'Networking internacional na sua área de atuação',
        'Flexibilidade de datas e destinos'
      ]
    },
    {
      id: 'steps',
      title: 'STEPS',
      icon: <Plane size={40} />,
      description: 'Programas de curta duração com foco específico, como acampamentos de verão ou tours culturais organizados por distritos rotários.',
      details: [
        'Atividades em grupo com jovens de vários países',
        'Temas variados: esporte, música, natureza, tecnologia',
        'Duração de 2 a 4 semanas',
        'Segurança e supervisão constante do Rotary',
        'Experiência multicultural intensa'
      ]
    }
  ];

  return (
    <div className="programas-page">
      <PageHero 
        title="Programas de Intercâmbio" 
        subtitle="Escolha a modalidade que melhor se adapta ao seu perfil e objetivos."
        breadcrumbActive="Programas"
      />

      {/* Overview Grid */}
      <section className="section">
        <div className="container">
          <div className="row g-4">
            {programs.map((prog) => (
              <div key={prog.id} className="col-md-6 col-lg-3">
                <a href={`#${prog.id}`} className="card text-center p-4 h-100 text-decoration-none text-dark">
                  <div className="program-icon-box mx-auto">
                    {prog.icon}
                  </div>
                  <h4 className="mb-3">{prog.title}</h4>
                  <p className="small text-muted">{prog.description}</p>
                  <span className="btn btn-outline-primary btn-sm mt-auto">Ver Detalhes</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {programs.map((prog) => (
        <section key={prog.id} id={prog.id} className="program-detail">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="display-5 fw-bold mb-4">{prog.title}</h2>
                <p className="lead mb-4">{prog.description}</p>
                <ul className="program-list">
                  {prog.details.map((detail, index) => (
                    <li key={index} className="mb-2">{detail}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <a href="/inscricao" className="btn btn-primary btn-lg me-3">Quero me inscrever</a>
                  <a href="/contato" className="btn btn-outline-secondary btn-lg">Tirar dúvidas</a>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="rounded-4 overflow-hidden shadow-lg">
                  <img 
                    src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800`} 
                    alt={prog.title} 
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ/Pre-requisites Call to Action */}
      <section className="section bg-primary text-white text-center">
        <div className="container">
          <h2 className="mb-4">Pronto para começar sua jornada?</h2>
          <p className="lead mb-5">Confira os pré-requisitos básicos e o processo de seleção do Distrito 4510.</p>
          <a href="/inscricao" className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-bold">Começar Inscrição Agora</a>
        </div>
      </section>
    </div>
  );
};

export default ProgramasPage;
