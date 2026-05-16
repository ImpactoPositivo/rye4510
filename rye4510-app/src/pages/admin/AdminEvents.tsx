import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Calendar, Plus, Trash2, Edit, MapPin, Clock } from 'lucide-react';

const AdminEvents: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false });
    if (!error) setEvents(data || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Excluir este evento permanentemente?')) return;
    const { error } = await supabase.from('events').delete().eq('id', id);
    if (!error) setEvents(events.filter(e => e.id !== id));
  };

  return (
    <div className="admin-events">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="fw-bold mb-0 d-flex align-items-center">
          <Calendar size={28} className="me-3 text-primary" />
          Gerenciar Eventos Recentes
        </h2>
        <button 
          onClick={() => navigate('/admin/events/new')}
          className="btn btn-primary rounded-pill px-4 shadow-sm"
        >
          <Plus size={18} className="me-2" /> Novo Evento
        </button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : (
        <div className="row g-4">
          {events.map((event) => (
            <div key={event.id} className="col-12">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img 
                      src={event.image_url || '/img/event-1.jpg'} 
                      alt={event.title} 
                      className="w-100 h-100" 
                      style={{ objectFit: 'cover', minHeight: '120px' }}
                    />
                  </div>
                  <div className="col-md-7 p-4">
                    <h5 className="fw-bold mb-2">{event.title}</h5>
                    <div className="d-flex gap-3 text-muted small mb-2">
                      <span className="d-flex align-items-center"><MapPin size={14} className="me-1" /> {event.location}</span>
                      <span className="d-flex align-items-center"><Clock size={14} className="me-1" /> {new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-muted small mb-0 text-truncate" style={{ maxWidth: '100%' }}>{event.description}</p>
                  </div>
                  <div className="col-md-3 p-4 d-flex align-items-center justify-content-md-end gap-2">
                    <button 
                      onClick={() => navigate(`/admin/events/edit/${event.id}`)}
                      className="btn btn-light rounded-pill px-3 shadow-sm"
                    >
                      <Edit size={16} className="me-2" /> Editar
                    </button>
                    <button 
                      onClick={() => handleDelete(event.id)}
                      className="btn btn-outline-danger rounded-pill px-3"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {events.length === 0 && (
            <div className="text-center py-5 bg-white rounded-4 shadow-sm">
              <Calendar size={48} className="text-muted mb-3 opacity-25" />
              <p className="text-muted">Nenhum evento cadastrado.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
