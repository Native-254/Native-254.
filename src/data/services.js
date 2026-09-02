import svcTroubleshooting from "../assets/placeholders/svc-troubleshooting.webp";
import svcHosting from "../assets/placeholders/svc-hosting.webp";
import svcWebdesign from "../assets/placeholders/svc-webdesign.webp";
import svcPm from "../assets/placeholders/svc-pm.webp";
import svcSoftware from "../assets/placeholders/svc-software.webp";
import svcPcbuild from "../assets/placeholders/svc-pcbuild.webp";
import svcNas from "../assets/placeholders/svc-nas.webp";

// Prices are benchmarked against established Nairobi IT providers and
// managed-service rate cards, then adjusted down as an introductory
// startup rate. Marked "From" where scope varies per job.
export const services = [
  {
    id: "svc-troubleshooting",
    badge: "Most booked",
    title: "Troubleshooting & Tech Support",
    tagline: "Call-out or remote fix",
    description:
      "On-site or remote diagnosis for slow machines, boot failures, network drops and everyday tech breakdowns.",
    price: 1500,
    priceLabel: "From KES 1,500",
    priceNote: "per visit",
    image: svcTroubleshooting,
    bullets: [
      "Hardware & software fault diagnosis",
      "Virus, malware & junk cleanup",
      "Network and Wi-Fi troubleshooting",
      "Same-week call-out in Nairobi",
    ],
  },
  {
    id: "svc-hosting",
    badge: "Startup rate",
    title: "Web Hosting",
    tagline: "Fast, managed hosting",
    description:
      "Shared and business hosting with SSL, daily backups and email accounts set up and managed for you.",
    price: 3500,
    priceLabel: "From KES 3,500",
    priceNote: "/ year",
    image: svcHosting,
    bullets: [
      "Free SSL certificate & setup",
      "Daily automated backups",
      "Business email accounts",
      "Domain connection & DNS handled",
    ],
  },
  {
    id: "svc-webdesign",
    badge: "Popular",
    title: "Web Design",
    tagline: "Sites that load fast, rank well",
    description:
      "Custom-built business or portfolio websites — mobile-first, SEO-ready and easy for you to update.",
    price: 22000,
    priceLabel: "From KES 22,000",
    priceNote: "per site",
    image: svcWebdesign,
    bullets: [
      "Custom design, no drag-drop templates",
      "Mobile & desktop optimised",
      "Basic SEO & analytics setup",
      "1 month of free tweaks after launch",
    ],
  },
  {
    id: "svc-pm",
    badge: null,
    title: "IT Project Management",
    tagline: "Someone to run the rollout",
    description:
      "Planning and coordination for IT rollouts, office moves or system migrations, start to finish.",
    price: 10000,
    priceLabel: "From KES 10,000",
    priceNote: "per project",
    image: svcPm,
    bullets: [
      "Scoping, timeline & budget planning",
      "Vendor & contractor coordination",
      "Progress tracking & reporting",
      "Single point of contact throughout",
    ],
  },
  {
    id: "svc-software",
    badge: null,
    title: "Software Install & Maintenance",
    tagline: "Set up once, keep it running",
    description:
      "Operating system installs, licensed software setup, and scheduled maintenance for offices and homes.",
    price: 1200,
    priceLabel: "From KES 1,200",
    priceNote: "per device",
    image: svcSoftware,
    bullets: [
      "OS install & activation",
      "Office suite & business software setup",
      "Driver & update management",
      "Scheduled maintenance plans available",
    ],
  },
  {
    id: "svc-pcbuild",
    badge: "Custom spec",
    title: "Custom PC Build",
    tagline: "Gaming, editing or workstation",
    description:
      "Builds matched to your budget and use case, benchmarked and stress-tested before handover. Parts costed separately.",
    price: 8000,
    priceLabel: "Price is budget-dependent",
    priceNote: "labour, parts extra",
    image: svcPcbuild,
    bullets: [
      "Free spec consultation",
      "Cable management & airflow tuning",
      "Stress-tested before handover",
      "1 year build workmanship warranty",
    ],
  },
  {
    id: "svc-nas",
    badge: null,
    title: "NAS Setup & Storage",
    tagline: "Your own private cloud",
    description:
      "Network-attached storage built for home or office backups, media libraries and shared drives.",
    price: 7500,
    priceLabel: "From KES 7,500",
    priceNote: "setup",
    image: svcNas,
    bullets: [
      "RAID configuration for redundancy",
      "Remote access setup",
      "Automated backup schedules",
      "User & permission management",
    ],
  },
];
