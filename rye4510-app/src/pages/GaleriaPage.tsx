import React from 'react';
import PageHero from '../components/PageHero';
import { Maximize2 } from 'lucide-react';

const GaleriaPage: React.FC = () => {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1528605248644-14dd04bd21c7?auto=format&fit=crop&q=80&w=800', title: 'Treinamento de Orientação' },
    { id: 2, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', title: 'Grupo LTEP 2024' },
    { id: 3, src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800', title: 'Conferência Distrital' },
    { id: 4, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800', title: 'Jantar de Despedida' },
    { id: 5, src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800', title: 'Intercâmbio na Europa' },
    { id: 6, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800', title: 'Reunião de Outbounds' },
    { id: 7, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800', title: 'Inbounds no Brasil' },
    { id: 8, src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800', title: 'Atividades Culturais' },
    { id: 9, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800', title: 'Formatura RYE' },
  ];

  return (
    <div className="galeria-page">
      <PageHero 
        title="Galeria de Fotos" 
        subtitle="Momentos inesquecíveis vividos pelos nossos intercambistas."
        breadcrumbActive="Galeria"
      />

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {images.map((img) => (
              <div key={img.id} className="col-sm-6 col-lg-4">
                <div className="card border-0 shadow-sm overflow-hidden group">
                  <div className="position-relative overflow-hidden">
                    <img src={img.src} alt={img.title} className="img-fluid transition-all group-hover:scale-110" />
                    <div className="position-absolute inset-0 bg-primary bg-opacity-40 d-flex align-items-center justify-content-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                      <Maximize2 className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <span className="fw-bold small">{img.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <button className="btn btn-outline-primary btn-lg px-5 py-3 rounded-pill fw-bold">Carregar mais fotos</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GaleriaPage;
