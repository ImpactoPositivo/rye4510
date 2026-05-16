import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import PageHero from '../components/PageHero';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      navigate('/admin');
    } catch (err: any) {
      setError(err.message || 'Erro ao realizar login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <PageHero title="Acesso Administrativo" breadcrumbActive="Login" />
      
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-header bg-primary py-4 text-center">
                <img src="/img/rye-logo.png" alt="Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className="card-body p-5">
                <h2 className="text-center mb-4 fw-bold">Login</h2>
                
                {error && (
                  <div className="alert alert-danger mb-4" role="alert">
                    <i className="fas fa-exclamation-circle me-2"></i>
                    {error}
                  </div>
                )}

                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label className="form-label fw-bold small text-uppercase">E-mail</label>
                    <input
                      type="email"
                      className="form-control form-control-lg bg-light border-0"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label fw-bold small text-uppercase">Senha</label>
                    <div className="input-group">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control form-control-lg bg-light border-0"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                      />
                      <button 
                        type="button" 
                        className="btn btn-light border-0 px-3" 
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                      >
                        {showPassword ? <EyeOff size={20} className="text-muted" /> : <Eye size={20} className="text-muted" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 py-3 rounded-pill shadow-sm"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    ) : (
                      'Entrar no Painel'
                    )}
                  </button>
                </form>
                
                <div className="text-center mt-4">
                  <p className="text-muted small mb-0">
                    Acesso restrito a administradores do Distrito 4510.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
