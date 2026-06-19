import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Icon from './Icon';
import { CartItem, PaymentMethod } from '../types';

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalPrice: number;
  paymentMethod: PaymentMethod;
}

export default function InvoiceModal({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  paymentMethod
}: InvoiceModalProps) {
  if (!isOpen) return null;

  const invoiceNumber = `NV-${Math.floor(100000 + Math.random() * 900000)}`;
  const currentDate = new Date().toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const getInvoiceHTMLString = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice - Native 254</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #2d3748; padding: 40px; background: #fff; max-width: 600px; margin: 0 auto; line-height: 1.6; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; }
    .logo-text { font-size: 26px; font-weight: 800; color: #0d7d54; text-transform: uppercase; letter-spacing: -1px; }
    .company-desc { font-size: 11px; color: #718096; line-height: 1.4; margin-top: 4px; }
    .title { font-size: 20px; font-weight: 700; color: #1a202c; text-align: right; }
    .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; font-size: 13px; }
    .meta-title { font-weight: 700; color: #4a5568; margin-bottom: 4px; text-transform: uppercase; font-size: 10px; tracking: 1px; }
    .table { width: 100%; border-collapse: collapse; margin: 30px 0; }
    .table th { background: #f7fafc; padding: 12px; font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; border-bottom: 2px solid #edf2f7; text-align: left; }
    .table td { padding: 14px 12px; border-bottom: 1px solid #edf2f7; font-size: 13px; }
    .table td.right { text-align: right; }
    .table th.right { text-align: right; }
    .total-row { font-size: 16px; font-weight: 800; color: #0d7d54; }
    .total-row td { border-top: 2px solid #cbd5e0; border-bottom: 2px solid #cbd5e0; }
    .instructions { background: #e6f4ee; padding: 20px; border-radius: 8px; font-size: 12px; margin-top: 4px; border: 1px solid #cce9de; }
    .instructions h3 { margin: 0 0 8px 0; color: #0a5f40; font-size: 13px; }
    .footer { text-align: center; font-size: 10px; color: #a0aec0; margin-top: 40px; border-top: 1px solid #edf2f7; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="logo-text">Native 254</div>
      <div class="company-desc">IT Solutions & Elite Education<br>Nairobi, Kenya</div>
    </div>
    <div style="text-align: right">
      <div class="title">OFFICIAL INVOICE</div>
      <div style="font-size: 12px; color: #718096; margin-top: 4px;">No: ${invoiceNumber}</div>
    </div>
  </div>

  <div class="meta-grid">
    <div>
      <div class="meta-title">Prepared For</div>
      <div style="font-weight: 600;">Valued Client</div>
      <div style="color: #718096;">Nairobi Workspace User</div>
    </div>
    <div style="text-align: right">
      <div class="meta-title">Invoice Date</div>
      <div style="font-weight: 600;">${currentDate}</div>
      <div style="color: #718096;">Term: Immediate Clearance</div>
    </div>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>Item Description</th>
        <th style="width: 100px;">Service Unit</th>
        <th class="right" style="width: 120px;">Amount</th>
      </tr>
    </thead>
    <tbody>
      ${cartItems.map(item => `
        <tr>
          <td><strong style="color: #1a202c">${item.name}</strong><br><span style="font-size: 10px; color: #a0aec0; text-transform: uppercase;">${item.type}</span></td>
          <td>1 Session</td>
          <td class="right" style="font-family: monospace; font-weight: 600;">KES ${item.price.toLocaleString('en-KE')}</td>
        </tr>
      `).join('')}
      <tr class="total-row">
        <td>TOTAL AMOUNT DUE</td>
        <td></td>
        <td class="right" style="font-family: monospace;">KES ${totalPrice.toLocaleString('en-KE')}</td>
      </tr>
    </tbody>
  </table>

  <div class="instructions">
    <h3>M-PESA / WhatsApp Validation Instructions</h3>
    <p style="margin: 4px 0 12px 0;">To schedule execution of your chosen IT Solutions or secure active seats on your Educational Courses, send payment confirmation message to:</p>
    <div style="display: flex; flex-direction: column; gap: 4px; font-weight: 600;">
      <div>• WhatsApp Recipient: <strong>0716 369 996 (Native 254 Support)</strong></div>
      <div>• Direct Business Email: <strong>info.native@gmail.com</strong></div>
    </div>
    <p style="margin: 12px 0 0 0; font-size: 11px; color: #4a5568; font-style: italic;">Reference Receipt: Please mention your reference number <strong>${invoiceNumber}</strong> during payment submission.</p>
  </div>

  <div class="footer">
    Thank you for choosing Native 254. We build technology solutions that empower your business.
  </div>
</body>
</html>`;
  };

  const handleDownload = () => {
    const htmlString = getInvoiceHTMLString();
    const blob = new Blob([htmlString], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Native_254_Invoice_${invoiceNumber}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(getInvoiceHTMLString());
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-neutral-100 p-2 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-800 transition-colors"
            aria-label="Close invoice"
          >
            <Icon name="X" size={16} />
          </button>

          {/* Receipt Content Container */}
          <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="text-center pb-6 border-b border-neutral-100">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 mb-3">
                <Icon name="FileText" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-neutral-800">
                Purchase Order & Invoice
              </h3>
              <p className="text-xs text-neutral-400 mt-1">Invoice Ref: {invoiceNumber}</p>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-4 py-4 text-xs">
              <div>
                <p className="text-neutral-400 font-medium uppercase tracking-wider">Date</p>
                <p className="font-semibold text-neutral-800 mt-1">{currentDate}</p>
              </div>
              <div className="text-right">
                <p className="text-neutral-400 font-medium uppercase tracking-wider">Client Workspace</p>
                <p className="font-semibold text-neutral-800 mt-1">Valued Customer</p>
              </div>
            </div>

            {/* List */}
            <div className="border-t border-b border-dashed border-neutral-200 py-3 my-2 space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start text-xs">
                  <div>
                    <h5 className="font-semibold text-neutral-800">{item.name}</h5>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-0.5">
                      {item.type}
                    </p>
                  </div>
                  <span className="font-mono font-medium text-neutral-700 ml-2">
                    KES {item.price.toLocaleString('en-KE')}
                  </span>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="flex justify-between items-center py-3">
              <span className="font-heading font-semibold text-neutral-500 text-sm">TOTAL KES DUE</span>
              <span className="font-heading font-extrabold text-xl text-primary-500">
                KES {totalPrice.toLocaleString('en-KE')}
              </span>
            </div>

            {/* Action Alert Message */}
            <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 text-xs text-primary-900 mt-2 space-y-2">
              <div className="flex gap-2 items-center font-bold text-primary-700">
                <Icon name="CheckCircle" size={14} />
                <span>Next Steps to Confirm Order:</span>
              </div>
              <p className="leading-relaxed">
                Send a screenshot of this receipt along with your manual transaction message to either:
              </p>
              <div className="font-semibold space-y-1 bg-white/60 p-2.5 rounded-lg border border-primary-100/30">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={12} className="text-primary-500" />
                  <span>WhatsApp: <strong className="text-primary-900 select-all">0716 369 996</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={12} className="text-primary-500" />
                  <span>Email: <strong className="text-primary-900 select-all">info.native@gmail.com</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Footer */}
          <div className="grid grid-cols-2 gap-4 bg-neutral-50 p-6 border-t border-neutral-100">
            <button
              onClick={handleDownload}
              className="px-4 py-3 bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100 active:scale-[0.98] font-semibold text-xs rounded-full flex justify-center items-center gap-2 shadow-sm transition-all"
            >
              <Icon name="Download" size={14} /> Download HTML
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-3 bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/10 active:scale-[0.98] font-semibold text-xs rounded-full flex justify-center items-center gap-2 shadow-sm transition-all"
            >
              <Icon name="FileText" size={14} /> Print Receipt
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
