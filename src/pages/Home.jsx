import { Link } from "react-router-dom";
import { ArrowRight, TriangleAlert, Phone } from "lucide-react";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import crtComputer from "../assets/crt-computer.webp";
import halftoneMegaphone from "../assets/halftone-megaphone.webp";
import booksStack from "../assets/books-stack.webp";
import retroPhone from "../assets/retro-phone.webp";
import { usePageMeta } from "../lib/usePageMeta";
import { company } from "../data/company";

export default function Home() {
  usePageMeta(
    "IT Solutions & Tech Courses in Nairobi",
    "Native254 offers troubleshooting, hosting, web design, custom PC builds, NAS setup and hands-on courses in Microsoft Office, programming and design."
  );

  const featuredServices = services.slice(0, 3);

  return (
    <>
      {/* HERO — black section, CRT monitor sits flush since it's a dark-background image */}
      <section className="relative bg-ink border-b border-line grain scanlines overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <p className="mono-eyebrow text-yolk mb-4">Nairobi · IT solutions & training</p>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-paper">
              WE FIX IT.
              <br />
              WE BUILD IT.
              <br />
              <span className="text-stroke">WE TEACH IT.</span>
            </h1>
            <p className="mt-6 text-steel text-lg max-w-md leading-relaxed">
              Troubleshooting, hosting, web design, custom builds and NAS
              setup — plus hands-on courses that actually get you job-ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 bg-yolk text-ink font-mono font-bold px-5 py-3 rounded-sm hover:bg-paper transition-colors"
              >
                Browse IT Solutions <ArrowRight size={16} />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 border border-line text-paper font-mono px-5 py-3 rounded-sm hover:border-yolk hover:text-yolk transition-colors"
              >
                See Courses
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={crtComputer}
              alt="Retro CRT monitor and keyboard, representing Native254's roots in hands-on computing"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-ink2 border-b border-line">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-3 gap-6 text-center">
          {[
            ["7+", "IT services"],
            ["3", "Course tracks"],
            ["24hr", "Avg. response"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="font-display font-black text-3xl md:text-4xl text-yolk">{num}</p>
              <p className="mono-eyebrow text-steel mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY INTRO — enhanced about section with mission, vision, and visuals */}
      <section className="bg-paper text-ink border-b border-black/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
          <div className="max-w-[400px]">
            <img
              src="/src/assets/cash-stack.webp"
              alt="Native254 team working on technology solutions"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <p className="mono-eyebrow text-rust">About Native254</p>
            <h2 className="font-display font-black text-3xl md:text-4xl leading-tight">
              Empowering Nairobi Through Practical Technology
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed mb-6">
              Native254 is a Nairobi-based technology solutions provider dedicated to
              empowering homes, businesses, and educational institutions with reliable
              IT services, innovative software, and practical skills training. We bridge
              the gap between complex technology and everyday usability, ensuring our
              clients get measurable value from their technology investments.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <span className="w-8 h-8 rounded-sm border border-line flex items-center justify-center text-yolk">
                    <span className="text-xs font-bold"></span>
                  </span>
                </div>
                <div>
                  <p className="text-ink/80 font-medium">Our Mission</p>
                  <p className="text-ink/60 leading-relaxed">
                    To provide accessible, high-quality technology solutions that
                    drive productivity, innovation, and growth for our clients across
                    Nairobi and beyond.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <span className="w-8 h-8 rounded-sm border border-line flex items-center justify-center text-yolk">
                    <span className="text-xs font-bold"></span>
                  </span>
                </div>
                <div>
                  <p className="text-ink/80 font-medium">Our Vision</p>
                  <p className="text-ink/60 leading-relaxed">
                    To be Nairobi's most trusted technology partner, known for
                    delivering solutions that are not just technically excellent,
                    but truly transformative for the people and organizations we serve.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <span className="w-8 h-8 rounded-sm border border-line flex items-center justify-center text-yolk">
                    <span className="text-xs font-bold"></span>
                  </span>
                </div>
                <div>
                  <p className="text-ink/80 font-medium">Our Values</p>
                  <p className="text-ink/60 leading-relaxed">
                    Reliability • Innovation • Transparency • Education •
                    Customer-Centricity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT SOLUTIONS SUMMARY */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
          <div>
            <p className="mono-eyebrow text-yolk mb-2">01 — IT Solutions</p>
            <h2 className="font-display font-black text-4xl text-paper">
              Comprehensive Technology Services
            </h2>
          </div>
          <Link
            to="/solutions"
            className="mono-eyebrow text-steel hover:text-yolk flex items-center gap-1.5"
          >
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Service Categories Summary */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-sm border border-line flex items-center justify-center text-yolk bg-yolk/10">
                  <span className="text-xs"></span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-lg">Technical Support</h3>
                <p className="text-ink/60 leading-relaxed">
                  Troubleshooting, repairs, and maintenance for computers,
                  networks, and systems to keep your technology running smoothly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-sm border border-line flex items-center justify-center text-yolk bg-yolk/10">
                  <span className="text-xs"></span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-lg">Web & Hosting</h3>
                <p className="text-ink/60 leading-relaxed">
                  Professional website design, development, and managed hosting
                  solutions that are fast, secure, and optimized for performance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-sm border border-line flex items-center justify-center text-yolk bg-yolk/10">
                  <span className="text-xs"></span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-lg">Software & Systems</h3>
                <p className="text-ink/60 leading-relaxed">
                  Custom software development, system installations, and IT
                  project management tailored to your specific business needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-sm border border-line flex items-center justify-center text-yolk bg-yolk/10">
                  <span className="text-xs"></span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-lg">Hardware Solutions</h3>
                <p className="text-ink/60 leading-relaxed">
                  Custom PC builds, NAS storage solutions, and hardware
                  procurement with expert configuration and setup.
                </p>
              </div>
            </div>
          </div>

          {/* Visual representation - using a service card as example */}
          <div className="flex justify-center">
            <ServiceCard service={services[0]} />
          </div>
        </div>
      </section>

      {/* EDUCATION SERVICES SUMMARY */}
      <section className="bg-paper text-ink border-y border-black/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="mono-eyebrow text-rust mb-2">02 — Education Services</p>
            <h2 className="font-display font-black text-4xl leading-tight">
              Practical Skills for Real-World Success
            </h2>
            <div className="space-y-4">
              {/* Course Tracks Summary */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-sm border border-line flex items-center justify-center text-yolk bg-yolk/10">
                    <span className="text-xs"></span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-black text-lg">Microsoft Office Mastery</h3>
                  <p className="text-ink/60 leading-relaxed">
                    Word, Excel, PowerPoint & Outlook — taught the way you'll actually
                    use them at work, from formatting to advanced features.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-sm border border-line flex items-center justify-center text-yolk bg-yolk/10">
                    <span className="text-xs"></span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-black text-lg">Computer Programming</h3>
                  <p className="text-ink/60 leading-relaxed">
                    Web development, databases & C# programming — build real projects
                    and gain job-ready software development skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-sm border border-line flex items-center justify-center text-yolk bg-yolk/10">
                    <span className="text-xs"></span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-black text-lg">Graphics & Design</h3>
                  <p className="text-ink/60 leading-relaxed">
                    Social media graphics, photo editing & branding using Canva, GIMP,
                    Affinity & Adobe tools — create professional designs for business.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/courses"
              className="mt-6 inline-flex items-center gap-2 bg-ink text-paper font-mono font-bold px-5 py-3 rounded-sm hover:bg-rust transition-colors"
            >
              Explore courses <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src={booksStack}
              alt="Stack of textbooks representing Native254's education services"
              className="max-w-[260px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY PRODUCT — separate from the service and education offerings */}
      <section className="bg-ink2 border-b border-line grain">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
          <div>
            <p className="mono-eyebrow text-yolk mb-2">03 — Automation &amp; Software</p>
            <h2 className="font-display font-black text-3xl md:text-4xl text-paper leading-tight">
              Technology products built beyond the brief.
            </h2>
            <p className="mt-4 text-steel max-w-2xl leading-relaxed">
              Irietrade is Native254's automated NYSE trading bot, developed as
              a separate software product. Visit its dedicated website for the
              product details, access and terms of use.
            </p>
          </div>
          <a
            href="https://irietrade.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-yolk text-ink font-mono font-bold px-5 py-3 rounded-sm hover:bg-paper transition-colors whitespace-nowrap"
          >
            Visit Irietrade <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* DISCLAIMER / WHY US — black band, halftone image is dark-bg so it stays flush */}
      <section className="bg-ink border-b border-line grain">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <img
            src={halftoneMegaphone}
            alt=""
            aria-hidden="true"
            className="w-32 md:w-40 mx-auto md:mx-0"
            loading="lazy"
          />
          <div>
            <p className="mono-eyebrow text-rust mb-2 flex items-center gap-2">
              <TriangleAlert size={14} /> Heads up
            </p>
            <h2 className="font-display font-black text-3xl md:text-4xl text-paper leading-tight">
              We're a startup — that's exactly why our rates are fair.
            </h2>
            <p className="mt-4 text-steel max-w-2xl leading-relaxed">
              Native254 is new, and we price like it: honest, benchmarked
              rates without the agency markup, backed by real diagnostics and
              real follow-up — not a call centre script.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT TEASER — black section, retro phone is dark-bg */}
      <section className="bg-ink grain">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src={retroPhone}
              alt="Retro corded telephone representing Native254's direct support line"
              className="max-w-[220px] w-full"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mono-eyebrow text-yolk mb-2">Talk to a human</p>
            <h2 className="font-display font-black text-4xl text-paper leading-tight">
              No tickets. No queues. Just call.
            </h2>
            <p className="mt-4 text-steel max-w-md leading-relaxed">
              Reach us directly on WhatsApp or email — same channels we use
              to confirm every order.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${company.whatsappNumber}`}
                className="inline-flex items-center gap-2 bg-yolk text-ink font-mono font-bold px-5 py-3 rounded-sm hover:bg-paper transition-colors"
              >
                <Phone size={16} /> {company.whatsappDisplay}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-line text-paper font-mono px-5 py-3 rounded-sm hover:border-yolk hover:text-yolk transition-colors"
              >
                Full contact page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
