import { MapPin, CalendarDays } from 'lucide-react';
import PageHero from '../components/PageHero';

const events = [
  {
    img: '/img/events-1.jpg',
    location: 'Assis, SP',
    date: '13 Set, 2025',
    title: '1º Treinamento de Famílias e Candidatos, ano 2026-27',
    text: 'Após a data final para inscrição, candidatos e pais, junto ao comitê e Oficiais de clube, se reuniram. O encontro visou uniformizar as informações do processo seletivo do programa. Foi um momento essencial de alinhamento e transparência, garantindo que todos estivessem prontos para a emocionante jornada do intercâmbio.',
  },
  {
    img: '/img/events-2.jpg',
    location: 'Maringá, PR',
    date: '04 Set, 2025',
    title: 'Distrito 4510 presente no 48º Instituto Rotary Brasil',
    text: 'José Ronan Simões Ribeiro, presidente da Associação Brasileira de Intercâmbio de Jovens (ABIJ) e membro do Comitê YEP do Distrito 4510, foi o grande destaque. Ele atuou como palestrante no principal evento rotário do Brasil, levando sua vasta experiência e inspirando com a visão para o futuro do intercâmbio.',
  },
  {
    img: '/img/events-3.jpg',
    location: 'Paraguaçu Paulista, SP',
    date: '26 Ago, 2025',
    title: 'Conferência Distrital de Intercâmbio de Jovens',
    text: 'O Rotary Club de Paraguaçu Paulista recebeu a Conferência Distrital de Intercâmbio de Jovens, reunindo cerca de 70 intercambistas de diferentes países. O Rotaract esteve presente, fortalecendo o companheirismo e vivendo momentos de troca cultural, amizade e aprendizado.',
  },
  {
    img: '/img/events-4.jpg',
    location: 'Foz do Iguaçu, PR',
    date: '23 Set, 2025',
    title: 'Viagem de Inbounds para Foz do Iguaçu',
    text: 'Os estudantes inbounds do Distrito 4510 desfrutam da grandiosidade de Foz do Iguaçu, numa viagem cuidadosamente planejada pelo nosso distrito. O PDG Alonso Campoi, membro experiente do Comitê do D4510, atua como Chaperone, zelando por uma experiência cultural enriquecedora.',
  },
];

export default function EventosPage() {
  return (
    <>
      <PageHero
        title="Calendário de Eventos"
        subtitle="Datas dos principais eventos do Intercâmbio de Jovens do Rotary do Distrito 4510, assim como os eventos distritais previstos para o ano rotário 2025-2026."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Páginas' }, { label: 'Calendário' }]}
      />

      {/* Google Calendar embed */}
      <section style={{ background: 'var(--light)', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <span className="eyebrow">Agenda do Distrito</span>
            <h2>Calendário Rotário 2025-26</h2>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=d4fa75b36575df69ca6efe8100216a90761f6ba41f9429111bf102ea347ffdc1%40group.calendar.google.com&ctz=America%2FSao_Paulo"
              style={{ border: 0, display: 'block' }}
              width="100%"
              height="600"
              title="Calendário YEP D4510"
            />
          </div>
        </div>
      </section>

      {/* Events grid */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Eventos Recentes</span>
            <h2>Veja o que está acontecendo no Distrito 4510</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
            {events.map((ev, i) => (
              <article key={i} className="card" style={{ overflow: 'hidden' }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img
                    src={ev.img} alt={ev.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '.82rem', color: 'var(--text)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                      <MapPin size={13} /> {ev.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                      <CalendarDays size={13} /> {ev.date}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '.8rem', lineHeight: 1.35 }}>{ev.title}</h3>
                  <p style={{ fontSize: '.88rem', lineHeight: 1.75, color: 'var(--text)', marginBottom: '1.2rem' }}>{ev.text}</p>
                  <button className="btn btn-primary btn-sm">Saiba mais</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .events-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
