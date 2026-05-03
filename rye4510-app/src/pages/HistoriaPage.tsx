import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        title="História do Intercâmbio"
        subtitle="A Evolução do Programa de Intercâmbio de Jovens do Rotary"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Sobre nós' }, { label: 'Nossa História' }]}
      />

      <section className="section" style={{ background: '#f4f6fb' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '64px', alignItems: 'center' }}>

            {/* Image */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,59,142,.18)' }}>
              <img src="/img/historia-1.png" alt="História do RYE" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* Text */}
            <div>
              <span className="eyebrow" style={{ background: 'rgba(0,59,142,.08)', color: 'var(--primary)', padding: '.3rem .9rem', borderRadius: '30px', fontSize: '.8rem', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
                Expandindo Horizontes
              </span>
              <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1.4rem' }}>
                <strong>Cruzando Fronteiras:</strong> A Evolução do Programa de Intercâmbio de Jovens do Rotary
              </h1>
              {[
                'O Programa de Intercâmbio de Jovens do Rotary, reconhecido globalmente por promover a compreensão internacional e o desenvolvimento pessoal, tem uma história rica e diversificada. Iniciado em 1929 pelo Rotary Club de Copenhague, este programa inicialmente focava em trocas entre participantes europeus. Estas trocas, que começaram como uma iniciativa pioneira, foram interrompidas pela Segunda Guerra Mundial, mas foram retomadas logo após o término do conflito, em 1946.',
                'A expansão geográfica do programa ocorreu em 1939, com a introdução de intercâmbios entre clubes na Califórnia e países da América Latina, estendendo-se para o leste dos Estados Unidos em 1958. A consolidação do programa veio em 1962 com a formação do primeiro intercâmbio multi-distrital, o Eastern States Student Exchange (ESSEX), que envolveu vários clubes e distritos da Costa Leste dos EUA.',
                'Um marco significativo foi alcançado em 1972, quando o conselho diretor do Rotary International oficializou o Programa de Intercâmbio de Jovens como um componente oficial da organização, permitindo que o programa crescesse globalmente, incluindo mais de 60 países e 6.000 estudantes anualmente.',
                'Hoje, o Programa é administrado em nível regional pelos distritos do Rotary e em nível local pelos clubes. Eles seguem rigorosos padrões de qualidade e segurança, garantidos por um Programa de Certificação implementado pelo Rotary International.',
                'Os intercambistas, denominados "outbounds" pelos seus clubes e distritos patrocinadores e "inbounds" pelos seus clubes e distritos anfitriões, têm a oportunidade única de explorar novas culturas, aprender idiomas e desenvolver habilidades de vida valiosas.',
                'A história do Programa de Intercâmbio de Jovens do Rotary é um testemunho do compromisso da organização com a promoção do entendimento intercultural e o desenvolvimento pessoal dos jovens.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text)', marginBottom: '1rem' }}>{p}</p>
              ))}
              <Link to="/inscricao" className="btn btn-primary" style={{ marginTop: '.8rem' }}>
                Quero me inscrever
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 900px) {
          .historia-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
