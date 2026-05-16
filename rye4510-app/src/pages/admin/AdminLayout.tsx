import React, { useEffect, useState } from 'react';
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { LayoutDashboard, FileText, Users, LogOut, Home, Menu, X, Image as ImageIcon, Calendar } from 'lucide-react';

const AdminLayout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) navigate('/login');
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const menuItems = [
    { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { label: 'Gerenciar Blog', icon: <FileText size={20} />, path: '/admin/blog' },
    { label: 'Gerenciar Galeria', icon: <ImageIcon size={20} />, path: '/admin/gallery' },
    { label: 'Gerenciar Eventos', icon: <Calendar size={20} />, path: '/admin/events' },
    { label: 'Usuários Admin', icon: <Users size={20} />, path: '/admin/users' },
  ];

  return (
    <div className="admin-wrapper d-flex vh-100 overflow-hidden bg-light">
      {/* Sidebar */}
      <aside className={`admin-sidebar bg-white shadow-sm transition-all ${sidebarOpen ? 'open' : 'closed'}`} style={{ width: sidebarOpen ? '260px' : '0', overflow: 'hidden' }}>
        <div className="p-4 border-bottom d-flex align-items-center justify-content-between">
          <Link to="/admin" className="text-decoration-none d-flex align-items-center">
            <img src="/img/rye-logo.png" alt="Logo" style={{ height: '30px' }} />
            <span className="ms-2 fw-bold text-primary">ADMIN</span>
          </Link>
          <button className="btn btn-link p-0 d-lg-none" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-3">
          <ul className="nav nav-pills flex-column">
            {menuItems.map((item) => (
              <li key={item.path} className="nav-item mb-2">
                <Link
                  to={item.path}
                  className={`nav-link d-flex align-items-center p-3 rounded-3 transition-all ${location.pathname === item.path ? 'active bg-primary shadow-sm' : 'text-dark hover-bg-light'}`}
                >
                  <span className="me-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
            
            <li className="nav-item mt-4 pt-4 border-top">
              <Link to="/" className="nav-link d-flex align-items-center p-3 text-muted hover-bg-light rounded-3">
                <span className="me-3"><Home size={20} /></span>
                Ver Website
              </Link>
              <button
                onClick={() => supabase.auth.signOut()}
                className="nav-link d-flex align-items-center p-3 text-danger hover-bg-light rounded-3 border-0 bg-transparent w-100"
              >
                <span className="me-3"><LogOut size={20} /></span>
                Sair
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 overflow-auto position-relative">
        {/* Header */}
        <header className="bg-white shadow-sm p-3 sticky-top d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <button className="btn btn-light me-3" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu size={20} />
            </button>
            <h4 className="mb-0 fw-bold">{menuItems.find(i => i.path === location.pathname)?.label || 'Painel'}</h4>
          </div>
          
          <div className="d-flex align-items-center pe-3">
            <div className="text-end me-3 d-none d-sm-block">
              <div className="fw-bold small">{session.user.email}</div>
              <div className="text-muted" style={{ fontSize: '10px' }}>Administrador</div>
            </div>
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '40px', height: '40px' }}>
              {session.user.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-4 p-lg-5">
          <Outlet />
        </div>
      </main>

      <style>{`
        .admin-sidebar { transition: width 0.3s ease-in-out; border-right: 1px solid #eee; }
        .hover-bg-light:hover { background-color: #f8f9fa; }
        .transition-all { transition: all 0.2s ease-in-out; }
        .nav-link.active { color: white !important; }
        .nav-link:not(.active):hover { background-color: #f8f9fa; }
        @media (max-width: 991.98px) {
          .admin-sidebar { position: fixed; height: 100vh; z-index: 1050; }
          .admin-sidebar.closed { width: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;
