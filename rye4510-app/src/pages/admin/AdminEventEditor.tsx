import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Save, X, Calendar, MapPin, Type, FileText, Upload, Loader2, Image as ImageIcon } from 'lucide-react';

const AdminEventEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [event, setEvent] = useState({
    title: '',
    location: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    image_url: '',
  });

  useEffect(() => {
    if (id) fetchEvent(id);
  }, [id]);

  const fetchEvent = async (eventId: string) => {
    const { data, error } = await supabase.from('events').select('*').eq('id', eventId).single();
    if (data) setEvent(data);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `events/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog')
        .getPublicUrl(filePath);

      setEvent(prev => ({ ...prev, image_url: publicUrl }));
    } catch (err: any) {
      alert('Erro ao subir foto: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (event.description.length > 345) {
      alert('A descrição não pode exceder 345 caracteres.');
      return;
    }

    setLoading(true);
    try {
      let error;
      if (id) {
        const { error: err } = await supabase.from('events').update(event).eq('id', id);
        error = err;
      } else {
        const { error: err } = await supabase.from('events').insert([event]);
        error = err;
      }

      if (!error) navigate('/admin/events');
      else alert('Erro: ' + error.message);
    } catch (err: any) {
      alert('Erro: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-event-editor bg-light p-3 rounded-4">
      <div className="d-flex align-items-center justify-content-between mb-4 sticky-top bg-light py-3 border-bottom" style={{ zIndex: 100 }}>
        <h2 className="fw-bold mb-0 d-flex align-items-center">
          <Calendar size={28} className="me-3 text-primary" />
          {id ? 'Editar Evento' : 'Novo Evento Recente'}
        </h2>
        <div className="d-flex gap-2">
          <button onClick={() => navigate('/admin/events')} className="btn btn-white border rounded-pill px-4 shadow-sm">
            <X size={18} className="me-2" /> Cancelar
          </button>
          <button onClick={handleSave} disabled={loading || uploading} className="btn btn-primary rounded-pill px-4 shadow-sm">
            {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : <Save size={18} className="me-2" />}
            Salvar Evento
          </button>
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <div className="mb-4">
              <label className="form-label fw-bold small text-uppercase text-muted">Título do Evento</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-0"><Type size={18} /></span>
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Ex: Reunião de Treinamento 2024"
                  value={event.title}
                  onChange={(e) => setEvent(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label fw-bold small text-uppercase text-muted">Local</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0"><MapPin size={18} /></span>
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="Ex: Marília, SP"
                    value={event.location}
                    onChange={(e) => setEvent(prev => ({ ...prev, location: e.target.value }))}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small text-uppercase text-muted">Data</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0"><Calendar size={18} /></span>
                  <input
                    type="date"
                    className="form-control bg-light border-0"
                    value={event.date}
                    onChange={(e) => setEvent(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="form-label fw-bold small text-uppercase text-muted mb-0">Descrição Curta</label>
                <span className={`small ${event.description.length > 345 ? 'text-danger fw-bold' : 'text-muted'}`}>
                  {event.description.length} / 345
                </span>
              </div>
              <textarea
                className="form-control bg-light border-0"
                rows={5}
                placeholder="Escreva um breve texto sobre o evento..."
                value={event.description}
                onChange={(e) => setEvent(prev => ({ ...prev, description: e.target.value }))}
              ></textarea>
            </div>

            <div className="mb-0">
              <label className="form-label fw-bold small text-uppercase text-muted">Foto do Evento</label>
              <div className="d-flex gap-3">
                <div className="bg-light rounded-4 d-flex align-items-center justify-content-center overflow-hidden" style={{ width: '120px', height: '120px', minWidth: '120px' }}>
                  {event.image_url ? (
                    <img src={event.image_url} alt="Preview" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  ) : (
                    <ImageIcon size={32} className="text-muted opacity-25" />
                  )}
                </div>
                <div className="flex-grow-1 d-flex flex-column justify-content-center">
                  <p className="small text-muted mb-3">Suba uma foto representativa para este evento. Recomendado: 800x600px.</p>
                  <button 
                    type="button"
                    className="btn btn-outline-primary rounded-pill px-4"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                  >
                    {uploading ? <Loader2 size={18} className="animate-spin me-2" /> : <Upload size={18} className="me-2" />}
                    {event.image_url ? 'Alterar Foto' : 'Selecionar Foto'}
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="d-none" 
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEventEditor;
