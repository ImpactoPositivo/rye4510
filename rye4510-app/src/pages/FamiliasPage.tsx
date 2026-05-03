import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

const academicBenefits = [
  { title: 'Preparação para a Universidade', text: 'Universidades valorizam estudantes com mente aberta, assertividade, bem-estar pessoal e a capacidade de buscar ajuda quando necessário — todas desenvolvidas durante o intercâmbio.' },
  { title: 'Sucesso Acadêmico e Profissional', text: 'Ao desenvolver pensamento crítico, gerenciamento de tempo e habilidades de comunicação em um contexto global, seu filho estará preparado para o sucesso acadêmico e para construir uma carreira promissora.' },
  { title: 'Independência e Autossuficiência', text: 'O dia a dia longe de casa estimula a independência e a autossuficiência, transformando os desafios em oportunidades de crescimento pessoal.' },
];

const workBenefits = [
  { title: 'Pensamento Crítico e Resolução de Problemas', text: 'A capacidade de analisar situações complexas e encontrar soluções eficazes, uma habilidade constantemente exercitada durante o intercâmbio.' },
  { title: 'Iniciativa e Originalidade', text: 'Proatividade para se integrar, participar e propor novas ideias em um ambiente desconhecido.' },
  { title: 'Negociação e Persuasão', text: 'Interagir com pessoas de diferentes culturas aprimora a arte da negociação e a capacidade de persuasão.' },
  { title: 'Habilidades de Comunicação Oral e Escrita', text: 'A fluência em outro idioma e a necessidade de se expressar claramente em novos contextos aprimoram fundamentalmente a comunicação.' },
  { title: 'Trabalho em Equipe e Colaboração', text: 'Colaborar com colegas de escola, famílias anfitriãs e membros do Rotary em projetos e atividades comunitárias.' },
];

function BenefitCard({ title, text }: { title: string; text: string }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '20px 0', borderBottom: '1px solid var(--border)' }}>
      <CheckCircle size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
      <div>
        <strong style={{ display: 'block', color: 'var(--dark)', marginBottom: '.3rem', fontFamily: 'var(--font-main)' }}>{title}</strong>
        <p style={{ margin: 0, fontSize: '.92rem', lineHeight: 1.7, color: 'var(--text)' }}>{text}</p>
      </div>
    </div>
  );
}

export default function FamiliasPage() {
  return (
    <>
      <PageHero
        title="Informações para Famílias"
        subtitle="Saiba como o intercâmbio impacta a vida de seu filho"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Páginas' }, { label: 'Famílias' }]}
      />

      {/* Intro */}
      <section className="section" style={{ background: 'var(--white)', paddingBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="eyebrow" style={{ background: 'rgba(0,59,142,.08)', color: 'var(--primary)', padding: '.3rem .9rem', borderRadius: '30px', fontSize: '.8rem', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
              Academia de Liderança
            </span>
            <h2 style={{ marginBottom: '1.2rem' }}>O Que é o Intercâmbio de Jovens do Rotary?</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text)' }}>
              É um programa global que oferece a adolescentes a chance de viver em outro país por um ano, hospedados por famílias rotarianas e frequentando escolas locais. É uma imersão cultural profunda que estimula o aprendizado contínuo, a adaptabilidade e o desenvolvimento pessoal de uma forma que poucas experiências conseguem.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section" style={{ background: 'var(--light)', paddingTop: '40px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="eyebrow" style={{ background: 'rgba(0,59,142,.08)', color: 'var(--primary)', padding: '.3rem .9rem', borderRadius: '30px', fontSize: '.8rem', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
              Benefícios Educacionais
            </span>
            <h2>Habilidades para a Vida Inteira</h2>
            <p style={{ marginTop: '.8rem', color: 'var(--text)', lineHeight: 1.7 }}>
              Nossa visão é que cada estudante retorne para casa não apenas como um viajante, mas como um futuro líder, um agente de mudança e um promotor da paz. O programa do Rotary é um catalisador para o desenvolvimento de competências cruciais que pais desejam, universidades valorizam e empregadores buscam.
            </p>
          </div>

          {/* Academic */}
          <div className="card" style={{ padding: '32px', marginBottom: '28px' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'var(--font-main)', fontSize: '1.1rem' }}>
              Impacto na Formação Pessoal e Acadêmica
            </h3>
            <p style={{ color: 'var(--text)', marginBottom: '1rem', lineHeight: 1.7 }}>
              O intercâmbio contribui diretamente para o crescimento pessoal e acadêmico, abordando as principais preocupações dos pais e desenvolvendo as habilidades mais valorizadas pelas universidades:
            </p>
            {academicBenefits.map((b, i) => <BenefitCard key={i} {...b} />)}
          </div>

          {/* Work */}
          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'var(--font-main)', fontSize: '1.1rem' }}>
              Para o Mercado de Trabalho: As Competências do Século XXI
            </h3>
            <p style={{ color: 'var(--text)', marginBottom: '1rem', lineHeight: 1.7 }}>
              Os empregadores de hoje buscam profissionais com um conjunto específico de habilidades, e o intercâmbio é um verdadeiro laboratório para desenvolvê-las.
            </p>
            {workBenefits.map((b, i) => <BenefitCard key={i} {...b} />)}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/inscricao" className="btn btn-primary btn-lg">Quero inscrever meu filho</Link>
          </div>
        </div>
      </section>
    </>
  );
}
