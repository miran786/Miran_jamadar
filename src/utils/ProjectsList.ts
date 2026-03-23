import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon, ReactQueryIcon, EdgeStoreIcon, PythonIcon
} from "../assets/Icons"

import {
    NextmartLogo, ArmsLogo, ArmsPhpLogo, ClimateLogo, CovidtraxLogo, DaysbeyondLogo, FilmstackLogo, PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo, VortexaLogo,
    PlantDiseaseLogo, GestureTextLogo, BmiAnalyzerLogo, CivicCircleLogo, ExamSeatingLogo
} from "../assets/Logos"

import {
    NextmartShots, Armsv1Shots, Armsv2Shots, ClimateShots, CovidTraxShots, DaysbeyondShots, FilmstackShots, PikturesShots, SrinivasShots, XreconShots, YoatubeShots, VortexaShots, Armsv3Shots,
    PlantDiseaseShots, GestureTextShots, BmiAnalyzerShots, CivicCircleShots, ExamSeatingShots
} from "../assets/Shots"

import {
    ARMSv1Mockup, ARMSv2Mockup, ARMSv3Mockup, ClimateMockup, DaysbeyondMockup, SrinivasMockup, VortexaMockup, XreconMockup, YoatubeMockup,
    PlantDiseaseMockup, GestureTextMockup, BmiAnalyzerMockup, CivicCircleMockup, ExamSeatingMockup
} from "../assets/Mockup"


type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

// -- PROJECTS TEMPLATE --
// {
//     Name: "TITLE",
//     ShortDesc: "SHORT_DESCRIPTION",
//     Desc: "DESCRIPTION",
//     Logo: LOGO_URL,
//     Shot: SCREENSHOT_URL,
//     Mockup: MOCKUP_URL,
//     Theme: "PROJECT_THEME_COLOR_HEX",
//     Status: "completed OR development",
//     Link: "PROJECT_URL",
//     Source: "GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     Tech: [TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     hideProject: false,
//     LogoSize: 50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },

const TechInfo = {
    HTML: {
        title: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: HtmlIcon
    },
    CSS: {
        title: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: CssIcon
    },
    JavaScript: {
        title: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: JsIcon
    },
    React: {
        title: "React",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: ReactIcon
    },
    Node: {
        title: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architecture.",
        icon: NodeIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability and tooling support.",
        icon: TsIcon
    },
    Next: {
        title: "Next.js",
        description: "A React framework for server-side rendering, static site generation, and routing, offering improved performance and SEO optimization.",
        icon: NextIcon
    },
    MySQL: {
        title: "MySQL",
        description: "Open-source relational database management system for storing and managing structured data.",
        icon: MysqlIcon
    },
    MongoDB: {
        title: "MongoDB",
        description: "NoSQL database offering flexibility and scalability for storing and managing data efficiently.",
        icon: MongoIcon
    },
    GDrive: {
        title: "Google Drive API",
        description: "RESTful API for integrating Google Drive functionalities such as file storage and synchronization into applications.",
        icon: GdriveIcon
    },
    SocketIO: {
        title: "Socket.IO",
        description: "Real-time bidirectional communication library for building interactive web applications.",
        icon: SocketIoIcon
    },
    RESTAPI: {
        title: "REST API",
        description: "Architectural style for designing networked applications with standardized HTTP operations.",
        icon: RestApiIcon
    },
    PHP: {
        title: "PHP",
        description: "Server-side scripting language for building dynamic web applications.",
        icon: PhpIcon
    },
    Vite: {
        title: "Vite",
        description: "Modern build tooling for web development with rapid startup and hot module replacement.",
        icon: ViteIcon
    },
    NextAuth: {
        title: "NextAuth.js",
        description: "Authentication library designed specifically for Next.js applications, providing robust authentication features and seamless integration.",
        icon: NextAuthIcon
    },
    Redux: {
        title: "Redux",
        description: "Predictable state management library for JavaScript applications, enabling developers to write consistent, scalable code with ease.",
        icon: ReduxIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework providing pre-designed, atomic-level utility classes for rapid UI development with minimal CSS code.",
        icon: TailwindIcon
    },
    Zustand: {
        title: "Zustand",
        description: "Tiny, fast, and scalable state management for React applications, providing a simple and intuitive API.",
        icon: ZustandIcon
    },
    Astro: {
        title: "Astro",
        description: "Frontend framework for streamlined development, integrating seamlessly with popular tools to create fast and modern websites with minimal configuration overhead.",
        icon: AstroIcon
    },
    NanoStores: {
        title: "NanoStores",
        description: "Lightweight state management library for JavaScript applications, designed for simplicity and performance to simplify state management and improve application responsiveness.",
        icon: NanostoresIcon
    },
    D3: {
        title: "D3.js",
        description: "Versatile JavaScript library for data visualization, enabling developers to create dynamic, interactive graphics and charts by binding data to DOM elements.",
        icon: D3JsIcon
    },
    ReactQuery: {
        title: "React Query",
        description: "React library for managing, caching, and synchronizing server state in web applications, providing a powerful and intuitive API for fetching and updating data.",
        icon: ReactQueryIcon
    },
    EdgeStore: {
        title: "EdgeStore",
        description: "EdgeStore is an open-source file storage service, designed for scalability and performance, with efficient updates and minimal API.",
        icon: EdgeStoreIcon
    },
    Python: {
        title: "Python",
        description: "A versatile programming language widely used for AI, machine learning, and data analysis.",
        icon: PythonIcon
    },
    TensorFlow: {
        title: "TensorFlow",
        description: "An open-source library for machine learning and deep learning applications.",
        icon: PythonIcon // Using Python icon as placeholder
    }
};

// Common Features List
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "Plant Disease Identifier",
        ShortDesc: "Empowering agriculture with AI. Identify crop diseases instantly through advanced leaf analysis patterns.",
        Desc: "The Plant Disease Identifier is a cutting-edge AI-powered application designed to support farmers, agronomists, and botanists in early disease detection. By leveraging deep learning models, the app analyzes leaf morphology and discoloration patterns to identify over 30+ common plant diseases. It provides instant diagnostic reports and sustainable treatment recommendations, helping to prevent crop loss and ensure food security in the digital age.",
        Logo: PlantDiseaseLogo,
        Shot: PlantDiseaseShots,
        Mockup: PlantDiseaseMockup,
        Theme: "#22c55e",
        Status: "completed",
        Link: "#",
        Source: "#",
        Tech: [TechInfo.Next, TechInfo.TypeScript, TechInfo.Python, TechInfo.TensorFlow, TechInfo.TailwindCSS],
        features: [
            {
                title: "AI Image Diagnostics",
                description: "Instantly detect diseases from leaf photos with over 95% accuracy using Convolutional Neural Networks."
            },
            {
                title: "Treatment Database",
                description: "Access a curated database of organic and chemical treatments specifically tailored to identified diseases."
            },
            {
                title: "Offline Support",
                description: "Download disease patterns for offline identification in remote farm locations without internet."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Gesture-to-Text AI",
        ShortDesc: "Breaking communication barriers. A real-time sign language translation engine powered by computer vision.",
        Desc: "The Gesture-to-Text AI is a revolutionary communication bridge that translates sign language into spoken and written language in real-time. Built using MediaPipe and custom-trained LSTM models, it recognizes complex hand gestures and finger-spelling with extreme precision. This project aims to empower the deaf and hard-of-hearing community by providing a seamless tool for interaction in educational and professional environments.",
        Logo: GestureTextLogo,
        Shot: GestureTextShots,
        Mockup: GestureTextMockup,
        Theme: "#8b5cf6",
        Status: "completed",
        Link: "#",
        Source: "#",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.Node, TechInfo.Python, TechInfo.SocketIO],
        features: [
            {
                title: "Real-Time Translation",
                description: "Low-latency gesture tracking and translation using ultra-fast computer vision models."
            },
            {
                title: "Multi-Dialect Support",
                description: "Optimized for various international sign language standards through adaptive learning."
            },
            {
                title: "Voice Synthesis",
                description: "Integrated Text-to-Speech (TTS) engine to vocalize translated gestures instantly."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "BMI Report Analyzer",
        ShortDesc: "Go beyond simple calculations. A comprehensive health intelligence platform for personalized wellness.",
        Desc: "BMI Report Analyzer is more than just a calculator; it's a personal health diagnostic tool. It analyzes body metrics alongside lifestyle data to provide a holistic view of user health. The platform generates high-fidelity PDF health reports, tracks long-term biometric trends, and uses AI to suggest personalized nutritional pathways based on specific body composition goals.",
        Logo: BmiAnalyzerLogo,
        Shot: BmiAnalyzerShots,
        Mockup: BmiAnalyzerMockup,
        Theme: "#f43f5e",
        Status: "completed",
        Link: "#",
        Source: "#",
        Tech: [TechInfo.Astro, TechInfo.TypeScript, TechInfo.D3, TechInfo.TailwindCSS, TechInfo.Zustand],
        features: [
            {
                title: "Dynamic Data Visuals",
                description: "Interactive health charts and progress rings powered by D3.js for deep biometric insights."
            },
            {
                title: "PDF Report Engine",
                description: "Generate and export professional-grade clinical health reports in one click."
            },
            {
                title: "Nutritional AI",
                description: "Smart diet recommendations based on your metabolic rate and fitness objectives."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Civic Circle",
        ShortDesc: "Modernizing democracy. A transparent platform for citizen engagement and local governance resolution.",
        Desc: "Civic Circle is a community-driven ecosystem designed to bridge the gap between citizens and their local administration. Users can report infrastructure issues, track resolution statuses in real-time, and participate in community voting for local projects. Built on a foundation of transparency, it empowers residents to take an active role in shaping their neighborhoods through a sleek, map-centric interface.",
        Logo: CivicCircleLogo,
        Shot: CivicCircleShots,
        Mockup: CivicCircleMockup,
        Theme: "#3b82f6",
        Status: "development",
        Link: "#",
        Source: "#",
        Tech: [TechInfo.Next, TechInfo.TypeScript, TechInfo.MongoDB, TechInfo.NextAuth, TechInfo.EdgeStore],
        features: [
            {
                title: "Geo-Spatial Reporting",
                description: "Location-aware issue reporting with interactive maps for precise problem identification."
            },
            {
                title: "Resolution Pipeline",
                description: "Transparent ticketing system where users can see the exact stage of their reported task."
            },
            {
                title: "Community Consensus",
                description: "A secure voting system for citizens to prioritize local government budget allocation."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "AI Exam-Seating Framework",
        ShortDesc: "The future of academic integrity. Algorithmic seating optimization for secure and efficient examination halls.",
        Desc: "The AI Exam-Seating Framework is a sophisticated logistics engine built to solve complex institutional seating challenges. Using advanced graph algorithms and ML-based conflict resolution, it maximizes space utilization while mathematically eliminating proximity-based cheating. The system automates the entire examination workflow, from dynamic hall ticket generation to real-time biometric attendance tracking and automated seating displays.",
        Logo: ExamSeatingLogo,
        Shot: ExamSeatingShots,
        Mockup: ExamSeatingMockup,
        Theme: "#fbbf24",
        Status: "completed",
        Link: "#",
        Source: "#",
        Tech: [TechInfo.Next, TechInfo.TypeScript, TechInfo.MySQL, TechInfo.Redux, TechInfo.Node],
        features: [
            {
                title: "Algorithmic Placement",
                description: "Optimized seating patterns using AI to maximize distance between students of the same subject."
            },
            {
                title: "Dynamic Hall Tickets",
                description: "Automated PDF generation with randomized seating codes and QR-based verification."
            },
            {
                title: "Space Utilization AI",
                description: "Predictive modeling to fit maximum students in available infrastructure without compromising safety."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    }
];