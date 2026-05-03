import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import PageHero from '../components/PageHero';

interface FormData { nome: string; email: string; telefone: string; assunto: string; mensagem: string; }
const emptyForm: FormData = { nome: '', email: '', telefone: '', assunto: '', mensagem: '' };

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '.7rem 1rem',
  border: '1.5px solid var(--border)', borderRadius: 'var(--radius-sm)',
  fontSize: '.92rem', color: 'var(--dark)', outline: 'none',
  fontFamily: 'var(--font-body)', background: 'var(--white)',
};

export default function ContatoPage() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSent(true); setSending(false); setForm(emptyForm);
  };

  return (
    <>
      <PageHero
        title="Entre em Contato"
        subtitle="Tire suas dúvidas sobre o Intercâmbio de Jovens do Rotary!"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Páginas' }, { label: 'Contato' }]}
      />

      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '48px', alignItems: 'start' }}>

            {/* Form card */}
            <div className="card" style={{ padding: '40px' }}>
              <h2 style={{ marginBottom: '.8rem', fontSize: '1.5rem' }}>Envie uma mensagem</h2>
              <p style={{ color: 'var(--text)', marginBottom: '1.8rem', lineHeight: 1.7, fontSize: '.95rem' }}>
                <strong>Pais e estudantes:</strong> prontos para a experiência que transforma vidas? Preencha o formulário e inicie essa aventura inesquecível!
              </p>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <Send size={48} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
                  <h3 style={{ color: 'var(--primary)', marginBottom: '.5rem' }}>Mensagem enviada!</h3>
                  <p style={{ color: 'var(--text)' }}>Entraremos em contato em breve.</p>
                  <button className="btn btn-outline btn-sm" style={{ marginTop: '1rem' }} onClick={() => setSent(false)}>
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    {[
                      { name: 'nome',     label: 'Seu nome',  placeholder: 'Primeiro nome',      type: 'text'  },
                      { name: 'email',    label: 'E-mail',    placeholder: 'seu@email.com',       type: 'email' },
                      { name: 'telefone', label: 'Telefone',  placeholder: '(00) 00000-0000',     type: 'text'  },
                      { name: 'assunto',  label: 'Assunto',   placeholder: 'Sobre o intercâmbio', type: 'text'  },
                    ].map(f => (
                      <div key={f.name}>
                        <label style={{ display: 'block', fontSize: '.85rem', fontWeight: 600, marginBottom: '.4rem' }}>{f.label}</label>
                        <input name={f.name} type={f.type} value={(form as any)[f.name]} onChange={handleChange}
                          placeholder={f.placeholder} style={inputStyle} required={f.name !== 'telefone'} />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '.85rem', fontWeight: 600, marginBottom: '.4rem' }}>Mensagem</label>
                    <textarea name="mensagem" value={form.mensagem} onChange={handleChange} required rows={7}
                      placeholder="Escreva sua mensagem..." style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>
                  <button className="btn btn-primary" type="submit" disabled={sending} style={{ width: '100%', justifyContent: 'center' }}>
                    {sending ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                </form>
              )}
            </div>

            {/* Info + map */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '20px' }}>
                {[
                  { icon: <MapPin size={26} />, label: 'Endereço', text: 'Rua Osvaldo Cruz, 637\n19800-081 Assis, SP' },
                  { icon: <Mail size={26} />,   label: 'E-mail',   text: 'yep4510@gmail.com' },
                  { icon: <Phone size={26} />,  label: 'Telefone', text: '(18) 99652-7252' },
                ].map((c, i) => (
                  <div key={i} className="card" style={{ padding: '20px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '.6rem' }}>{c.icon}</div>
                    <h4 style={{ fontSize: '.9rem', marginBottom: '.4rem' }}>{c.label}</h4>
                    <p style={{ fontSize: '.8rem', color: 'var(--text)', whiteSpace: 'pre-line', margin: 0, lineHeight: 1.6 }}>{c.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.677387582616!2d-50.41742462431467!3d-22.665813979425476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9495399751b77a83%3A0x14e355ca7cd779d9!2sR.%20Osvaldo%20Cruz%2C%20637%20-%20Centro%2C%20Assis%20-%20SP%2C%2019816-050!5e0!3m2!1spt-BR!2sbr!4v1759159717972!5m2!1spt-BR!2sbr"
                  width="100%" height="420" style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização YEP D4510"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
