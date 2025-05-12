export type Template = {
  id: string;
  title: string;
  description: string;
  icon: string;
  fieldsIncluded: string[];
  estimatedFields: number;
  category: string;
};

const formTemplates: Template[] = [
  {
    id: "contact-form",
    title: "Contact Us Form",
    description:
      "Collect user names, emails, and messages through a simple contact form.",
    icon: "📬",
    fieldsIncluded: ["text", "email", "select"],
    estimatedFields: 3,
    category: "Communication",
  },
  {
    id: "job-application",
    title: "Job Application Form",
    description:
      "Allow applicants to submit personal details, select positions, and indicate experience.",
    icon: "🧑‍💼",
    fieldsIncluded: ["text", "email", "select", "radio group", "number"],
    estimatedFields: 6,
    category: "HR & Recruitment",
  },
  {
    id: "event-registration",
    title: "Event Registration Form",
    description:
      "Let users sign up for events with options for attendance type and preferences.",
    icon: "🎟️",
    fieldsIncluded: ["text", "email", "select", "checkbox group"],
    estimatedFields: 5,
    category: "Events",
  },
  {
    id: "newsletter-signup",
    title: "Newsletter Signup Form",
    description:
      "A quick opt-in form for users to subscribe to your mailing list.",
    icon: "📰",
    fieldsIncluded: ["text", "email", "checkbox group"],
    estimatedFields: 3,
    category: "Marketing",
  },
  {
    id: "account-registration",
    title: "Account Registration Form",
    description:
      "Gather basic account details like name, email, and password with role selection.",
    icon: "📝",
    fieldsIncluded: ["text", "email", "password", "select"],
    estimatedFields: 4,
    category: "User Management",
  },
];

export default formTemplates;
