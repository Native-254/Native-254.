import React, { useState, useEffect } from 'react';
import Navbar, { LOGO_URL } from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import CourseSection from './components/CourseSection';
import CartDrawer from './components/CartDrawer';
import ExploreModal from './components/ExploreModal';
import InvoiceModal from './components/InvoiceModal';
import { services, courses } from './servicesData';
import { Service, Course, CartItem, PaymentMethod } from './types';
import Icon from './components/Icon';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('native254_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeExploreItem, setActiveExploreItem] = useState<Service | Course | null>(null);
  const [activeExploreType, setActiveExploreType] = useState<'service' | 'course' | null>(null);
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('whatsapp');

  useEffect(() => {
    localStorage.setItem('native254_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleOpenExplore = (item: Service | Course, type: 'service' | 'course') => {
    setActiveExploreItem(item);
    setActiveExploreType(type);
  };

  const handleCloseExplore = () => {
    setActiveExploreItem(null);
    setActiveExploreType(null);
  };

  const handleAddToCart = (item: Service | Course, type: 'service' | 'course') => {
    if (cartItems.some((c) => c.id === item.id)) return;
    const newItem: CartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      type
    };
    setCartItems((prev) => [...prev, newItem]);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const isItemInCart = (id: string) => cartItems.some((item) => item.id === id);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-primary-500/10 selection:text-primary-400">
      {/* Skip to Content for Accessibility purposes */}
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary-500 text-white px-4 py-2 rounded-lg font-bold text-xs"
      >
        Skip directly to IT services list
      </a>

      {/* Main header block navigation */}
      <Navbar cartCount={cartItems.length} onCartToggle={() => setCartOpen(true)} />

      {/* Hero section */}
      <main id="top">
        <Hero />

        {/* Services / IT Solutions Section */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12" id="services">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary-950/30 text-primary-400 border border-primary-900/50">
              <Icon name="Sparkles" size={10} /> S-Tier Workmanship Guide
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight mt-3">
              Certified desktop specs & hardware solutions
            </h2>
            <p className="font-sans text-neutral-400 text-sm md:text-base mt-2 leading-relaxed">
              Explore professional troubleshooting, secure web design solutions, localized cPanel server cloud hosting, Agile roadmap guidance, or spec matching assembly lines for rendering and AAA gaming consoles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onExplore={(s) => handleOpenExplore(s, 'service')}
                onAddToCart={(s) => handleAddToCart(s, 'service')}
                isInCart={isItemInCart(service.id)}
              />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <CourseSection
          courses={courses}
          expandedCourseId={expandedCourseId}
          onSelectCourse={setExpandedCourseId}
          onAddToCart={(c) => handleAddToCart(c, 'course')}
          isInCart={isItemInCart}
        />

        {/* Value Proposition / trust badge sector */}
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl border border-neutral-800/50 relative overflow-hidden my-12 shadow-xl shadow-primary-950/10">
          <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-white/5 translate-x-12 translate-y-12 blur-md" />
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-bold uppercase text-primary-400 tracking-widest">
              Why Native 254?
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-100">
              A commitment to seamless technical execution.
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We understand the frustrations of technical downtime and outdated software stacks. Native 254 bridges the gap in the industry by offering affordable start-up-tier installations and intensive technical courses.
            </p>
            <div className="flex gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary-950/40 border border-primary-900/60 flex items-center justify-center text-primary-400">
                  <Icon name="Check" size={12} />
                </div>
                <span className="text-xs font-semibold text-neutral-300">100% Client Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary-950/40 border border-primary-900/60 flex items-center justify-center text-primary-400">
                  <Icon name="Check" size={12} />
                </div>
                <span className="text-xs font-semibold text-neutral-300">Experienced Trainers</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Site Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-16 px-6 md:px-12 text-sm text-neutral-400" id="contact">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary-500 flex items-center justify-center text-white font-bold text-md shadow-sm overflow-hidden">
                {LOGO_URL ? (
                  <img
                    src={LOGO_URL}
                    alt="Native 254"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  "N"
                )}
              </div>
              <span className="font-heading text-lg font-extrabold text-neutral-100 tracking-tight">
                Native 254 Techs
              </span>
            </div>
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
              Formed for Kenya to deliver uncompromising IT solutions, custom workstation architecture setups, server storage allocations, and world-class digital courses.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={12} className="text-primary-500" />
                <span>WhatsApp Desk: <span className="font-bold text-neutral-100/90">0716 369 996</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={12} className="text-primary-500" />
                <span>Support Desk: <span className="font-bold text-neutral-100/90">info.native@gmail.com</span></span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-neutral-300 text-xs uppercase tracking-wider">
              Service Offerings
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-500">
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Troubleshooting & Software
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Cloud SSD Web Hosting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Responsive Web Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  TrueNAS Setup Creation
                </a>
              </li>
            </ul>
          </div>

          {/* Location details */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-neutral-300 text-xs uppercase tracking-wider">
              Educational Academies
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-500">
              <li>
                <a href="#education" className="hover:text-primary-400 transition-colors">
                  Advanced Microsoft Excel
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-primary-400 transition-colors">
                  Full-Stack JavaScript Core
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-primary-400 transition-colors">
                  Graphics and Creative Design
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subfooter */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-500">
          <p>© {new Date().getFullYear()} Native 254. Underwritten by Premium Kenya IT Hub setups. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:underline">Privacy Policy</a>
            <a href="#top" className="hover:underline">Terms of Service</a>
            <a href="#top" className="hover:underline">Back to top ↑</a>
          </div>
        </div>
      </footer>

      {/* Cart Drawer sliding panel */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        selectedPayment={selectedPayment}
        onChangePayment={setSelectedPayment}
        onShowInvoice={() => setInvoiceOpen(true)}
        totalPrice={totalPrice}
      />

      {/* Rich descriptive detailed explore modal */}
      {activeExploreItem && (
        <ExploreModal
          item={activeExploreItem}
          type={activeExploreType}
          onClose={handleCloseExplore}
          onAddToCart={handleAddToCart}
          isInCart={isItemInCart(activeExploreItem.id)}
        />
      )}

      {/* Print receipt / Download HTML checkout dialog */}
      <InvoiceModal
        isOpen={invoiceOpen}
        onClose={() => setInvoiceOpen(false)}
        cartItems={cartItems}
        totalPrice={totalPrice}
        paymentMethod={selectedPayment}
      />
    </div>
  );
}
