import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (!error) setPosts(data || []);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center" style={{ zIndex: 99999 }}>
        <div className="spinner-grow text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Artigos & Notícias</h3>
          <p className="fs-5 text-white mb-4">Fique por dentro: encontre artigos e informações sobre educação de qualidade para seus filhos!</p>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><a href="#">Mais</a></li>
            <li className="breadcrumb-item active text-white">Blog</li>
          </ol>    
        </div>
      </div>
      {/* Header End */}

      {/* Blog Start */}
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Artigos & Notícias</h5>
            <h1 className="mb-0">Invista no futuro deles! Aqui você vê o que há de mais relevante em educação de qualidade para seus filhos</h1>
          </div>
          
          <div className="row g-4">
            {posts.length === 0 ? (
              <div className="col-12 text-center py-5">
                <h3 className="text-muted">Nenhum artigo publicado ainda.</h3>
              </div>
            ) : (
              posts.map((post) => (
                <div key={post.id} className="col-lg-6 col-xl-3">
                  <div className="blog-item h-100 d-flex flex-column">
                    <div className="blog-img">
                      <img src={post.image_url || '/img/blog-1.jpg'} className="img-fluid w-100" alt={post.title} style={{ height: '200px', objectFit: 'cover' }} />
                      <div className="blog-info">
                        <span><i className="fa fa-clock me-2"></i>{new Date(post.published_at || post.created_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
                        <div className="d-flex">
                          <span className="me-3"> 0 <i className="fa fa-heart"></i></span>
                          <span className="text-white">0 <i className="fa fa-comment"></i></span>
                        </div>
                      </div>
                      <div className="search-icon">
                        <Link to={`/blog/${post.slug}`} className="my-auto">
                          <i className="fas fa-search-plus btn-primary text-white p-3 rounded-circle"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="text-dark border p-4 flex-grow-1 d-flex flex-column">
                      <h4 className="mb-4">{post.title}</h4>
                      <p className="mb-4 small text-muted flex-grow-1">{post.briefing}</p>
                      <Link className="btn-hover-bg btn btn-primary text-white py-2 px-4 mt-auto align-self-start" to={`/blog/${post.slug}`}>
                        Leia na íntegra
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {/* Blog End */}

      <style>{`
        .bg-breadcrumb {
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/img/breadcrumb-bg.jpg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 100px 0 0 0;
        }
        .blog .blog-item { position: relative; overflow: hidden; transition: 0.5s; }
        .blog .blog-item .blog-img { position: relative; overflow: hidden; }
        .blog .blog-item .blog-img img { transition: 0.5s; }
        .blog .blog-item .blog-img:hover img { transform: scale(1.3); }
        .blog .blog-item .blog-img .blog-info {
          position: absolute; width: 100%; height: 100%; bottom: 0; left: 0; padding: 20px;
          background: rgba(0, 0, 0, .2); color: white !important; display: flex;
          align-items: end; justify-content: space-between; transition: 0.5s;
        }
        .blog .blog-item .blog-img:hover .blog-info { background: rgba(0, 0, 0, .6); }
        .blog .blog-item .blog-img .search-icon {
          position: absolute; width: 100%; height: 100%; top: 0; left: 0;
          display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.5s;
        }
        .blog .blog-item .blog-img:hover .search-icon { opacity: 1; }
        .btn-hover-bg:hover { background: var(--bs-secondary) !important; color: var(--bs-primary) !important; }
      `}</style>
    </div>
  );
};

export default BlogPage;
