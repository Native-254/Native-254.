import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Solutions = lazy(() => import("./pages/Solutions"));
const Courses = lazy(() => import("./pages/Courses"));
const Cart = lazy(() => import("./pages/Cart"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RouteFallback() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-24">
      <p className="mono-eyebrow text-steel">Loading…</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] bg-yolk text-ink px-4 py-2 rounded-sm font-mono"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
