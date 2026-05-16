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
import BlogPostDetail from './pages/BlogPostDetail';
import GaleriaPage from './pages/GaleriaPage';
import VoluntariosPage from './pages/VoluntariosPage';
import ClubesPage from './pages/ClubesPage';
import ClubesIframePage from './pages/ClubesIframePage';
import TreinamentosClubesPage from './pages/TreinamentosClubesPage';
import DownloadsClubesPage from './pages/DownloadsClubesPage';
import HomeEnPage from './pages/HomeEnPage';
import LoginPage from './pages/LoginPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlogList from './pages/admin/AdminBlogList';
import AdminBlogEditor from './pages/admin/AdminBlogEditor';
import AdminUsers from './pages/admin/AdminUsers';
import AdminGallery from './pages/admin/AdminGallery';
import AdminEvents from './pages/admin/AdminEvents';
import AdminEventEditor from './pages/admin/AdminEventEditor';

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
          <Route path="/blog/:slug"              element={<BlogPostDetail />} />
          <Route path="/galeria"                 element={<GaleriaPage />} />
          <Route path="/voluntarios"             element={<VoluntariosPage />} />
          <Route path="/inscricao"               element={<InscricaoPage />} />

          {/* Contato */}
          <Route path="/contato"                 element={<ContatoPage />} />
          <Route path="/login"                   element={<LoginPage />} />

          {/* 404 */}
          <Route path="*"                        element={<HomePage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="blog" element={<AdminBlogList />} />
          <Route path="blog/new" element={<AdminBlogEditor />} />
          <Route path="blog/edit/:id" element={<AdminBlogEditor />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="events/new" element={<AdminEventEditor />} />
          <Route path="events/edit/:id" element={<AdminEventEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
