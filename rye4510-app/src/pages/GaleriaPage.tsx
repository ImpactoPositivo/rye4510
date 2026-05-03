import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { ZoomIn, X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: '/img/gallery-1.jpg',
    title: 'Outbound 2025-26',
    year: '2025',
    col: 'center'
  },
  {
    id: 2,
    src: '/img/gallery-2.jpg',
    title: 'Welcome Orientation',
    year: '2025',
    col: 'left'
  },
  {
    id: 3,
    src: '/img/gallery-3.jpg',
    title: 'Candidatos 2026-27',
    year: '2025',
    col: 'left'
  },
  {
    id: 4,
    src: '/img/gallery-4.jpg',
    title: 'Estudantes Inbounds',
    year: '2025',
    col: 'right'
  },
  {
    id: 5,
    src: '/img/gallery-5.jpg',
    title: 'Famílias e candidatos',
    year: '2025',
    col: 'right'
  }
];

const GaleriaPage: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const leftCol = galleryItems.filter(item => item.col === 'left');
  const centerCol = galleryItems.filter(item => item.col === 'center');
  const rightCol = galleryItems.filter(item => item.col === 'right');

  const GalleryCard = ({ item }: { item: typeof galleryItems[0] }) => (
    <div className="gallery-item mb-4 position-relative overflow-hidden rounded-4 shadow-sm" onClick={() => setSelectedImg(item.src)}>
      <img src={item.src} className="img-fluid w-100 transition-all" alt={item.title} />
      
      <div className="search-icon-overlay">
        <div className="bg-white rounded-circle p-3 shadow-lg">
          <ZoomIn className="text-primary" size={24} />
        </div>
      </div>

      <div className="gallery-content-overlay p-4">
        <h4 className="text-white h5 fw-bold mb-0">{item.title}</h4>
        <p className="text-white-50 small mb-0">{item.year}</p>
      </div>
    </div>
  );

  return (
    <div className="galeria-page">
      <PageHero 
        title="Galeria de Imagens" 
        subtitle="Explore os sorrisos e as aventuras do RYE4510 em nossa galeria de imagens!"
        breadcrumbActive="Galeria"
      />

      <section className="section py-5 my-5">
        <div className="container">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary fw-bold mb-3">Nossa Visão</h5>
            <h2 className="display-5 fw-bold mb-4">Intercâmbio de Jovens do Rotary: uma Academia de Liderança</h2>
            <p className="lead text-muted">Para jovens do ensino médio, a jornada do Intercâmbio é uma autêntica escola de Liderança. Desde a seleção ao retorno, cultiva soft skills essenciais, preenchendo a lacuna de desenvolvimento que o ensino regular não oferece. Prepare-se para ser um líder global, pronto para o futuro!</p>
          </div>

          <div className="row g-4">
            {/* Coluna Esquerda */}
            <div className="col-lg-4">
              {leftCol.map(item => <GalleryCard key={item.id} item={item} />)}
            </div>
            
            {/* Coluna Central */}
            <div className="col-lg-4">
              {centerCol.map(item => <GalleryCard key={item.id} item={item} />)}
            </div>
            
            {/* Coluna Direita */}
            <div className="col-lg-4">
              {rightCol.map(item => <GalleryCard key={item.id} item={item} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="gallery-lightbox" onClick={() => setSelectedImg(null)}>
          <button className="close-btn" onClick={() => setSelectedImg(null)}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImg} alt="Gallery Zoom" />
          </div>
        </div>
      )}

      <style>{`
        .gallery-item {
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .gallery-item img {
          transform: scale(1);
        }
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        
        .search-icon-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 103, 200, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 2;
        }
        .gallery-item:hover .search-icon-overlay {
          opacity: 1;
        }

        .gallery-content-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          z-index: 3;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }
        .gallery-item:hover .gallery-content-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        /* Lightbox Styles */
        .gallery-lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.9);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .lightbox-content {
          max-width: 90%;
          max-height: 90%;
          animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .lightbox-content img {
          max-width: 100%;
          max-height: 90vh;
          border-radius: 8px;
          box-shadow: 0 0 30px rgba(0,0,0,0.5);
        }
        .close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .close-btn:hover {
          transform: scale(1.2);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default GaleriaPage;
