import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Loader2 } from 'lucide-react';

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

  return (
    <div className="blog-post-detail">
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Artigo</h3>
          <p className="fs-5 text-white mb-4">{post.title}</p>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><a href="#">Mais</a></li>
            <li className="breadcrumb-item active text-white">Blog</li>
          </ol>    
        </div>
      </div>
      {/* Header End */}

      {/* Artigo Start */}
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5">
            <article className="col-xl-8 ali-text">
              {post.section1_subtitle && (
                <h5 className="text-uppercase text-primary">{post.section1_subtitle}:</h5>
              )}
              <div dangerouslySetInnerHTML={{ __html: post.section1_content || post.content }} />
            </article>
          </div>
        </div>
      </div>

      {post.image_url && (
        <div className="container col-xl-8 article-pic">
          {post.media_type === 'video' ? (
             <div className="ratio ratio-16x9 mb-3">
               <iframe src={post.image_url} title="Video" allowFullScreen></iframe>
             </div>
          ) : (
            <img src={post.image_url} alt={post.title} className="img-fluid rounded shadow-sm" />
          )}
        </div>
      )}

      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5">
            <article className="col-xl-8 ali-text">
              {/* Section 2 */}
              {post.section2_subtitle && <h1 className="mb-2 article-topico"><strong>{post.section2_subtitle}</strong></h1>}
              {post.section2_content && <div className="mb-4" dangerouslySetInnerHTML={{ __html: post.section2_content }} />}

              {/* Section 3 */}
              {post.section3_subtitle && <h1 className="mb-2 article-topico"><strong>{post.section3_subtitle}</strong></h1>}
              {post.section3_content && <div className="mb-4" dangerouslySetInnerHTML={{ __html: post.section3_content }} />}

              {/* Section 4 */}
              {post.section4_subtitle && <h1 className="mb-2 article-topico"><strong>{post.section4_subtitle}</strong></h1>}
              {post.section4_content && <div className="mb-4" dangerouslySetInnerHTML={{ __html: post.section4_content }} />}

              <Link className="btn-hover-bg btn btn-primary btn-article col-xl-8 text-white py-2 px-4 mt-5" to="/blog">
                Voltar ao blog
              </Link>
            </article>
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
        .article-topico { text-align: left !important; font-size: 1.2rem; font-family: Arial, Helvetica, sans-serif; font-weight: bold; }
        .ali-text { text-align: justify; }
        .article-pic img { width: 100%; padding-bottom: 10px; }
        .btn-article { margin: auto; }
        article { max-width: 80%; margin: auto; }
        @media (max-width: 1200px) {
           article { max-width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default BlogPostDetail;
