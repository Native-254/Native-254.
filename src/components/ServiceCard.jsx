import { useState } from "react";
import { ChevronDown, ShoppingCart, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ServiceCard({ service }) {
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAdd() {
    addItem(service, "IT Solution");
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <article className="card-tilt bg-ink2 border border-line rounded-md overflow-hidden shadow-hard flex flex-col">
      {/* image-integrated header */}
      <div className="relative">
        <img
          src={service.image}
          alt={`${service.title} illustration`}
          loading="lazy"
          className="w-full h-48 object-cover"
        />
        {service.badge && (
          <span className="absolute top-3 left-3 bg-ink/90 border border-yolk text-yolk mono-eyebrow px-2.5 py-1 rounded-full">
            {service.badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-2xl leading-tight text-paper">
          {service.title}
        </h3>
        <p className="text-sm text-yolk font-mono mt-1">{service.tagline}</p>
        <p className="text-sm text-steel mt-3 leading-relaxed">
          {service.description}
        </p>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-4 inline-flex items-center gap-1.5 mono-eyebrow text-steel hover:text-yolk transition-colors self-start"
        >
          {open ? "Hide details" : "What's included"}
          <ChevronDown
            size={14}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <ul className="mt-3 space-y-1.5 border-t border-line pt-3">
            {service.bullets.map((b) => (
              <li key={b} className="text-sm text-paper flex gap-2">
                <Check size={15} className="text-yolk shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 pt-4 border-t border-line flex items-center justify-between gap-3">
          <div>
            <span className="block font-mono font-bold text-lg text-paper">
              {service.priceLabel}
            </span>
            {service.priceNote && (
              <span className="block text-xs text-steel">{service.priceNote}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              className="px-3 py-2 rounded-sm border border-line text-xs mono-eyebrow text-steel hover:text-paper hover:border-paper transition-colors"
            >
              Explore
            </button>
            <button
              onClick={handleAdd}
              className="px-3 py-2 rounded-sm bg-yolk text-ink text-xs mono-eyebrow font-bold flex items-center gap-1.5 hover:bg-paper transition-colors"
            >
              {added ? <Check size={14} /> : <ShoppingCart size={14} />}
              {added ? "Added" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
