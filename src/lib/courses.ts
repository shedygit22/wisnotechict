export type CourseStatus = "available" | "planned" | "unavailable";

export type DeliveryFormat = "in-person" | "online" | "hybrid";

export type CourseCategory =
  | "web-development"
  | "graphic-design"
  | "ui-ux-design"
  | "video-editing"
  | "ai-content-creation"
  | "ai-filmmaking"
  | "digital-marketing"
  | "social-media-management"
  | "content-strategy"
  | "software-development"
  | "mobile-app-development"
  | "business-automation"
  | "digital-productivity"
  | "data-processing"
  | "ai-tools-business";

export interface CourseModule {
  id: string;
  title: string;
  description: string;
}

export interface Course {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: CourseCategory;
  description: string;
  shortDescription: string;
  status: CourseStatus;
  deliveryFormat: DeliveryFormat;
  location: "uromi" | "online" | "both";
  duration: string | null; // e.g. "6 weeks" - null means not confirmed
  schedule: string | null; // e.g. "Weekdays, 6pm-8pm" - null means not confirmed
  baseFee: number | null; // null means "Request Details"
  additionalCharges?: string[];
  prerequisites: string[];
  audience: string[];
  learningOutcomes: string[];
  practicalProjects: string[];
  toolsTechnologies: string[];
  studentSupport: string[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
}

export const COURSES: Course[] = [
  {
    id: "web-development",
    slug: "web-development",
    name: "Web Design and Development",
    tagline: "Build responsive, modern websites from scratch.",
    category: "web-development",
    description:
      "Learn to design and build professional websites using HTML, CSS, JavaScript, and modern frontend tools. This course covers layout, responsiveness, interactivity, and deployment, giving you the practical skills to create websites for yourself and clients.",
    shortDescription:
      "Build responsive, professional websites using HTML, CSS, JavaScript, and modern frontend tools.",
    status: "available",
    deliveryFormat: "hybrid",
    location: "both",
    duration: "8 weeks",
    schedule: "Weekdays, 6:00 PM - 8:00 PM",
    baseFee: 150000,
    additionalCharges: ["Domain and hosting (optional, at student's cost)"],
    prerequisites: ["Basic computer literacy", "Access to a laptop"],
    audience: [
      "Beginners with no coding experience",
      "Students and graduates",
      "Entrepreneurs who want to build their own websites",
      "Freelancers adding web development to their services",
    ],
    learningOutcomes: [
      "Build responsive websites from scratch",
      "Write semantic HTML and modern CSS",
      "Add interactivity with JavaScript",
      "Deploy a website to the internet",
      "Use version control with Git",
    ],
    practicalProjects: [
      "A personal portfolio website",
      "A business landing page",
      "A responsive blog layout",
    ],
    toolsTechnologies: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "VS Code"],
    studentSupport: [
      "Instructor-led sessions",
      "Guided practical projects",
      "Code review and feedback",
      "WhatsApp support group",
    ],
    faqs: [
      {
        question: "Do I need prior coding experience?",
        answer:
          "No. This course starts from the basics and assumes no prior programming knowledge.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Wisnotech issues a certificate of completion to students who finish the practical projects and meet attendance requirements.",
      },
    ],
    seoTitle: "Web Design and Development Training | Wisnotech Academy",
    seoDescription:
      "Learn web design and development in Uromi, Edo State. Build responsive websites with HTML, CSS, and JavaScript. Practical, project-based training.",
    image: "/images/courses/Web_developer_working_at_desk_20261023174112.jpg",
    imageAlt: "Web development training session at Wisnotech Academy",
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    name: "Graphic Design and Visual Communication",
    tagline: "Create visuals that communicate clearly and professionally.",
    category: "graphic-design",
    description:
      "Learn the principles of visual communication and how to create designs for print and digital media. Covers branding, layout, typography, colour theory, and industry-standard design tools.",
    shortDescription:
      "Learn visual communication, branding, layout, and design tools for print and digital media.",
    status: "available",
    deliveryFormat: "in-person",
    location: "uromi",
    duration: "6 weeks",
    schedule: "Weekdays, 10:00 AM - 12:00 PM",
    baseFee: 120000,
    additionalCharges: [],
    prerequisites: ["Basic computer literacy", "Access to a laptop"],
    audience: [
      "Aspiring graphic designers",
      "Business owners creating their own brand materials",
      "Marketing professionals",
      "Students and creatives",
    ],
    learningOutcomes: [
      "Apply design principles to real projects",
      "Create logos and brand identity materials",
      "Design social media graphics",
      "Prepare files for print and digital output",
    ],
    practicalProjects: [
      "A brand identity package",
      "Social media campaign visuals",
      "A printed flyer or poster",
    ],
    toolsTechnologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"],
    studentSupport: [
      "Instructor-led sessions",
      "Design critiques",
      "Portfolio review",
    ],
    faqs: [
      {
        question: "Do I need to know how to draw?",
        answer:
          "No. Graphic design is about visual communication and layout, not drawing ability.",
      },
    ],
    seoTitle: "Graphic Design Training | Wisnotech Academy, Uromi",
    seoDescription:
      "Learn graphic design and visual communication in Uromi, Edo State. Practical training in branding, layout, and design tools.",
    image: "/images/courses/Designer_working_on_monitor_20261023174039.jpg",
    imageAlt: "Graphic design training at Wisnotech Academy",
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    name: "UI/UX Design",
    tagline: "Design digital products that are easy and pleasant to use.",
    category: "ui-ux-design",
    description:
      "Learn user interface and user experience design. Covers user research, wireframing, prototyping, usability testing, and interface design for web and mobile applications.",
    shortDescription:
      "Learn UI/UX design - user research, wireframing, prototyping, and interface design.",
    status: "available",
    deliveryFormat: "hybrid",
    location: "both",
    duration: "8 weeks",
    schedule: "Weekends, 10:00 AM - 1:00 PM",
    baseFee: 160000,
    additionalCharges: [],
    prerequisites: ["Basic computer literacy", "Access to a laptop"],
    audience: [
      "Aspiring product designers",
      "Developers who want to design better interfaces",
      "Product managers",
      "Career changers entering tech",
    ],
    learningOutcomes: [
      "Conduct user research and create personas",
      "Design wireframes and interactive prototypes",
      "Apply usability principles",
      "Create a design portfolio case study",
    ],
    practicalProjects: [
      "A mobile app prototype",
      "A responsive web interface",
      "A usability test report",
    ],
    toolsTechnologies: ["Figma", "Adobe XD", "Miro", "User testing tools"],
    studentSupport: [
      "Instructor-led sessions",
      "Portfolio review",
      "Design feedback sessions",
    ],
    faqs: [
      {
        question: "Is this course only for designers?",
        answer:
          "No. It is suitable for anyone interested in how people interact with digital products, including developers and product managers.",
      },
    ],
    seoTitle: "UI/UX Design Training | Wisnotech Academy",
    seoDescription:
      "Learn UI/UX design in Uromi, Edo State. User research, wireframing, prototyping, and interface design for web and mobile.",
    image: "/images/courses/Designer_working_with_multiple_d._20261023174124.jpg",
    imageAlt: "UI/UX design training session at Wisnotech Academy",
  },
  {
    id: "video-editing",
    slug: "video-editing",
    name: "Video Editing and Post-Production",
    tagline: "Edit video content for film, social media, and business.",
    category: "video-editing",
    description:
      "Learn video editing, colour grading, sound design, and post-production workflows. Create polished video content for YouTube, social media, corporate clients, and film projects.",
    shortDescription:
      "Learn video editing, colour grading, sound design, and post-production workflows.",
    status: "available",
    deliveryFormat: "in-person",
    location: "uromi",
    duration: "6 weeks",
    schedule: "Weekdays, 2:00 PM - 4:00 PM",
    baseFee: 140000,
    additionalCharges: [],
    prerequisites: ["Basic computer literacy", "Access to a laptop"],
    audience: [
      "Aspiring video editors",
      "Content creators",
      "Filmmakers and media professionals",
      "Business owners creating video content",
    ],
    learningOutcomes: [
      "Edit video footage into a polished final product",
      "Apply colour grading and correction",
      "Mix audio and add sound design",
      "Export for different platforms",
    ],
    practicalProjects: [
      "A short documentary or interview",
      "A social media video series",
      "A corporate promotional video",
    ],
    toolsTechnologies: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve"],
    studentSupport: [
      "Instructor-led sessions",
      "Project feedback",
      "Access to editing workstations",
    ],
    faqs: [
      {
        question: "Do I need my own camera?",
        answer:
          "No. You will learn to edit existing footage. Access to a camera is helpful but not required.",
      },
    ],
    seoTitle: "Video Editing Training | Wisnotech Academy, Uromi",
    seoDescription:
      "Learn video editing and post-production in Uromi, Edo State. Practical training in Premiere Pro, After Effects, and colour grading.",
    image: "/images/courses/Video_editor_at_editing_setup_20261023174117.jpg",
    imageAlt: "Video editing training at Wisnotech Academy",
  },
  {
    id: "ai-content-creation",
    slug: "ai-content-creation",
    name: "AI Content Creation",
    tagline: "Produce content faster with practical AI tools.",
    category: "ai-content-creation",
    description:
      "Learn to use generative AI tools for writing, image generation, audio, and video content. Focus on practical, ethical use of AI for content creators, marketers, and business owners.",
    shortDescription:
      "Learn to use generative AI tools for writing, images, audio, and video content.",
    status: "available",
    deliveryFormat: "online",
    location: "online",
    duration: "4 weeks",
    schedule: "Self-paced with weekly live sessions",
    baseFee: 80000,
    additionalCharges: [],
    prerequisites: ["Basic computer literacy", "Internet access"],
    audience: [
      "Content creators",
      "Digital marketers",
      "Small business owners",
      "Freelancers",
    ],
    learningOutcomes: [
      "Use AI writing tools effectively",
      "Generate AI images and graphics",
      "Create AI-assisted video scripts",
      "Build an AI-powered content workflow",
    ],
    practicalProjects: [
      "An AI-assisted blog series",
      "AI-generated social media campaign",
      "A content workflow using multiple AI tools",
    ],
    toolsTechnologies: [
      "ChatGPT",
      "Midjourney",
      "DALL-E",
      "Runway",
      "ElevenLabs",
      "Notion AI",
    ],
    studentSupport: [
      "Weekly live Q&A sessions",
      "Community support group",
      "Tool access guidance",
    ],
    faqs: [
      {
        question: "Do I need paid AI tool subscriptions?",
        answer:
          "Some tools have free tiers. Paid subscriptions are optional and depend on your workflow needs.",
      },
    ],
    seoTitle: "AI Content Creation Course | Wisnotech Academy",
    seoDescription:
      "Learn AI content creation online. Practical training in generative AI tools for writing, images, audio, and video content.",
    image: "/images/courses/Content_creator_working_with_AI_20261023174103.jpg",
    imageAlt: "AI content creation training at Wisnotech Academy",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    name: "Digital Marketing",
    tagline: "Promote businesses online with measurable results.",
    category: "digital-marketing",
    description:
      "Learn digital marketing strategy and execution across search, social media, email, and paid advertising. Focus on practical campaigns that generate leads and sales.",
    shortDescription:
      "Learn digital marketing strategy across search, social media, email, and paid ads.",
    status: "available",
    deliveryFormat: "hybrid",
    location: "both",
    duration: "6 weeks",
    schedule: "Weekdays, 6:00 PM - 8:00 PM",
    baseFee: 100000,
    additionalCharges: ["Advertising budget for live campaigns (optional)"],
    prerequisites: ["Basic computer literacy", "Internet access"],
    audience: [
      "Marketing professionals",
      "Business owners",
      "Freelancers",
      "Students and graduates",
    ],
    learningOutcomes: [
      "Plan and execute digital marketing campaigns",
      "Run social media advertising",
      "Measure campaign performance",
      "Create a marketing strategy document",
    ],
    practicalProjects: [
      "A digital marketing plan for a real business",
      "A social media ad campaign",
      "An email marketing campaign",
    ],
    toolsTechnologies: [
      "Meta Ads Manager",
      "Google Ads",
      "Mailchimp",
      "Google Analytics",
      "Canva",
    ],
    studentSupport: [
      "Instructor-led sessions",
      "Campaign reviews",
      "Strategy feedback",
    ],
    faqs: [
      {
        question: "Do I need a budget for ads?",
        answer:
          "You can learn the strategy without spending on ads. Running live campaigns requires your own advertising budget.",
      },
    ],
    seoTitle: "Digital Marketing Training | Wisnotech Academy, Uromi",
    seoDescription:
      "Learn digital marketing in Uromi, Edo State. Social media ads, Google Ads, email marketing, and campaign strategy.",
    image: "/images/courses/Digital_marketer_working_on_laptop_20261023174109.jpg",
    imageAlt: "Digital marketing training at Wisnotech Academy",
  },
  {
    id: "software-development",
    slug: "software-development",
    name: "Software Development",
    tagline: "Build custom software and business applications.",
    category: "software-development",
    description:
      "Learn to build software applications using modern programming languages and frameworks. Covers backend development, databases, APIs, and deployment. Suitable for those wanting to build software products or work as developers.",
    shortDescription:
      "Learn to build software applications with modern languages, databases, and APIs.",
    status: "available",
    deliveryFormat: "in-person",
    location: "uromi",
    duration: "12 weeks",
    schedule: "Weekdays, 9:00 AM - 3:00 PM",
    baseFee: 250000,
    additionalCharges: [],
    prerequisites: ["Basic computer literacy", "Access to a laptop", "Logical thinking ability"],
    audience: [
      "Aspiring software developers",
      "Career changers entering tech",
      "Entrepreneurs building software products",
      "Students and graduates in STEM fields",
    ],
    learningOutcomes: [
      "Write clean, maintainable code",
      "Build backend APIs",
      "Work with databases",
      "Deploy applications to servers",
      "Use version control in team environments",
    ],
    practicalProjects: [
      "A task management application",
      "An inventory management system",
      "A REST API with authentication",
    ],
    toolsTechnologies: ["Python", "JavaScript", "Node.js", "PostgreSQL", "Git", "Docker"],
    studentSupport: [
      "Instructor-led sessions",
      "Code reviews",
      "Pair programming sessions",
      "Career guidance",
    ],
    faqs: [
      {
        question: "Do I need to be good at math?",
        answer:
          "No. Software development is more about logic and problem-solving than advanced mathematics.",
      },
    ],
    seoTitle: "Software Development Training | Wisnotech Academy, Uromi",
    seoDescription:
      "Learn software development in Uromi, Edo State. Backend development, databases, APIs, and deployment training.",
    image: "/images/courses/Software_developer_working_at_desk_20261023174100.jpg",
    imageAlt: "Software development training at Wisnotech Academy",
  },
  {
    id: "business-automation",
    slug: "business-automation",
    name: "Business Automation and AI Workflow Development",
    tagline: "Automate repetitive work and connect your business tools.",
    category: "business-automation",
    description:
      "Learn to identify repetitive business processes and automate them using no-code and low-code tools, AI assistants, and workflow platforms. Save time and reduce errors in business operations.",
    shortDescription:
      "Learn to automate business processes with no-code tools and AI workflows.",
    status: "planned",
    deliveryFormat: "online",
    location: "online",
    duration: null,
    schedule: null,
    baseFee: null,
    additionalCharges: [],
    prerequisites: ["Basic computer literacy", "Familiarity with common business tools"],
    audience: [
      "Business owners",
      "Operations managers",
      "Administrative staff",
      "Entrepreneurs",
    ],
    learningOutcomes: [
      "Identify automation opportunities",
      "Build no-code workflows",
      "Connect business applications",
      "Create AI-assisted processes",
    ],
    practicalProjects: [
      "An automated lead capture workflow",
      "An invoice processing automation",
      "A customer onboarding workflow",
    ],
    toolsTechnologies: [
      "Zapier",
      "Make",
      "Airtable",
      "AI assistants",
      "CRM platforms",
    ],
    studentSupport: [
      "Instructor-led sessions",
      "Workflow reviews",
      "Implementation guidance",
    ],
    faqs: [
      {
        question: "When will this course be available?",
        answer:
          "This course is planned. Contact us to register your interest and be notified when enrollment opens.",
      },
    ],
    seoTitle: "Business Automation and AI Workflow Training | Wisnotech",
    seoDescription:
      "Learn business automation and AI workflow development. No-code tools, process automation, and AI assistants for businesses.",
    image: "/images/courses/Professional_managing_business_w._20261023174044.jpg",
    imageAlt: "Business automation training at Wisnotech Academy",
  },
  {
    id: "digital-productivity",
    slug: "digital-productivity",
    name: "Microsoft Office and Digital Productivity",
    tagline: "Master essential digital office tools for work and business.",
    category: "digital-productivity",
    description:
      "Practical training in Microsoft Word, Excel, PowerPoint, Outlook, and cloud collaboration tools. Ideal for professionals, job seekers, and business owners who need solid digital office skills.",
    shortDescription:
      "Practical training in Microsoft Office and digital productivity tools.",
    status: "available",
    deliveryFormat: "in-person",
    location: "uromi",
    duration: "4 weeks",
    schedule: "Weekdays, 10:00 AM - 12:00 PM",
    baseFee: 60000,
    additionalCharges: [],
    prerequisites: ["Basic computer literacy"],
    audience: [
      "Job seekers",
      "Office administrators",
      "Business owners",
      "Students",
    ],
    learningOutcomes: [
      "Create professional documents in Word",
      "Build spreadsheets and analyse data in Excel",
      "Create presentations in PowerPoint",
      "Manage email and calendar in Outlook",
    ],
    practicalProjects: [
      "A business report document",
      "A financial spreadsheet",
      "A business presentation",
    ],
    toolsTechnologies: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Outlook"],
    studentSupport: [
      "Instructor-led sessions",
      "Practice exercises",
      "Skill assessments",
    ],
    faqs: [
      {
        question: "Do I need Microsoft Office installed?",
        answer:
          "Access to Microsoft Office or a compatible office suite is recommended for practice.",
      },
    ],
    seoTitle: "Microsoft Office and Digital Productivity Training | Wisnotech",
    seoDescription:
      "Learn Microsoft Office and digital productivity skills in Uromi, Edo State. Word, Excel, PowerPoint, and Outlook training.",
    image: "/images/courses/Professional_working_at_office_desk_20261023174050.jpg",
    imageAlt: "Digital productivity training at Wisnotech Academy",
  },
  {
    id: "data-processing",
    slug: "data-processing",
    name: "Data Processing and Digital Office Skills",
    tagline: "Turn raw data into organized, useful business information.",
    category: "data-processing",
    description:
      "Learn data entry, data cleaning, spreadsheet management, database basics, and digital office administration. Practical skills for office and administrative roles.",
    shortDescription:
      "Learn data entry, cleaning, spreadsheet management, and digital office administration.",
    status: "available",
    deliveryFormat: "in-person",
    location: "uromi",
    duration: "5 weeks",
    schedule: "Weekdays, 2:00 PM - 4:00 PM",
    baseFee: 70000,
    additionalCharges: [],
    prerequisites: ["Basic computer literacy"],
    audience: [
      "Data entry professionals",
      "Administrative assistants",
      "Office managers",
      "Small business owners",
    ],
    learningOutcomes: [
      "Enter and validate data accurately",
      "Clean and organize datasets",
      "Manage digital records",
      "Create data reports",
    ],
    practicalProjects: [
      "A customer database",
      "A sales data report",
      "An inventory tracking sheet",
    ],
    toolsTechnologies: ["Microsoft Excel", "Google Sheets", "Database basics"],
    studentSupport: [
      "Instructor-led sessions",
      "Practice datasets",
      "Skill assessments",
    ],
    faqs: [
      {
        question: "Is this suitable for beginners?",
        answer:
          "Yes. This course starts with foundational computer and data skills.",
      },
    ],
    seoTitle: "Data Processing and Digital Office Skills | Wisnotech Academy",
    seoDescription:
      "Learn data processing and digital office skills in Uromi, Edo State. Data entry, Excel, and database administration training.",
    image: "/images/courses/Analyst_working_at_computer_moni._20261023174054.jpg",
    imageAlt: "Data processing training at Wisnotech Academy",
  },
];

export const COURSE_CATEGORIES: Record<string, { label: string; description: string }> = {
  "web-development": {
    label: "Web Development",
    description: "Build websites and web applications.",
  },
  "graphic-design": {
    label: "Graphic Design",
    description: "Visual communication and branding.",
  },
  "ui-ux-design": {
    label: "UI/UX Design",
    description: "Design digital products and interfaces.",
  },
  "video-editing": {
    label: "Video Editing",
    description: "Video production and post-production.",
  },
  "ai-content-creation": {
    label: "AI Content Creation",
    description: "Generative AI for content production.",
  },
  "digital-marketing": {
    label: "Digital Marketing",
    description: "Online promotion and campaigns.",
  },
  "software-development": {
    label: "Software Development",
    description: "Build custom software applications.",
  },
  "business-automation": {
    label: "Business Automation",
    description: "Automate business processes.",
  },
  "digital-productivity": {
    label: "Digital Productivity",
    description: "Microsoft Office and office skills.",
  },
  "data-processing": {
    label: "Data Processing",
    description: "Data entry and digital records.",
  },
};

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getAvailableCourses(): Course[] {
  return COURSES.filter((c) => c.status === "available");
}

export function getPlannedCourses(): Course[] {
  return COURSES.filter((c) => c.status === "planned");
}

export const TRAINING_LOCATIONS = [
  { value: "nigeria", label: "Nigeria" },
  { value: "other", label: "Other country" },
] as const;

export const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
] as const;

export const TRAINING_FORMATS = [
  { value: "in-person", label: "In-person (Uromi, Edo State)" },
  { value: "online", label: "Online (live virtual classes)" },
  { value: "hybrid", label: "Hybrid (mix of in-person and online)" },
] as const;
