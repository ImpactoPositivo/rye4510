import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Save, X, Image as ImageIcon, Video, FileText, Type } from 'lucide-react';

const AdminBlogEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    title: '',
    slug: '',
    briefing: '',
    section1_subtitle: '',
    section1_content: '',
    section2_subtitle: '',
    section2_content: '',
    section3_subtitle: '',
    section3_content: '',
    section4_subtitle: '',
    section4_content: '',
    image_url: '',
    media_type: 'image',
    published: false,
  });

  useEffect(() => {
    if (id) fetchPost(id);
  }, [id]);

  const fetchPost = async (postId: string) => {
    const { data, error } = await supabase.from('posts').select('*').eq('id', postId).single();
    if (data) setPost(data);
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setPost(prev => ({ 
      ...prev, 
      title, 
      slug: id ? prev.slug : generateSlug(title) 
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const user = (await supabase.auth.getUser()).data.user;
      const postData = {
        ...post,
        author_id: user?.id,
        updated_at: new Date().toISOString(),
        published_at: post.published ? (new Date().toISOString()) : null,
      };

      let error;
      if (id) {
        const { error: err } = await supabase.from('posts').update(postData).eq('id', id);
        error = err;
      } else {
        const { error: err } = await supabase.from('posts').insert([postData]);
        error = err;
      }

      if (!error) navigate('/admin/blog');
      else alert('Erro: ' + error.message);
    } catch (err: any) {
      alert('Erro: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderSectionField = (num: number) => (
    <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
      <h6 className="fw-bold mb-3 text-primary">Sessão {num}</h6>
      <div className="mb-3">
        <label className="form-label small fw-bold text-uppercase text-muted">Subtítulo da Sessão {num}</label>
        <input
          type="text"
          className="form-control bg-light border-0"
          placeholder={`Ex: Cultivando a Mentalidade...`}
          value={(post as any)[`section${num}_subtitle`]}
          onChange={(e) => setPost(prev => ({ ...prev, [`section${num}_subtitle`]: e.target.value }))}
        />
      </div>
      <div>
        <label className="form-label small fw-bold text-uppercase text-muted">Conteúdo da Sessão {num}</label>
        <textarea
          className="form-control bg-light border-0"
          rows={5}
          placeholder="Escreva o texto desta sessão..."
          value={(post as any)[`section${num}_content`]}
          onChange={(e) => setPost(prev => ({ ...prev, [`section${num}_content`]: e.target.value }))}
        ></textarea>
      </div>
      {num === 1 && (
        <div className="mt-4 pt-4 border-top">
          <label className="form-label small fw-bold text-uppercase text-muted d-flex align-items-center">
            <ImageIcon size={16} className="me-2" /> Mídia da Sessão 1 (Imagem ou Vídeo)
          </label>
          <div className="row g-3">
            <div className="col-md-4">
              <select 
                className="form-select bg-light border-0"
                value={post.media_type}
                onChange={(e) => setPost(prev => ({ ...prev, media_type: e.target.value }))}
              >
                <option value="image">Imagem (URL)</option>
                <option value="video">Vídeo (YouTube/Vimeo URL)</option>
              </select>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control bg-light border-0"
                placeholder="Cole o link aqui..."
                value={post.image_url}
                onChange={(e) => setPost(prev => ({ ...prev, image_url: e.target.value }))}
              />
            </div>
          </div>
          {post.image_url && post.media_type === 'image' && (
            <div className="mt-3 rounded-3 overflow-hidden border shadow-sm" style={{ maxWidth: '300px' }}>
              <img src={post.image_url} alt="Preview" className="w-100" style={{ height: '150px', objectFit: 'cover' }} />
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="admin-blog-editor bg-light p-3 rounded-4">
      <div className="d-flex align-items-center justify-content-between mb-4 sticky-top bg-light py-3 border-bottom">
        <h2 className="fw-bold mb-0 d-flex align-items-center">
          <FileText size={28} className="me-3 text-primary" />
          {id ? 'Editar Artigo Estruturado' : 'Criar Artigo Estruturado'}
        </h2>
        <div className="d-flex gap-2">
          <button onClick={() => navigate('/admin/blog')} className="btn btn-white border rounded-pill px-4 shadow-sm">
            <X size={18} className="me-2" /> Cancelar
          </button>
          <button onClick={handleSave} disabled={loading} className="btn btn-primary rounded-pill px-4 shadow-sm">
            {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : <Save size={18} className="me-2" />}
            Publicar Profissionalmente
          </button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          {/* Header Info */}
          <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <div className="mb-4">
              <label className="form-label fw-bold small text-uppercase text-muted">Título Inspirador</label>
              <input
                type="text"
                className="form-control form-control-lg bg-light border-0 fw-bold"
                placeholder="Digite um título que chame a atenção..."
                value={post.title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="mb-0">
              <label className="form-label fw-bold small text-uppercase text-muted">Briefing (Resumo para a Mosaico)</label>
              <textarea
                className="form-control bg-light border-0"
                rows={3}
                placeholder="Breve introdução inspiradora..."
                value={post.briefing}
                onChange={(e) => setPost(prev => ({ ...prev, briefing: e.target.value }))}
              ></textarea>
            </div>
          </div>

          {/* Structured Sections */}
          {renderSectionField(1)}
          {renderSectionField(2)}
          {renderSectionField(3)}
          {renderSectionField(4)}
        </div>

        <div className="col-lg-4">
          <div className="sticky-top" style={{ top: '100px' }}>
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h6 className="fw-bold mb-4">Status & Slug</h6>
              <div className="form-check form-switch p-3 bg-light rounded-3 mb-3">
                <input
                  className="form-check-input ms-0 me-3"
                  type="checkbox"
                  id="publishSwitch"
                  checked={post.published}
                  onChange={(e) => setPost(prev => ({ ...prev, published: e.target.checked }))}
                />
                <label className="form-check-label fw-bold" htmlFor="publishSwitch">
                  {post.published ? 'Ativo no Blog' : 'Rascunho Interno'}
                </label>
              </div>
              <div className="mb-0">
                <label className="form-label fw-bold small text-uppercase text-muted">Link do Artigo</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0">/</span>
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    value={post.slug}
                    onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                  />
                </div>
              </div>
            </div>
            
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-primary text-white">
              <h6 className="fw-bold mb-3 d-flex align-items-center">
                <Type size={18} className="me-2" /> Padrão de Estilo
              </h6>
              <p className="small opacity-75 mb-0">
                Este conteúdo será exibido seguindo exatamente o layout da página <strong>artigo1.html</strong>, com as seções divididas e a mídia posicionada estrategicamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogEditor;
