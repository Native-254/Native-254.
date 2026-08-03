import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found", "This page doesn't exist.");
  return (
    <section className="max-w-xl mx-auto px-5 py-28 text-center">
      <p className="font-display font-black text-8xl text-yolk">404</p>
      <h1 className="font-display font-bold text-3xl text-paper mt-2">
        That page doesn't exist.
      </h1>
      <p className="text-steel mt-3">
        The link might be broken, or the page has moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-yolk text-ink font-mono font-bold px-5 py-3 rounded-sm hover:bg-paper transition-colors"
      >
        Back to home
      </Link>
    </section>
  );
}
