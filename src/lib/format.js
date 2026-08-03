export function formatKES(amount) {
  return `KES ${Number(amount).toLocaleString("en-KE")}`;
}

export function makeInvoiceNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const stamp = now.getTime().toString().slice(-6);
  return `N254-${y}-${stamp}`;
}
