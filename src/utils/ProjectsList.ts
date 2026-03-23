import {
    JsIcon, ReactIcon, NodeIcon, TsIcon, PythonIcon, FirebaseIcon, JavaIcon,
    DockerIcon, AwsIcon, ShieldIcon
} from "../assets/Icons"

import {
    PlantDiseaseLogo, GestureTextLogo, BmiAnalyzerLogo, CivicCircleLogo, ExamSeatingLogo
} from "../assets/Logos"

import {
    PlantDiseaseShots, GestureTextShots, BmiAnalyzerShots, CivicCircleShots, ExamSeatingShots
} from "../assets/Shots"

import {
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

const TechInfo = {
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
    ReactNative: {
        title: "React Native",
        description: "Cross-platform mobile framework for building native iOS and Android apps using React.",
        icon: ReactIcon
    },
    Node: {
        title: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architecture.",
        icon: NodeIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability.",
        icon: TsIcon
    },
    Python: {
        title: "Python",
        description: "A versatile programming language widely used for AI, machine learning, and backend development.",
        icon: PythonIcon
    },
    PyTorch: {
        title: "PyTorch",
        description: "Open-source deep learning framework for building and training neural networks with dynamic computation graphs.",
        icon: PythonIcon
    },
    FastAPI: {
        title: "FastAPI",
        description: "Modern, high-performance Python web framework for building APIs with automatic validation and documentation.",
        icon: PythonIcon
    },
    Firebase: {
        title: "Firebase",
        description: "Google's platform for building web and mobile apps with real-time database, authentication, hosting, and cloud functions.",
        icon: FirebaseIcon
    },
    Java: {
        title: "Java (Android SDK)",
        description: "Android SDK with Java for building robust, native Android applications with rich UI and system integration.",
        icon: JavaIcon
    },
    Gradle: {
        title: "Gradle",
        description: "Build automation tool for Android and JVM projects, managing dependencies and build configurations.",
        icon: JavaIcon
    },
    Docker: {
        title: "Docker",
        description: "Containerization platform for packaging applications with all dependencies for consistent deployment across environments.",
        icon: DockerIcon
    },
    AWSLambda: {
        title: "AWS Lambda",
        description: "Serverless compute service that runs code in response to events, enabling scalable and cost-efficient backend logic.",
        icon: AwsIcon
    },
    GeminiAPI: {
        title: "Google Gemini API",
        description: "Google's generative AI API for context-aware analysis, natural language understanding, and intelligent content generation.",
        icon: PythonIcon
    },
    ScikitLearn: {
        title: "scikit-learn",
        description: "Python library for classical machine learning algorithms, data preprocessing, and model evaluation.",
        icon: PythonIcon
    },
    Security: {
        title: "Security & Privacy",
        description: "Network tunneling, IP masking, data encryption, and VPN protocols for robust user privacy and data protection.",
        icon: ShieldIcon
    },
    OpenVPN: {
        title: "OpenVPN Protocol",
        description: "Open-source VPN protocol providing secure point-to-point connections with SSL/TLS for key exchange.",
        icon: ShieldIcon
    },
};

const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines."
    }
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "StealthGuard VPN",
        ShortDesc: "A secure Android VPN app leveraging OpenVPN for privacy, encryption, and real-time connection analytics.",
        Desc: "StealthGuard VPN is a secure Android-based VPN application engineered to ensure user privacy and data encryption. Built on the OpenVPN protocol, it implements a custom VpnService to manage network tunneling and IP masking, providing robust protection against tracking. The app integrates AWS Lambda for serverless user authentication and connection validation, ensuring secure and scalable access control without dedicated server infrastructure. It features a modern, user-friendly interface with real-time connection status monitoring, upload/download speed analytics, and support for custom .ovpn configuration profiles.",
        Logo: PlantDiseaseLogo,
        Shot: PlantDiseaseShots,
        Mockup: PlantDiseaseMockup,
        Theme: "#10b981",
        Status: "completed",
        Link: "#",
        Source: "#",
        Tech: [TechInfo.Java, TechInfo.Security, TechInfo.AWSLambda, TechInfo.OpenVPN, TechInfo.Gradle],
        features: [
            {
                title: "VPN Tunneling & IP Masking",
                description: "Custom VpnService implementation managing network tunneling and IP masking via OpenVPN protocol for robust tracking protection."
            },
            {
                title: "Serverless Authentication",
                description: "AWS Lambda-powered user authentication and connection validation for secure, scalable access control without dedicated servers."
            },
            {
                title: "Real-Time Analytics",
                description: "Live connection status monitoring with upload/download speed analytics and bandwidth tracking on a modern UI."
            },
            {
                title: "Custom VPN Profiles",
                description: "Parse and apply custom .ovpn configuration profiles for flexible, user-defined network settings and server selection."
            },
            {
                title: "Data Encryption",
                description: "End-to-end data encryption ensuring all network traffic is protected against interception and surveillance."
            }
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "DermaScan AI",
        ShortDesc: "Deep learning skin condition classifier with active learning, real-time inference, and generative AI symptom analysis.",
        Desc: "DermaScan AI is a cutting-edge medical AI platform that combines EfficientNet-B3 features with a Variational Autoencoder (VAE) to classify skin conditions with high accuracy. It features a FastAPI backend serving real-time inferences and integrates Google's Gemini API for context-aware symptom analysis. The system architects an active learning pipeline where expert corrections trigger immediate, thread-safe model retraining in production. AWS Lambda serves as a serverless trigger to initiate fine-tuning pipelines upon expert feedback, enabling automated and scalable model updates. The full application is containerized with Docker and deployed end-to-end on Firebase.",
        Logo: GestureTextLogo,
        Shot: GestureTextShots,
        Mockup: GestureTextMockup,
        Theme: "#8b5cf6",
        Status: "completed",
        Link: "#",
        Source: "#",
        Tech: [TechInfo.Python, TechInfo.PyTorch, TechInfo.FastAPI, TechInfo.Docker, TechInfo.AWSLambda],
        features: [
            {
                title: "Custom Deep Learning Pipeline",
                description: "EfficientNet-B3 combined with a Variational Autoencoder (VAE) for high-accuracy skin condition classification."
            },
            {
                title: "Active Learning System",
                description: "Expert corrections trigger immediate, thread-safe model retraining in production via AWS Lambda serverless pipelines."
            },
            {
                title: "Generative AI Analysis",
                description: "Google Gemini API integration for context-aware symptom analysis and intelligent diagnostic suggestions."
            },
            {
                title: "Real-Time Inference API",
                description: "FastAPI backend serving instant predictions with automatic input validation and interactive documentation."
            },
            {
                title: "Containerized Deployment",
                description: "Dockerized application deployed end-to-end on Firebase with hosting, authentication, and cloud storage."
            }
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "JanSahyog",
        ShortDesc: "Cross-platform civic issue tracker with geospatial querying, offline-sync, and role-based access control.",
        Desc: "JanSahyog is a cross-platform civic issue tracking system architected with a monorepo structure. It implements geospatial querying to detect and display nearby civic issues, intelligently reducing duplicate reporting. The app features an offline-sync mechanism ensuring data consistency when users report issues without internet connectivity, automatically syncing upon reconnection. Firebase Cloud Functions handle backend logic including input sanitization and role-based access control (RBAC), providing a secure and scalable foundation for community-driven civic engagement.",
        Logo: CivicCircleLogo,
        Shot: CivicCircleShots,
        Mockup: CivicCircleMockup,
        Theme: "#3b82f6",
        Status: "completed",
        Link: "#",
        Source: "#",
        Tech: [TechInfo.ReactNative, TechInfo.React, TechInfo.Firebase, TechInfo.TypeScript, TechInfo.Node],
        features: [
            {
                title: "Geospatial Issue Detection",
                description: "Location-aware querying to detect and display nearby civic issues, intelligently reducing duplicate reports."
            },
            {
                title: "Offline-Sync Engine",
                description: "Report issues without internet. Data syncs automatically upon reconnection with full consistency guarantees."
            },
            {
                title: "Role-Based Access Control",
                description: "Firebase Cloud Functions enforce RBAC with input sanitization for secure multi-role civic governance."
            },
            {
                title: "Cross-Platform Monorepo",
                description: "Unified codebase serving React Native mobile and React.js web apps from a single monorepo architecture."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    }
];
