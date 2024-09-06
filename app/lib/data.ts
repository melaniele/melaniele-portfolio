// Heroicons
import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

// Tech icons
const ReactIcon = "/icons/tech/react.png";
const JSIcon = "/icons/tech/javascript.svg";
const CSharpIcon = "/icons/tech/c-sharp.svg";
const DotNETIcon = "/icons/tech/dotNET.png";
const ReactBootstrapIcon = "/icons/tech/react-bootstrap.svg";
const MaterialUIIcon = "/icons/tech/MaterialUI.svg";
const AzureIcon = "/icons/tech/azure.svg";
const LaunchDarklyIcon = "/icons/tech/launchdarkly.svg";
const GitIcon = "/icons/tech/Git.svg";
const GitHubIcon = "/icons/tech/github.svg";
const SeleniumIcon = "/icons/tech/selenium.svg";
const TestCompleteIcon = "/icons/tech/testcomplete.png";
const JenkinsIcon = "/icons/tech/jenkins.svg";
const JiraIcon = "/icons/tech/jira.svg";
const ConfluenceIcon = "/icons/tech/confluence.svg";
const SmartGitIcon = "/icons/tech/smartgit.svg";
const AWSIcon = "/icons/tech/aws.svg";
const VSIcon = "/icons/tech/visual-studio.svg";
const CitrixIcon = "/icons/tech/citrix.svg";
const NextjsIcon = "/icons/tech/nextjs.png";
const TailwindCSSIcon = "/icons/tech/tailwindcss.svg";
const TypeScriptIcon = "/icons/tech/TypeScript.svg";
const NodemailerIcon = "/icons/tech/nodemailer.webp";
const ReactNativeIcon = "/icons/tech/react-native.svg";
const FirebaseIcon = "/icons/tech/Firebase.svg";
const CSSIcon = "/icons/tech/css.svg";
const ExpoIcon = "/icons/tech/expo.png";
const OpenWeatherMapIcon = "/icons/tech/openweathermap.png";
const AngularIcon = "/icons/tech/angular.svg";
const MongoDBIcon = "/icons/tech/MongoDB.svg";
const XamarinIcon = "/icons/tech/Xamarin.svg";
const IonicIcon = "/icons/tech/Ionic.svg";
const jQueryIcon = "/icons/tech/jQuery.svg";
const NodejsIcon = "/icons/tech/Node.js.svg";
const JavaIcon = "/icons/tech/Java.svg";
const CppIcon = "/icons/tech/Cpp.svg";
const CIcon = "/icons/tech/C.svg";
const MSQLIcon = "/icons/tech/MicrosoftSQL.png";
const TestRailIcon = "/icons/tech/testrail.png";
const DockerIcon = "/icons/tech/Docker.svg";
const FigmaIcon = "/icons/tech/Figma.svg";
const AdobeXDIcon = "/icons/tech/Adobe XD.svg";

// Logos (companies, schools, etc.)
const SenecaLogo = "/icons/school/seneca-logo.svg";
const CHLLogo = "/icons/school/chl-logo.png";
const ParLogo = "/icons/companies/partech.svg";
const HHSLogo = "/icons/companies/Hamilton-Health-Sciences.png";

export const navbar = [
  { link: "#about", name: "About", icon: UserIcon },
  {
    link: "#experience",
    name: "Experience",
    icon: BuildingOfficeIcon,
  },
  {
    link: "#projects",
    name: "Projects",
    icon: ComputerDesktopIcon,
  },
  {
    link: "#skills",
    name: "Skills",
    icon: AcademicCapIcon,
  },
  {
    link: "#contacts",
    name: "Contacts",
    icon: EnvelopeIcon,
  },
];

export const aboutTabs = [
  {
    id: "myStory",
    title: "My Story",
  },
  {
    id: "educations",
    title: "Educations",
  },
  {
    id: "hobbies",
    title: "Hobbies",
  },
];

export const myStory = [
  "Hello! I’m Melanie, I graduated with a Bachelor’s Degree in Software Development from Seneca College. At 18, I made a bold decision to pursue my own passion for Software Engineering, leaving behind my family’s long-standing tradition of becoming police officers, and ventured to Canada to follow my dreams.",
  "Throughout my academic journey and work experience, I’ve nurtured a deep passion for technology and innovation. I’ve developed dynamic web applications, designed intuitive mobile apps, and written automated tests, gaining proficiency in various programming languages and development frameworks.",
  "As a fast learner with high adaptability, I am always eager to embrace new challenges and expand my knowledge. My ultimate goal is to become a Software Engineer, where I can continuously grow, innovate, and make meaningful contributions to the tech industry.",
];

export const myEducations = [
  {
    school: "Seneca Polytechnic",
    degree: "Honours Bachelor of Technology - Software Development",
    link: "https://www.senecapolytechnic.ca/",
    location: "Toronto, ON",
    duration: "January 2021 - August 2024",
    logo: {
      src: SenecaLogo,
      alt: "Seneca Logo",
      width: 130,
      height: 100,
    },
    achievements: [
      "GPA: 4.0/4.0",
      "Awards: President's Honour List (4 years)",
      'Activities: Vice President of "12 Stones" - a Discipleship Club',
    ],
  },
  {
    school: "Ha Long High School for Gifted Students",
    degree: "High School Diploma",
    link: "https://chuyenhalong.edu.vn/",
    location: "Ha Long, VN",
    duration: "September 2017 - August 2020",
    logo: {
      src: CHLLogo,
      alt: "Highschool Logo",
      width: 70,
      height: 50,
    },
    achievements: [
      "Grade: A",
      "Activities: Member at IOP Dance Club",
      "Volunteers: Member at Fireflies Non-profit Volunteers Group",
    ],
  },
];

export const myHobbies = [
  { name: "Traveling", pic: "/pics/traveling.jpeg", event: "Paris, 2023" },
  { name: "Hiking", pic: "/pics/hiking.jpeg", event: "Banff, 2024" },
  { name: "Cooking", pic: "/pics/cooking.jpeg", event: "Christmas, 2023" },
  { name: "New Exp.", pic: "/pics/ski.jpeg", event: "Winter, 2022" },
];

export const experiences = [
  {
    company: {
      name: "PAR Technology",
      location: "Toronto, Canada",
      logo: {
        src: ParLogo,
        alt: "PAR Logo",
      },
      link: "https://partech.com/",
    },
    title: "API Engineer",
    duration: "May 2024 - present",
    tasks: [
      "Developed a full-stack app with React and C# .NET using LaunchDarkly API for streamlined feature flag management, empowering teams to manage features independently, and resolve cost issue.",
      "Debugged legacy C# .NET code rigorously, enhancing system stability.",
      "Authored detailed impact analysis and QA notes to support test plans and future reference.",
    ],
    tech: [
      {
        src: ReactIcon,
        alt: "ReactJS",
      },
      {
        src: JSIcon,
        alt: "JavaScript",
      },
      {
        src: CSharpIcon,
        alt: "CSharp",
      },
      {
        src: DotNETIcon,
        alt: "DotNET",
      },
      {
        src: ReactBootstrapIcon,
        alt: "React Bootstrap",
      },
      {
        src: MaterialUIIcon,
        alt: "Material UI",
      },
      {
        src: AzureIcon,
        alt: "Microsoft Azure SSO",
      },
      {
        src: LaunchDarklyIcon,
        alt: "LaunchDarkly",
      },
      {
        src: GitIcon,
        alt: "Git",
      },
      {
        src: GitHubIcon,
        alt: "GitHub",
      },
    ],
  },
  {
    company: {
      name: "PAR Technology",
      location: "Toronto, Canada",
      logo: {
        src: ParLogo,
        alt: "PAR Logo",
      },
      link: "https://partech.com/",
    },
    title: "Associate QE Automation Engineer",
    duration: "May 2023 - April 2024",
    tasks: [
      "Elevated Selenium C# project success from 50% to 100% by enhancing script quality in a Scrum team.",
      "Automated 100+ web and POS test cases using Selenium C# and TestComplete JavaScript, with execution on AWS EC2 and Jenkins pipelines.",
      "Documented and retested bugs in Jira, preventing disruptions to 40+ test cases and production.",
      "Investigated issues and conducted Smoke and Regression Runs, improving product stability.",
      "Collaborated with QA and QE teams, providing script updates and innovating web case solutions.",
      "Mentored a coop student, enhancing their skills and integration into the team.",
    ],
    tech: [
      {
        src: SeleniumIcon,
        alt: "Selenium",
      },
      {
        src: JSIcon,
        alt: "JavaScript",
      },
      {
        src: CSharpIcon,
        alt: "CSharp",
      },
      {
        src: TestCompleteIcon,
        alt: "TestComplete",
      },
      {
        src: JenkinsIcon,
        alt: "Jenkins",
      },
      {
        src: JiraIcon,
        alt: "Jira",
      },
      {
        src: ConfluenceIcon,
        alt: "Confluence",
      },
      {
        src: SmartGitIcon,
        alt: "SmartGit",
      },
      {
        src: AWSIcon,
        alt: "AWS EC2",
      },
      {
        src: GitHubIcon,
        alt: "GitHub",
      },
      {
        src: VSIcon,
        alt: "Visual Studio",
      },
    ],
  },
  {
    company: {
      name: "Hamilton Health Science",
      location: "Toronto, Canada",
      logo: {
        src: HHSLogo,
        alt: "HHS Logo",
      },
      link: "https://www.hamiltonhealthsciences.ca/",
    },
    title: "Application Developer Intern",
    duration: "July 2022 - September 2022",
    tasks: [
      "Tested the Budget Tool while also contributing to bug identification and resolution in React.",
      "Proficiently and professionally utilized industry-standard tools such as Git, Git Graph, Confluence, and Jira",
    ],
    tech: [
      {
        src: ReactIcon,
        alt: "ReactJS",
      },
      {
        src: JSIcon,
        alt: "JavaScript",
      },
      {
        src: GitHubIcon,
        alt: "GitHub",
      },
      {
        src: JiraIcon,
        alt: "Jira",
      },
      {
        src: ConfluenceIcon,
        alt: "Confluence",
      },
      {
        src: CitrixIcon,
        alt: "Citrix Workspace",
      },
    ],
  },
];

export const projects = [
  {
    title: "Next.js Portfolio Website",
    description: "A web-based portfolio made with Next.js and Tailwind CSS.",
    image: "/projects/Portfolio.png",
    links: {
      demo: "https://melaniele.vercel.app/",
      github: "https://github.com/melaniele/melaniele-portfolio",
    },
    tech: [
      {
        src: NextjsIcon,
        alt: "Next.js",
      },
      {
        src: ReactIcon,
        alt: "ReactJS",
      },
      {
        src: TailwindCSSIcon,
        alt: "TailwindCSS",
      },
      {
        src: TypeScriptIcon,
        alt: "TypeScript",
      },
      {
        src: NodemailerIcon,
        alt: "Nodemailer",
      },
    ],
    tag: ["All", "Web"],
  },
  {
    title: "RentRetreat",
    description: "A cross-platform mobile application made with React Native.",
    image: "/projects/RentRetreat.png",
    links: {
      demo: "",
      github: "https://github.com/melaniele/RentRetreat",
    },
    tech: [
      {
        src: ReactNativeIcon,
        alt: "React Native",
      },
      {
        src: JSIcon,
        alt: "JavaScript",
      },
      {
        src: FirebaseIcon,
        alt: "Firebase",
      },
      {
        src: CSSIcon,
        alt: "Vanilla CSS",
      },
      {
        src: ExpoIcon,
        alt: "Expo Go",
      },
    ],
    tag: ["All", "Mobile"],
  },
  {
    title: "Today's Weather",
    description:
      "A web application developed with React and React-Bootstrap by fetching data from OpenWeatherMap API and using Geolocation to fetch user's current location.",
    image: "/projects/TodaysWeather.png",
    links: {
      demo: "https://react-weatherapp-blond.vercel.app/",
      github: "https://github.com/melaniele/react-weatherapp",
    },
    tech: [
      {
        src: ReactIcon,
        alt: "ReactJS",
      },
      {
        src: JSIcon,
        alt: "JavaScript",
      },
      {
        src: CSSIcon,
        alt: "Vanilla CSS",
      },
      {
        src: ReactBootstrapIcon,
        alt: "React Bootstrap",
      },
      {
        src: OpenWeatherMapIcon,
        alt: "OpenWeatherMap",
      },
    ],
    tag: ["All", "Web"],
  },
  {
    title: "Blog App",
    description: "A web application developed with Angular and MongoDB.",
    image: "/projects/BlogApp.png",
    links: {
      demo: "https://blog-app-bice-pi.vercel.app/",
      github: "https://github.com/melaniele/BlogApp",
    },
    tech: [
      {
        src: AngularIcon,
        alt: "AngularJS",
      },
      {
        src: TypeScriptIcon,
        alt: "TypeScript",
      },
      {
        src: MongoDBIcon,
        alt: "MongoDB",
      },
    ],
    tag: ["All", "Web"],
  },
];

export const projectTags = ["All", "Web", "Mobile"];

export const skills = [
  {
    name: "Frontend",
    tech: [
      {
        src: ReactIcon,
        alt: "ReactJS",
      },
      {
        src: ReactNativeIcon,
        alt: "React Native",
      },
      {
        src: NextjsIcon,
        alt: "Next.js",
      },
      {
        src: JSIcon,
        alt: "JavaScript",
      },
      {
        src: TypeScriptIcon,
        alt: "TypeScript",
      },
      {
        src: ReactBootstrapIcon,
        alt: "React Bootstrap",
      },
      {
        src: MaterialUIIcon,
        alt: "Material UI",
      },
      {
        src: TailwindCSSIcon,
        alt: "TailwindCSS",
      },
      {
        src: AngularIcon,
        alt: "AngularJS",
      },
      {
        src: XamarinIcon,
        alt: "Xamarin",
      },
      {
        src: IonicIcon,
        alt: "Ionic",
      },
      {
        src: jQueryIcon,
        alt: "jQuery",
      },
    ],
  },
  {
    name: "Backend",
    tech: [
      {
        src: CSharpIcon,
        alt: "CSharp",
      },
      {
        src: DotNETIcon,
        alt: "DotNET",
      },
      {
        src: NodejsIcon,
        alt: "Node.js",
      },
      {
        src: JavaIcon,
        alt: "Java",
      },
      {
        src: CppIcon,
        alt: "C++",
      },
      {
        src: CIcon,
        alt: "C",
      },
    ],
  },
  {
    name: "Database",
    tech: [
      {
        src: MongoDBIcon,
        alt: "MongoDB",
      },
      {
        src: MSQLIcon,
        alt: "Microsoft SQL Server",
      },
      {
        src: FirebaseIcon,
        alt: "Firebase",
      },
    ],
  },
  {
    name: "Automation",
    tech: [
      {
        src: SeleniumIcon,
        alt: "Selenium C#",
      },
      {
        src: TestCompleteIcon,
        alt: "TestComplete",
      },
      {
        src: TestRailIcon,
        alt: "TestRail",
      },
    ],
  },

  {
    name: "Tools/Others",
    tech: [
      {
        src: GitIcon,
        alt: "Git",
      },
      {
        src: GitHubIcon,
        alt: "GitHub",
      },
      {
        src: SmartGitIcon,
        alt: "SmartGit",
      },
      {
        src: AWSIcon,
        alt: "AWS",
      },
      {
        src: AzureIcon,
        alt: "Microsoft Azure SSO",
      },
      {
        src: DockerIcon,
        alt: "Docker",
      },
      {
        src: FigmaIcon,
        alt: "Figma",
      },
      {
        src: AdobeXDIcon,
        alt: "Adobe XD",
      },
    ],
  },
];

export const contacts = [
  {
    icon: "/icons/medias/LinkedIn.svg",
    alt: "LinkedIn Icon",
    link: "https://www.linkedin.com/in/melanie-le-ca/",
    name: "@linkedin.com/in/melanie-le-ca/",
  },
  {
    icon: "/icons/medias/github.svg",
    alt: "GitHub Icon",
    link: "https://github.com/melaniele",
    name: "@github.com/melaniele",
  },
  {
    icon: "/icons/medias/gmail.webp",
    alt: "Gmail Icon",
    link: "mailto:lethihongminh123@gmail.com",
    name: "lethihongminh123@gmail.com",
  },
];

export const contactForm = [
  {
    id: "email",
    type: "email",
    label: "Your Email",
    placeholder: "I'll use this to get back to you (e.g. johndoe@gmail.com)",
    inputType: "input",
  },
  {
    id: "subject",
    type: "text",
    label: "Subject",
    placeholder: "Very nice to connect with you!",
    inputType: "input",
  },
  {
    id: "message",
    type: "text",
    label: "Message",
    placeholder: "Let's have a chat!",
    inputType: "textarea",
  },
];
