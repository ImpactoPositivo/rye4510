import React, { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import { ZoomIn, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

const GaleriaPage: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setPhotos(data || []);
    setLoading(false);
  };

  // Distribute photos into 3 columns for the masonry effect
  const columns: any[][] = [[], [], []];
  photos.forEach((photo, index) => {
    columns[index % 3].push(photo);
  });

  const GalleryCard = ({ item }: { item: any }) => (
    <div className="gallery-item mb-4 position-relative overflow-hidden rounded-4 shadow-sm" onClick={() => setSelectedImg(item.url)}>
      <img src={item.url} className="img-fluid w-100 transition-all" alt={item.title} />
      
      <div className="search-icon-overlay">
        <div className="bg-white rounded-circle p-3 shadow-lg">
          <ZoomIn className="text-primary" size={24} />
        </div>
      </div>

      <div className="gallery-content-overlay p-4">
        <h4 className="text-white h5 fw-bold mb-0">{item.title}</h4>
        <p className="text-white-50 small mb-0">{new Date(item.created_at).getFullYear()}</p>
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

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status"></div>
            </div>
          ) : (
            <div className="row g-4">
              {columns.map((col, idx) => (
                <div key={idx} className="col-lg-4">
                  {col.map(item => <GalleryCard key={item.id} item={item} />)}
                </div>
              ))}
              {photos.length === 0 && (
                <div className="col-12 text-center py-5">
                  <p className="text-muted">A galeria será populada em breve.</p>
                </div>
              )}
            </div>
          )}
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
        .gallery-item { cursor: pointer; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .gallery-item img { transform: scale(1); transition: 0.5s; }
        .gallery-item:hover img { transform: scale(1.1); }
        
        .search-icon-overlay {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 103, 200, 0.4); display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: all 0.3s ease; z-index: 2;
        }
        .gallery-item:hover .search-icon-overlay { opacity: 1; }

        .gallery-content-overlay {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          z-index: 3; opacity: 0; transform: translateY(20px); transition: all 0.3s ease;
        }
        .gallery-item:hover .gallery-content-overlay { opacity: 1; transform: translateY(0); }

        .gallery-lightbox {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.9); z-index: 9999; display: flex; align-items: center; justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .lightbox-content { max-width: 90%; max-height: 90%; animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .lightbox-content img { max-width: 100%; max-height: 90vh; border-radius: 8px; box-shadow: 0 0 30px rgba(0,0,0,0.5); }
        .close-btn { position: absolute; top: 30px; right: 30px; background: none; border: none; color: white; cursor: pointer; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default GaleriaPage;
