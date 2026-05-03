import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import HistoriaPage from './pages/HistoriaPage';
import FamiliasPage from './pages/FamiliasPage';
import EventosPage from './pages/EventosPage';
import ContatoPage from './pages/ContatoPage';
import InscricaoPage from './pages/InscricaoPage';
import ProgramasPage from './pages/ProgramasPage';
import DistritoPage from './pages/DistritoPage';
import TreinamentosPage from './pages/TreinamentosPage';
import BlogPage from './pages/BlogPage';
import GaleriaPage from './pages/GaleriaPage';
import VoluntariosPage from './pages/VoluntariosPage';
import ClubesPage from './pages/ClubesPage';
import ClubesIframePage from './pages/ClubesIframePage';
import TreinamentosClubesPage from './pages/TreinamentosClubesPage';
import DownloadsClubesPage from './pages/DownloadsClubesPage';
import HomeEnPage from './pages/HomeEnPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Iframe Route (No Layout) */}
        <Route path="/iframe/clubes" element={<ClubesIframePage />} />

        {/* Regular Site Routes (With Layout) */}
        <Route element={<Layout><Outlet /></Layout>}>
          {/* Home */}
          <Route path="/"                        element={<HomePage />} />
          <Route path="/en"                      element={<HomeEnPage />} />

          {/* Sobre nós */}
          <Route path="/historia"                element={<HistoriaPage />} />
          <Route path="/d4510"                   element={<DistritoPage />} />
          <Route path="/d4510/clubes"            element={<ClubesPage />} />

          {/* Candidatos */}
          <Route path="/programas"               element={<ProgramasPage />} />
          <Route path="/candidatos/treinamentos" element={<TreinamentosPage />} />
          <Route path="/candidatos/downloads"    element={<TreinamentosPage />} />

          {/* Famílias */}
          <Route path="/familias"                element={<FamiliasPage />} />

          {/* Clubes */}
          <Route path="/clubes/treinamentos"     element={<TreinamentosClubesPage />} />
          <Route path="/clubes/downloads"        element={<DownloadsClubesPage />} />

          {/* Calendário */}
          <Route path="/eventos"                 element={<EventosPage />} />

          {/* Mais */}
          <Route path="/blog"                    element={<BlogPage />} />
          <Route path="/galeria"                 element={<GaleriaPage />} />
          <Route path="/voluntarios"             element={<VoluntariosPage />} />
          <Route path="/inscricao"               element={<InscricaoPage />} />

          {/* Contato */}
          <Route path="/contato"                 element={<ContatoPage />} />

          {/* 404 */}
          <Route path="*"                        element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
