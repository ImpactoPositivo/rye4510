import React from 'react';
import PageHero from '../components/PageHero';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'Inscrições abertas para o intercâmbio 2026/27',
      excerpt: 'Começou o processo seletivo para a próxima turma de embaixadores do Distrito 4510.',
      date: '15 Mai 2025',
      author: 'Distrito 4510',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'Relato: Meu ano na Alemanha',
      excerpt: 'Confira a história da Giulia e como o intercâmbio mudou sua percepção de mundo.',
      date: '10 Mai 2025',
      author: 'Giulia R.',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Dicas para a primeira entrevista',
      excerpt: 'Saiba o que os avaliadores do Rotary buscam em um candidato ideal.',
      date: '02 Mai 2025',
      author: 'Comissão RYE',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="blog-page">
      <PageHero 
        title="Blog & Notícias" 
        subtitle="Acompanhe as últimas novidades, relatos e dicas sobre o intercâmbio."
        breadcrumbActive="Blog"
      />

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {posts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <article className="card h-100 border-0 shadow-sm overflow-hidden">
                  <div className="ratio ratio-16x9">
                    <img src={post.image} alt={post.title} className="img-fluid object-fit-cover" />
                  </div>
                  <div className="p-4">
                    <div className="d-flex gap-3 mb-2 small text-muted">
                      <span className="d-flex align-items-center gap-1"><Calendar size={14} /> {post.date}</span>
                      <span className="d-flex align-items-center gap-1"><User size={14} /> {post.author}</span>
                    </div>
                    <h4 className="mb-3">{post.title}</h4>
                    <p className="text-muted small mb-4">{post.excerpt}</p>
                    <a href={`/blog/${post.id}`} className="link-primary fw-bold text-decoration-none d-flex align-items-center gap-2">
                      Ler mais <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
          
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
