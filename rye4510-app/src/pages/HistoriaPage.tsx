import PageHero from '../components/PageHero';

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        title="História do Intercâmbio"
        subtitle="A Evolução do Programa de Intercâmbio de Jovens do Rotary"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Sobre nós' }, { label: 'Nossa História' }]}
      />

      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 alinha">
            <div className="col-xl-5">
              <div className="ali-fig">
                <img src="/img/historia-1.png" className="img-fluid w-100" alt="Image" />
              </div>
            </div>
            <div className="col-xl-7 ali-text">
              <h5 className="text-uppercase text-primary">Expandindo Horizontes</h5>
              <h1 className="mb-4"><strong>Cruzando Fronteiras:</strong> A Evolução do Programa de Intercâmbio de Jovens do Rotary</h1>
              <p className="fs-5 mb-4">O Programa de Intercâmbio de Jovens do Rotary, reconhecido globalmente por promover a compreensão internacional e o desenvolvimento pessoal, tem uma história rica e diversificada. Iniciado em 1929 pelo Rotary Club de Copenhague, este programa inicialmente focava em trocas entre participantes europeus. Estas trocas, que começaram como uma iniciativa pioneira, foram interrompidas pela Segunda Guerra Mundial, mas foram retomadas logo após o término do conflito, em 1946.</p>
              <p className="fs-5 mb-4">A expansão geográfica do programa ocorreu em 1939, com a introdução de intercâmbios entre clubes na Califórnia e países da América Latina, estendendo-se para o leste dos Estados Unidos em 1958. A consolidação do programa veio em 1962 com a formação do primeiro intercâmbio multi-distrital, conhecido como Eastern States Student Exchange (ESSEX), que envolveu vários clubes e distritos da Costa Leste dos EUA.</p>
              <p className="fs-5 mb-4">Um marco significativo na história do programa foi alcançado em 1972, quando o conselho diretor do Rotary International oficializou o Programa de Intercâmbio de Jovens como um componente oficial da organização. Isso estabeleceu uma estrutura administrativa formal, permitindo que o programa crescesse e se expandisse globalmente, incluindo mais de 60 países e envolvendo mais de 6.000 estudantes anualmente.</p>
              <p className="fs-5 mb-4">Hoje, o Programa de Intercâmbio de Jovens do Rotary é administrado em um nível regional pelos distritos do Rotary e em um nível local pelos clubes do Rotary. Eles seguem rigorosos padrões de qualidade e segurança, garantidos por um Programa de Certificação implementado pelo Rotary International. Este programa não permite a participação de grupos do Rotary sem a obtenção prévia da certificação, assegurando assim a segurança e o bem-estar dos estudantes envolvidos.</p>
              <p className="fs-5 mb-4">Os intercambistas, denominados "outbounds" pelos seus clubes e distritos patrocinadores e "inbounds" pelos seus clubes e distritos anfitriões, têm a oportunidade única de explorar novas culturas, aprender idiomas e desenvolver habilidades de vida valiosas. Ao longo dos anos, o programa tem incentivado os jovens a agirem como catalisadores para a paz e a justiça social em suas comunidades locais e no mundo, longo após o término de seus intercâmbios.</p>
              <p className="fs-5 mb-4">A história do Programa de Intercâmbio de Jovens do Rotary é um testemunho do compromisso da organização com a promoção do entendimento intercultural e o desenvolvimento pessoal dos jovens. Continua a ser um programa reverenciado, enriquecendo vidas e construindo pontes entre culturas em todo o mundo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
