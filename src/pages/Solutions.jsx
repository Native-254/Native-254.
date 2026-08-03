import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { usePageMeta } from "../lib/usePageMeta";

export default function Solutions() {
  usePageMeta(
    "IT Solutions",
    "Troubleshooting, web hosting, web design, project management, software maintenance, custom PC builds and NAS setup — all priced upfront."
  );

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <p className="mono-eyebrow text-yolk mb-2">IT Solutions</p>
      <h1 className="font-display font-black text-4xl md:text-5xl text-paper max-w-2xl">
        Every service, priced upfront.
      </h1>
      <p className="mt-4 text-steel max-w-xl leading-relaxed">
        Pick what you need below. Add multiple services to one cart — we'll
        tally the total and send you straight to checkout.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </section>
  );
}
