import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { Image as ImageIcon, Upload, Trash2, Plus, Loader2, Search } from 'lucide-react';

const AdminGallery: React.FC = () => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `gallery/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog')
        .getPublicUrl(filePath);

      const { error: dbError } = await supabase
        .from('gallery')
        .insert([{ url: publicUrl, title: file.name }]);

      if (dbError) throw dbError;

      fetchPhotos();
    } catch (err: any) {
      alert('Erro ao subir foto: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string, url: string) => {
    if (!confirm('Tem certeza que deseja apagar esta foto?')) return;

    try {
      // Extract filename from URL
      const fileName = url.split('/').pop();
      if (fileName) {
        await supabase.storage.from('blog').remove([`gallery/${fileName}`]);
      }
      
      const { error } = await supabase.from('gallery').delete().eq('id', id);
      if (!error) {
        setPhotos(photos.filter(p => p.id !== id));
      }
    } catch (err: any) {
      alert('Erro ao apagar: ' + err.message);
    }
  };

  return (
    <div className="admin-gallery">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="fw-bold mb-0 d-flex align-items-center">
          <ImageIcon size={28} className="me-3 text-primary" />
          Gerenciar Galeria
        </h2>
        <button 
          className="btn btn-primary rounded-pill px-4 shadow-sm"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
        >
          {uploading ? <Loader2 size={18} className="animate-spin me-2" /> : <Plus size={18} className="me-2" />}
          Adicionar Foto
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          className="d-none" 
          accept="image/*"
          onChange={handleUpload}
        />
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : (
        <div className="row g-4">
          {photos.map((photo) => (
            <div key={photo.id} className="col-md-4 col-lg-3">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 group">
                <div className="position-relative" style={{ paddingBottom: '100%' }}>
                  <img 
                    src={photo.url} 
                    alt={photo.title} 
                    className="position-absolute w-100 h-100" 
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 p-2 opacity-0 group-hover-opacity-100 transition-all">
                    <button 
                      onClick={() => handleDelete(photo.id, photo.url)}
                      className="btn btn-danger btn-sm rounded-circle shadow"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="card-body p-2 text-center">
                  <small className="text-muted text-truncate d-block">{photo.title}</small>
                </div>
              </div>
            </div>
          ))}
          {photos.length === 0 && (
            <div className="col-12 text-center py-5">
              <div className="text-muted">
                <ImageIcon size={48} className="mb-3 opacity-25" />
                <p>Nenhuma foto na galeria ainda.</p>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        .group:hover .group-hover-opacity-100 { opacity: 1 !important; }
        .group-hover-opacity-100 { opacity: 0; }
        .transition-all { transition: all 0.3s ease; }
      `}</style>
    </div>
  );
};

export default AdminGallery;
