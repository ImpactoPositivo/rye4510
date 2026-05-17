import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function HomePage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false })
      .limit(4);
    if (!error) setEvents(data || []);
    setLoadingEvents(false);
  };

  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid carousel-header vh-100 px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src="/img/carousel-1-min.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Lidere, aprenda, inspire além das fronteiras!</h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">Rotary Youth Exchange</h1>
                  <p className="mb-5 fs-5">Bem-vindo ao portal do Programa de Intercâmbio de Jovens do Rotary do Distrito 4510!<br/>O Rotary acredita em desenvolver a próxima geração de líderes.</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <Link className="btn-hover-bg btn btn-primary text-white py-3 px-5" to="/programas">Saiba mais</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/carousel-2-min.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Uma experiência para a vida toda!</h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">Rotary Youth Exchange</h1>
                  <p className="mb-5 fs-5">Conheça o Programa de Intercâmbio do Rotary do Distrito 4510!<br/>Mais que estudar, é crescer: educação e desenvolvimento pessoal para os líderes de amanhã.</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <Link className="btn-hover-bg btn btn-primary text-white py-3 px-5" to="/programas">Saiba mais</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/carousel-3-min.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Desperte seu potencial global, conecte-se!</h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">Rotary Youth Exchange</h1>
                  <p className="mb-5 fs-5">Mergulhe nessa experiência transformadora que é o Programa de Intercâmbio do Rotary!<br/>Um ano que redefine uma vida: o intercâmbio é a bússola para o seu crescimento pessoal.</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <Link className="btn-hover-bg btn btn-primary text-white py-3 px-5" to="/programas">Saiba mais</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* YEP 4510 Start */}
      <div className="container-fluid donation section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 mb-4">
              <div className="donation-item h-100">
                <img src="/img/yep4510-1.png" className="img-fluid w-100" alt="Mapa do distrito 4510" />
                <div className="donation-content d-flex flex-column">
                  <h5 className="text-uppercase text-primary mb-4">Excelência e Credibilidade</h5>
                  <span className="btn-hover-color display-6 text-white" style={{ cursor: 'default' }}>Intercâmbio de Jovens</span>
                  <h4 className="text-white mb-4">no Distrito 4510</h4>
                  <p className="text-white mb-4">Ao longo de 50 anos, o Programa de Intercâmbio do Rotary do Distrito 4510 tem construído parcerias globais baseadas em confiança e amizade, estabelecendo laços com distritos ao redor do mundo. Essas relações sólidas permitem-nos oferecer uma diversidade e quantidade de vagas de intercâmbio sem precedentes, destacando-nos em todo o Brasil. Graças a essas parcerias, jovens têm a oportunidade única de explorar novas culturas, aprendendo e crescendo em um ambiente internacional enriquecedor.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <div className="donation-item position-relative">
                <div className="position-absolute" style={{ top: '20px', left: '20px', zIndex: 10 }}>
                  <a className="btn-hover-bg btn btn-primary text-white py-2 px-4 shadow-sm" href="https://online.fliphtml5.com/50anosYEP4510/kbat/#p=1" target="_blank" rel="noreferrer">Clique para ler!</a>
                </div>
                <img src="/img/yep4510-2.png" className="img-fluid w-100" alt="Image" />
                <div className="donation-content d-flex flex-column">
                  <h5 className="text-uppercase text-primary mb-4">Experiência e Tradição</h5>
                  <span className="btn-hover-color display-6 text-white" style={{ cursor: 'default' }}>Memória do RYE D4510:</span>
                  <h4 className="text-white mb-4">50 anos de intercâmbio de Jovens</h4>
                  <p className="text-white mb-4">Com profunda alegria e senso de responsabilidade histórica que apresentamos esse livro: Memória viva do YEP 4510: 50 anos de intercâmbio de Jovens. Esta obra celebra uma trajetória que não é apenas institucional, mas também profundamente humana – feita de encontros, aprendizados e transformações que atravessam fronteiras, culturas e gerações.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* YEP 4510 End */}

      {/* Causes Start */}
      <div className="container-fluid causes section-padding">
        <div className="container">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Algumas características</h5>
            <p className="mb-0">Desenvolva seu potencial global! Viva uma imersão cultural com apoio dedicado, tornando sua vivência internacional transformadora e ao seu alcance. Seu futuro começa aqui!</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img src="/img/causes-4.jpg" className="img-fluid w-100" alt="Image" />
                </div>
                <div className="progress"></div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">Uma Jornada Educacional</h4>
                  <p className="mb-4">No Programa de Intercâmbio de Jovens do Rotary, você viverá a cultura de um país estrangeiro, morando com famílias locais e frequentando a escola. Essa imersão profunda vai além do idioma: desenvolva habilidades essenciais como adaptabilidade, resiliência e comunicação intercultural. Uma jornada de autodescoberta que o preparará para ser um líder e cidadão global, pronto para um mundo em constante transformação. Sua experiência transformadora começa aqui!</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-3" to="/contato">Entre em contato</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img src="/img/causes-2.jpg" className="img-fluid w-100" alt="Image" />
                </div>
                <div className="progress"></div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">Expansão de Horizontes</h4>
                  <p className="mb-4">Por mais de 75 anos, o Rotary impulsiona sonhos e transcende fronteiras para jovens e famílias através do Intercâmbio. Anualmente, 80 países e 9.000 estudantes embarcam em jornadas de autodescoberta e conexão global, com o apoio incansável de clubes rotários. No Distrito 4510, celebramos 50 anos de legados, onde cada intercâmbio é um capítulo vibrante de sucesso e contínua transformação pessoal. Uma verdadeira ponte para o futuro!</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4" to="/contato">Entre em contato</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img src="/img/causes-3.jpg" className="img-fluid w-100" alt="Image" />
                </div>
                <div className="progress"></div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">Os Rotary Clubes</h4>
                  <p className="mb-4">Os Rotary Clubes, com 1,2 milhão de membros em 32.000 clubes globais, focam em serviço comunitário e paz. Além do Intercâmbio de Jovens, incluem programas como Interact e Rotaract, visando o desenvolvimento profissional dos jovens. O Rotary International enfatiza a segurança e o enriquecimento em suas atividades, promovendo um ambiente seguro e propício ao crescimento pessoal e liderança futura.</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4" to="/contato">Entre em contato</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img src="/img/causes-1.jpg" className="img-fluid w-100" alt="Image" />
                </div>
                <div className="progress"></div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">Acessibilidade Financeira</h4>
                  <p className="mb-4">A gestão voluntária e dedicada dos clubes rotários reduz drasticamente os custos do programa para estudantes e suas famílias. Voluntários experientes e comprometidos, com vasto conhecimento, coordenam as interações entre estudantes, famílias hospedeiras e rotarianos. Eles promovem encontros culturais enriquecedores e apoiam os intercâmbios apaixonadamente, garantindo uma vivência transformadora e acessível a todos.</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4" to="/contato">Entre em contato</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Causes End */}

      {/* About Start */}
      <div className="container-fluid about section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-xl-5">
              <div className="position-relative">
                <img src="/img/about-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
              </div>
            </div>
            <div className="col-xl-7">
              <h5 className="text-uppercase text-primary">Só boas razões</h5>
              <h1 className="mb-4">Transformando Jovens em Líderes:<br/>A Academia de Liderança do Rotary</h1>
              <p className="fs-5 mb-4">Quando consideramos o futuro de nossos filhos, buscamos oportunidades que catalisem seu crescimento pessoal, acadêmico e profissional. O Programa de Intercâmbio do Rotary oferece exatamente isso: uma academia de liderança que prepara jovens para se tornarem cidadãos globais e líderes competentes.</p>
              <p className="fs-5 mb-4">Ao longo de um ano preparatório, com seis dias completos de treinamento, os participantes são imersos em atividades que desafiam e expandem suas capacidades de comunicação, liderança e compreensão intercultural. Esse processo meticuloso não apenas prepara o jovem para seu ano acadêmico no exterior, mas também fomenta uma base sólida para o desenvolvimento de habilidades essenciais.</p>
              <p className="fs-5 mb-4">Durante o intercâmbio, o jovem vive uma experience única de aprendizado, imerso em uma nova cultura e idioma, o que estimula a autoconfiança e a adaptabilidade. Ao retornar, o envolvimento contínuo com os programas juvenis do Rotary cimenta essa transformação, reforçando sua posição como um líder influente.</p>
              <p className="fs-5 mb-4">Essa jornada não apenas desenvolve todo o potencial de comunicação do jovem, mas também o prepara para ser um cidadão do mundo, com capacidades desenvolvidas que farão toda a diferença em seu futuro. Encorajamos vocês a considerarem essa oportunidade inestimável, garantindo um legado de liderança e sucesso para seus filhos.</p>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Counter Start */}
      <div className="container-fluid counter section-padding" style={{ background: 'linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url(/img/volunteers-bg.jpg) center center', backgroundSize: 'cover' }}>
        <div className="container">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Somos incríveis em nosso trabalho</h5>
            <p className="text-white mb-0">Nosso programa de intercâmbio apresenta taxas de sucesso impressionantes, com inúmeras experiências transformadoras e conexões globais estabelecidas.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter-item text-center border p-5 h-100">
                <i className="fas fa-thumbs-up fa-4x text-white"></i>
                <h3 className="text-white my-4">Anos de Experiência</h3>
                <div className="counter-counting">
                  <span className="text-primary fs-2 fw-bold">50</span>
                  <span className="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter-item text-center border p-5 h-100">
                <i className="fas fa-users fa-4x text-white"></i>
                <h3 className="text-white my-4">Intercambistas todos os anos</h3>
                <div className="counter-counting text-center border-white w-100" style={{ borderStyle: 'dotted', fontSize: '30px' }}>
                  <span className="text-primary fs-2 fw-bold">100</span>
                  <span className="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter-item text-center border p-5 h-100">
                <i className="fas fa-users fa-4x text-white"></i>
                <h3 className="text-white my-4">Intercambistas nos 50 anos</h3>
                <div className="counter-counting text-center border-white w-100" style={{ borderStyle: 'dotted', fontSize: '30px' }}>
                  <span className="text-primary fs-2 fw-bold">5.000</span>
                  <span className="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter-item text-center border p-5 h-100">
                <i className="fas fa-heart fa-4x text-white"></i>
                <h3 className="text-white my-4">Satisfação de nossos parceiros</h3>
                <div className="counter-counting text-center border-white w-100" style={{ borderStyle: 'dotted', fontSize: '30px' }}>
                  <span className="text-primary fs-2 fw-bold">100</span>
                  <span className="h1 fw-bold text-primary">%</span>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <div className="d-flex align-items-center justify-content-center">
                <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4" to="/inscricao">Inscreva-se</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter End */}

      {/* Events Start */}
      <div className="container-fluid event section-padding">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Eventos Recentes</h5>
            <h1 className="mb-0">Veja o que está acontecendo no Distrito 4510 relacionado ao Intercâmbio de Jovens do Rotary</h1>
          </div>
          <div className="row g-4">
            {loadingEvents ? (
              <div className="col-12 text-center py-5">
                <div className="spinner-border text-primary" role="status"></div>
              </div>
            ) : events.length === 0 ? (
              <div className="col-12 text-center py-5">
                <p className="text-muted">Fique atento! Novos eventos serão anunciados em breve.</p>
              </div>
            ) : (
              events.map((event) => (
                <div key={event.id} className="col-md-6 col-lg-3">
                  <div className="event-item h-100 d-flex flex-column">
                    <img src={event.image_url || '/img/events-1.jpg'} className="img-fluid w-100" alt={event.title} style={{ height: '200px', objectFit: 'cover' }} />
                    <div className="event-content p-4 flex-grow-1 d-flex flex-column">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="text-body small"><i className="fas fa-map-marker-alt me-2"></i>{event.location}</span>
                        <span className="text-body small"><i className="fas fa-calendar-alt me-2"></i>{new Date(event.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</span>
                      </div>
                      <h4 className="mb-4 h5 fw-bold">{event.title}</h4>
                      <p className="mb-4 small flex-grow-1 text-muted">{event.description}</p>
                      <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4 mt-auto" to="/eventos">Saiba mais</Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {/* Events End */}
    </>
  );
}
