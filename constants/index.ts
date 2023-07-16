interface Route {
  path: string;
  name: string;
}

interface HowItWorksList {
  title: string;
  sublist: string[];
}

interface SuccessStory {
  name: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export const routes: Route[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/explore",
    name: "Explore Projects",
  },
  {
    path: "/forum",
    name: "Forum",
  },
];

export const howItWorksList: HowItWorksList[] = [
  {
    title: "Create an Account",
    sublist: [
      "Sign up and create your account on our platform.",
      "Provide necessary information and complete the registration process.",
    ],
  },
  {
    title: "Explore Projects",
    sublist: [
      "Browse and discover a wide range of projects available on our marketplace.",
      "Use search filters, tags, or categories to find projects that match your interests and expertise.",
      "If you didn't find an interesting project, you can always add your own and invite collaborators.",
    ],
  },
  {
    title: "Connect with Developers",
    sublist: [
      "Connect with other developers who share similar interests or skills.",
      "Explore developer profiles and initiate connections with potential collaborators.",
    ],
  },
  {
    title: "Create Your Own Project",
    sublist: [
      "Start a new project and define its scope, goals, and requirements.",
      "Set up project details, such as project name, description, and relevant tags.",
    ],
  },
  {
    title: "Collaborate and Communicate",
    sublist: [
      "Invite developers to join your project and assign roles.",
      "Utilize project collaboration tools to communicate, share updates, and work together effectively.",
    ],
  },
  {
    title: "Track Progress and Contribute",
    sublist: [
      "Monitor the progress of your project and track tasks, milestones, and deadlines.",
      "Collaborate with team members, assign tasks, and contribute to the project's development.",
    ],
  },
  {
    title: "Showcase and Gain Recognition",
    sublist: [
      "Showcase your completed projects and contributions on your profile.",
      "Receive feedback, recognition, and ratings from other developers.",
      "Build your portfolio, establish your reputation, and gain visibility within the community.",
    ],
  },
  {
    title: "Learn and Grow",
    sublist: [
      "Take advantage of learning resources, tutorials, or guides available on our platform.",
      "Engage in discussions, ask questions, and learn from experienced developers.",
      "Stay updated with the latest industry trends and enhance your skills.",
    ],
  },
];

export const successStories: SuccessStory[] = [
  {
    name: "Sarah",
    title: "Expanding Horizons",
    description:
      "Sarah, a frontend developer, joined the marketplace to expand her skillset and collaborate on interesting projects. Through the platform, she connected with a team of developers working on a cutting-edge web application. Together, they built an impressive product that gained recognition in the industry. Sarah's contributions to the project opened up new career opportunities, and she was subsequently hired by a prominent tech company.",
  },
  {
    name: "John",
    title: "Entrepreneurial Journey",
    description:
      "John, an aspiring entrepreneur, used the marketplace to find a developer team to bring his innovative startup idea to life. He connected with talented developers who shared his vision and collaborated closely on the project. The marketplace provided the perfect platform for him to build his team and launch his startup successfully. John's project garnered attention from investors, leading to funding and accelerated growth for his business.",
  },
  {
    name: "Emily",
    title: "Open Source Contributions",
    description:
      "Emily, a passionate software engineer, discovered the marketplace's vibrant open-source community. She contributed her skills and knowledge to various open-source projects, collaborating with developers from around the world. Her contributions not only helped improve the projects but also allowed her to showcase her expertise and gain recognition within the community. Emily's active involvement in open source opened doors for her to join prestigious organizations and work on impactful projects.",
  },
  {
    name: "Alex",
    title: "Thriving Freelance Career",
    description:
      "Alex, a freelance developer, leveraged the marketplace to find clients and expand his freelance business. He connected with individuals and companies seeking skilled developers and collaborated on a variety of projects. Through the marketplace's project management tools and communication features, Alex provided high-quality deliverables and established a reputation for his exceptional work. This led to a steady stream of freelance opportunities and a thriving freelance career.",
  },
];

export const faqList: FAQ[] = [
  {
    question: "How can I find projects to collaborate on?",
    answer:
      "You can find projects by visiting the 'Explore Projects' page. Use search filters, tags, or categories to narrow down the project listings. Click on a project to view its details and express your interest in collaborating.",
  },
  {
    question: "How do I connect with other developers?",
    answer:
      "You can connect with other developers by sending connection requests. While you can't access all of their projects directly, you can express your interest in collaborating on specific projects they are involved in.",
  },
  {
    question: "How can I create my own project?",
    answer:
      "To create your own project, go to the 'Create Project' page and provide details such as the project name, description, desired collaborators, and project requirements. Once created, your project will be visible to other developers who can express interest in joining.",
  },
  {
    question: "How do I track the progress of a project I'm involved in?",
    answer:
      "You can track project progress by accessing the project's dedicated page. Here, you'll find updates, tasks, and milestones. Collaborators can use the project's communication and task management tools to stay informed and contribute to its development.",
  },
  {
    question: "What if I have a dispute or issue with a collaborator?",
    answer:
      "In the event of a dispute or issue, we encourage you to first communicate and resolve the matter with your collaborator. If the issue persists and cannot be resolved, you have the option to remove a collaborator without needing approval. However, please note that removing a collaborator should only be done with a strong reason and valid evidence. If a removed collaborator can provide evidence of invalid removal, it may result in negative ratings. We advise careful consideration and reaching out to our support team through the contact form on our website to discuss the situation and find a resolution.",
  },
];
