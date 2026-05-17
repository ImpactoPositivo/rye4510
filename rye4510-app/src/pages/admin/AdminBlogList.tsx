import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, ExternalLink, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminBlogList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setPosts(data || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este artigo?')) {
      const { error } = await supabase.from('posts').delete().eq('id', id);
      if (!error) fetchPosts();
    }
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-blog-list">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-4 gap-3">
        <div className="position-relative" style={{ minWidth: '300px' }}>
          <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
            <Search size={18} />
          </span>
          <input
            type="text"
            className="form-control ps-5 py-2 border-0 shadow-sm rounded-pill"
            placeholder="Pesquisar artigos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Link to="/admin/blog/new" className="btn btn-primary d-flex align-items-center rounded-pill px-4 py-2 shadow-sm">
          <Plus size={20} className="me-2" /> Novo Artigo
        </Link>
      </div>

      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light">
              <tr>
                <th className="px-4 py-3 border-0 small text-uppercase fw-bold text-muted">Artigo</th>
                <th className="py-3 border-0 small text-uppercase fw-bold text-muted">Status</th>
                <th className="py-3 border-0 small text-uppercase fw-bold text-muted">Data</th>
                <th className="px-4 py-3 border-0 small text-uppercase fw-bold text-muted text-end">Ações</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="text-center py-5">
                    <div className="spinner-border text-primary" role="status"></div>
                  </td>
                </tr>
              ) : filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-5 text-muted">Nenhum artigo encontrado.</td>
                </tr>
              ) : (
                filteredPosts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-4 py-3">
                      <div className="d-flex align-items-center">
                        {post.image_url && (
                          <img src={post.image_url} alt="" className="rounded me-3" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                        )}
                        <div>
                          <div className="fw-bold">{post.title}</div>
                          <div className="text-muted small">/{post.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3">
                      {post.published ? (
                        <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3">Publicado</span>
                      ) : (
                        <span className="badge bg-warning-subtle text-warning border border-warning-subtle rounded-pill px-3">Rascunho</span>
                      )}
                    </td>
                    <td className="py-3 text-muted small">
                      {new Date(post.created_at).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-4 py-3 text-end">
                      <div className="d-flex justify-content-end gap-2">
                        <Link to={`/blog/${post.slug}`} target="_blank" className="btn btn-sm btn-light rounded-pill p-2" title="Ver Público">
                          <ExternalLink size={16} />
                        </Link>
                        <Link to={`/admin/blog/edit/${post.id}`} className="btn btn-sm btn-info-subtle text-info border-info-subtle rounded-pill p-2" title="Editar">
                          <Edit2 size={16} />
                        </Link>
                        <button onClick={() => handleDelete(post.id)} className="btn btn-sm btn-danger-subtle text-danger border-danger-subtle rounded-pill p-2" title="Excluir">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogList;
