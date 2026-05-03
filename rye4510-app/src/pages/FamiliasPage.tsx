import PageHero from '../components/PageHero';

export default function FamiliasPage() {
  return (
    <>
      <PageHero
        title="Informações para Famílias"
        subtitle="Saiba como o intercâmbio impacta a vida de seu filho"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Páginas' }, { label: 'Famílias' }]}
      />

      <div className="container-fluid causes py-5">
        <div className="container py-3">
          <div className="text-center mx-auto pb-3" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Academia de Liderança</h5>
            <h1 className="mb-4">O Que é o Intercâmbio de Jovens do Rotary?</h1>
            <p className="mb-0">É um programa global que oferece a adolescentes a chance de viver em outro país por um ano, hospedados por famílias rotarianas e frequentando escolas locais. É uma imersão cultural profunda que estimula o aprendizado contínuo, a adaptabilidade e o desenvolvimento pessoal de uma forma que poucas experiências conseguem.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid causes py-3">
        <div className="container py-1">
          <div className="text-center mx-auto pb-3" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Benefícios Educacionais:</h5>
            <h1 className="mb-4">Habilidades para a Vida Inteira</h1>
            <p className="mb-0">Nossa visão é que cada estudante retorne para casa não apenas como um viajante, mas como um futuro líder, um agente de mudança e um promotor da paz. Como destacado em nossos treinamentos, o programa do Rotary é um catalisador para o desenvolvimento de competências cruciais que pais desejam, universidades valorizam e empregadores buscam.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 alinha">
            <div className="col-xl-7 mx-auto">
              <h5 className="text-uppercase text-primary">Impacto na Formação Pessoal e Acadêmica</h5>                        
              <p className="mb-0">O intercâmbio contribui diretamente para o crescimento pessoal e acadêmico, abordando as principais preocupações dos pais e desenvolvendo das habilidades mais valorizadas pelas universidades:</p>
              <ul className="mb-0">
                <li><strong>Preparação para a Universidade:</strong> Universidades valorizam estudantes com mente aberta, assertividade, bem-estar pessoal e a capacidade de buscar ajuda quando necessário, todas desenvolvidas durante o intercâmbio</li>
                <li><strong>Sucesso Acadêmico e Profissional:</strong> Ao desenvolver pensamento crítico, gerenciamento de tempo e habilidades de comunicação em um contexto global, seu filho estará não apenas preparado para o sucesso acadêmico, mas também para construir uma carreira promissora e alinhada com as demandas do futuro.</li>
                <li><strong>Independência e Autossuficiência:</strong> O dia a dia longe de casa estimula a independência e a autossuficiência, transformando os desafios em oportunidades de crescimento pessoal.</li>
              </ul>
            </div>
            <div className="col-xl-7 ali-text mx-auto">
              <h5 className="text-uppercase text-primary">Para o Mercado de Trabalho: As Competências do Século XXI</h5>                        
              <p className="mb-0">Os empregadores de hoje buscam profissionais com um conjunto específico de habilidades, e o intercâmbio é um verdadeiro laboratório para desenvolvê-las.</p>
              <ul className="mb-0">
                <li><strong>Pensamento Crítico e Resolução de Problemas:</strong> A capacidade de analisar situações complexas e encontrar soluções eficazes, uma habilidade constantemente exercitada durante o intercâmbio.</li>
                <li><strong>Iniciativa e Originalidade:</strong> Proatividade para se integrar, participar e propor novas ideias em um ambiente desconhecido.</li>
                <li><strong>Negociação e Persuasão:</strong> Interagir com pessoas de diferentes culturas aprimora a arte da negociação e a capacidade de persuasão.</li>
                <li><strong>Habilidades de Comunicação Oral e Escrita:</strong> A fluência em outro idioma e a necessidade de se expressar claramente em novos contextos aprimoram fundamentalmente a comunicação.</li>
                <li><strong>Trabalho em Equipe e Colaboração:</strong> Colaborar com colegas de escola, famílias anfitriãs e membros do Rotary em projetos e atividades comunitárias.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
