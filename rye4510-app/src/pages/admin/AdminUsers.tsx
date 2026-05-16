import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { UserPlus, Shield, Mail, Trash2, Key } from 'lucide-react';

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'danger', msg: string } | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('profiles').select('*');
    if (!error) setUsers(data || []);
    setLoading(false);
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    
    try {
      // Step 1: Sign up user
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: newEmail,
        password: newPassword,
      });

      if (signUpError) throw signUpError;
      if (!data.user) throw new Error('Não foi possível criar o usuário.');

      // Step 2: Create profile (this might happen automatically via trigger if configured, 
      // but let's do it manually for reliability since we haven't set triggers)
      const { error: profileError } = await supabase.from('profiles').insert([
        { id: data.user.id, email: newEmail, role: 'admin' }
      ]);

      if (profileError) {
        // If profile creation fails but auth succeeded, we should inform
        console.error('User created but profile failed:', profileError);
      }

      setStatus({ type: 'success', msg: `Usuário ${newEmail} criado com sucesso! Ele precisará confirmar o e-mail se a confirmação estiver ativada no Supabase.` });
      setNewEmail('');
      setNewPassword('');
      fetchUsers();
    } catch (err: any) {
      setStatus({ type: 'danger', msg: err.message || 'Erro ao criar usuário.' });
    }
  };

  return (
    <div className="admin-users">
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <h5 className="fw-bold mb-4 d-flex align-items-center">
              <UserPlus size={20} className="me-2 text-primary" /> Novo Administrador
            </h5>
            
            {status && (
              <div className={`alert alert-${status.type} small mb-4 py-2`} role="alert">
                {status.msg}
              </div>
            )}

            <form onSubmit={handleCreateUser}>
              <div className="mb-3">
                <label className="form-label fw-bold small text-uppercase">E-mail</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0"><Mail size={16} /></span>
                  <input
                    type="email"
                    className="form-control bg-light border-0"
                    placeholder="exemplo@rotary.org"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="form-label fw-bold small text-uppercase">Senha Inicial</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0"><Key size={16} /></span>
                  <input
                    type="password"
                    className="form-control bg-light border-0"
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 rounded-pill py-2 shadow-sm">
                Adicionar Administrador
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="card-header bg-white py-3 border-0">
              <h5 className="mb-0 fw-bold">Administradores Atuais</h5>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th className="px-4 py-3 border-0 small text-uppercase fw-bold text-muted">E-mail</th>
                    <th className="py-3 border-0 small text-uppercase fw-bold text-muted">Nível</th>
                    <th className="py-3 border-0 small text-uppercase fw-bold text-muted">Membro desde</th>
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
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-5 text-muted">Nenhum administrador encontrado.</td>
                    </tr>
                  ) : (
                    users.map((u) => (
                      <tr key={u.id}>
                        <td className="px-4 py-3 fw-bold">{u.email}</td>
                        <td className="py-3">
                          <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3">
                            <Shield size={12} className="me-1" /> {u.role || 'admin'}
                          </span>
                        </td>
                        <td className="py-3 text-muted small">
                          {new Date(u.created_at).toLocaleDateString('pt-BR')}
                        </td>
                        <td className="px-4 py-3 text-end">
                          <button className="btn btn-sm btn-danger-subtle text-danger border-danger-subtle rounded-pill p-2" title="Remover Acesso" disabled={u.email === 'yeo.chicoferro@gmail.com'}>
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-warning-subtle text-warning-emphasis rounded-3 border border-warning-subtle">
            <p className="small mb-0">
              <strong>Importante:</strong> Novos usuários criados precisarão confirmar seus endereços de e-mail antes de conseguir realizar o login, a menos que a confirmação de e-mail esteja desativada nas configurações do seu Supabase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
