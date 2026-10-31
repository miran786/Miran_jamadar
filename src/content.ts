// All site text lives here. Mirrors the reviewed copy deck (site-copy.md, kept out of git).

export const profile = {
  name: 'Miran Jamadar',
  fullName: 'Miran Mubeen Jamadar',
  role: 'Software & AI Engineer',
  subtitle: 'Final-year B.Tech CSE (AI), VIT Pune',
  tagline:
    'I build machine learning systems and the software around them, and I make sure they still work after release.',
  availability: 'Open to 2027 new-grad SDE and AI/ML roles, in India or abroad.',
  stats: [
    { value: '9.24', label: 'CGPA' },
    { value: '2', label: 'IEEE papers' },
    { value: '1', label: 'Published patent' },
    { value: 'IDeaS', label: 'Intern · a SAS company' },
  ],
  email: 'miran786mj@gmail.com',
  phone: '+91 77440 39115',
  phoneHref: 'tel:+917744039115',
  location: 'Pune, India',
  github: 'https://github.com/miran786',
  linkedin: 'https://www.linkedin.com/in/miran-jamadar',
}

export const about = {
  paragraphs: [
    "I started out at my father's computer shop in Mangaon. Through my diploma years I taught C++, Java and Excel there and fixed whatever machine came through the door. That's where I learned that software only matters when it works for the person in front of you.",
    "I was institute topper in all three years of my diploma, served as departmental president, and left with both the Best Outgoing Student and Student of the Year awards. Then I joined Vishwakarma Institute of Technology, Pune, through lateral entry. I'm now in my final year of B.Tech in Computer Science and Engineering with a specialization in AI, at a CGPA of 9.24.",
    "Since then I've co-authored two IEEE papers and co-invented a published Indian patent on AI-based CCTV anomaly detection. I've also shipped in industry: an OCR pipeline for a college ERP at EduplusCampus, and now a Jenkins-to-GitHub-Actions regression migration for a hotel revenue-management product at IDeaS. I'm most at home where machine learning meets backend engineering, with a soft spot for security.",
  ],
  facts: [
    { k: 'Based in', v: 'Pune, India' },
    { k: 'From', v: 'Mangaon, Raigad' },
    { k: 'Degree', v: 'B.Tech CSE (AI) · 2027' },
    { k: 'Languages', v: 'English, Hindi, Urdu, Marathi' },
  ],
  education: [
    {
      school: 'Vishwakarma Institute of Technology, Pune',
      degree: 'B.Tech, Computer Science & Engineering (Artificial Intelligence)',
      period: 'Aug 2024 – Jun 2027',
      note: 'CGPA 9.24 / 10 · Lateral entry',
    },
    {
      school: 'Smt. Geeta D. Tatkare Polytechnic',
      degree: 'Diploma, Computer Engineering',
      period: 'Aug 2021 – Jun 2024',
      note: 'Grade A+ · Institute topper all 3 years',
    },
  ],
}

export interface Role {
  title: string
  org: string
  orgNote?: string
  place: string
  period: string
  points: string[]
  stack?: string[]
}

export const experience: Role[] = [
  {
    title: 'Software Developer Intern',
    org: 'IDeaS',
    orgNote: 'a SAS company',
    place: 'Pune',
    period: 'Jul 2026 – Dec 2026',
    points: [
      "Migrating the release-regression suite of G3, IDeaS' hotel revenue-management system, from Jenkins to GitHub Actions, and proving the migration is faithful: each hotel property's new pipeline must reproduce Jenkins' analytical output on the same build.",
      'Port Groovy test scripts into YAML scenario manifests, and extend the Python test framework with new actions, services and SQL dump queries.',
      'Run each property through self-hosted CI that restores its database, loads data, runs the analytics jobs and captures output dumps.',
      'Compare six families of analytical output against Jenkins using Excel difference workbooks, and classify every difference as a port gap, a tooling artifact, a Jenkins quirk or a real product finding.',
      'Diagnose failures across SAS analytics, a Java (WildFly) application, SQL Server and Docker hosts.',
    ],
    stack: ['Python', 'Groovy', 'GitHub Actions', 'Jenkins', 'SQL Server', 'SAS', 'Docker', 'Linux'],
  },
  {
    title: 'Software Development Intern',
    org: 'EduplusCampus',
    orgNote: 'UDNAV ERP Software Technologies',
    place: 'Pune',
    period: 'Mar 2026 – May 2026',
    points: [
      'Built an automated marks-extraction module for the EduplusCampus college ERP (used by VIT Pune and other institutes) that digitizes student marksheets from JPG, PNG and PDF.',
      'Production pipeline on AWS: Amazon Textract for table and key-value extraction, S3 for storage, and Lambda for event-driven processing.',
      "Fed the extracted marks into the ERP's examination module, cutting manual data entry and transcription errors for evaluators.",
      'Built Marksheet Reader, the open-source companion, during the same internship.',
    ],
    stack: ['Python', 'FastAPI', 'AWS Textract', 'S3', 'Lambda', 'React'],
  },
  {
    title: 'Technical Trainer & IT Support',
    org: 'Mitcon Computers',
    orgNote: 'family business',
    place: 'Mangaon, Raigad',
    period: 'Aug 2021 – Jun 2024',
    points: [
      "Taught C++, Java and MS Excel courses to students at the shop's training centre.",
      'Repaired hardware, installed and configured software, and handled day-to-day tech support for customers.',
      "Later built the Mitcon Website Blocker for the shop's customers (2026).",
    ],
  },
]

export const patent = {
  title: 'AI-Based Anomaly Detection in CCTV Surveillance',
  number: '202521049739',
  meta: 'Indian Patent Application No. 202521049739 · Filed May 2025 · Published Jun 2025',
  summary: 'A deep learning system that detects suspicious activity in CCTV feeds in real time. Co-inventor.',
}

export interface Paper {
  title: string
  venue: string
  year: string
  authors: string
  summary: string
  url: string
  doi: string
}

export const papers: Paper[] = [
  {
    title: 'Unsupervised VAE-based Lesion Localization with EfficientNet Fusion for Dermatological Image Classification',
    venue: 'IEEE ICICI 2026',
    year: '2026',
    authors: 'S. Jaybhaye, E. Chougule, M. Jamadar, A. Ghorad, M. Bhalerao',
    summary:
      "A variational autoencoder's reconstruction error localizes skin lesions without segmentation labels. That signal is fused with EfficientNet-B3 features to classify skin conditions. This is the research behind DermaScan AI.",
    url: 'https://ieeexplore.ieee.org/document/11580784',
    doi: '10.1109/ICICI68773.2026.11580784',
  },
  {
    title: 'Smart Pill Box Automation using IoT',
    venue: 'IEEE ICOSEC 2025',
    year: '2025',
    authors: 'G. Ubale, M. Bhalerao, E. Chougule, M. Jamadar, A. Ghorad, S. Wasnik',
    summary:
      'A pill dispenser built around a single ESP8266 controller, with scheduled reminders, an LCD status display, temperature and humidity sensing, and Firebase sync to a caregiver app.',
    url: 'https://ieeexplore.ieee.org/document/11459556',
    doi: '10.1109/ICOSEC67334.2025.11459556',
  },
]

export const underReview = {
  title: 'CourtMind: AI Legal Courtroom Simulation',
  venue: 'IEEE PuneCon 2026',
  summary:
    'A legal analysis engine that confines a local LLM to fact extraction and runs the legal reasoning through deterministic, rule-based statute pipelines, plus a multi-agent courtroom with prosecution, defence and a three-judge panel. Validated on 606 test scenarios.',
}

export const otherPublications = [
  {
    title: 'AppLimit Monitor for Smartphone Addiction',
    venue: 'IJIRSET, Vol. 13, Issue 11, Nov 2024',
    url: 'https://www.ijirset.com/upload/2024/november/200_App.pdf',
  },
]

export interface Project {
  name: string
  kicker: string
  domain: string
  description: string
  stack: string[]
  links: { label: string; url: string }[]
  glyph: 'scan' | 'map' | 'face' | 'doc' | 'shield' | 'air'
}

export const projects: Project[] = [
  {
    name: 'DermaScan AI',
    kicker: 'A skin-condition classifier that learns from dermatologists',
    domain: 'Deep learning · Healthcare',
    description:
      'EfficientNet-B3 + VAE model served through FastAPI for real-time inference, with Gemini for symptom analysis. When a dermatologist corrects a prediction, an AWS Lambda trigger starts a retraining job, so the model improves in production. Comes with a patient app and a doctor portal. Dockerized, deployed on Firebase.',
    stack: ['PyTorch', 'FastAPI', 'AWS Lambda', 'Docker', 'Firebase', 'Gemini'],
    links: [
      { label: 'Paper', url: 'https://ieeexplore.ieee.org/document/11580784' },
      { label: 'GitHub', url: 'https://github.com/miran786/DermaScan_AI' },
    ],
    glyph: 'scan',
  },
  {
    name: 'JanSahyog',
    kicker: 'Civic issues, reported once and tracked to resolution',
    domain: 'Full stack · Civic tech',
    description:
      'Citizens report municipal issues from a React Native app, and officials manage them from a React dashboard. Geospatial queries surface nearby reports, so the same pothole doesn\'t get reported over and over. Reports made offline sync when the connection returns. Firebase Cloud Functions enforce input sanitization and role-based access.',
    stack: ['React Native', 'React', 'Firebase', 'Cloud Functions'],
    links: [{ label: 'GitHub', url: 'https://github.com/miran786/JanSahyog' }],
    glyph: 'map',
  },
  {
    name: 'FaceWallet',
    kicker: 'A digital wallet you unlock with your face',
    domain: 'Biometrics · Security',
    description:
      'Registers a 128-dimension face descriptor from the webcam and verifies every sensitive action by Euclidean-distance matching. Password login with bcrypt and JWT HttpOnly sessions is the fallback.',
    stack: ['React', 'Node.js', 'face-api.js', 'SQLite', 'Docker'],
    links: [
      { label: 'Live demo', url: 'https://face-login-mocha.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/miran786/face_login' },
    ],
    glyph: 'face',
  },
  {
    name: 'Marksheet Reader',
    kicker: 'OCR for college ERPs, built at EduplusCampus',
    domain: 'Computer vision · Backend',
    description:
      'Reads marksheets from 8 Indian boards (CBSE, ICSE and state boards) using OpenCV preprocessing and EasyOCR with a Tesseract fallback. Fuzzy subject mapping gets smarter as admins correct it. JWT roles, ERP webhooks and CSV export, Dockerized, 57 tests. The deployed ERP version runs on AWS Textract, S3 and Lambda.',
    stack: ['FastAPI', 'React', 'EasyOCR', 'OpenCV', 'Docker'],
    links: [{ label: 'GitHub', url: 'https://github.com/miran786/Marksheet_reader' }],
    glyph: 'doc',
  },
  {
    name: 'StealthGuard VPN',
    kicker: 'A private, lightweight Android VPN',
    domain: 'Networking · Android',
    description:
      'OpenVPN client with a custom VpnService for tunnelling and IP masking, .ovpn profile import, live upload and download speeds, and serverless authentication on AWS Lambda. It grew out of my diploma final-year project, a free VPN service on AWS and Docker.',
    stack: ['Android (Java)', 'OpenVPN', 'AWS Lambda'],
    links: [{ label: 'GitHub', url: 'https://github.com/miran786/StealthGuard-VPN-main' }],
    glyph: 'shield',
  },
  {
    name: 'AQI Intelligence Dashboard',
    kicker: 'Air quality, now and next',
    domain: 'ML forecasting · Data',
    description:
      'Real-time air quality from global monitoring stations, with XGBoost forecasts, behind a FastAPI backend and a React dashboard.',
    stack: ['React', 'FastAPI', 'XGBoost', 'Docker', 'Firebase'],
    links: [],
    glyph: 'air',
  },
]

export const moreBuilds = [
  {
    name: 'HealthGuard',
    context: 'Cavista Healthcare Hackathon',
    line: 'Preventive-health app with wearable vitals, ML risk zones and a Gemini health assistant.',
    url: 'https://github.com/miran786/Cavista',
  },
  {
    name: 'Campus Vitality Protocol',
    context: "Hackspiration '26",
    line: 'Campus actions verified by AI and recorded on Algorand.',
    url: 'https://github.com/miran786/PushBet--Algorand',
  },
  {
    name: 'SYNAPSE',
    context: 'Automata Hackathon',
    line: 'A communication suit for deaf-mute students, from muscle signals to speech, built with Flutter and Arduino.',
    url: 'https://github.com/Rohan143-mp/Automata_hackathon',
  },
  {
    name: 'WellCare · EduAbility',
    context: "Aarohan '26",
    line: 'An accessible learning app with an adaptive AI tutor and wearable heart-rate attention monitoring.',
    url: 'https://github.com/miran786/WellCare',
  },
  {
    name: 'Fake Login Detection',
    context: 'Security',
    line: 'ML risk scoring of logins by device, IP, location and time, with OTP recovery and an admin panel.',
    url: '',
  },
  {
    name: 'Mitcon Website Blocker',
    context: 'Family shop',
    line: 'One-click Windows tool that blocks social and reels sites and locks family-safe DNS.',
    url: '',
  },
]

export const awards = [
  { title: '3rd Runner Up', detail: 'Aarohhan Hackathon 2026 · D.Y. Patil College, Mumbai' },
  { title: 'Top 10', detail: 'Fusion 2025 national hackathon · IIC E-Cell & SKN IEEE' },
  { title: 'Finalist (solo)', detail: 'Google Developer Code Hackathon' },
  { title: 'Institute Topper, 3 years running', detail: 'Diploma in Computer Engineering · Smt. Geeta D. Tatkare Polytechnic' },
  { title: 'Best Outgoing Student & Student of the Year', detail: 'Both awards · Smt. Geeta D. Tatkare Polytechnic · Departmental President' },
  { title: 'Winner ×3', detail: 'Paper presentation, debate and technical event at the polytechnic' },
]

export const certifications = [
  { title: 'IBM Full Stack Software Developer', detail: 'Professional Certificate · Mar 2026 · ID IT6PYW7ZOG3W' },
  { title: 'Deloitte Australia Cyber & Technology', detail: 'Job Simulations · Forage · Dec 2025' },
  { title: 'Cyber-security training', detail: 'LearnNex · Oct – Dec 2024' },
  { title: 'Ethical hacking certification', detail: 'Mr. WebSecure, Mumbai' },
  { title: 'Industrial training', detail: 'Six weeks · Infotech' },
]

export const openSource = {
  title: 'OWASP Nest',
  detail: "Contributor to the OWASP Foundation's platform for discovering and contributing to OWASP projects. 3 merged pull requests.",
  url: 'https://github.com/OWASP/Nest/pulls?q=is%3Apr+author%3Amiran786',
}

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'Groovy'] },
  {
    group: 'AI / ML',
    items: ['PyTorch', 'scikit-learn', 'XGBoost', 'EfficientNet', 'VAEs', 'OpenCV', 'Textract', 'EasyOCR', 'Tesseract', 'Gemini API'],
  },
  { group: 'Backend & cloud', items: ['FastAPI', 'Spring Boot', 'Node.js', 'Express', 'REST', 'AWS (EC2, S3, Lambda)', 'Firebase'] },
  { group: 'DevOps & testing', items: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes', 'Linux', 'pytest'] },
  { group: 'Frontend & mobile', items: ['React', 'React Native', 'Android SDK'] },
  { group: 'Data', items: ['SQL Server', 'MySQL', 'MongoDB', 'Firestore'] },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
