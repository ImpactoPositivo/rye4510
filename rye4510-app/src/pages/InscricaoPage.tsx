import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';

const cidades = ['Adamantina','Álvares Machado','Assis','Bastos','Bauru','Cândido Mota','Dracena','Duartina','Garça','Marília','Martinópolis','Pacaembu','Palmital','Paraguaçu','Pederneiras','Pirapozinho','Presidente Epitácio','Presidente Prudente','Primavera','Rancharia','Regente Feijó','Rinópolis','Tarumã','Tupã','Tupi Paulista','Vera Cruz'];

const clubes = ['Rotary Club de Adamantina','Rotary Club de Álvares Machado','Rotary Club de Assis','Rotary Club de Assis do Vale','Rotary Club de Assis Fraternal','Rotary Club de Assis Norte','Rotary Club de Bastos','Rotary Club de Bauru','Rotary Club de Bauru Aeroporto','Rotary Club de Bauru Terra Branca','Rotary Club de Bauru Vitória Régia','Rotary Club de Cândido Mota','Rotary Club de Dracena','Rotary Club de Dracena Imperial','Rotary Club de Duartina','Rotary Club de Garça Real','Rotary Club de Marília','Rotary Club de Marília 04 de Abril','Rotary Club de Marília Alto Cafezal','Rotary Club de Marília de Dirceu','Rotary Club de Marilia-Inovação','Rotary Club de Marília Leste','Rotary Club de Marília Pioneiro','Rotary Club de Martinópolis','Rotary Club de Pacaembu','Rotary Club de Palmital','Rotary Club de Paraguaçu Paulista','Rotary Club de Pederneiras','Rotary Club de Pederneiras Pedra de Fogo','Rotary Club de Pirapozinho','Rotary Club de Presidente Epitácio','Rotary Club de Presidente Prudente','Rotary Club de Presidente Prudente Leste','Rotary Club de Presidente Prudente Rosa dos Ventos','Rotary Club de Presidente Prudente Sudoeste','Rotary Club de Presidente Prudente Sul','Rotary Club de Primavera','Rotary Club de Rancharia','Rotary Club de Regente Feijó','Rotary Club de Rinópolis','Rotary Club de Tarumã','Rotary Club de Tupã','Rotary Club de Tupã Inovação','Rotary Club de Tupã Vanuire','Rotary Club de Tupi Paulista','Rotary Club de Vera Cruz'];

const programas = ['LTEP - Longa Duração','STEP - Curta Duração','Longa e Curta Duração','Longa - Bolsa','NGSE - Novas Gerações'];

interface Form {
  nome: string; email: string; telefone: string; nascimento: string;
  genero: string; endereco: string; cep: string;
  cidade: string; clube: string; programa: string;
}

const empty: Form = { nome:'', email:'', telefone:'', nascimento:'', genero:'masculino', endereco:'', cep:'', cidade:'', clube:'', programa:'' };

const inp: React.CSSProperties = {
  width:'100%', padding:'.75rem 1rem', border:'1.5px solid var(--border)',
  borderRadius:'var(--radius-sm)', fontSize:'.92rem', fontFamily:'var(--font-body)',
  color:'var(--dark)', background:'var(--white)', outline:'none',
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'.4rem' }}>
      <label style={{ fontSize:'.85rem', fontWeight:600, color:'var(--dark)' }}>{label}</label>
      {children}
    </div>
  );
}

export default function InscricaoPage() {
  const [form, setForm] = useState<Form>(empty);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1400));
    setSent(true); setSending(false);
  };

  return (
    <>
      <PageHero
        title="Formulário de Inscrição"
        subtitle="Preencha o formulário de interesse e daremos início à sua jornada de intercâmbio!"
        breadcrumbs={[{ label:'Home', path:'/' }, { label:'Mais' }, { label:'Inscreva-se' }]}
      />

      <section className="section" style={{ background:'var(--light)' }}>
        <div className="container" style={{ maxWidth:'780px' }}>

          {sent ? (
            <div className="card" style={{ padding:'60px 40px', textAlign:'center' }}>
              <CheckCircle2 size={64} style={{ color:'var(--primary)', margin:'0 auto 1.2rem' }} />
              <h2 style={{ color:'var(--primary)', marginBottom:'.6rem' }}>Inscrição recebida!</h2>
              <p style={{ color:'var(--text)', lineHeight:1.8, maxWidth:'480px', margin:'0 auto 1.4rem' }}>
                Obrigado pelo seu interesse no Programa de Intercâmbio de Jovens do Rotary D4510. Nossa equipe entrará em contato em breve com os próximos passos.
              </p>
              <button className="btn btn-outline" onClick={() => setSent(false)}>Nova inscrição</button>
            </div>
          ) : (
            <div className="card" style={{ padding:'40px' }}>
              <h2 style={{ marginBottom:'.5rem', fontSize:'1.6rem' }}>Formulário de Interesse</h2>
              <p style={{ color:'var(--text)', marginBottom:'2rem', lineHeight:1.7 }}>
                Todos os campos marcados com <span style={{ color:'var(--primary)' }}>*</span> são obrigatórios.
              </p>

              <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:'20px' }}>

                {/* Nome */}
                <Field label="Nome completo *">
                  <input style={inp} type="text" value={form.nome} onChange={set('nome')}
                    placeholder="Digite seu nome completo" required />
                </Field>

                {/* Email */}
                <Field label="E-mail *">
                  <input style={inp} type="email" value={form.email} onChange={set('email')}
                    placeholder="Digite seu e-mail" required />
                </Field>

                {/* Telefone + Nascimento */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                  <Field label="Telefone / WhatsApp *">
                    <input style={inp} type="tel" value={form.telefone} onChange={set('telefone')}
                      placeholder="(00) 00000-0000" required />
                  </Field>
                  <Field label="Data de nascimento *">
                    <input style={inp} type="date" value={form.nascimento} onChange={set('nascimento')} required />
                  </Field>
                </div>

                {/* Gênero */}
                <div>
                  <p style={{ fontSize:'.85rem', fontWeight:600, color:'var(--dark)', marginBottom:'.6rem' }}>Gênero *</p>
                  <div style={{ display:'flex', gap:'24px', flexWrap:'wrap' }}>
                    {[['masculino','Masculino'],['feminino','Feminino'],['outro','Prefiro não dizer']].map(([v, l]) => (
                      <label key={v} style={{ display:'flex', alignItems:'center', gap:'.5rem', cursor:'pointer', fontSize:'.92rem', color:'var(--dark)' }}>
                        <input type="radio" name="genero" value={v} checked={form.genero === v} onChange={set('genero')}
                          style={{ accentColor:'var(--primary)', width:'16px', height:'16px' }} />
                        {l}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Endereço */}
                <Field label="Endereço *">
                  <input style={inp} type="text" value={form.endereco} onChange={set('endereco')}
                    placeholder="Rua, número, bairro" required />
                </Field>

                {/* CEP */}
                <Field label="CEP *">
                  <input style={{ ...inp, maxWidth:'220px' }} type="text" value={form.cep} onChange={set('cep')}
                    placeholder="00000-000" required />
                </Field>

                {/* Cidade + Clube */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                  <Field label="Cidade *">
                    <select style={inp} value={form.cidade} onChange={set('cidade')} required>
                      <option value="" disabled hidden>Selecione sua cidade</option>
                      {cidades.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </Field>
                  <Field label="Rotary Club *">
                    <select style={inp} value={form.clube} onChange={set('clube')} required>
                      <option value="" disabled hidden>Selecione o clube</option>
                      {clubes.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </Field>
                </div>

                {/* Programa */}
                <Field label="Programa de interesse *">
                  <select style={inp} value={form.programa} onChange={set('programa')} required>
                    <option value="" disabled hidden>Selecione o programa</option>
                    {programas.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </Field>

                <button className="btn btn-primary btn-lg" type="submit" disabled={sending}
                  style={{ marginTop:'8px', justifyContent:'center' }}>
                  {sending ? 'Enviando...' : 'Enviar inscrição'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
