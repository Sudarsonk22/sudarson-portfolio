/**
 * All portfolio content, taken from Sudarson's resume (SUDARSON_K_Resume.pdf).
 * Every component reads from this file, so edit here and the whole site updates.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sudarson K',
  displayName: 'Sudarson K',
  firstName: 'SUDARSON',
  seriesTag: 'THE SERIES',
  originalLabel: 'A K. SUDARSON ORIGINAL',
  role: 'Java Full Stack Developer',
  tagline: ['Java Full Stack', 'Spring Boot', 'React'],
  intro:
    'An MCA graduate (CGPA 8.71) working as a Java Full Stack Developer at Zenve HugHub AI, building React and Spring Boot applications with MySQL, with hands-on knowledge of microservices, networking (CCNA) and cloud.',
  location: 'Chennai, Tamil Nadu',
  email: 'sudarson835@gmail.com',
  phone: '+91 93603 68849',
    formKey: 'cd4ca424-e3ca-47c5-99a1-85c6ce261c23',
  links: {
    linkedin: 'https://www.linkedin.com/in/sudarson-1258ca54',
    // add your GitHub URL here and the GitHub buttons appear automatically

    github: 'https://github.com/Sudarsonk22',
  },
  resumePdf: '/assets/Sudarson_K_Resume.pdf',
  resumeFileName: 'Sudarson_K_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Sudarson K',
  },
  interests: ['Microservices', 'Cloud Computing', 'Networking & Routing'],
};

export const education = [
  {
    school: 'Sri Manakula Vinayagar Engineering College',
    place: 'Puducherry',
    degree: 'MCA — Master of Computer Applications',
    short: 'MCA',
    period: 'Nov 2023 – Jun 2025',
    score: 'CGPA 9.0',
  },
  {
    school: 'Peri College of Arts and Science',
    place: 'Chennai',
    degree: 'BCA — Bachelor of Computer Applications',
    short: 'BCA',
    period: '2019 – 2022',
    score: 'CGPA 7.24',
  },
];

export const experience = [
  {
    company: 'Zenve HugHub AI',
    role: 'Java Full Stack Developer',
    place: 'India',
    period: 'June 2026 – Present',
    points: [
      'Building and maintaining company products end-to-end as a Java Full Stack Developer.',
      'Developed a project on the company platform with React (frontend) and Spring Boot (backend).',
      'Designed and implemented REST APIs in Spring Boot and integrated them with a React user interface.',
      'Collaborated with the team on feature development, debugging and optimizing application modules.',
      'Working with MySQL for data persistence across the full development lifecycle.',
    ],
  },
  {
    company: 'VCodez Information Technologies',
    role: 'Full Stack Web Development Intern',
    place: 'Chennai',
    period: 'February 2025 – May 2025',
    points: [
      'Completed a structured full-stack web development internship focused on Angular.',
      'Developed responsive, reusable UI components using Angular, HTML, CSS and JavaScript.',
      'Contributed to feature development and UI enhancements for a mobile mental health application.',
      'Assisted in debugging, testing and optimizing application modules with the team.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'network' | 'chart';
};

export const projects: Project[] = [
  {
    id: 'zenve-fashion',
    title: 'Zenve Fashion',
    year: '2026',
    genre: 'Catalogue Management • E-commerce',
    logline: 'A 12-module catalogue management console — from designer CRM to settlement, BI dashboards and a command centre.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    build: [
      'Built a 12-module catalogue management console covering Designer CRM, Product/SKU, Catalogue QA, Inventory, Storefront, Order Management, Delivery, Returns, Settlement, BI Dashboards and Command Centre.',
      'Migrated all services from seed data to MySQL and fixed the schema issues found during the migration.',
      'Implemented business logic for returns inspection, designer-wise settlement with commission calculation, and delivery promise rules based on pincode, stock location and availability.',
      'Added role-based access preview for 7 user roles and backend-powered product search, and resolved bugs reported by the testing team before deployment.',
    ],
    features: [
      'Designer CRM, Product/SKU and Catalogue QA',
      'Returns inspection & designer-wise settlement',
      'Commission calculation',
      'Delivery promise rules by pincode & stock',
      'Role-based access preview for 7 roles',
      'BI dashboards & command centre',
    ],
    metrics: [
      { value: '12', label: 'modules in the console' },
      { value: '7', label: 'user roles with access preview' },
      { value: '100%', label: 'services moved from seed data to MySQL' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'vendor-crm',
    title: 'Vendor CRM',
    year: '2026',
    genre: 'CRM • Inventory • Full-Stack',
    logline: 'One Spring Boot backend serving three separate frontend UIs, with catalogue QA, inventory and warehouse management.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'React'],
    build: [
      'Developed the Spring Boot and MySQL backend for a Vendor CRM serving 3 separate frontend UIs from a single backend.',
      'Built the Catalogue QA and Inventory modules, keeping stock in a dedicated inventory table.',
      'Extended the system with SKU management, an inventory dashboard, low and out-of-stock tracking, expiry management and warehouse management.',
      'Integrated the REST APIs with the React frontend together with a teammate.',
    ],
    features: [
      'Catalogue QA module',
      'Inventory in a dedicated table',
      'SKU management & inventory dashboard',
      'Low / out-of-stock tracking',
      'Expiry & warehouse management',
    ],
    metrics: [
      { value: '3', label: 'frontend UIs served' },
      { value: '1', label: 'shared Spring Boot backend' },
      { value: '2', label: 'core modules owned' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'zenve-vet',
    title: 'Zenve Vet',
    year: '2026',
    genre: 'Social Network • Healthcare',
    logline: 'A professional social network for veterinary doctors — feed, clinical cases, stories, connections and messaging.',
    stack: ['Java', 'Spring Boot', 'React', 'GitHub'],
    build: [
      'Worked in a 7-member team to build a social networking platform for veterinary doctors.',
      'Owned the backend for the Feed, Vet Network and Clinical Cases modules, and built the Member Benefits and Advertise modules end to end.',
      'Implemented sign-up and sign-in authentication, doctor profiles, posts, reels, clinical cases, and stories that auto-delete after 24 hours.',
      'Built connection requests with messaging only between connected doctors, plus ads in the feed with comments.',
    ],
    features: [
      'Sign-up / sign-in authentication',
      'Doctor profiles, posts & reels',
      'Clinical cases',
      'Stories that auto-delete after 24 hours',
      'Connections with messaging between connected doctors',
      'Feed ads with comments',
    ],
    metrics: [
      { value: '7', label: 'member team' },
      { value: '5', label: 'modules owned or built' },
      { value: '24h', label: 'auto-expiring stories' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'network',
  },
  {
    id: 'cloud-fare',
    title: 'Cloud Fare',
    year: 'MCA',
    genre: 'Machine Learning • Travel',
    logline: 'Revealing the cost of domestic journeys — fare prediction from travel dates, route and stopovers.',
    stack: ['Python', 'Flask', 'Random Forest', 'Extra Trees', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    build: [
      'Built a system where users enter travel details such as departure and arrival dates, source, destination and stopovers to estimate the cost of domestic journeys.',
      'Used Random Forest and Extra Trees regressors behind a Flask web app with a MySQL database.',
    ],
    features: ['Departure & arrival dates', 'Source, destination & stopovers', 'Random Forest & Extra Trees regressors', 'Flask web interface'],
    metrics: [
      { value: '2', label: 'regression models' },
      { value: 'Flask', label: 'web app' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'chart',
  },
  {
    id: 'laptop-price',
    title: 'Laptop Price Insight',
    year: 'MCA',
    genre: 'Machine Learning • Pricing',
    logline: 'A tailored ML model that predicts laptop prices from brand, CPU, RAM and storage.',
    stack: ['Python', 'Flask', 'Random Forest', 'Extra Trees', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    build: [
      'Built a machine learning model to predict laptop prices based on specifications like brand, CPU, RAM and storage.',
      'Analyzed historical data for accurate forecasting, served through a Flask web app.',
    ],
    features: ['Brand, CPU, RAM & storage inputs', 'Historical data analysis', 'Random Forest & Extra Trees regressors', 'Flask web interface'],
    metrics: [
      { value: '4', label: 'key spec inputs' },
      { value: '2', label: 'regression models' },
    ],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'developer',
    title: 'Full Stack Developer',
    org: 'Zenve HugHub AI',
    detail: 'Building company products end-to-end with React, Spring Boot and MySQL since June 2026.',
    laurel: 'Now Playing',
  },
  {
    id: 'mca',
    title: 'MCA Graduate',
    org: 'SMVEC, Puducherry',
    detail: 'Master of Computer Applications with a CGPA of 8.71.',
    laurel: 'CGPA 8.71',
  },
  {
    id: 'ccna',
    title: 'CCNA Certified',
    org: 'Cisco Networking Academy',
    detail: 'Two CCNA tracks: Enterprise Networking, Security & Automation, and Switching, Routing & Wireless Essentials.',
    laurel: 'Two Tracks',
  },
  {
    id: 'products',
    title: '3 Products Shipped',
    org: 'Zenve platform',
    detail: 'Zenve Fashion catalogue console, Vendor CRM and the Zenve Vet professional network.',
    laurel: 'In Production',
  },
  {
    id: 'python',
    title: 'Python — Grade A',
    org: 'SLA',
    detail: 'Completed the Python training program with grade “A”.',
    laurel: 'Grade A',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Cisco', name: 'CCNA: Enterprise Networking, Security, and Automation' },
  { issuer: 'Cisco', name: 'CCNA: Switching, Routing, and Wireless Essentials' },
  { issuer: 'Udemy', name: 'Full Stack Java Development' },
  { issuer: 'SLA', name: 'Python (Grade A)' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side & architecture',
    skills: [
      { name: 'Spring Boot', mono: 'Sb', note: 'Daily' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'Django', mono: 'Dj' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Angular', mono: 'Ng' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Persistence',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'SQLite', mono: 'Sq' },
    ],
  },
  {
    id: 'networking',
    title: 'Networking',
    subtitle: 'CCNA-level concepts',
    skills: [
      { name: 'Networking & Routing', mono: 'Nr' },
      { name: 'Switching & Wireless', mono: 'Sw' },
      { name: 'IT Support', mono: 'It' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Where the work happens',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'IntelliJ', mono: 'Ij' },
      { name: 'Eclipse IDE', mono: 'Ec' },
      { name: 'Visual Studio', mono: 'Vs' },
      { name: 'PyCharm', mono: 'Pc' },
      { name: 'MS Office', mono: 'Of' },
    ],
  },
  {
    id: 'soft',
    title: 'Strengths',
    subtitle: 'How the work gets done',
    skills: [
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'Team Collaboration', mono: 'Tc' },
      { name: 'Time Management', mono: 'Tm' },
      { name: 'SDLC', mono: 'Sd' },
      { name: 'Quick Learner', mono: 'Ql' },
    ],
  },
];

/** Shown when a skill card is hovered/tapped: where the skill appears on the resume. */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Zenve Fashion', 'Vendor CRM', 'Zenve Vet', 'Udemy Full Stack Java'],
  Python: ['Cloud Fare', 'Laptop Price Insight', 'SLA Python (Grade A)'],
  'Spring Boot': ['Zenve HugHub AI', 'Zenve Fashion', 'Vendor CRM', 'Zenve Vet'],
  'REST APIs': ['Zenve HugHub AI', 'Vendor CRM'],
  Microservices: ['Zenve HugHub AI'],
  Flask: ['Cloud Fare', 'Laptop Price Insight'],
  React: ['Zenve HugHub AI', 'Vendor CRM', 'Zenve Vet'],
  Angular: ['VCodez internship'],
  HTML: ['Zenve Fashion', 'VCodez internship'],
  CSS: ['Zenve Fashion', 'VCodez internship'],
  JavaScript: ['Zenve Fashion', 'VCodez internship'],
  MySQL: ['Zenve Fashion', 'Vendor CRM', 'Cloud Fare'],
  'Networking & Routing': ['CCNA: Enterprise Networking', 'CCNA: Switching & Routing'],
  'Switching & Wireless': ['CCNA: Switching, Routing & Wireless'],
  'Git / GitHub': ['Zenve Vet'],
  'Team Collaboration': ['Zenve Vet — 7-member team'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2019 – 2022',
    synopsis: 'BCA at Peri College of Arts and Science, Chennai — where the code started.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Bachelor of Computer Applications — data structures, C programming, relational databases and networking fundamentals. CGPA 7.24.',
        tags: ['BCA', 'C', 'Data Structures', 'RDBMS'],
        runtime: '2019 – 2022',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Master’s',
    period: '2023 – 2025',
    synopsis: 'MCA at Sri Manakula Vinayagar Engineering College, Puducherry.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Postgrad',
        description: 'Master of Computer Applications — advanced algorithms, DBMS, software engineering, web technologies and computer networks. CGPA 8.71.',
        tags: ['MCA', 'CGPA 8.71'],
        runtime: 'Nov 2023 – Jun 2025',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Network',
        description: 'Two Cisco Networking Academy CCNA certifications — Enterprise Networking, Security & Automation, and Switching, Routing & Wireless Essentials.',
        tags: ['CCNA', 'Routing', 'Switching'],
        runtime: 'Cisco NetAcad',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'The Model Maker',
        description: 'Cloud Fare and Laptop Price Insight — Flask apps powered by Random Forest and Extra Trees regressors.',
        tags: ['Python', 'Flask', 'ML'],
        runtime: 'MCA projects',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Internship',
    period: 'Feb – May 2025',
    synopsis: 'Full Stack Web Development Intern at VCodez Information Technologies.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Intern',
        description: 'A structured full-stack internship focused on Angular — responsive, reusable UI components with HTML, CSS and JavaScript.',
        tags: ['Angular', 'HTML', 'CSS', 'JavaScript'],
        runtime: 'Feb – May 2025',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Mental Health App',
        description: 'Feature development and UI enhancements for a mobile mental health application, plus debugging and testing with the team.',
        tags: ['Features', 'UI', 'Testing'],
        runtime: 'VCodez',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026 – Present',
    synopsis: 'Java Full Stack Developer at Zenve HugHub AI — three products on the Zenve platform.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Developer',
        description: 'REST APIs in Spring Boot, integrated with React interfaces, with MySQL across the full development lifecycle.',
        tags: ['Spring Boot', 'React', 'MySQL'],
        runtime: 'Jun 2026 – Present',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Catalogue Console',
        description: 'Zenve Fashion — a 12-module console with settlement, delivery promise rules and access preview for 7 roles.',
        tags: ['Java', 'Spring Boot', 'MySQL'],
        runtime: '12 modules',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Network Builder',
        description: 'Vendor CRM for three UIs from one backend, and the Zenve Vet professional network built with a 7-member team.',
        tags: ['Vendor CRM', 'Zenve Vet'],
        runtime: '2 products',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Going deeper into microservices architecture and cloud, and shipping more Spring Boot + React products.',
        tags: ['Microservices', 'Cloud', 'Spring Boot'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Spring Boot every day', palette: amber },
  { label: 'Current role', title: 'Zenve HugHub AI', detail: 'Java Full Stack Developer', palette: crimson },
  { label: 'Biggest build', title: 'Zenve Fashion', detail: '12-module catalogue console', palette: ocean },
  { label: 'One backend, 3 UIs', title: 'Vendor CRM', detail: 'Catalogue QA • Inventory', palette: amber },
  { label: 'Team production', title: 'Zenve Vet', detail: '7-member team • 5 modules', palette: jade },
  { label: 'Academic high', title: 'MCA 8.71', detail: 'Sri Manakula Vinayagar Engineering College', palette: violet },
  { label: 'Network credential', title: 'CCNA ×2', detail: 'Cisco Networking Academy', palette: ocean },
  { label: 'Frontend stack', title: 'React', detail: 'with Angular from the VCodez internship', palette: crimson },
  { label: 'ML on the side', title: 'Cloud Fare', detail: 'Random Forest • Extra Trees', palette: jade },
  { label: 'Current focus', title: 'Microservices', detail: 'with cloud computing', palette: violet },
];

/** Slides for the "▶ Play Intro" highlight reel. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Now playing',
    title: 'Java Full Stack',
    lines: ['Java Full Stack Developer · Zenve HugHub AI', 'June 2026 – Present'],
    chips: ['Spring Boot', 'React', 'MySQL'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Spring Boot, REST APIs, Microservices · React, Angular', 'MySQL, SQLite · Python, Flask, Django'],
    chips: ['Java', 'Spring Boot', 'React', 'MySQL', 'Python', 'Git'],
  },
  {
    kicker: 'Education',
    title: 'MCA · 8.71',
    lines: ['Sri Manakula Vinayagar Engineering College, Puducherry', 'BCA · Peri College of Arts and Science, Chennai'],
  },
  {
    kicker: 'Projects',
    title: 'Five Originals',
    lines: ['Zenve Fashion — 12-module catalogue console', 'Vendor CRM — one backend, three UIs', 'Zenve Vet — a network for veterinary doctors'],
  },
  {
    kicker: 'Training arc',
    title: 'The Internship',
    lines: ['Full Stack Web Development Intern · VCodez', 'Angular components for a mobile mental health app'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Certifications`,
    lines: ['CCNA ×2 · Cisco Networking Academy', 'Full Stack Java · Udemy  ·  Python · SLA'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Microservices · Cloud Computing · Networking'],
  },
];

export type ProfileId = 'sudarson' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sudarson',
    name: 'Sudarson',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects & stack first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & work', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
