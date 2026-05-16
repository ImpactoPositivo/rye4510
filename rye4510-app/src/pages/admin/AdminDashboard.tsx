import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { FileText, Users, Eye, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    postsCount: 0,
    publishedCount: 0,
    usersCount: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const { count: postsCount } = await supabase.from('posts').select('*', { count: 'exact', head: true });
      const { count: publishedCount } = await supabase.from('posts').select('*', { count: 'exact', head: true }).eq('published', true);
      const { count: usersCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });

      setStats({
        postsCount: postsCount || 0,
        publishedCount: publishedCount || 0,
        usersCount: usersCount || 0,
      });
      setLoading(false);
    };

    fetchStats();
  }, []);

  const statCards = [
    { label: 'Total de Artigos', value: stats.postsCount, icon: <FileText size={24} />, color: 'bg-primary' },
    { label: 'Artigos Publicados', value: stats.publishedCount, icon: <Eye size={24} />, color: 'bg-success' },
    { label: 'Administradores', value: stats.usersCount, icon: <Users size={24} />, color: 'bg-info' },
  ];

  return (
    <div className="admin-dashboard">
      <div className="row g-4 mb-5">
        {statCards.map((card, i) => (
          <div key={i} className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className={`${card.color} text-white p-3 rounded-3 shadow-sm`}>
                    {card.icon}
                  </div>
                  <span className="badge bg-light text-dark rounded-pill px-3">Ativo</span>
                </div>
                <h6 className="text-muted small text-uppercase fw-bold mb-1">{card.label}</h6>
                <h2 className="fw-bold mb-0">{loading ? '...' : card.value}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-header bg-white py-4 border-0 d-flex align-items-center justify-content-between">
              <h5 className="mb-0 fw-bold">Ações Rápidas</h5>
            </div>
            <div className="card-body p-4 pt-0">
              <div className="list-group list-group-flush">
                <Link to="/admin/blog/new" className="list-group-item list-group-item-action py-3 border-0 rounded-3 mb-2 bg-light d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="mb-1 fw-bold">Criar Novo Artigo</h6>
                    <p className="text-muted small mb-0">Escreva e publique um novo post para o blog.</p>
                  </div>
                  <ArrowUpRight size={20} className="text-primary" />
                </Link>
                <Link to="/admin/users" className="list-group-item list-group-item-action py-3 border-0 rounded-3 mb-2 bg-light d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="mb-1 fw-bold">Gerenciar Usuários</h6>
                    <p className="text-muted small mb-0">Adicione ou remova permissões administrativas.</p>
                  </div>
                  <ArrowUpRight size={20} className="text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 bg-primary text-white h-100">
            <div className="card-body p-4 d-flex flex-column justify-content-center text-center">
              <div className="mb-4">
                <FileText size={48} className="opacity-50" />
              </div>
              <h4 className="fw-bold mb-3">Bem-vindo ao Painel</h4>
              <p className="opacity-75 mb-4">Gerencie todo o conteúdo informativo do Rotary Youth Exchange Distrito 4510 de forma profissional.</p>
              <Link to="/blog" target="_blank" className="btn btn-light rounded-pill px-4">Ver Blog Público</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
