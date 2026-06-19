import React from 'react';
import { motion } from 'motion/react';
import Icon from './Icon';
import { Course } from '../types';

interface CourseSectionProps {
  courses: Course[];
  expandedCourseId: string | null;
  onSelectCourse: (id: string | null) => void;
  onAddToCart: (course: Course) => void;
  isInCart: (id: string) => boolean;
}

export default function CourseSection({
  courses,
  expandedCourseId,
  onSelectCourse,
  onAddToCart,
  isInCart
}: CourseSectionProps) {
  // Course card background themes matched elegance
  const courseThemes: { [key: string]: { grad: string; iconBg: string; accent: string } } = {
    c1: {
      grad: 'from-emerald-800 to-primary-900',
      iconBg: 'bg-emerald-50 text-emerald-600',
      accent: 'text-emerald-500'
    },
    c2: {
      grad: 'from-primary-900 via-primary-800 to-indigo-900',
      iconBg: 'bg-primary-50 text-primary-500',
      accent: 'text-primary-500'
    },
    c3: {
      grad: 'from-gold-600 to-amber-800',
      iconBg: 'bg-gold-50 text-gold-600',
      accent: 'text-gold-500'
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-neutral-900/35 border-t border-b border-neutral-900/80" id="education">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gold-950/30 text-gold-500 border border-gold-900/50">
            <Icon name="Sparkles" size={10} /> Educational Academy
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight mt-3">
            Unlock professional competency
          </h2>
          <p className="font-sans text-neutral-400 text-sm md:text-base mt-2 leading-relaxed">
            Choose specialized curriculum blocks from office computation to scripting. Click a course card to view the comprehensive module lists, study syllabus, and pricing details.
          </p>
        </div>

        {/* Dynamic Horizontal-Expanding Course Grid and blur layout */}
        <div className="flex flex-col lg:flex-row gap-6 relative min-h-[440px]">
          {courses.map((course) => {
            const isExpanded = expandedCourseId === course.id;
            const isAnyExpanded = expandedCourseId !== null;
            const isBlurred = isAnyExpanded && !isExpanded;
            const theme = courseThemes[course.id] || courseThemes.c1;

            return (
              <motion.div
                key={course.id}
                layoutId={`course-container-${course.id}`}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-400 ${
                  isExpanded
                    ? 'flex-[3.5] border-primary-500 shadow-2xl bg-neutral-900 scale-100 z-10'
                    : 'flex-[1] border-neutral-800/60 bg-neutral-900 shadow-xs'
                } ${isBlurred ? 'filter blur-[4px] opacity-40 pointer-events-none scale-95' : 'opacity-100'}`}
              >
                {/* Close Button on Expanded Card */}
                {isExpanded && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCourse(null);
                    }}
                    className="absolute top-4 right-4 z-20 h-8 w-8 rounded-full bg-black/10 hover:bg-black/25 text-white flex items-center justify-center transition-colors"
                    aria-label="Collapse curriculum list"
                  >
                    <Icon name="X" size={16} />
                  </button>
                )}

                {/* Flush Image Integrated Header Box */}
                <div
                  onClick={() => !isExpanded && onSelectCourse(course.id)}
                  className="h-44 p-6 flex flex-col justify-between text-white relative cursor-pointer overflow-hidden bg-neutral-950"
                >
                  {/* Background Image Provision */}
                  {course.imageUrl ? (
                    <img
                      src={course.imageUrl}
                      alt={course.name}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.grad} opacity-60`} />
                  )}
                  {/* Perfect dark high-contrast gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-transparent" />

                  <div className="flex justify-between items-center relative z-10">
                    <div className="h-10 w-10 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white border border-white/15">
                      <Icon name={course.iconName} size={18} />
                    </div>
                    {isExpanded && (
                      <span className="text-[10px] font-bold tracking-widest uppercase bg-primary-500 text-white px-2.5 py-1 rounded-full shadow-sm">
                        Syllabus Selected
                      </span>
                    )}
                  </div>

                  <div className="relative z-10">
                    <p className="text-[9px] font-bold text-white/80 uppercase tracking-widest">
                      Comprehensive Academy Track
                    </p>
                    <h3 className="font-heading text-lg font-extrabold tracking-tight mt-0.5 text-white">
                      {course.name}
                    </h3>
                  </div>
                </div>

                {/* Content body layout */}
                <div className="p-6 flex flex-col justify-between h-[calc(100%-160px)] space-y-4">
                  <div className="space-y-4">
                    {/* Tiny summary description */}
                    <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                      {course.description}
                    </p>

                    {/* Horizontal bullet lists displaying when expanded */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="space-y-3 pt-2 border-t border-neutral-850"
                      >
                        <h4 className="text-[10px] font-bold tracking-wider uppercase text-neutral-500">
                          Course Curriculum Modules:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {course.topics.map((topic, index) => {
                            const [title, details] = topic.split(':');
                            return (
                              <li
                                key={index}
                                className="flex gap-2.5 bg-neutral-950/60 border border-neutral-800/40 p-2.5 rounded-xl text-xs hover:border-neutral-750 transition-colors"
                              >
                                <span className={`font-bold ${theme.accent}`}>•</span>
                                <div className="space-y-0.5">
                                  <strong className="text-neutral-200 font-semibold">{title}</strong>
                                  {details && <p className="text-[10px] text-neutral-500">{details.trim()}</p>}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Actions and Pricing row */}
                  <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 pt-4 border-t border-neutral-800/50">
                    <div>
                      <p className="text-[9px] font-bold tracking-wider uppercase text-neutral-500">Course Cost</p>
                      <div className="font-heading text-xl font-extrabold text-neutral-100 mt-0.5">
                        KES {course.price.toLocaleString('en-KE')}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {!isExpanded && (
                        <button
                          onClick={() => onSelectCourse(course.id)}
                          className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-bold text-xs rounded-full transition-all flex items-center justify-center gap-1 shadow-2xs"
                        >
                          Learn More
                        </button>
                      )}
                      <button
                        onClick={() => onAddToCart(course)}
                        className={`px-4 py-2.5 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                          isInCart(course.id)
                            ? 'bg-primary-950/40 border border-primary-900/60 text-primary-450'
                            : 'bg-primary-500 hover:bg-primary-600 text-white shadow-md shadow-primary-500/10'
                        }`}
                      >
                        <Icon name={isInCart(course.id) ? 'Check' : 'ShoppingCart'} size={12} />
                        {isInCart(course.id) ? 'In Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
