import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft, ChevronRight, ExternalLink,
  ThumbsUp, Users, Heart, ArrowRight,
  MapPin, CalendarDays,
} from 'lucide-react';
import './HomePage.css';

/* ── Data ───────────────────────────────────────────── */
const heroSlides = [
  {
    img: '/img/carousel-1-min.jpg',
    eyebrow: 'Lidere, aprenda, inspire além das fronteiras!',
    title: 'Rotary Youth Exchange',
    text: 'Bem-vindo ao portal do Programa de Intercâmbio de Jovens do Rotary do Distrito 4510! O Rotary acredita em desenvolver a próxima geração de líderes.',
  },
  {
    img: '/img/carousel-2-min.jpg',
    eyebrow: 'Uma experiência para a vida toda!',
    title: 'Rotary Youth Exchange',
    text: 'Conheça o Programa de Intercâmbio do Rotary do Distrito 4510! Mais que estudar, é crescer: educação e desenvolvimento pessoal para os líderes de amanhã.',
  },
  {
    img: '/img/carousel-3-min.jpg',
    eyebrow: 'Desperte seu potencial global, conecte-se!',
    title: 'Rotary Youth Exchange',
    text: 'Mergulhe nessa experiência transformadora que é o Programa de Intercâmbio do Rotary! Um ano que redefine uma vida: o intercâmbio é a bússola para o seu crescimento pessoal.',
  },
];

const yepCards = [
  {
    img: '/img/yep4510-1.png',
    tag: 'Excelência e Credibilidade',
    title: 'Intercâmbio de Jovens no Distrito 4510',
    text: 'Ao longo de 50 anos, o Programa de Intercâmbio do Rotary do Distrito 4510 tem construído parcerias globais baseadas em confiança e amizade, estabelecendo laços com distritos ao redor do mundo.',
    href: null,
    btnLabel: 'Saiba mais',
  },
  {
    img: '/img/yep4510-2.png',
    tag: 'Experiência e Tradição',
    title: 'Memória do RYE D4510: 50 anos de intercâmbio',
    text: 'Com profunda alegria apresentamos: Memória viva do YEP 4510 — 50 anos de intercâmbio de Jovens. Esta obra celebra uma trajetória humana feita de encontros, aprendizados e transformações.',
    href: 'https://online.fliphtml5.com/50anosYEP4510/kbat/#p=1',
    btnLabel: 'Clique para ler!',
  },
];

const features = [
  {
    img: '/img/causes-4.jpg',
    title: 'Uma Jornada Educacional',
    text: 'No Programa de Intercâmbio de Jovens do Rotary, você viverá a cultura de um país estrangeiro, morando com famílias locais e frequentando a escola. Essa imersão profunda vai além do idioma: desenvolva adaptabilidade, resiliência e comunicação intercultural.',
  },
  {
    img: '/img/causes-2.jpg',
    title: 'Expansão de Horizontes',
    text: 'Por mais de 75 anos, o Rotary impulsiona sonhos e transcende fronteiras para jovens e famílias. Anualmente, 80 países e 9.000 estudantes embarcam em jornadas de autodescoberta e conexão global.',
  },
  {
    img: '/img/causes-3.jpg',
    title: 'Os Rotary Clubes',
    text: 'Os Rotary Clubes, com 1,2 milhão de membros em 32.000 clubes globais, focam em serviço comunitário e paz. Além do Intercâmbio de Jovens, incluem programas como Interact e Rotaract.',
  },
  {
    img: '/img/causes-1.jpg',
    title: 'Acessibilidade Financeira',
    text: 'A gestão voluntária e dedicada dos clubes rotários reduz drasticamente os custos do programa. Voluntários experientes coordenam interações entre estudantes, famílias hospedeiras e rotarianos.',
  },
];

const counters = [
  { icon: <ThumbsUp size={40} />, label: 'Anos de Experiência', value: '50', suffix: '+' },
  { icon: <Users size={40} />,    label: 'Intercambistas por ano', value: '100', suffix: '+' },
  { icon: <Users size={40} />,    label: 'Intercambistas em 50 anos', value: '5.000', suffix: '+' },
  { icon: <Heart size={40} />,    label: 'Satisfação de nossos parceiros', value: '100', suffix: '%' },
];

const events = [
  {
    img: '/img/events-1.jpg',
    location: 'Assis, SP',
    date: '13 Set, 2025',
    title: '1º Treinamento de Famílias e Candidatos, ano 2026-27',
    text: 'Após a data final para inscrição, candidatos e pais, junto ao comitê e Oficiais de clube, se reuniram. O encontro visou uniformizar as informações do processo seletivo do programa.',
  },
  {
    img: '/img/events-2.jpg',
    location: 'Maringá, PR',
    date: '04 Set, 2025',
    title: 'Distrito 4510 presente no 48º Instituto Rotary Brasil',
    text: 'José Ronan Simões Ribeiro, presidente da Associação Brasileira de Intercâmbio de Jovens (ABIJ), atuou como palestrante no principal evento rotário do Brasil.',
  },
  {
    img: '/img/events-3.jpg',
    location: 'Paraguaçu Paulista, SP',
    date: '26 Ago, 2025',
    title: 'Conferência Distrital de Intercâmbio de Jovens',
    text: 'O Rotary Club de Paraguaçu Paulista recebeu a Conferência Distrital de Intercâmbio de Jovens, reunindo cerca de 70 intercambistas de diferentes países.',
  },
  {
    img: '/img/events-4.jpg',
    location: 'Foz do Iguaçu, PR',
    date: '23 Set, 2025',
    title: 'Viagem de Inbounds para Foz do Iguaçu',
    text: 'Os estudantes inbounds do Distrito 4510 desfrutam da grandiosidade de Foz do Iguaçu, numa viagem cuidadosamente planejada pelo nosso distrito.',
  },
];

/* ── Hero Component ─────────────────────────────────── */
function HeroCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((idx: number) => {
    setActive((idx + heroSlides.length) % heroSlides.length);
  }, []);

  const reset = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive(p => (p + 1) % heroSlides.length), 5000);
  }, []);

  useEffect(() => { reset(); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, [reset]);

  return (
    <section className="hero">
      {heroSlides.map((slide, i) => (
        <div key={i} className={`hero-slide${active === i ? ' active' : ''}`}>
          <img src={slide.img} alt={slide.title} />
          <div className="hero-overlay">
            <div className="hero-content">
              <p className="hero-eyebrow">{slide.eyebrow}</p>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-text">{slide.text}</p>
              <div className="hero-actions">
                <Link to="/programas" className="btn btn-primary btn-lg">Saiba mais</Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className="hero-arrow prev" onClick={() => { go(active - 1); reset(); }} aria-label="Anterior">
        <ChevronLeft size={24} />
      </button>
      <button className="hero-arrow next" onClick={() => { go(active + 1); reset(); }} aria-label="Próximo">
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="hero-controls">
        {heroSlides.map((_, i) => (
          <button key={i} className={`hero-dot${active === i ? ' active' : ''}`} onClick={() => { go(i); reset(); }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

/* ── Counter (Intersection Observer) ───────────────── */
function CounterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="counter-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow" style={{ background: 'rgba(247,168,27,.15)', color: 'var(--accent)' }}>Somos incríveis em nosso trabalho</span>
          <p style={{ color: 'rgba(255,255,255,.75)' }}>
            Nosso programa de intercâmbio apresenta taxas de sucesso impressionantes, com inúmeras experiências transformadoras e conexões globais estabelecidas.
          </p>
        </div>
        <div className="counter-grid" ref={ref}>
          {counters.map((c, i) => (
            <div className="counter-card" key={i}>
              <div className="counter-icon">{c.icon}</div>
              <h4>{c.label}</h4>
              <div className="counter-value">
                {triggered ? c.value : '0'}<span>{c.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Events Carousel ────────────────────────────────── */
function EventsSection() {
  const [start, setStart] = useState(0);
  const visible = 3;

  const prev = () => setStart(s => Math.max(0, s - 1));
  const next = () => setStart(s => Math.min(events.length - visible, s + 1));

  const shown = events.slice(start, start + visible);

  return (
    <section className="events-section section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div className="section-header" style={{ textAlign: 'left', margin: 0 }}>
            <span className="eyebrow">Eventos Recentes</span>
            <h2 style={{ marginTop: '.6rem' }}>Veja o que está acontecendo<br />no Distrito 4510</h2>
          </div>
          <div className="events-nav">
            <button className="events-nav-btn" onClick={prev} disabled={start === 0} aria-label="Anterior">
              <ChevronLeft size={18} />
            </button>
            <button className="events-nav-btn" onClick={next} disabled={start >= events.length - visible} aria-label="Próximo">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="events-grid">
          {shown.map((ev, i) => (
            <article className="event-card" key={i}>
              <div className="event-card-img">
                <img src={ev.img} alt={ev.title} />
              </div>
              <div className="event-card-body">
                <div className="event-meta">
                  <span><MapPin size={12} /> {ev.location}</span>
                  <span><CalendarDays size={12} /> {ev.date}</span>
                </div>
                <h4>{ev.title}</h4>
                <p>{ev.text}</p>
                <a href="#" className="btn btn-primary btn-sm">Saiba mais</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Main Page ──────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroCarousel />

      {/* 2 — YEP D4510 Cards */}
      <section className="yep-section">
        <div className="container">
          <div className="yep-grid">
            {yepCards.map((card, i) => (
              <div className="yep-card" key={i}>
                <img src={card.img} alt={card.title} />
                <div className="yep-card-overlay">
                  <p className="yep-card-tag">{card.tag}</p>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  {card.href ? (
                    <a href={card.href} target="_blank" rel="noreferrer" className="yep-card-btn">
                      {card.btnLabel} <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link to="/programas" className="yep-card-btn">
                      {card.btnLabel} <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Features */}
      <section className="features-section section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Algumas características</span>
            <h2>Desenvolva seu potencial global</h2>
            <p>Viva uma imersão cultural com apoio dedicado, tornando sua vivência internacional transformadora e ao seu alcance. Seu futuro começa aqui!</p>
          </div>
          <div className="grid grid-4">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-card-img">
                  <img src={f.img} alt={f.title} />
                </div>
                <div className="feature-card-body">
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                  <Link to="/contato" className="btn btn-outline btn-sm">Entre em contato</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — About */}
      <section className="about-section section">
        <div className="container">
          <div className="about-inner">
            <div className="about-img-wrap">
              <img src="/img/about-1.jpg" alt="Jovens intercambistas" />
              <div className="about-badge">
                <strong>50+</strong>
                <span>Anos de<br />Excelência</span>
              </div>
            </div>
            <div className="about-text">
              <span className="eyebrow">Só boas razões</span>
              <h2>Transformando Jovens em Líderes:<br />A Academia de Liderança do Rotary</h2>
              <p>Quando consideramos o futuro de nossos filhos, buscamos oportunidades que catalisem seu crescimento pessoal, acadêmico e profissional. O Programa de Intercâmbio do Rotary oferece exatamente isso: uma academia de liderança que prepara jovens para se tornarem cidadãos globais e líderes competentes.</p>
              <p>Ao longo de um ano preparatório, com seis dias completos de treinamento, os participantes são imersos em atividades que desafiam e expandem suas capacidades de comunicação, liderança e compreensão intercultural.</p>
              <p>Durante o intercâmbio, o jovem vive uma experiência única de aprendizado, imerso em uma nova cultura e idioma, o que estimula a autoconfiança e a adaptabilidade. Ao retornar, o envolvimento contínuo com os programas juvenis do Rotary cimenta essa transformação.</p>
              <Link to="/programas" className="btn btn-primary" style={{ marginTop: '1.4rem' }}>
                Conheça os programas <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Counter */}
      <CounterSection />

      {/* 6 — Events */}
      <EventsSection />
    </>
  );
}
