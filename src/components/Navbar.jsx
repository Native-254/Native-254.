import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "IT Solutions" },
  { to: "/courses", label: "Courses" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `mono-eyebrow px-1 py-2 border-b-2 transition-colors ${
      isActive
        ? "border-yolk text-paper"
        : "border-transparent text-steel hover:text-paper hover:border-line"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-line">
      <nav
        className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 h-20"
        aria-label="Primary"
      >
        {/* Logo lockup: placeholder image slot + stylised wordmark */}
        <NavLink
          to="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Native254 home"
          onClick={() => setOpen(false)}
        >
          {/* Replace /logo-placeholder.png with the real mark when ready */}
          <img
            src="/logo-placeholder.png"
            alt=""
            aria-hidden="true"
            className="w-10 h-10 rounded-sm border border-line object-cover bg-ink2"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <span className="font-display font-black leading-none flex items-baseline gap-1">
            <span className="text-yolk text-3xl">IT</span>
            <span className="text-paper text-3xl tracking-tight">NATIVE</span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <NavLink
            to="/cart"
            aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
            className="relative inline-flex items-center justify-center w-11 h-11 border border-line rounded-sm hover:border-yolk hover:text-yolk transition-colors"
          >
            <ShoppingCart size={20} strokeWidth={2} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-yolk text-ink text-[11px] font-mono font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center border border-ink">
                {count}
              </span>
            )}
          </NavLink>

          <button
            className="md:hidden inline-flex items-center justify-center w-11 h-11 border border-line rounded-sm"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-ink px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `mono-eyebrow py-3 border-b border-line ${
                  isActive ? "text-yolk" : "text-steel"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
