import React from 'react';
import PageHero from '../components/PageHero';
import { FileText, Download, ExternalLink, ShieldCheck, ClipboardCheck, Info, Presentation, Plane } from 'lucide-react';

const downloads = [
  {
    title: 'Documento Oficial de Inscrição modelo 2025-2026',
    url: 'https://drive.google.com/file/d/1mf1oZ_O6VhQnM8qqXMmtHuMNKvS4_MUy/view',
    icon: <FileText className="text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Documento Oficial de Inscrição DE BOLSA modelo 2025-2026',
    url: 'https://drive.google.com/file/d/1Wkg8pNeqhxwjCoI8kobJntcw6KTcGd6R/view',
    icon: <FileText className="text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Treinamento de Oficiais e Conselheiros de Clubes',
    url: '/clubes/treinamentos',
    icon: <Info className="text-primary" />,
    type: 'Página Interna',
    internal: true
  },
  {
    title: 'Cadastramento de Voluntários',
    url: 'https://lowcode4all-dev.zudy.host/app/RYE%20Public/Volunteer%20Applicants%20Welcome?$activepanel=Volunteer+Applicants+Welcome&RYE+Region=B51&$culture=pt-BR',
    icon: <ClipboardCheck className="text-primary" />,
    type: 'Link Externo'
  },
  {
    title: 'Cadastro de Clubes',
    url: 'https://drive.google.com/file/d/1xcedjctkibblACnMp69-act2uiUycUDN/view',
    icon: <FileText className="text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Declaração Juramentada de Trabalho Voluntário',
    url: 'https://drive.google.com/file/d/1p3_CLh6HmCwDc1IaTeAYAPfWL34dWFbd/view',
    icon: <ShieldCheck className="text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Emitir certidão de Antecedentes Criminais',
    url: 'https://servicos.pf.gov.br/epol-sinic-publico/',
    icon: <ShieldCheck className="text-primary" />,
    type: 'Link Externo'
  },
  {
    title: 'Recibo de Fundo de Emergência',
    url: 'https://drive.google.com/file/d/1v1365p4GHTObSeYdpRkfPHNMgpoWwOWl/view',
    icon: <FileText className="text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Recibo de Mesada de Inbound',
    url: 'https://drive.google.com/file/d/1qbJlRPANBngkNpTFCJYDIa9_IIeG34Uv/view',
    icon: <FileText className="text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Regras distritais do distrito 4510 - 2025',
    url: 'https://drive.google.com/file/d/1ytbfJQGYuPP5kphyg_oXXGsk8TTf0Ltc/view',
    icon: <Info className="text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Carta ao presidente eleito do Clube',
    url: 'https://drive.google.com/file/d/18MXCD5f9jm09BpG3InKzgva8O83f6oxV/view',
    icon: <FileText className="text-primary" />,
    type: 'PDF'
  },
  {
    title: 'O que o presidente do Clube precisa saber sobre o Programa de Intercâmbio',
    url: 'https://drive.google.com/file/d/1ikJCWJ5Lqq2v2zkBizgYs2BTKeAjoYhj/view',
    icon: <Info className="text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Palestra para clubes e escolas',
    url: 'https://docs.google.com/presentation/d/1KBjVaALNeRplDyjiFLI-v9I6aPzQ0vJg/edit?slide=id.p1#slide=id.p1',
    icon: <Presentation className="text-primary" />,
    type: 'Google Slides'
  },
  {
    title: 'Manual de Clubes e Oficiais',
    url: 'https://drive.google.com/file/d/1t0tDy2w-eoZsvG7yKjjQImuf7KqCx9YQ/view',
    icon: <FileText className="text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Autorização de Retorno Antecipado',
    url: 'https://drive.google.com/file/d/192J6OqvE66dwYMLsl438AA-kkImraUv9/view',
    icon: <FileText className="text-primary" />,
    type: 'PDF'
  },
  {
    title: 'Regras para Compra de Passagens Aéreas',
    url: 'https://drive.google.com/file/d/1HaHbj3_tJYV-xhUIPyUqw3z6YRm8pCLv/view',
    icon: <Plane className="text-primary" />,
    type: 'PDF'
  }
];

const DownloadsClubesPage: React.FC = () => {
  return (
    <div className="downloads-clubes-page">
      <PageHero 
        title="Downloads" 
        subtitle="Materiais e documentos oficiais para os Rotary Clubes"
        breadcrumbActive="Downloads"
      />

      <section className="section py-5 bg-light">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary fw-bold">DOCUMENTAÇÃO</h5>
            <h2 className="display-6 fw-bold">Downloads para Clubes</h2>
            <p className="text-muted">Acesse abaixo os documentos e links necessários para a gestão do programa no seu clube.</p>
          </div>

          <div className="row g-3 justify-content-center">
            {downloads.map((item, idx) => (
              <div key={idx} className="col-12 col-lg-10 col-xl-8">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden download-card">
                  <div className="card-body py-2 px-4 d-flex align-items-center">
                    <div className="download-icon-wrapper bg-white shadow-sm rounded-3 p-2 me-4">
                      {item.icon}
                    </div>
                    <div className="flex-grow-1 py-1">
                      <div className="small text-uppercase text-muted fw-bold mb-0" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>
                        {item.type}
                      </div>
                      <h6 className="fw-bold mb-0 text-dark" style={{ lineHeight: '1.2' }}>
                        {item.title}
                      </h6>
                    </div>
                    <div className="ms-3">
                      <a 
                        href={item.url} 
                        target={item.internal ? '_self' : '_blank'} 
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '36px', height: '36px' }}
                        title={item.internal ? 'Ver página' : 'Download'}
                      >
                        {item.internal ? <ExternalLink size={16} /> : <Download size={16} />}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          <div className="bg-primary text-white p-5 rounded-4 shadow-lg">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="fw-bold mb-3">Precisa de ajuda com a documentação?</h3>
                <p className="mb-0 opacity-75">Caso não encontre o que procura ou tenha dúvidas sobre o preenchimento de algum formulário, nossa equipe distrital está à disposição para auxiliar seu clube.</p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <a href="/contato" className="btn btn-white text-primary fw-bold py-3 px-5 rounded-pill">
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .download-card {
          transition: all 0.3s ease;
        }
        .download-card:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important;
          background-color: var(--primary);
        }
        .download-card:hover .text-dark,
        .download-card:hover .text-muted {
          color: white !important;
        }
        .download-card:hover .btn-primary {
          background-color: white !important;
          color: var(--primary) !important;
          border-color: white !important;
        }
        .download-icon-wrapper {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .download-icon-wrapper svg {
          width: 20px;
          height: 20px;
        }
      `}</style>
    </div>
  );
};

export default DownloadsClubesPage;
