import { ChevronDown, ShoppingCart, Check, Clock } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CourseCard({ course, isExpanded, isDimmed, onToggle }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAdd(e) {
    e.stopPropagation();
    addItem(course, "Course");
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <article
      className={`bg-ink2 border rounded-md overflow-hidden transition-all duration-300 ease-out
        ${isExpanded ? "md:col-span-3 border-yolk shadow-hardYolk" : "border-line shadow-hard"}
        ${isDimmed ? "blur-[2px] opacity-50 pointer-events-none scale-[0.98]" : ""}
      `}
    >
      <div className={isExpanded ? "md:flex" : ""}>
        {/* image + core info */}
        <div className={isExpanded ? "md:w-2/5 shrink-0" : ""}>
          <div className="relative">
            <img
              src={course.image}
              alt={`${course.title} course illustration`}
              loading="lazy"
              className={`w-full object-cover ${isExpanded ? "h-56 md:h-full" : "h-48"}`}
            />
            <span className="absolute top-3 left-3 bg-ink/90 border border-yolk text-yolk mono-eyebrow px-2.5 py-1 rounded-full">
              {course.priceLabel}
            </span>
          </div>

          <div className="p-5">
            <h3 className="font-display font-bold text-2xl leading-tight text-paper">
              {course.title}
            </h3>
            <p className="text-sm text-yolk font-mono mt-1">{course.tagline}</p>
            <p className="text-sm text-steel mt-3 leading-relaxed">
              {course.description}
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-steel font-mono">
              <Clock size={13} className="text-yolk" /> {course.duration}
            </p>

            <div className="mt-5 flex items-center gap-2">
              <button
                onClick={onToggle}
                aria-expanded={isExpanded}
                className="flex-1 px-3 py-2.5 rounded-sm border border-line text-xs mono-eyebrow text-steel hover:text-paper hover:border-paper transition-colors flex items-center justify-center gap-1.5"
              >
                {isExpanded ? "Show less" : "Learn more"}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>
              <button
                onClick={handleAdd}
                className="flex-1 px-3 py-2.5 rounded-sm bg-yolk text-ink text-xs mono-eyebrow font-bold flex items-center justify-center gap-1.5 hover:bg-paper transition-colors"
              >
                {added ? <Check size={14} /> : <ShoppingCart size={14} />}
                {added ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>

        {/* expanded package breakdown */}
        {isExpanded && (
          <div className="md:w-3/5 border-t md:border-t-0 md:border-l border-line p-5 md:p-7">
            <p className="mono-eyebrow text-yolk mb-4">What's inside</p>
            <ul className="space-y-3">
              {course.packages.map((p) => (
                <li key={p.name} className="flex gap-3">
                  <Check size={16} className="text-yolk shrink-0 mt-0.5" />
                  <div>
                    <p className="text-paper font-semibold text-sm">{p.name}</p>
                    <p className="text-steel text-sm">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
