import { Phone, Mail, MapPin, Clock } from "lucide-react";
import retroPhone from "../assets/retro-phone.webp";
import { usePageMeta } from "../lib/usePageMeta";

export default function Contact() {
  usePageMeta(
    "Contact",
    "Reach Native254 on WhatsApp, email or in person in Nairobi for IT solutions and course enquiries."
  );

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const message = form.message.value.trim();
    const body = `From: ${name}\n\n${message}`;
    window.location.href = `mailto:info.native@gmail.com?subject=${encodeURIComponent(
      "Website enquiry — Native254"
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="bg-ink grain">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="mono-eyebrow text-yolk mb-2">Contact</p>
          <h1 className="font-display font-black text-4xl md:text-5xl text-paper leading-tight">
            Tell us what's broken
            <br /> or what you want to learn.
          </h1>
          <p className="mt-4 text-steel max-w-md leading-relaxed">
            We reply fastest on WhatsApp. For quotes, include your location
            and a short description of the problem or the course you're
            after.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <img
              src={retroPhone}
              alt="Retro corded telephone"
              className="w-52"
              loading="lazy"
            />
          </div>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-paper">
              <span className="w-10 h-10 rounded-sm border border-line flex items-center justify-center text-yolk shrink-0">
                <Phone size={18} />
              </span>
              <a href="https://wa.me/254716369996" className="hover:text-yolk">
                0716 369 996 — WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3 text-paper">
              <span className="w-10 h-10 rounded-sm border border-line flex items-center justify-center text-yolk shrink-0">
                <Mail size={18} />
              </span>
              <a href="mailto:info.native@gmail.com" className="hover:text-yolk break-all">
                info.native@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-paper">
              <span className="w-10 h-10 rounded-sm border border-line flex items-center justify-center text-yolk shrink-0">
                <MapPin size={18} />
              </span>
              Nairobi, Kenya
            </li>
            <li className="flex items-center gap-3 text-paper">
              <span className="w-10 h-10 rounded-sm border border-line flex items-center justify-center text-yolk shrink-0">
                <Clock size={18} />
              </span>
              Mon–Fri 8:00–18:00 · Sat 9:00–15:00
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-ink2 border border-line rounded-md p-6 md:p-8 space-y-5 h-fit"
        >
          <div>
            <label htmlFor="name" className="mono-eyebrow text-steel block mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-ink border border-line rounded-sm px-4 py-3 text-paper placeholder:text-steel/60 focus:border-yolk outline-none"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mono-eyebrow text-steel block mb-2">
              Phone or email
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              required
              className="w-full bg-ink border border-line rounded-sm px-4 py-3 text-paper placeholder:text-steel/60 focus:border-yolk outline-none"
              placeholder="07xx xxx xxx"
            />
          </div>
          <div>
            <label htmlFor="message" className="mono-eyebrow text-steel block mb-2">
              What do you need?
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-ink border border-line rounded-sm px-4 py-3 text-paper placeholder:text-steel/60 focus:border-yolk outline-none resize-none"
              placeholder="e.g. My laptop won't boot past the logo screen"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yolk text-ink font-mono font-bold px-5 py-3 rounded-sm hover:bg-paper transition-colors"
          >
            Send enquiry
          </button>
          <p className="text-xs text-steel">
            This opens your email app with the message pre-filled to
            info.native@gmail.com.
          </p>
        </form>
      </div>
    </section>
  );
}
