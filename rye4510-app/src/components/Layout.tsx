import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

interface Props { children: React.ReactNode; }

export default function Layout({ children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide spinner as soon as React has painted the DOM
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Spinner */}
      <div className={`spinner-overlay${loading ? '' : ' hidden'}`}>
        <div className="spinner-ring" />
      </div>

      <Navbar />

      <main className="page-wrapper">{children}</main>

      <Footer />
      <BackToTop />
    </>
  );
}
