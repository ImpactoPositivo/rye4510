import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Save, X, Image as ImageIcon, Video, FileText, Type, Upload, Loader2 } from 'lucide-react';

const AdminBlogEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
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
    section5_subtitle: '',
    section5_content: '',
    section6_subtitle: '',
    section6_content: '',
    section7_subtitle: '',
    section7_content: '',
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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from('blog') // Bucket name
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog')
        .getPublicUrl(filePath);

      setPost(prev => ({ ...prev, image_url: publicUrl, media_type: 'image' }));
    } catch (error: any) {
      alert('Erro ao subir imagem: ' + error.message + '\nCertifique-se de que o bucket "blog" existe e é público no Supabase.');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const user = (await supabase.auth.getUser()).data.user;
      const postData = {
        ...post,
        author_id: user?.id,
        updated_at: new Date().toISOString(),
        published_at: post.published ? (new Date().toISOString()) : (post as any).published_at,
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
    <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white border-start border-primary border-4">
      <h6 className="fw-bold mb-3 text-primary d-flex align-items-center">
        <span className="badge bg-primary rounded-circle me-2" style={{ width: '24px', height: '24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{num}</span>
        Sessão {num}
      </h6>
      <div className="mb-3">
        <label className="form-label small fw-bold text-uppercase text-muted">Subtítulo da Sessão {num}</label>
        <input
          type="text"
          className="form-control bg-light border-0"
          placeholder={`Ex: O impacto no Distrito 4510...`}
          value={(post as any)[`section${num}_subtitle`]}
          onChange={(e) => setPost(prev => ({ ...prev, [`section${num}_subtitle`]: e.target.value }))}
        />
      </div>
      <div>
        <label className="form-label small fw-bold text-uppercase text-muted">Conteúdo da Sessão {num}</label>
        <textarea
          className="form-control bg-light border-0"
          rows={5}
          placeholder="Escreva o texto desta seção..."
          value={(post as any)[`section${num}_content`]}
          onChange={(e) => setPost(prev => ({ ...prev, [`section${num}_content`]: e.target.value }))}
        ></textarea>
      </div>
      
      {num === 1 && (
        <div className="mt-4 pt-4 border-top">
          <label className="form-label small fw-bold text-uppercase text-muted d-flex align-items-center">
            <ImageIcon size={16} className="me-2" /> Mídia da Sessão 1 (Abaixo do conteúdo 1)
          </label>
          <div className="row g-3">
            <div className="col-md-4">
              <select 
                className="form-select bg-light border-0"
                value={post.media_type}
                onChange={(e) => setPost(prev => ({ ...prev, media_type: e.target.value }))}
              >
                <option value="image">Imagem (Upload)</option>
                <option value="video">Vídeo (YouTube Link)</option>
              </select>
            </div>
            <div className="col-md-8">
              {post.media_type === 'image' ? (
                <div className="d-flex gap-2">
                  <input
                    type="text"
                    className="form-control bg-light border-0 flex-grow-1"
                    placeholder="URL da imagem..."
                    value={post.image_url}
                    onChange={(e) => setPost(prev => ({ ...prev, image_url: e.target.value }))}
                  />
                  <button 
                    type="button"
                    className="btn btn-primary px-3 rounded-3"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                  >
                    {uploading ? <Loader2 size={18} className="animate-spin" /> : <Upload size={18} />}
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="d-none" 
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                </div>
              ) : (
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Cole o link do YouTube aqui..."
                  value={post.image_url}
                  onChange={(e) => setPost(prev => ({ ...prev, image_url: e.target.value }))}
                />
              )}
            </div>
          </div>
          {post.image_url && post.media_type === 'image' && (
            <div className="mt-3 rounded-3 overflow-hidden border shadow-sm" style={{ maxWidth: '300px' }}>
              <img src={post.image_url} alt="Preview" className="w-100" style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
              <div className="p-2 bg-dark text-white text-center small">Preview (1080x1080)</div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="admin-blog-editor bg-light p-3 rounded-4">
      <div className="d-flex align-items-center justify-content-between mb-4 sticky-top bg-light py-3 border-bottom" style={{ zIndex: 100 }}>
        <h2 className="fw-bold mb-0 d-flex align-items-center">
          <FileText size={28} className="me-3 text-primary" />
          {id ? 'Editar Artigo (7 Seções)' : 'Criar Artigo (7 Seções)'}
        </h2>
        <div className="d-flex gap-2">
          <button onClick={() => navigate('/admin/blog')} className="btn btn-white border rounded-pill px-4 shadow-sm">
            <X size={18} className="me-2" /> Cancelar
          </button>
          <button onClick={handleSave} disabled={loading || uploading} className="btn btn-primary rounded-pill px-4 shadow-sm">
            {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : <Save size={18} className="me-2" />}
            Publicar Artigo Completo
          </button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          {/* Header Info */}
          <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <div className="mb-4">
              <label className="form-label fw-bold small text-uppercase text-muted">Título do Artigo</label>
              <input
                type="text"
                className="form-control form-control-lg bg-light border-0 fw-bold"
                placeholder="Ex: Novos Caminhos no Intercâmbio 2024"
                value={post.title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="mb-0">
              <label className="form-label fw-bold small text-uppercase text-muted">Briefing (Para o Mosaico)</label>
              <textarea
                className="form-control bg-light border-0"
                rows={3}
                placeholder="Breve resumo que aparecerá na listagem do blog..."
                value={post.briefing}
                onChange={(e) => setPost(prev => ({ ...prev, briefing: e.target.value }))}
              ></textarea>
            </div>
          </div>

          {/* Structured Sections */}
          {[1, 2, 3, 4, 5, 6, 7].map(n => renderSectionField(n))}
        </div>

        <div className="col-lg-4">
          <div className="sticky-top" style={{ top: '100px' }}>
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h6 className="fw-bold mb-4">Configurações</h6>
              <div className="form-check form-switch p-3 bg-light rounded-3 mb-3">
                <input
                  className="form-check-input ms-0 me-3"
                  type="checkbox"
                  id="publishSwitch"
                  checked={post.published}
                  onChange={(e) => setPost(prev => ({ ...prev, published: e.target.checked }))}
                />
                <label className="form-check-label fw-bold" htmlFor="publishSwitch">
                  {post.published ? 'Publicado' : 'Rascunho'}
                </label>
              </div>
              <div className="mb-0">
                <label className="form-label fw-bold small text-uppercase text-muted">URL amigável (Slug)</label>
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
                <Type size={18} className="me-2" /> Dica Visual
              </h6>
              <p className="small opacity-75 mb-0">
                Ao subir fotos 1080x1080, o sistema garantirá que elas fiquem centralizadas e com alta qualidade, seguindo o padrão de design do Distrito 4510.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogEditor;
