import React from 'react';
import { Link } from 'react-router-dom';

const ProgramasPage: React.FC = () => {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Programas</h3>
          <p className="fs-5 text-white mb-4">Descubra qual dos programas combina com você.</p>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><a href="#">Paginas</a></li>
            <li className="breadcrumb-item active text-white">Inscrição</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Programas Start */}
      <div className="container-fluid causes py-2">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Tipos de Programas</h5>
            <p className="mb-0">Explore, aprenda e cresça conosco nesta experiência transformadora!</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img src="/img/programa-1.png" className="img-fluid w-100" alt="LTEP" />
                </div>
                <div className="progress"></div>
                <div className="causes-content p-4">
                  <h4 className="mib-3">LTEP - Programa de Longa Duração</h4>
                  <p className="mb-4">O intercâmbio de longa duração cobre todo o ano letivo. Os participantes moram com diferentes famílias anfitriãs e estudam em escolas locais.</p>
                  <a className="btn-hover-bg btn btn-primary text-white py-2 px-3" href="#item01">Saiba mais</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img src="/img/programa-2.png" className="img-fluid w-100" alt="STEP" />
                </div>
                <div className="progress"></div>
                <div className="causes-content p-4">
                  <h4 className="mib-3">STEP - Programa de Curta Duração</h4>
                  <p className="mb-4">O intercâmbio de curta duração acontece nas férias escolares. Os participantes trocam de famílias anfitriãs e vivem a cultura do país parceiro.</p>
                  <a className="btn-hover-bg btn btn-primary text-white py-2 px-3" href="#item02">Saiba mais</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img src="/img/programa-3.png" className="img-fluid w-100" alt="Bolsa" />
                </div>
                <div className="progress"></div>
                <div className="causes-content p-4">
                  <h4 className="mib-3">Programa de Longa Duração – Bolsa</h4>
                  <p className="mb-4">O intercâmbio de longa duração - bolsa oferece oportunidade a jovens de escolas públicas, cobrindo todo o ano letivo em outro país.</p>
                  <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#item03">Saiba mais</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img src="/img/programa-4.png" className="img-fluid w-100" alt="NGSE" />
                </div>
                <div className="progress"></div>
                <div className="causes-content p-4">
                  <h4 className="mib-3">NGSE - Programa de Novas Gerações</h4>
                  <p className="mb-4">O intercâmbio de novas gerações é voltado a jovens de 18 a 30 anos. Os participantes vivem experiências culturais e profissionais no exterior.</p>
                  <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#item04">Saiba mais</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Programas End */}

      {/* Longa Start */}
      <div className="container-fluid about py-5" id="item01">
        <div className="container py-3">
          <div className="row g-5 alinha">
            <div className="col-12">
              <div className="ali-fig mb-4">
                <img src="/img/inscricao-down-1.png" className="img-fluid" style={{ maxHeight: '400px' }} alt="Inscrição Longa" />
              </div>
            </div>
            <div className="col-12 ali-text">
              <h5 className="text-uppercase text-primary">PROGRAMA DE LONGA DURAÇÃO</h5>
              <h1 className="mb-2 inscr-topico"><strong>A Inscrição para o programa</strong></h1>
              <p>A inscrição do candidato no Processo Seletivo se dá mediante o preenchimento e assinatura das partes do Documento de Inscrição e entrega ao escritório do YEP D4510, no prazo estipulado, acompanhado dos documentos exigidos e comprovante do pagamento da taxa de inscrição.</p>
              <p>Os intercâmbios do Rotary são organizados de clube a clube em escala global. Para se inscrever, você precisa do apoio de um clube patrocinador local. Durante sua viagem, será acolhido por um clube anfitrião. Para encontrar um clube patrocinador em sua cidade e obter mais informações, envie uma mensagem <a href="https://wa.me/5518996527252" target="_blank" rel="noreferrer">CLICANDO AQUI <i className="fab fa-whatsapp"></i></a> ou preencha o formulário de cadastro ao final desta página.</p>

              <h1 className="mb-2 inscr-topico"><strong>Duração do programa</strong></h1>
              <p>Este programa tem a duração de um ano acadêmico, que pode variar entre 10 a 11 meses, dependendo da escola e do país de destino.</p>
              <p>Para intercambistas destinados ao hemisfério norte, o período acadêmico começa em agosto, com retorno previsto para junho do ano seguinte. Aqueles que escolhem países do hemisfério sul, como Austrália e Nova Zelândia, iniciam o intercâmbio entre o final de janeiro e início de fevereiro, finalizando em novembro.</p>

              <h1 className="mb-2 inscr-topico"><strong>A parceria do anfitrionamento</strong></h1>
              <p>Como parte do princípio de reciprocidade que orienta nosso programa, a família brasileira que envia um estudante ao exterior assume o compromisso de indicar quatro famílias dispostas a acolher um intercambista estrangeiro. Essa parceria fortalece a rede de anfitriões e garante que a experiência de troca cultural aconteça de forma solidária e contínua, salientando que o jovem recebido no Brasil virá provavelmente de um país distinto daquele escolhido pelo candidato brasileiro.</p>

              <h1 className="mb-2 inscr-topico"><strong>Idade e escolaridade</strong></h1>
              <p>Para a seleção de candidatos deste programa, é importante destacar que a maioria dos países não aceita participantes que iniciem o intercâmbio aos 18 anos ou mais. Assim, para o ano de 2025, serão elegíveis:</p>
              <p>&rArr; Os candidatos nascidos a partir de 1 de janeiro de 2009, que tenham concluído o 9º ano do ensino fundamental.</p>
              <p>&rArr; Os candidatos nascidos a partir de 1 de janeiro de 2010, que também tenham concluído o 9º ano do ensino fundamental, estão aptos a participar. No entanto, sua aceitação estará condicionada à disponibilidade de vagas.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Longa End */}

      {/* Seleção Start */}
      <div className="container-fluid about py-3">
        <div className="container py-3">
          <div className="row g-5 alinha">
            <div className="col-12">
              <div className="ali-fig mb-4">
                <img src="/img/inscricao-down-2.png" className="img-fluid" style={{ maxHeight: '400px' }} alt="Seleção" />
              </div>
            </div>
            <div className="col-12 ali-text">
              <h5 className="text-uppercase text-primary">O Processo de Seleção</h5>
              <p>O candidato inscrito e devidamente habilitado participará de um processo seletivo para estabelecer uma ordem de classificação entre todos os candidatos para efeito de escolha das vagas de intercâmbio que serão disponibilizadas.</p>
              <h1 className="mb-2 inscr-topico"><strong>O processo seletivo será constituído de:</strong></h1>
              <ul>
                <li>Provas escritas realizadas pelo YEP D4510 em data, local, horário e formato que forem estabelecidos;</li>
                <li>Análise do histórico escolar do candidato, com apuração e consideração da sua nota média anual.</li>
                <li>Participação do(s) RESPONSÁVEL(IS) LEGAL(IS) do candidato em reuniões de treinamento e orientações que ocorrerão durante as etapas ao longo do período de preparação para o intercâmbio.</li>
                <li>Participação do candidato e do(s) RESPONSÁVEIS LEGAIS do candidato em reuniões do Rotary Clube Patrocinador, até o dia anterior a realização das provas de seleção.</li>
              </ul>
              <h1 className="mb-2 inscr-topico"><strong>Os critérios adotados para a classificação no Processo Seletivo são:</strong></h1>
              <ul>
                <li>500 Pontos para a média do histórico escolar do último ano concluído;</li>
                <li>100 Pontos para a participação dos responsáveis legais no primeiro treinamento de candidatos e famílias que consta do calendário do YEP D4510, sendo 50 pontos para a participação da mãe do candidato e 50 para o pai, ou RESPONSÁVEIS LEGAIS.</li>
                <li>10 Pontos para a participação do candidato e de seus responsáveis legais em reuniões do Rotary Clube Patrocinador, realizadas até o dia anterior à execução das provas de seleção. Serão atribuídos 2,5 pontos por reunião, considerando-se, para pontuação, um máximo de 4 reuniões.</li>
                <li>500 Pontos para as Provas de Avaliação de Conhecimento, com a seguinte distribuição:</li>
                <ul>
                  <li>200 pontos para inglês;</li>
                  <li>100 pontos para português;</li>
                  <li>100 pontos para assuntos de Rotary;</li>
                  <li>100 pontos para cidadania e civismo.</li>
                  <li>100 pontos para conhecimentos gerais</li>
                </ul>
              </ul>
              <h1 className="mb-2 inscr-topico"><strong>Atenção:</strong></h1>
              <p>A inscrição e a participação no Processo Seletivo não asseguram ao candidato, por si só, a efetiva e incondicional realização do intercâmbio coordenado pelo YEP D4510.</p>
              <p>Cumprida a fase do processo seletivo, ao candidato será atribuída uma vaga para realizar o intercâmbio, de sua escolha dentre aquelas que lhe forem disponibilizadas pelo YEP D4510.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Seleção End */}

      {/* Orientações Start */}
      <div className="container-fluid about py-3">
        <div className="container py-3">
          <div className="row g-5 alinha">
            <div className="col-12">
              <div className="ali-fig mb-4">
                <img src="/img/inscricao-down-3.png" className="img-fluid" style={{ maxHeight: '400px' }} alt="Orientações" />
              </div>
            </div>
            <div className="col-12 ali-text">
              <h5 className="text-uppercase text-primary">Reuniões de Orientação e Treinamento e Eventos</h5>
              <h1 className="mb-2 inscr-topico"><strong>1ª Reunião de Orientação</strong></h1>
              <p><strong>Data/Hora:</strong> Data e Horários a ser defenidos - Vide <Link to="/eventos">Calendário</Link>.</p>
              <p><strong>Local:</strong> A ser definido</p>
              <p><strong>Participantes:</strong> candidatos e pais de candidatos (obrigatório); Oficiais de intercâmbio do YEP e Conselheiros.</p>
              
              <h1 className="mb-2 inscr-topico"><strong>Prova Classificatória</strong></h1>
              <p><strong>Data/Hora:</strong> Data e horário a ser definido - Vide <Link to="/eventos">Calendário</Link>.</p>
              <p><strong>Local:</strong> Presencial e a ser definido</p>
              <p><strong>Participantes:</strong> Obrigatório para os candidatos ao programa de longa duração.</p>

              <h1 className="mb-2 inscr-topico"><strong>2ª Reunião de Orientação e ESCOLHA DE VAGAS</strong></h1>
              <p><strong>Data/Hora:</strong> Data e horário a ser definido - Vide <Link to="/eventos">Calendário</Link>.</p>
              <p><strong>Local:</strong> Presencial e a ser definido.</p>
              <p><strong>Participantes:</strong> candidatos ou representantes.</p>

              <h1 className="mb-2 inscr-topico"><strong>3ª Reunião de Orientação</strong></h1>
              <p><strong>Data/Hora:</strong> Data e horário a ser definido - Vide <Link to="/eventos">Calendário</Link>.</p>
              <p><strong>Local:</strong> Presencial e a ser definido.</p>
              <p><strong>Participantes:</strong> candidatos e pais de candidatos (obrigatório); Oficiais do YEP e Conselheiros.</p>

              <h1 className="mb-2 inscr-topico"><strong>Application Form (Formulário de Inscrição)</strong></h1>
              <p><strong>Data limite para entrega do Application Form</strong> - Vide <Link to="/eventos">Calendário</Link>.</p>
              <p>Todo preenchimento do formulário de aplicação deve ser feito online, conforme instrução recebida na primeira reunião de candidatos e famílias.</p>

              <h1 className="mb-2 inscr-topico"><strong>4ª Reunião de Orientação</strong></h1>
              <p><strong>Data/Hora:</strong> Data e horário a ser definido - Vide <Link to="/eventos">Calendário</Link>.</p>
              <p><strong>Local:</strong> Presencial e a ser definido.</p>
              <p><strong>Participantes:</strong> candidatos e pais de candidatos (obrigatório); Oficiais do YEP e Conselheiros.</p>

              <h1 className="mb-2 inscr-topico"><strong>5ª Reunião de Orientação</strong></h1>
              <p><strong>Data/Hora:</strong> Data e horário a ser definido - Vide <Link to="/eventos">Calendário</Link>.</p>
              <p><strong>Local:</strong> Presencial e a ser definido.</p>
              <p><strong>Participantes:</strong> candidatos e pais de candidatos (obrigatório); Oficiais do YEP e Conselheiros.</p>                        
            </div>
          </div>
        </div>
      </div>
      {/* Orientações End */}

      {/* Curta Start */}
      <div className="container-fluid about py-3" id="item02">
        <div className="container py-5">
          <div className="row g-5 alinha2">
            <div className="col-12">
              <div className="ali-fig mb-4">
                <img src="/img/inscricao-down-4.png" className="img-fluid" style={{ maxHeight: '400px' }} alt="Curta Duração" />
              </div>
            </div>
            <div className="col-12 ali-text">
              <h5 className="text-uppercase text-primary">Programa de Curta Duração</h5>
              <p>Aqui você encontrará todas as informações necessárias para se inscrever como candidato ao processo seletivo do programa de intercâmbio de curta duração do Rotary, distrito 4510.</p>
              <h1 className="mb-2 inscr-topico"><strong>A Inscrição para o programa</strong></h1>
              <p>A inscrição do candidato no Processo Seletivo se dá mediante o preenchimento e assinatura das partes do Documento de Inscrição e entrega ao escritório do YEP D4510, no prazo estipulado, acompanhado dos documentos exigidos e comprovante do pagamento da taxa de inscrição.</p>
              <p>Os intercâmbios do Rotary são organizados de clube a clube em escala global. Para se inscrever, você precisa do apoio de um clube patrocinador local. Durante sua viagem, será acolhido por um clube anfitrião. Para encontrar um clube patrocinador em sua cidade e obter mais informações, envie uma mensagem <a href="https://wa.me/5518996527252" target="_blank" rel="noreferrer">CLICANDO AQUI <i className="fab fa-whatsapp"></i></a> ou preencha o formulário de cadastro ao final desta página.</p>

              <h1 className="mb-2 inscr-topico"><strong>Duração do programa</strong></h1>
              <p>Este programa é ideal para o período de férias, conforme indica o próprio nome. Realizado durante as férias escolares, sua duração varia entre 4 a 7 semanas. Esse intervalo depende da agenda específica de atividades, da decisão de participar ou não em passeios adicionais ao término do programa (pós-tour), e do país de destino escolhido.</p>

              <h1 className="mb-2 inscr-topico"><strong>Programa família a família</strong></h1>
              <p>Este programa se distingue do programa de longa duração por adotar um modelo de intercâmbio baseado na reciprocidade familiar. Nele, o estudante internacional é acolhido pela família do estudante brasileiro em sua casa. Posteriormente, essa mesma família estrangeira hospeda o intercambista brasileiro em sua residência, promovendo uma troca cultural direta e enriquecedora entre as duas partes.</p>

              <h1 className="mb-2 inscr-topico"><strong>Idade para participação</strong></h1>
              <p>Em relação à faixa etária para participação no programa, aceitamos jovens até 18 anos de idade, no ano de sua viagem.</p>
              
              <h1 className="mb-2 inscr-topico mt-4"><strong>A seleção dos candidatos</strong></h1>
              <p>O processo de seleção dos participantes neste programa difere do utilizado no programa de longa duração, pois esse adota um método baseado em matching. Esse procedimento visa identificar a compatibilidade entre os candidatos, analisando aspectos como afinidades, interesses, gênero e idade. Para a aceitação dos estudantes, tanto estrangeiros quanto brasileiros, é crucial que exista uma consonância desses fatores e um consentimento mútuo entre ambas as partes</p>

              <h1 className="mb-2 inscr-topico"><strong>Reuniões de Orientação e Treinamento e Eventos</strong></h1>
              <h1 className="mb-2 inscr-topico"><strong>1ª Reunião de Orientação</strong></h1>
              <p><strong>Data/Hora:</strong> Data e horário a ser definido - Vide <Link to="/eventos">Calendário</Link>.</p>
              <p><strong>Local:</strong> Presencial e a ser definido.</p>
              <p><strong>Participantes:</strong> candidatos ou representantes.</p>

              <h1 className="mb-2 inscr-topico"><strong>2ª, 3ª e 4ª Reuniões de Orientação</strong></h1>
              <p>As datas e os horários serão estabelecidos pelo Coordenador do Programa de Curta Duração. A comunicação das informações ocorrerá por meio de contato direto em um grupo de WhatsApp e também através de e-mails.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Curta End */}

      {/* Bolsa Start */}
      <div className="container-fluid about py-3" id="item03">
        <div className="container py-3">
          <div className="row g-5 alinha3">
            <div className="col-12">
              <div className="ali-fig mb-4">
                <img src="/img/inscricao-down-5.png" className="img-fluid" style={{ maxHeight: '400px' }} alt="Bolsa" />
              </div>
            </div>
            <div className="col-12 ali-text">
              <h5 className="text-uppercase text-primary">PROGRAMA DE BOLSA DE LONGA DURAÇÃO</h5>
              <h1 className="mb-2 inscr-topico"><strong>O Programa de Bolsa de intercâmbio do Rotary</strong></h1>
              <p>O Programa de Bolsa de Intercâmbio do Rotary, disponível no Distrito 4510, é uma iniciativa singular voltada para jovens que desejam vivenciar uma rica experiência cultural e educacional no exterior. Destinado a estudantes do ensino médio, oriundos de escolas públicas e com comprovada necessidade financeira, o programa promove um ano acadêmico em países com os quais o Distrito 4510 mantém acordos de parceria. A participação é exclusiva para residentes dentro dos limites geográficos do Distrito 4510 de Rotary International, abrangendo 38 municípios no sudoeste do Estado de São Paulo.</p>
              <h1 className="mb-2 inscr-topico"><strong>A Inscrição para o programa</strong></h1>
              <p>A inscrição do candidato no Processo Seletivo se dá mediante o preenchimento e assinatura das partes do Documento de Inscrição e entrega ao escritório do YEP D4510, no prazo estipulado, acompanhado dos documentos exigidos e comprovante do pagamento da taxa de inscrição.</p>
              <p>Os intercâmbios do Rotary são organizados de clube a clube em escala global. Para se inscrever, você precisa do apoio de um clube patrocinador local. Durante sua viagem, será acolhido por um clube anfitrião. Para encontrar um clube patrocinador em sua cidade e obter mais informações, envie uma mensagem <a href="https://wa.me/5518996527252" target="_blank" rel="noreferrer">CLICANDO AQUI <i className="fab fa-whatsapp"></i></a> ou preencha o formulário de cadastro ao final desta página.</p>
              <h1 className="mb-2 inscr-topico"><strong>Duração do programa</strong></h1>
              <p>Este programa tem a duração de um ano acadêmico, que pode variar entre 10 a 11 meses, dependendo da escola e do país de destino. Para intercambistas destinados ao hemisfério norte, o período acadêmico começa em agosto, com retorno previsto para junho do ano seguinte. Aqueles que escolhem países do hemisfério sul, como Austrália e Nova Zelândia, iniciam o intercâmbio entre o final de janeiro e início de fevereiro, finalizando em novembro.</p>
              <h1 className="mb-2 inscr-topico"><strong>A reciprocidade do anfitrionamento</strong></h1>
              <p>O clube patrocinador do bolsista é responsábel por recrutar e selecionar famílias voluntárias para anfitrionar um estudante estrangeiro.</p>
              <h1 className="mb-2 inscr-topico"><strong>Idade para participação</strong></h1>
              <p>Para a seleção de candidatos deste programa, é importante destacar que a maioria dos países não aceita participantes que iniciem o intercâmbio aos 18 anos ou mais. Assim, para o ano de 2024, serão elegíveis:</p> 
              <p>&rArr; Os candidatos nascidos a partir de 1 de janeiro de 2009, que tenham concluído o 9º ano do ensino fundamental.</p>
              <p>&rArr; Os candidatos nascidos a partir de 1 de janeiro de 2009, que também tenham concluído o 9º ano do ensino fundamental, estão aptos a participar. No entanto, sua aceitação estará condicionada à disponibilidade de vagas.</p>
              
              <h1 className="mb-2 inscr-topico mt-4"><strong>O Processo de Seleção</strong></h1>
              <p>Após a inscrição e a devida qualificação, o candidato será submetido a um processo seletivo desenvolvido especificamente para aqueles que aspiram a uma Bolsa de Intercâmbio. Esse processo tem como objetivo definir um ranking entre todos os participantes, facilitando assim a alocação das vagas de intercâmbio disponíveis de acordo com a ordem de classificação alcançada.</p>
              <h1 className="mb-2 inscr-topico"><strong>O processo seletivo será constituído de:</strong></h1>
              <ul>
                <li>Provas escritas realizadas pelo YEP D4510 em data, local, horário e formato que forem estabelecidos;</li>
                <li>Análise do histórico escolar do candidato, com apuração e consideração da sua nota média anual.</li>
                <li>Participação do(s) RESPONSÁVEL(IS) LEGAL(IS) do candidato em reuniões de treinamento e orientações que ocorrerão durante as etapas ao longo do período de preparação para o intercâmbio.</li>
                <li>Participação do candidato e do(s) RESPONSÁVEIS LEGAIS do candidato em reuniões do Rotary Clube Patrocinador, até o dia anterior a realização das provas de seleção.</li>
              </ul>
              <h1 className="mb-2 inscr-topico"><strong>Os critérios adotados para a classificação no Processo Seletivo são:</strong></h1>
              <ul>
                <li>500 Pontos para a média do histórico escolar do último ano concluído;</li>
                <li>100 Pontos para a participação dos responsáveis legais no primeiro treinamento de candidatos e famílias que consta do calendário do YEP D4510, sendo 50 pontos para a participação da mãe do candidato e 50 para o pai, ou RESPONSÁVEIS LEGAIS.</li>
                <li>10 Pontos para a participação do candidato e de seus responsáveis legais em reuniões do Rotary Clube Patrocinador, realizadas até o dia anterior à execução das provas de seleção. Serão atribuídos 2,5 pontos por reunião, considerando-se, para pontuação, um máximo de 4 reuniões.</li>
                <li>500 Pontos para as Provas de Avaliação de Conhecimento, com a seguinte distribuição:</li>
                <ul>
                  <li>200 pontos para inglês;</li>
                  <li>100 pontos para português;</li>
                  <li>100 pontos para assuntos de Rotary;</li>
                  <li>100 pontos para cidadania e civismo.</li>
                  <li>100 pontos para conhecimentos gerais</li>
                </ul>
              </ul>
              <h1 className="mb-2 inscr-topico"><strong>Atenção:</strong></h1>
              <p>A inscrição e a participação no Processo Seletivo não asseguram ao candidato, por si só, a efetiva e incondicional realização do intercâmbio coordenado pelo YEP D4510.</p>
              <p>Cumprida a fase do processo seletivo, ao candidato será atribuída uma vaga para realizar o intercâmbio, de sua escolha dentre aquelas que lhe forem disponibilizadas pelo YEP D4510.</p>   
            </div>
          </div>
        </div>
      </div>
      {/* Bolsa End */}

      {/* NGSE Start */}
      <div className="container-fluid about py-3" id="item04">
        <div className="container py-3">
          <div className="row g-5 alinha3">
            <div className="col-12">
              <div className="ali-fig mb-4">
                <img src="/img/inscricao-down-5.png" className="img-fluid" style={{ maxHeight: '400px' }} alt="NGSE" />
              </div>
            </div>
            <div className="col-12 ali-text">
              <h5 className="text-uppercase text-primary">Programa de Intercâmbio de Novas Gerações</h5>
              <p>Descubra como se inscrever para candidatar-se ao Programa de Intercâmbio de Novas Gerações do Rotary! Uma jornada de desenvolvimento cultural e profissional espera por você.</p>
              <h1 className="mb-2 inscr-topico"><strong>Modalidade e particularidades</strong></h1>
              <p>O programa NGSE, estruturado em uma rede global de clubes de Rotary, exige que os candidatos obtenham o apoio de um clube patrocinador em sua região. Uma vez no exterior, o intercambista será recebido por um clube anfitrião. Para mais detalhes fale com o coordenador desse programa e encontre um clube patrocinador para iniciar sua inscrição, <a href="https://wa.me/5518996527252" target="_blank" rel="noreferrer">CLIQUE AQUI <i className="fab fa-whatsapp"></i></a> ou preencha o formulário disponível no fim desta página.</p>
              <h1 className="mb-2 inscr-topico"><strong>Exigência de escolaridade</strong></h1>
              <p>Os candidatos, preferencialmente estudantes universitários com ao menos metade do curso concluído, são selecionados para participar em projetos colaborativos, desenvolvidos em parceria entre o comitê distrital, os clubes locais e os próprios candidatos.</p>
              <h1 className="mb-2 inscr-topico"><strong>O Anfitrionamento do estudante estrangeiro</strong></h1>
              <p>No que se refere ao acolhimento, as famílias anfitriãs desempenham um papel crucial, sendo o anfitrionamento obrigatório, assegurando que os intercambistas sejam integrados como membros da família e participem ativamente da vida cotidiana e cultural.</p>
              <h1 className="mb-2 inscr-topico"><strong>Duração do intercâmbio</strong></h1>
              <p>Os intercâmbios do NGSE podem variar de três semanas a três meses, dependendo das disponibilidades e compromissos educacionais, profissionais e familiares dos candidatos. Esta flexibilidade permite que tanto os participantes quanto as famílias anfitriãs se beneficiem de uma experiência rica e mutuamente gratificante, alinhada aos seus interesses e capacidades.</p>
              <p>O NGSE do Rotary é uma oportunidade extraordinária para jovens de todo o mundo se engajarem em um aprendizado intercultural profundo, estabelecendo conexões globais e desenvolvendo competências profissionais em um ambiente acolhedor e colaborativo.</p>
              <h1 className="mb-2 inscr-topico"><strong>Países com maior possibilidade para o programa Novas Gerações</strong></h1>
              <p>Os países com maior disponibilidade de vagas para intercâmbios de curta duração, que são nossos parceiros frequentes, incluem Alemanha, EUA, Equador, Hungria, México e Suécia. Há também parceiros ocasionais como França, Canadá, Itália, Holanda e Taiwan, que podem ofertar vagas esporadicamente. Es importante notar que novos parceiros podem ser adicionados à lista com o tempo.</p>
            </div>
          </div>
        </div>
      </div>
      {/* NGSE End */}
    </>
  );
};

export default ProgramasPage;
