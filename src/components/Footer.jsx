import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line mt-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <span className="font-display font-black text-2xl flex items-baseline gap-1">
            <span className="text-yolk">IT</span>
            <span className="text-paper">NATIVE</span>
          </span>
          <p className="mt-3 text-sm text-steel max-w-xs">
            Practical IT solutions and hands-on tech skills, built for Nairobi
            homes, offices and students.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mono-eyebrow text-steel mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/solutions" className="hover:text-yolk">IT Solutions</NavLink></li>
            <li><NavLink to="/courses" className="hover:text-yolk">Courses</NavLink></li>
            <li><NavLink to="/cart" className="hover:text-yolk">Cart</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-yolk">Contact</NavLink></li>
          </ul>
        </nav>

        <div>
          <p className="mono-eyebrow text-steel mb-3">Reach us</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-yolk shrink-0" />
              <a href="https://wa.me/254716369996" className="hover:text-yolk">
                0716 369 996 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-yolk shrink-0" />
              <a href="mailto:info.native@gmail.com" className="hover:text-yolk break-all">
                info.native@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-yolk shrink-0" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="mono-eyebrow text-steel mb-3">Hours</p>
          <ul className="space-y-1 text-sm text-steel">
            <li>Mon – Fri · 8:00 – 18:00</li>
            <li>Sat · 9:00 – 15:00</li>
            <li>Sun · Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-5 md:px-8 py-5 text-xs text-steel font-mono flex flex-col sm:flex-row gap-2 justify-between max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center gap-3">
          <span>© {new Date().getFullYear()} Native254. All rights reserved.</span>
          <NavLink to="/terms" className="hover:text-yolk">Terms</NavLink>
          <NavLink to="/privacy" className="hover:text-yolk">Privacy</NavLink>
        </div>
        <span>Built in Nairobi.</span>
      </div>
    </footer>
  );
}
