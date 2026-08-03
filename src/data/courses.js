import msImg from "../assets/placeholders/course-msoffice.webp";
import progImg from "../assets/placeholders/course-programming.webp";
import gfxImg from "../assets/placeholders/course-graphics.webp";

export const courses = [
  {
    id: "course-msoffice",
    title: "Microsoft Office Suite",
    tagline: "Word, Excel, PowerPoint & Outlook",
    description:
      "The four programs every office job actually tests you on — taught the way you'll really use them at work.",
    price: 6000,
    priceLabel: "KES 6,000",
    image: msImg,
    duration: "3 weeks · 2 sessions/week",
    packages: [
      { name: "Microsoft Word", detail: "Formatting, templates, mail merge, long documents" },
      { name: "Microsoft Excel", detail: "Formulas, pivot tables, charts, basic data analysis" },
      { name: "Microsoft PowerPoint", detail: "Slide design, transitions, presenting with confidence" },
      { name: "Microsoft Outlook", detail: "Email management, calendars, meeting scheduling" },
      { name: "Certificate of completion", detail: "Issued at the end of the course" },
    ],
  },
  {
    id: "course-programming",
    title: "Computer Programming",
    tagline: "Web development & databases from zero",
    description:
      "A practical route into software development — build real pages and a working database before you finish.",
    price: 12000,
    priceLabel: "KES 12,000",
    image: progImg,
    duration: "6 weeks · 3 sessions/week",
    packages: [
      { name: "Web design fundamentals", detail: "HTML, CSS & responsive layout basics" },
      { name: "JavaScript essentials", detail: "Logic, interactivity, working with data" },
      { name: "MySQL databases", detail: "Tables, queries, and connecting data to a site" },
      { name: "C# programming", detail: "Core syntax, logic building, small console projects" },
      { name: "Final mini-project", detail: "A small working site or app you keep" },
    ],
  },
  {
    id: "course-graphics",
    title: "Graphics & Design",
    tagline: "Canva, GIMP, Affinity & Adobe basics",
    description:
      "Design skills for social media, print and branding, using both free and industry-standard tools.",
    price: 6000,
    priceLabel: "KES 6,000",
    image: gfxImg,
    duration: "3 weeks · 2 sessions/week",
    packages: [
      { name: "Canva", detail: "Fast social media & marketing graphics" },
      { name: "GIMP", detail: "Free photo editing & retouching" },
      { name: "Affinity Designer/Photo", detail: "Vector graphics & advanced photo editing" },
      { name: "Adobe Photoshop & Illustrator basics", detail: "Industry-standard editing & branding tools" },
      { name: "Portfolio piece", detail: "One finished design to keep for your portfolio" },
    ],
  },
];
