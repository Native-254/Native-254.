import PolicyPage from "../components/PolicyPage";

const sections = [
  {
    heading: "Information we collect",
    body: [
      "We collect the information you share when you contact us, book a service, enquire about a course, or subscribe to updates. This may include your name, phone number, email address, location, and the details of your request.",
      "We also collect limited technical information such as browser type, device details, and site interaction data to help us improve the website experience."
    ]
  },
  {
    heading: "How we use your information",
    body: [
      "We use your information to respond to enquiries, prepare quotes, deliver training or support, and maintain a secure and useful website experience.",
      "We may also use your contact details to send service updates, course information, or occasional administrative messages relevant to your request."
    ]
  },
  {
    heading: "Sharing your information",
    body: [
      "We do not sell your personal information. We may share it only with trusted service providers who assist us with email delivery, payment processing, or website operations, and only where needed to perform those services.",
      "We may also disclose information when required to comply with law, enforce our terms, or protect our rights and the safety of our customers."
    ]
  },
  {
    heading: "Your choices",
    body: [
      "You can ask us to update, correct, or delete the personal information we hold about you, subject to legal and operational limits.",
      "If you no longer want to receive non-essential communications, you can contact us and we will stop those messages."
    ]
  },
  {
    heading: "Data security",
    body: [
      "We use reasonable administrative and technical safeguards to protect personal information collected through our website and communications.",
      "While no system can be guaranteed completely secure, we take reasonable steps to reduce the risk of unauthorized access or misuse."
    ]
  }
];

export default function Privacy() {
  return (
    <PolicyPage
      metaTitle="Privacy Policy"
      metaDescription="Learn how Native254 handles your personal information and communication preferences."
      title="Privacy Policy"
      intro="This privacy policy explains what information we collect, how we use it, and the choices you have when interacting with Native254."
      sections={sections}
    />
  );
}
