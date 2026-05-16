import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import PageHero from '../components/PageHero';
import { Calendar, User, ArrowLeft, Loader2 } from 'lucide-react';

const BlogPostDetail: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (!error) setPost(data);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
        <Loader2 className="animate-spin text-primary" size={48} />
        <p className="mt-3 text-muted">Carregando artigo...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-5">
        <h2>Artigo não encontrado</h2>
        <Link to="/blog" className="btn btn-primary mt-3">Voltar para o Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-detail">
      <PageHero 
        title={post.title} 
        breadcrumbActive="Artigo"
      />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Link to="/blog" className="text-decoration-none d-flex align-items-center gap-2 mb-4 text-muted hover-primary transition-all">
              <ArrowLeft size={18} /> Voltar para o Blog
            </Link>

            <article>
              {post.image_url && (
                <div className="rounded-4 overflow-hidden mb-5 shadow-lg">
                  <img src={post.image_url} alt={post.title} className="w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} />
                </div>
              )}

              <div className="d-flex gap-4 mb-4 text-muted border-bottom pb-4">
                <div className="d-flex align-items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span>{new Date(post.published_at || post.created_at).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <User size={18} className="text-primary" />
                  <span>{post.author || 'Distrito 4510'}</span>
                </div>
                <div className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 d-flex align-items-center">
                  {post.category}
                </div>
              </div>

              <div 
                className="blog-content fs-5 lh-lg text-dark"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            <div className="mt-5 pt-5 border-top">
              <div className="bg-light p-4 rounded-4 d-flex align-items-center gap-4 shadow-sm border border-white">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', flexShrink: 0 }}>
                  <User size={30} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Escrito por {post.author || 'Distrito 4510'}</h6>
                  <p className="text-muted small mb-0">Comissão de Intercâmbio de Jovens do Rotary Distrito 4510.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .blog-content img { max-width: 100%; height: auto; border-radius: 1rem; margin: 1.5rem 0; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .blog-content h1, .blog-content h2, .blog-content h3 { margin-top: 2rem; margin-bottom: 1rem; font-weight: 700; color: #333; }
        .hover-primary:hover { color: var(--bs-primary) !important; transform: translateX(-5px); }
      `}</style>
    </div>
  );
};

export default BlogPostDetail;
