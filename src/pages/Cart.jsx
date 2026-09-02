import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, Download, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatKES, makeInvoiceNumber } from "../lib/format";
import { downloadInvoice } from "../lib/invoice";
import wireCart from "../assets/wire-cart.webp";
import cashStack from "../assets/cash-stack.webp";
import { usePageMeta } from "../lib/usePageMeta";
import { company, paymentMethods } from "../data/company";

export default function Cart() {
  usePageMeta("Your Cart", "Review your selected IT solutions and courses, choose a payment method and confirm your order.");

  const { items, removeItem, setQty, total, clearCart } = useCart();
  const [method, setMethod] = useState(paymentMethods[0].id);
  const [invoiceNo] = useState(() => makeInvoiceNumber());
  const [generating, setGenerating] = useState(false);

  const methodLabel = useMemo(
    () => paymentMethods.find((m) => m.id === method)?.label ?? "",
    [method]
  );

  const messageBody = useMemo(() => {
    const lines = items.map(
      (i) => `- ${i.title} (${i.category}) x${i.qty} — ${formatKES(i.price * i.qty)}`
    );
    return [
      `Native254 order — Invoice ${invoiceNo}`,
      ...lines,
      `Total: ${formatKES(total)}`,
      `Payment method: ${methodLabel}`,
    ].join("\n");
  }, [items, total, methodLabel, invoiceNo]);

  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(messageBody)}`;
  const emailHref = `mailto:${company.email}?subject=${encodeURIComponent(
    `Native254 order — Invoice ${invoiceNo}`
  )}&body=${encodeURIComponent(messageBody)}`;

  if (items.length === 0) {
    return (
      <section className="max-w-3xl mx-auto px-5 md:px-8 py-20 text-center">
        <img
          src={wireCart}
          alt=""
          aria-hidden="true"
          className="w-40 mx-auto mb-6 opacity-90"
        />
        <h1 className="font-display font-black text-3xl md:text-4xl text-paper">
          Your cart is empty.
        </h1>
        <p className="mt-3 text-steel">
          Add an IT solution or a course to see your total here.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 bg-yolk text-ink font-mono font-bold px-5 py-3 rounded-sm hover:bg-paper transition-colors"
          >
            Browse IT Solutions <ArrowRight size={16} />
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 border border-line text-paper font-mono px-5 py-3 rounded-sm hover:border-yolk hover:text-yolk transition-colors"
          >
            Browse courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <p className="mono-eyebrow text-yolk mb-2">Checkout</p>
      <h1 className="font-display font-black text-4xl md:text-5xl text-paper">
        Your cart
      </h1>

      <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
        {/* Items list */}
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-ink2 border border-line rounded-md p-4 flex items-center gap-4 flex-wrap"
            >
              <div className="flex-1 min-w-[160px]">
                <span className="mono-eyebrow text-steel">{item.category}</span>
                <p className="font-display font-bold text-xl text-paper leading-tight mt-0.5">
                  {item.title}
                </p>
                <p className="text-sm text-yolk font-mono mt-1">
                  {formatKES(item.price)} each
                </p>
              </div>

              <div className="flex items-center border border-line rounded-sm">
                <button
                  aria-label={`Decrease quantity of ${item.title}`}
                  onClick={() => setQty(item.id, item.qty - 1)}
                  className="w-9 h-9 flex items-center justify-center text-steel hover:text-paper"
                >
                  <Minus size={14} />
                </button>
                <span className="w-9 text-center font-mono text-paper">{item.qty}</span>
                <button
                  aria-label={`Increase quantity of ${item.title}`}
                  onClick={() => setQty(item.id, item.qty + 1)}
                  className="w-9 h-9 flex items-center justify-center text-steel hover:text-paper"
                >
                  <Plus size={14} />
                </button>
              </div>

              <p className="font-mono font-bold text-paper w-28 text-right">
                {formatKES(item.price * item.qty)}
              </p>

              <button
                aria-label={`Remove ${item.title} from cart`}
                onClick={() => removeItem(item.id)}
                className="text-steel hover:text-rust transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="mono-eyebrow text-steel hover:text-rust"
          >
            Clear cart
          </button>
        </div>

        {/* Receipt / summary panel */}
        <div className="bg-paper text-ink rounded-md p-6 md:p-7 shadow-hard font-mono">
          <div className="flex justify-between items-baseline border-b border-dashed border-ink/30 pb-3">
            <span className="font-display font-black text-lg tracking-tight">
              NATIVE254 RECEIPT
            </span>
            <span className="text-xs text-ink/60">#{invoiceNo}</span>
          </div>

          <div className="py-4 space-y-2 border-b border-dashed border-ink/30">
            {items.map((i) => (
              <div key={i.id} className="flex justify-between text-sm gap-2">
                <span className="truncate">
                  {i.title} ×{i.qty}
                </span>
                <span>{formatKES(i.price * i.qty)}</span>
              </div>
            ))}
          </div>

          <div className="py-4 flex justify-between items-center border-b border-dashed border-ink/30">
            <span className="font-bold text-base">Total due</span>
            <span className="font-bold text-xl">{formatKES(total)}</span>
          </div>

          <div className="py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/60 mb-3">
              Payment method
            </p>
            <div className="space-y-2">
              {paymentMethods.map((m) => (
                <label
                  key={m.id}
                  className={`flex items-start gap-3 border rounded-sm p-3 cursor-pointer transition-colors ${
                    method === m.id
                      ? "border-ink bg-white"
                      : "border-ink/20 hover:border-ink/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value={m.id}
                    checked={method === m.id}
                    onChange={() => setMethod(m.id)}
                    className="mt-1 accent-black"
                  />
                  <span>
                    <span className="block text-sm font-bold">{m.label}</span>
                    <span className="block text-xs text-ink/60">{m.detail}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-center py-2">
            <img src={cashStack} alt="" aria-hidden="true" className="w-24 opacity-80" />
          </div>

          <div className="pt-3 space-y-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-ink text-paper font-bold px-4 py-3 rounded-sm hover:bg-rust transition-colors text-sm"
            >
              <MessageCircle size={16} /> Send payment message on WhatsApp
            </a>
            <a
              href={emailHref}
              className="w-full inline-flex items-center justify-center gap-2 border border-ink px-4 py-3 rounded-sm hover:bg-ink hover:text-paper transition-colors text-sm"
            >
              <Mail size={16} /> Email {company.email}
            </a>
            <button
              onClick={async () => {
                setGenerating(true);
                try {
                  await downloadInvoice({ items, total, paymentMethod: methodLabel });
                } finally {
                  setGenerating(false);
                }
              }}
              disabled={generating}
              className="w-full inline-flex items-center justify-center gap-2 border border-dashed border-ink/40 px-4 py-3 rounded-sm hover:border-ink text-sm disabled:opacity-60"
            >
              <Download size={16} /> {generating ? "Preparing PDF…" : "Download invoice (PDF)"}
            </button>
          </div>

          <p className="text-[11px] text-ink/50 mt-4 leading-relaxed">
            After paying, send your confirmation to {company.whatsappDisplay} on WhatsApp
            or to {company.email}, quoting invoice #{invoiceNo}.
          </p>
        </div>
      </div>
    </section>
  );
}
