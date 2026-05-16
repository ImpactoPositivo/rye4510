import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Save, X, Eye, FileText, Image as ImageIcon } from 'lucide-react';

const AdminBlogEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    image_url: '',
    category: 'Geral',
    published: false,
  });

  useEffect(() => {
    if (id) {
      fetchPost(id);
    }
  }, [id]);

  const fetchPost = async (postId: string) => {
    const { data, error } = await supabase.from('posts').select('*').eq('id', postId).single();
    if (data) setPost(data);
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove accents
      .replace(/[^\w ]+/g, '') // remove non-alphanumeric
      .replace(/ +/g, '-'); // replace spaces with -
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
    const user = (await supabase.auth.getUser()).data.user;
    
    const postData = {
      ...post,
      author_id: user?.id,
      updated_at: new Date().toISOString(),
      published_at: post.published ? (post.published_at || new Date().toISOString()) : null,
    };

    let error;
    if (id) {
      const { error: err } = await supabase.from('posts').update(postData).eq('id', id);
      error = err;
    } else {
      const { error: err } = await supabase.from('posts').insert([postData]);
      error = err;
    }

    if (!error) {
      navigate('/admin/blog');
    } else {
      alert('Erro ao salvar artigo: ' + error.message);
    }
    setLoading(false);
  };

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <div className="admin-blog-editor">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="fw-bold mb-0">{id ? 'Editar Artigo' : 'Novo Artigo'}</h2>
        <div className="d-flex gap-2">
          <button onClick={() => navigate('/admin/blog')} className="btn btn-light rounded-pill px-4 border">
            <X size={18} className="me-2" /> Cancelar
          </button>
          <button onClick={handleSave} disabled={loading} className="btn btn-primary rounded-pill px-4 shadow-sm">
            {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : <Save size={18} className="me-2" />}
            Salvar Artigo
          </button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <div className="mb-4">
              <label className="form-label fw-bold small text-uppercase">Título do Artigo</label>
              <input
                type="text"
                className="form-control form-control-lg bg-light border-0"
                placeholder="Ex: Minha experiência no intercâmbio..."
                value={post.title}
                onChange={handleTitleChange}
              />
            </div>
            
            <div className="mb-4">
              <label className="form-label fw-bold small text-uppercase">Conteúdo Profissional</label>
              <div className="quill-container bg-white border rounded-3 overflow-hidden">
                <ReactQuill
                  theme="snow"
                  value={post.content}
                  onChange={(content) => setPost(prev => ({ ...prev, content }))}
                  modules={quillModules}
                  style={{ height: '400px', border: 'none' }}
                />
              </div>
            </div>
            
            <div className="mt-5">
              <label className="form-label fw-bold small text-uppercase">Resumo (Opcional)</label>
              <textarea
                className="form-control bg-light border-0"
                rows={3}
                placeholder="Breve descrição que aparece na listagem do blog..."
                value={post.excerpt}
                onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <h6 className="fw-bold mb-4">Configurações</h6>
            
            <div className="mb-4">
              <label className="form-label fw-bold small text-uppercase">Status de Publicação</label>
              <div className="form-check form-switch p-3 bg-light rounded-3">
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
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold small text-uppercase">URL Amigável (Slug)</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-0 small">/</span>
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  value={post.slug}
                  onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold small text-uppercase">Imagem de Destaque (URL)</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-0"><ImageIcon size={16} /></span>
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="https://exemplo.com/imagem.jpg"
                  value={post.image_url}
                  onChange={(e) => setPost(prev => ({ ...prev, image_url: e.target.value }))}
                />
              </div>
              {post.image_url && (
                <div className="mt-3 rounded overflow-hidden border shadow-sm">
                  <img src={post.image_url} alt="Preview" className="w-100" style={{ maxHeight: '150px', objectFit: 'cover' }} />
                </div>
              )}
            </div>

            <div className="mb-0">
              <label className="form-label fw-bold small text-uppercase">Categoria</label>
              <select
                className="form-select bg-light border-0"
                value={post.category}
                onChange={(e) => setPost(prev => ({ ...prev, category: e.target.value }))}
              >
                <option value="Geral">Geral</option>
                <option value="Histórias">Histórias</option>
                <option value="Dicas">Dicas</option>
                <option value="Eventos">Eventos</option>
              </select>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-info-subtle text-info border border-info-subtle">
            <div className="d-flex gap-3 align-items-center">
              <Eye size={24} />
              <div>
                <h6 className="fw-bold mb-1">Dica Profissional</h6>
                <p className="small mb-0">Use cabeçalhos (H1, H2) e listas para melhorar a legibilidade dos seus artigos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .ql-container { font-family: inherit; font-size: 16px; min-height: 300px; }
        .ql-toolbar { border: none !important; border-bottom: 1px solid #eee !important; padding: 12px !important; }
        .ql-editor { min-height: 350px; }
      `}</style>
    </div>
  );
};

export default AdminBlogEditor;
