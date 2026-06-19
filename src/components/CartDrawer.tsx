import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Icon from './Icon';
import { CartItem, PaymentMethod } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveFromCart: (id: string) => void;
  onClearCart: () => void;
  selectedPayment: PaymentMethod;
  onChangePayment: (method: PaymentMethod) => void;
  onShowInvoice: () => void;
  totalPrice: number;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onRemoveFromCart,
  onClearCart,
  selectedPayment,
  onChangePayment,
  onShowInvoice,
  totalPrice
}: CartDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // accessibility focus trap and escape keyboard triggers
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const sendPaymentMessage = () => {
    if (cartItems.length === 0) return;
    const itemsList = cartItems
      .map(
        (item, i) =>
          `[${i + 1}] ${item.name} (${item.type === 'service' ? 'IT Solution' : 'Course'}) - KES ${item.price.toLocaleString('en-KE')}`
      )
      .join('\n');

    const rawMessage = `Hello Native 254,\n\nI have selected the following IT solutions/educational training products:\n\n${itemsList}\n\nTotal Payable Amount: KES ${totalPrice.toLocaleString('en-KE')}\n\nMy Preferred Communication Method: ${selectedPayment.toUpperCase()}\n\nPlease guide me on completing scheduling / enrollment setup. Thank you!`;

    if (selectedPayment === 'whatsapp') {
      const waUrl = `https://wa.me/254716369996?text=${encodeURIComponent(rawMessage)}`;
      window.open(waUrl, '_blank', 'noopener');
    } else {
      const mailtoUrl = `mailto:info.native@gmail.com?subject=${encodeURIComponent('Native 254 Portal Purchase Order')}&body=${encodeURIComponent(rawMessage)}`;
      window.open(mailtoUrl, '_blank');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop wrapper */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/30 backdrop-blur-xs transition-opacity"
          />

          {/* Slding drawer canvas */}
          <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              ref={panelRef}
              className="w-screen max-w-md bg-white border-l border-neutral-100 flex flex-col shadow-2xl relative"
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-primary-100 text-primary-500 flex items-center justify-center">
                    <Icon name="ShoppingCart" size={16} />
                  </div>
                  <h2 className="font-heading text-lg font-bold text-neutral-800">
                    Your Cart Receipts
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full hover:bg-neutral-200 p-1.5 text-neutral-400 hover:text-neutral-700 transition-colors"
                  aria-label="Close cart side panel"
                >
                  <Icon name="X" size={18} />
                </button>
              </div>

              {/* Items content */}
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <div className="flex justify-center text-neutral-300">
                      <Icon name="ShoppingCart" size={48} className="stroke-1" />
                    </div>
                    <h4 className="font-medium text-neutral-600 text-sm">Your cart is empty</h4>
                    <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed">
                      Select custom-built gaming PCs, IT troubleshooting setups, NAS storage kits, or expert development courses to build your queue.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="group flex gap-4 items-center p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors"
                      >
                        <div className="h-9 w-9 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-neutral-700 font-semibold shadow-2xs">
                          {item.type === 'service' ? (
                            <Icon name="Wrench" size={16} className="text-primary-500" />
                          ) : (
                            <Icon name="Code" size={16} className="text-gold-500" />
                          )}
                        </div>
                        <div className="flex-1 min-width-0">
                          <h4 className="font-semibold text-neutral-800 text-xs truncate group-hover:text-primary-600 transition-colors">
                            {item.name}
                          </h4>
                          <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-500">
                            {item.type}
                          </span>
                        </div>
                        <div className="text-right flex items-center gap-2.5">
                          <span className="font-mono text-sm font-bold text-neutral-800">
                            KES {item.price.toLocaleString('en-KE')}
                          </span>
                          <button
                            onClick={() => onRemoveFromCart(item.id)}
                            className="text-neutral-300 hover:text-red-500 rounded p-1 transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Icon name="Trash2" size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Sticky Footer calculations */}
              {cartItems.length > 0 && (
                <div className="border-t border-neutral-100 bg-neutral-50 p-6 space-y-5">
                  {/* Receipts invoice details */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-neutral-500">
                      <span>Total Queue Items:</span>
                      <span className="font-semibold text-neutral-800">{cartItems.length} items</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold border-t border-neutral-200/60 pt-2 text-neutral-800">
                      <span>Amount Payable KES:</span>
                      <span className="text-lg font-heading font-extrabold text-primary-500">
                        KES {totalPrice.toLocaleString('en-KE')}
                      </span>
                    </div>
                  </div>

                  {/* Payment selector methods */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-wider uppercase text-neutral-400">
                      Select Contact Destination
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onChangePayment('whatsapp')}
                        className={`py-2.5 flex items-center justify-center gap-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          selectedPayment === 'whatsapp'
                            ? 'bg-primary-50 border-primary-500 text-primary-600 shadow-2xs'
                            : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                        }`}
                      >
                        <Icon name="Phone" size={12} /> WhatsApp
                      </button>
                      <button
                        onClick={() => onChangePayment('email')}
                        className={`py-2.5 flex items-center justify-center gap-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          selectedPayment === 'email'
                            ? 'bg-primary-50 border-primary-500 text-primary-600 shadow-2xs'
                            : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                        }`}
                      >
                        <Icon name="Mail" size={12} /> Email Desk
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    <button
                      onClick={sendPaymentMessage}
                      className="w-full btn py-3.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-primary-500/10 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                    >
                      <Icon name="Send" size={14} /> Send message to {selectedPayment === 'whatsapp' ? '0716369996' : 'desk'}
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={onShowInvoice}
                        className="btn py-2.5 bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-3xs transition-all active:scale-[0.99]"
                      >
                        <Icon name="FileText" size={12} /> Generate Invoice
                      </button>

                      <button
                        onClick={onClearCart}
                        className="btn py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-[0.99]"
                      >
                        <Icon name="Trash2" size={12} /> Clear Cards
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
