import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

export default function PolicyPage({ metaTitle, metaDescription, title, intro, sections }) {
  usePageMeta(metaTitle, metaDescription);

  return (
    <section className="bg-ink grain">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-steel hover:text-yolk transition-colors"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="mt-6 rounded-md border border-line bg-ink2/80 p-6 md:p-10">
          <p className="mono-eyebrow text-yolk">Legal</p>
          <h1 className="mt-3 font-display font-black text-3xl md:text-4xl text-paper leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-steel max-w-3xl leading-relaxed">{intro}</p>

          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="font-display font-bold text-xl text-paper">
                  {section.heading}
                </h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm md:text-base text-steel leading-7">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 space-y-2 text-sm md:text-base text-steel leading-7 list-disc pl-5">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
