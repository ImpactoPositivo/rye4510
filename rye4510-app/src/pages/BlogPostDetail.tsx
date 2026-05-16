import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

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
      <div className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center" style={{ zIndex: 99999 }}>
        <div className="spinner-grow text-primary" role="status"></div>
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

  const renderSection = (num: number) => {
    const subtitle = post[`section${num}_subtitle`];
    const content = post[`section${num}_content`];
    
    if (!subtitle && !content) return null;

    return (
      <div key={num} className="mb-5">
        {subtitle && <h1 className="mb-2 article-topico"><strong>{subtitle}</strong></h1>}
        {content && <div className="ali-text" dangerouslySetInnerHTML={{ __html: content }} />}
      </div>
    );
  };

  return (
    <div className="blog-post-detail">
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Artigo</h3>
          <p className="fs-5 text-white mb-4">{post.title}</p>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
            <li className="breadcrumb-item active text-white">Leitura</li>
          </ol>    
        </div>
      </div>
      {/* Header End */}

      {/* Artigo Start */}
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              
              {/* Seção 1 */}
              <div className="mb-4">
                {post.section1_subtitle && (
                  <h5 className="text-uppercase text-primary">{post.section1_subtitle}:</h5>
                )}
                <div className="ali-text" dangerouslySetInnerHTML={{ __html: post.section1_content || post.content }} />
              </div>

              {/* Mídia Central */}
              {post.image_url && (
                <div className="article-pic my-5 text-center">
                  {post.media_type === 'video' ? (
                    <div className="ratio ratio-16x9 mb-3 shadow-sm rounded overflow-hidden">
                      <iframe src={post.image_url} title="Video" allowFullScreen></iframe>
                    </div>
                  ) : (
                    <div className="d-inline-block shadow-lg rounded overflow-hidden" style={{ maxWidth: '100%' }}>
                      <img 
                        src={post.image_url} 
                        alt={post.title} 
                        className="img-fluid" 
                        style={{ maxHeight: '800px', objectFit: 'contain' }} 
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Seções 2 a 7 */}
              {[2, 3, 4, 5, 6, 7].map(n => renderSection(n))}

              {/* Botão de Retorno */}
              <div className="text-center mt-5 pt-5 border-top">
                <Link className="btn-hover-bg btn btn-primary text-white py-3 px-5 rounded-pill shadow-lg fw-bold" to="/blog">
                  <i className="fas fa-th me-2"></i> Retornar ao Mosaico de Artigos
                </Link>
                <div className="mt-3">
                  <Link to="/" className="text-muted small text-decoration-none hover-primary">
                    Ir para a Página Inicial
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Artigo End */}

      <style>{`
        .bg-breadcrumb {
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/img/breadcrumb-bg.jpg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 100px 0 0 0;
        }
        .article-topico { text-align: left !important; font-size: 1.5rem; font-family: Arial, Helvetica, sans-serif; color: var(--bs-primary); margin-top: 2rem; }
        .ali-text { text-align: justify; line-height: 1.8; font-size: 1.1rem; color: #444; }
        .article-pic img { border: 5px solid #fff; }
        .hover-primary:hover { color: var(--bs-primary) !important; text-decoration: underline !important; }
        
        @media (max-width: 768px) {
          .ali-text { font-size: 1rem; }
          .article-topico { font-size: 1.3rem; }
        }
      `}</style>
    </div>
  );
};

export default BlogPostDetail;
