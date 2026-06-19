import React from 'react';
import Icon from './Icon';
import { Service } from '../types';

interface ServiceCardProps {
  key?: string;
  service: Service;
  onExplore: (service: Service) => void;
  onAddToCart: (service: Service) => void;
  isInCart: boolean;
}

export default function ServiceCard({
  service,
  onExplore,
  onAddToCart,
  isInCart
}: ServiceCardProps) {
  // map dynamic colored backgrounds for service categories
  const categoryColors: { [key: string]: string } = {
    'General Support': 'from-blue-600 to-indigo-700',
    'Cloud Services': 'from-cyan-500 to-blue-600',
    'Development': 'from-primary-600 to-green-700',
    'Consultancy': 'from-indigo-600 to-purple-700',
    'Enterprise Support': 'from-emerald-500 to-teal-700',
    'Custom Hardware': 'from-amber-500 to-orange-600',
    'Network Storage': 'from-purple-600 to-pink-700'
  };

  const bgGradient = categoryColors[service.category] || 'from-primary-600 to-primary-800';

  return (
    <article className="group flex flex-col h-full bg-neutral-900 rounded-2xl border border-neutral-800/60 overflow-hidden shadow-xs hover:shadow-lg hover:border-neutral-700/80 hover:-translate-y-0.5 transition-all duration-300">
      {/* Visual header with image/icon integration */}
      <div className="h-28 p-5 flex items-end justify-between relative overflow-hidden bg-neutral-950">
        {/* Background image provision with gradients */}
        {service.imageUrl ? (
          <img
            src={service.imageUrl}
            alt={service.name}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-60`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-transparent" />

        <div className="relative z-10 h-10 w-10 bg-white/5 backdrop-blur-md border border-white/15 rounded-xl flex items-center justify-center text-white shadow-xs">
          <Icon name={service.iconName} size={20} />
        </div>
        <span className="relative z-10 text-[10px] uppercase font-extrabold tracking-wider bg-primary-600 text-white px-2.5 py-1 rounded-full shadow-sm backdrop-blur-xs">
          {service.category}
        </span>
      </div>

      {/* Card body & details content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="font-heading text-lg font-bold text-neutral-150 tracking-tight leading-snug">
            {service.name}
          </h3>
          <p className="text-xs text-neutral-400 font-normal leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="space-y-4 border-t border-neutral-800/60 pt-4 mt-4">
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-xl font-extrabold text-primary-400">
              KES {service.price.toLocaleString('en-KE')}
            </span>
            <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
              / {service.unit}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onExplore(service)}
              className="px-3 py-2.5 bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 hover:text-white text-neutral-200 font-bold text-xs rounded-full transition-all active:scale-[0.98] flex items-center justify-center gap-1"
            >
              <Icon name="BookOpen" size={12} /> Explore
            </button>
            <button
              onClick={() => onAddToCart(service)}
              className={`px-3 py-2.5 rounded-full font-bold text-xs transition-all active:scale-[0.98] flex items-center justify-center gap-1 ${
                isInCart
                  ? 'bg-primary-950/40 border border-primary-900/60 text-primary-450'
                  : 'bg-primary-500 hover:bg-primary-600 text-white shadow-xs shadow-primary-500/10'
              }`}
            >
              <Icon name={isInCart ? 'Check' : 'ShoppingCart'} size={12} />
              {isInCart ? 'In Cart' : 'Get Quote'}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
