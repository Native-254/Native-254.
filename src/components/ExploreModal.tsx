import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Icon from './Icon';
import { Service, Course } from '../types';

interface ExploreModalProps {
  item: Service | Course | null;
  type: 'service' | 'course' | null;
  onClose: () => void;
  onAddToCart: (item: Service | Course, type: 'service' | 'course') => void;
  isInCart: boolean;
}

export default function ExploreModal({
  item,
  type,
  onClose,
  onAddToCart,
  isInCart
}: ExploreModalProps) {
  if (!item || !type) return null;

  const isService = type === 'service';
  const service = item as Service;
  const course = item as Course;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          {/* Header Banner Design */}
          <div className="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 p-8 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full bg-black/10 p-2 text-white/80 transition-colors hover:bg-black/20 hover:text-white"
              aria-label="Close details"
            >
              <Icon name="X" size={18} />
            </button>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
              <Icon name={item.iconName} className="text-white" size={24} />
            </div>
            <p className="text-xs font-semibold tracking-wider uppercase text-primary-100/80">
              {isService ? service.category : 'Professional Training'}
            </p>
            <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight">
              {item.name}
            </h2>
          </div>

          {/* Details Body */}
          <div className="p-6 md:p-8">
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-400">
                  Detailed Overview
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {isService ? service.longDescription : course.description}
                </p>
              </div>

              {!isService && course.topics && (
                <div>
                  <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-400 mb-2">
                    Curriculum Modules
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 text-xs text-neutral-600 sm:grid-cols-2">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex gap-2 items-start bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                        <span className="text-primary-500 font-bold">✓</span>
                        <span>{topic.split(':')[0]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-neutral-100 pt-5">
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Estimated Pricing</p>
                  <div className="font-heading text-2xl font-extrabold text-primary-500 mt-1">
                    KES {item.price.toLocaleString('en-KE')}
                    <span className="text-xs font-semibold text-neutral-400 ml-1">
                      / {item.unit}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      onAddToCart(item, type);
                      onClose();
                    }}
                    disabled={isInCart}
                    className={`btn px-6 py-3 flex items-center gap-2 rounded-full font-semibold text-sm transition-all ${
                      isInCart
                        ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200'
                        : 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/20 active:scale-[0.98]'
                    }`}
                  >
                    {isInCart ? (
                      <>
                        <Icon name="Check" size={16} /> Added to Cart
                      </>
                    ) : (
                      <>
                        <Icon name="ShoppingCart" size={16} /> Add to Cart (KES {item.price.toLocaleString('en-KE')})
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
