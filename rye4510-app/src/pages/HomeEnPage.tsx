import React from 'react';
import { Link } from 'react-router-dom';

const HomeEnPage: React.FC = () => {
  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid carousel-header vh-100 px-0">
        <div id="carouselEn" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselEn" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselEn" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselEn" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src="/img/carousel-1-min.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Future Leaders Start Here!</h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">Rotary Youth Exchange</h1>
                  <p className="mb-5 fs-5">Welcome to the Rotary Youth Exchange Program portal for District 4510!<br />Rotary believes in developing the next generation of leaders.</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <Link className="btn-hover-bg btn btn-primary text-white py-3 px-5" to="/programas">Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/carousel-2-min.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Trusted for 50 Years of Impact!</h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">Rotary Youth Exchange</h1>
                  <p className="mb-5 fs-5">Partner D4510! 50 years program excellence, 130+ years team expertise. Offer students a transformative leadership experience in Brazil.</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <Link className="btn-hover-bg btn btn-primary text-white py-3 px-5" to="/programas">Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/carousel-3-min.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Global Excellence, Built on Experience!</h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">Rotary Youth Exchange</h1>
                  <p className="mb-5 fs-5">Ensure your students experience a life-redefining year with District 4510! Our transformative program is the compass for their unparalleled personal growth.</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <Link className="btn-hover-bg btn btn-primary text-white py-3 px-5" to="/programas">Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselEn" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselEn" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* YEP 4510 Start */}
      <div className="container-fluid donation section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 mb-4">
              <div className="donation-item h-100">
                <img src="/img/yep4510-1.png" className="img-fluid w-100" alt="District 4510 Map" />
                <div className="donation-content d-flex flex-column">
                  <h5 className="text-uppercase text-primary mb-4">Excellence and Credibility</h5>
                  <span className="display-6 text-white fw-bold mb-2">Youth Exchange</span>
                  <h4 className="text-white mb-4">in District 4510</h4>
                  <p className="text-white mb-4">Over 50 years, Rotary District 4510's Exchange Program has built global partnerships rooted in trust and friendship, forging bonds with districts worldwide. These strong relationships enable us to offer an unprecedented diversity and volume of exchange opportunities, making us stand out across Brazil. Thanks to these partnerships, young people gain a unique chance to explore new cultures, learning and growing in an enriching international environment.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <div className="donation-item position-relative">
                <div className="position-absolute" style={{ top: '20px', left: '20px', zIndex: 10 }}>
                  <a className="btn-hover-bg btn btn-primary text-white py-2 px-4 shadow-sm" href="https://online.fliphtml5.com/50anosYEP4510/kbat/#p=1" target="_blank" rel="noreferrer">Click to read!</a>
                </div>
                <img src="/img/yep4510-2.png" className="img-fluid w-100" alt="Legacy" />
                <div className="donation-content d-flex flex-column">
                  <h5 className="text-uppercase text-primary mb-4">Experience and Tradition</h5>
                  <span className="display-6 text-white fw-bold mb-2">RYE D4510 Legacy:</span>
                  <h4 className="text-white mb-4">50 Years of Youth Exchange</h4>
                  <p className="text-white mb-4">With deep joy and historical responsibility, we proudly present this book: "The Living Memory of YEP 4510: 50 Years of Youth Exchange." It celebrates a journey not merely institutional, but profoundly human—built on encounters, learning, and transformations transcending borders, cultures, and generations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Causes Start */}
      <div className="container-fluid causes section-padding">
        <div className="container">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Some of Our Key Strengths</h5>
            <p className="mb-0">Empower your students with cultural immersion & dedicated support. We ensure a transformative, accessible global experience. Their future starts here!</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="causes-item h-100 d-flex flex-column">
                <div className="causes-img">
                  <img src="/img/causes-4.jpg" className="img-fluid w-100" alt="Educational Journey" />
                </div>
                <div className="causes-content p-4 flex-grow-1">
                  <h4 className="mb-3">An Educational Journey</h4>
                  <p className="mb-4">At Rotary D4510, exchange is a profound educational journey. Students dive into São Paulo's vibrant culture & diverse economy, gaining insights far beyond textbooks. We craft a unique learning environment, shaping future leaders with global perspectives.</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-3 mt-auto" to="/contato">Contact us</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="causes-item h-100 d-flex flex-column">
                <div className="causes-img">
                  <img src="/img/keys-2.png" className="img-fluid w-100" alt="Dedicated Support" />
                </div>
                <div className="causes-content p-4 flex-grow-1">
                  <h4 className="mb-3">A Dedicated Support</h4>
                  <p className="mb-4">We offer unparalleled peace of mind for partners and students. D4510 provides clear guidance and dedicated support, fostering a stress-free, enriching experience. Our district prioritizes student well-being, delivering active, responsive care.</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4 mt-auto" to="/contato">Contact us</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="causes-item h-100 d-flex flex-column">
                <div className="causes-img">
                  <img src="/img/keys-3.png" className="img-fluid w-100" alt="Immersive Experience" />
                </div>
                <div className="causes-content p-4 flex-grow-1">
                  <h4 className="mb-3">An Immersive Experience</h4>
                  <p className="mb-4">Our immersive program challenges students, expanding their horizons and forging skills that resonate globally. Beyond their stay, they gain invaluable insights. Gift your students an extraordinary educational adventure that shapes their future.</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4 mt-auto" to="/contato">Contact us</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="causes-item h-100 d-flex flex-column">
                <div className="causes-img">
                  <img src="/img/keys-4.png" className="img-fluid w-100" alt="Shared Mission" />
                </div>
                <div className="causes-content p-4 flex-grow-1">
                  <h4 className="mb-3">A Shared Mission</h4>
                  <p className="mb-4">Student success is our collective mission at D4510. Our RYE Committee and welcoming host families pledge unwavering support, ensuring each student's well-being and personal growth. We are dedicated partners in fostering leaders.</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4 mt-auto" to="/contato">Contact us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Start */}
      <div className="container-fluid about section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-xl-5">
              <img src="/img/about-1.jpg" className="img-fluid w-100 rounded" alt="Leadership Academy" />
            </div>
            <div className="col-xl-7">
              <h5 className="text-uppercase text-primary">Only good reasons</h5>
              <h1 className="mb-4">Transforming Young People into Leaders:<br />The Rotary Leadership Academy</h1>
              <p className="fs-5 mb-4">When your district consider the future of your students, you seek opportunities that catalyze personal, academic, and professional growth. Rotary District 4510's Exchange Program offers precisely that: a leadership academy that prepares young people to become global citizens and competent leaders.</p>
              <p className="fs-5 mb-4">To maximize their preparation, students first complete <strong>online pre-arrival orientations</strong>. This strategic approach allows our <strong>in-person trainings</strong> to focus intensely on collaboration: we co-create individual exchange plans with your students, prompting deep reflection on their purpose within our district.</p>
              <p className="fs-5 mb-4">During the exchange, your students will live a unique learning experience, immersed in a new culture and language, which stimulates self-confidence and adaptability. Upon their return, continued involvement with Rotary's youth programs solidifies this transformation, reinforcing their position as influential leaders in their communities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Start */}
      <div className="container-fluid counter section-padding" style={{ background: 'linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url(/img/volunteers-bg.jpg) center center', backgroundSize: 'cover' }}>
        <div className="container">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">We Are Awesome At Our Work</h5>
            <p className="text-white mb-0">Our exchange program boasts impressive success rates, with countless transformative experiences and global connections established.</p>
          </div>
          <div className="row g-4 text-center">
            <div className="col-md-6 col-lg-3">
              <div className="counter-item border p-5 h-100">
                <i className="fas fa-thumbs-up fa-4x text-white"></i>
                <h3 className="text-white my-4">Years of Experience</h3>
                <div className="counter-counting">
                  <span className="text-primary fs-2 fw-bold">50</span>
                  <span className="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="counter-item border p-5 h-100">
                <i className="fas fa-user fa-4x text-white"></i>
                <h3 className="text-white my-4">Students every year</h3>
                <div className="counter-counting">
                  <span className="text-primary fs-2 fw-bold">100</span>
                  <span className="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="counter-item border p-5 h-100">
                <i className="fas fa-users fa-4x text-white"></i>
                <h3 className="text-white my-4">Students along 50 years</h3>
                <div className="counter-counting">
                  <span className="text-primary fs-2 fw-bold">5000</span>
                  <span className="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="counter-item border p-5 h-100">
                <i className="fas fa-heart fa-4x text-white"></i>
                <h3 className="text-white my-4">Satisfaction Rate</h3>
                <div className="counter-counting">
                  <span className="text-primary fs-2 fw-bold">100</span>
                  <span className="h1 fw-bold text-primary">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Start */}
      <div className="container-fluid event section-padding">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Recent Events</h5>
            <h1 className="mb-0">See what's happening in District 4510</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="event-item h-100 d-flex flex-column">
                <img src="/img/events-1.jpg" className="img-fluid w-100" alt="Orientation" />
                <div className="event-content p-4 flex-grow-1 d-flex flex-column">
                  <div className="d-flex justify-content-between mb-4 small text-muted">
                    <span><i className="fas fa-map-marker-alt me-2"></i>Assis, SP</span>
                    <span><i className="fas fa-calendar-alt me-2"></i>Sep 13, 2025</span>
                  </div>
                  <h4 className="mb-4">1st Orientation Meeting</h4>
                  <p className="mb-4 flex-grow-1">Standardizing information regarding the selection process. A crucial moment of alignment and transparency.</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4 mt-auto" to="/eventos">Learn more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="event-item h-100 d-flex flex-column">
                <img src="/img/events-2.jpg" className="img-fluid w-100" alt="Institute" />
                <div className="event-content p-4 flex-grow-1 d-flex flex-column">
                  <div className="d-flex justify-content-between mb-4 small text-muted">
                    <span><i className="fas fa-map-marker-alt me-2"></i>Maringá, PR</span>
                    <span><i className="fas fa-calendar-alt me-2"></i>Sep 04, 2025</span>
                  </div>
                  <h4 className="mb-4">District 4510 at the 48th Rotary Institute</h4>
                  <p className="mb-4 flex-grow-1">José Ronan, ABIJ President and D4510 YEP Committee member, was the main highlight, inspiring with his vision for the future.</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4 mt-auto" to="/eventos">Learn more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="event-item h-100 d-flex flex-column">
                <img src="/img/events-3.jpg" className="img-fluid w-100" alt="Conference" />
                <div className="event-content p-4 flex-grow-1 d-flex flex-column">
                  <div className="d-flex justify-content-between mb-4 small text-muted">
                    <span><i className="fas fa-map-marker-alt me-2"></i>Paraguaçu, SP</span>
                    <span><i className="fas fa-calendar-alt me-2"></i>Aug 26, 2025</span>
                  </div>
                  <h4 className="mb-4">District Youth Exchange Conference</h4>
                  <p className="mb-4 flex-grow-1">Gathering about 70 exchange students from different countries for cultural exchange and friendship.</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4 mt-auto" to="/eventos">Learn more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="event-item h-100 d-flex flex-column">
                <img src="/img/events-4.jpg" className="img-fluid w-100" alt="Trip" />
                <div className="event-content p-4 flex-grow-1 d-flex flex-column">
                  <div className="d-flex justify-content-between mb-4 small text-muted">
                    <span><i className="fas fa-map-marker-alt me-2"></i>Foz do Iguaçu, PR</span>
                    <span><i className="fas fa-calendar-alt me-2"></i>Sep 23, 2025</span>
                  </div>
                  <h4 className="mb-4">Inbounds Trip to Foz do Iguaçu</h4>
                  <p className="mb-4 flex-grow-1">Experiencing the grandeur of Foz do Iguaçu, a trip carefully planned for cultural enrichment.</p>
                  <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4 mt-auto" to="/eventos">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeEnPage;
