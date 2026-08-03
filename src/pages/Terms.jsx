import PolicyPage from "../components/PolicyPage";

const sections = [
  {
    heading: "Acceptance of terms",
    body: [
      "By accessing or using Native254 services, you agree to these Terms of Service. If you do not agree, please do not use our website, courses, or support services.",
      "These terms apply to website visits, course bookings, and any support or installation requests made through our platform or WhatsApp communications."
    ]
  },
  {
    heading: "Services we provide",
    body: [
      "Native254 offers IT support, consultancy, installation services, and technology training for homes, offices, and students in Nairobi and surrounding areas.",
      "Service scope, pricing, timelines, and deliverables will be clearly discussed before work begins."
    ]
  },
  {
    heading: "Your responsibilities",
    body: [
      "You are responsible for providing accurate information, timely access to devices or premises, and any approvals required for service delivery.",
      "Where a service depends on third-party hardware, software, or internet access, Native254 is not liable for delays or failures outside our direct control."
    ]
  },
  {
    heading: "Payments and bookings",
    body: [
      "Course enrolments and service bookings may require advance payment or a deposit, depending on the nature of the request.",
      "Any cancellations or rescheduling requests should be made as early as possible so we can review availability and refund or rescheduling terms."
    ]
  },
  {
    heading: "Intellectual property",
    body: [
      "The content on this website, including copy, design, logos, and course materials, remains the property of Native254 unless stated otherwise.",
      "You may not reuse, republish, or distribute our materials without permission."
    ]
  },
  {
    heading: "Limitation of liability",
    body: [
      "Native254 will do its best to deliver reliable services and accurate information, but we do not guarantee uninterrupted access, perfect outcomes, or zero risk of technical issues.",
      "Our liability for any claim arising from our services is limited to the fees paid for the relevant service, unless local law provides a higher protection standard."
    ]
  }
];

export default function Terms() {
  return (
    <PolicyPage
      metaTitle="Terms of Service"
      metaDescription="Review the terms that govern bookings, support services, and website use at Native254."
      title="Terms of Service"
      intro="These terms explain how we provide services, what is expected from both parties, and the boundaries of our responsibilities."
      sections={sections}
    />
  );
}
