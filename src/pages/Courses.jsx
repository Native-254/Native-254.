import { useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import { usePageMeta } from "../lib/usePageMeta";

export default function Courses() {
  usePageMeta(
    "Education Services",
    "Hands-on courses in Microsoft Office, computer programming and graphic design — small groups, real portfolio outcomes."
  );

  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <p className="mono-eyebrow text-yolk mb-2">Education Services</p>
      <h1 className="font-display font-black text-4xl md:text-5xl text-paper max-w-2xl">
        Learn the tools employers actually ask for.
      </h1>
      <p className="mt-4 text-steel max-w-xl leading-relaxed">
        Three tracks, taught in small groups. Tap "Learn more" on a course to
        see exactly what's covered before you add it to your cart.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {courses.map((c) => (
          <CourseCard
            key={c.id}
            course={c}
            isExpanded={expandedId === c.id}
            isDimmed={expandedId !== null && expandedId !== c.id}
            onToggle={() => setExpandedId(expandedId === c.id ? null : c.id)}
          />
        ))}
      </div>
    </section>
  );
}
