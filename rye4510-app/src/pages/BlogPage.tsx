import React from 'react';
import PageHero from '../components/PageHero';
import { Calendar, User, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
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

  return (
    <div className="blog-page">
      <PageHero 
        title="Blog & Notícias" 
        subtitle="Acompanhe as últimas novidades, relatos e dicas sobre o intercâmbio."
        breadcrumbActive="Blog"
      />

      <section className="section">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <Loader2 className="animate-spin text-primary mx-auto" size={48} />
              <p className="mt-3 text-muted">Carregando artigos...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-5">
              <h3 className="text-muted">Nenhum artigo publicado ainda.</h3>
              <p>Fique atento às nossas atualizações!</p>
            </div>
          ) : (
            <div className="row g-4">
              {posts.map((post) => (
                <div key={post.id} className="col-md-6 col-lg-4">
                  <article className="card h-100 border-0 shadow-sm overflow-hidden">
                    <div className="ratio ratio-16x9">
                      <img src={post.image_url || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'} alt={post.title} className="img-fluid object-fit-cover" />
                    </div>
                    <div className="p-4">
                      <div className="d-flex gap-3 mb-2 small text-muted">
                        <span className="d-flex align-items-center gap-1"><Calendar size={14} /> {new Date(post.published_at || post.created_at).toLocaleDateString('pt-BR')}</span>
                        <span className="d-flex align-items-center gap-1"><User size={14} /> {post.author || 'Distrito 4510'}</span>
                      </div>
                      <h4 className="mb-3">{post.title}</h4>
                      <p className="text-muted small mb-4">{post.excerpt}</p>
                      <Link to={`/blog/${post.slug}`} className="link-primary fw-bold text-decoration-none d-flex align-items-center gap-2">
                        Ler mais <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
          
          {/* Pagination Placeholder */}
          <div className="mt-5 d-flex justify-content-center">
            <nav aria-label="Page navigation">
              <ul className="pagination shadow-sm">
                <li className="page-item disabled"><a className="page-link" href="#">Anterior</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Próximo</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
