import {
    Certification,
    DevOpsTool,
    Education,
    KeyCompetency,
    NavLink,
    Repo,
} from "../types";

export const GITHUB_USERNAME = "Surajsuthar01";
export const GITHUB_URL = "https://github.com/Surajsuthar01/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/suraj-suthar-7a088a28b/";
export const LEETCODE_USERNAME = "surajsuthar01";
export const LEETCODE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;
export const CREDLY_URL =
    "https://www.credly.com/users/suraj-suthar.34931b98/badges#credly";
export const EMAIL = "surajsuthar0654@gmail.com";
export const PHONE = "+91 6350692701";
export const WHATSAPP_URL =
    "https://wa.me/6350692701?text=Hi%20Suraj%2C%20can%20we%20connect%20from%20your%20portfolio%3F";
export const LOCATION = "Jaipur, Rajasthan, India";
export const RESUME_PATH = "/Suraj FD2  .pdf";
export const HERO_IMAGE_PATH = "/suraj-suthar-img.png";

export const navLinks: NavLink[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "stack", label: "Tech Stack" },
    { id: "certifications", label: "Certifications" },
    { id: "leetcode", label: "LeetCode" },
    { id: "repos", label: "Repos" },
    { id: "contact", label: "Contact" },
];

export const roles: string[] = [
    "DevOps Engineer",
    "Cloud Engineer",
    "Linux Administrator",
    "Infrastructure Automation Builder",
];

export const leetcodeBadges: string[] = [
    "Arrays & Hashing",
    "Binary Search",
    "Dynamic Programming",
    "Sliding Window",
    "Two Pointers",
    "Stack & Queue",
    "Trees & Graphs",
    "Recursion & Backtracking",
];

export const certifications: Certification[] = [
    {
        id: "rhcsa",
        name: "Red Hat Certified System Administrator (RHCSA)",
        issuer: "Red Hat",
        date: "May 17, 2024 – May 17, 2027",
        credentialId: "240-867-413",
        featured: true,
        category: "linux",
        issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg",
        details:
            "The Red Hat Certified System Administrator (RHCSA) certification validates the skills and knowledge required to perform essential Red Hat Enterprise Linux system administration tasks.",
        fullDescription:
            "This certification demonstrates competency in areas such as understanding and using essential tools for handling files, directories, command-line environments, and documentation. It validates skills in operating running systems, including booting into different run levels, identifying processes, starting and stopping virtual machines, and controlling services.",
        objectives: [
            "Configure local storage using partitions and logical volumes",
            "Create and configure file systems and file system attributes",
            "Deploy, configure, and maintain systems",
            "Manage users and groups",
            "Manage security including basic firewall and SELinux configuration",
            "Perform basic container management",
            "Manage basic networking",
            "Create simple shell scripts",
        ],
        industryValue:
            "RHCSA is one of the most respected Linux certifications in the industry. It's particularly valuable for DevOps engineers, system administrators, and cloud engineers working with enterprise Linux environments.",
        skills: [
            "System Configuration",
            "Security",
            "File Systems",
            "User Management",
            "Service Management",
            "Networking",
            "Storage Management",
            "Troubleshooting",
        ],
        verifyUrl: "https://www.credly.com/users/suraj-suthar.34931b98",
    },
    {
        id: "oracle",
        name: "Oracle Certified Foundations Associate",
        issuer: "Oracle Corporation",
        date: "March 25, 2025",
        featured: true,
        category: "cloud",
        issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
        details:
            "Oracle Fusion Cloud Applications HCM Certified Foundations Associate. Recognized by Oracle Corporation as Oracle Certified professional.",
        fullDescription:
            "This certification validates foundational knowledge of Oracle Cloud Infrastructure and Oracle Fusion Cloud Applications, specifically in Human Capital Management (HCM). It demonstrates understanding of cloud concepts, Oracle's cloud services, and the ability to work with Oracle's enterprise applications.",
        objectives: [
            "Understand Oracle Cloud Infrastructure basics",
            "Navigate Oracle Fusion Cloud Applications",
            "Configure HCM modules and features",
            "Implement basic security and access controls",
            "Manage user interfaces and reporting",
            "Understand integration capabilities",
        ],
        industryValue:
            "Oracle certifications are highly valued in enterprise environments, especially in organizations using Oracle's cloud solutions for HR, finance, and other business applications.",
        skills: [
            "Oracle Cloud",
            "HCM Applications",
            "Cloud Foundations",
            "Enterprise Applications",
            "Cloud Architecture",
        ],
        verifyUrl: "",
    },
    {
        id: "kodekloud-docker",
        name: "Docker Training Course for the Absolute Beginner",
        issuer: "KodeKloud",
        date: "June 04, 2025",
        credentialId: "5899481-b31c-4217-b3fd-1db742087f0d",
        category: "devops",
        issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        details:
            "Comprehensive Docker containerization training covering fundamentals to advanced concepts. Mastered container creation, image management, networking, and orchestration.",
        fullDescription:
            "This intensive Docker training program covers everything from basic containerization concepts to advanced Docker features. The course includes hands-on labs, real-world scenarios, and practical exercises that prepare professionals for container-based development and deployment in production environments.",
        objectives: [
            "Understand containerization concepts and Docker architecture",
            "Create and manage Docker containers effectively",
            "Build custom Docker images using Dockerfiles",
            "Implement container networking and communication",
            "Use Docker Compose for multi-container applications",
            "Manage persistent data with Docker volumes",
            "Apply container security best practices",
            "Troubleshoot common Docker issues",
        ],
        industryValue:
            "Docker skills are essential in modern DevOps environments. This certification demonstrates practical ability to work with containerization, which is fundamental to microservices architecture, CI/CD pipelines, and cloud-native development.",
        skills: [
            "Docker Containers",
            "Image Management",
            "Docker Compose",
            "Container Networking",
            "Volume Management",
            "Dockerfile Creation",
            "Container Security",
        ],
        verifyUrl: "",
    },
    {
        id: "hackerrank-sql",
        name: "SQL (Basic) Certificate",
        issuer: "HackerRank",
        date: "June 18, 2025",
        credentialId: "8BCCB7FAAEE7",
        category: "database",
        issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        details:
            "Demonstrated proficiency in fundamental SQL concepts including querying, data manipulation, and database operations through hands-on assessments.",
        fullDescription:
            "This certification validates core SQL skills through practical, hands-on assessments. It covers essential database operations, query optimization, and data manipulation techniques that are crucial for backend development, data analysis, and DevOps automation tasks.",
        objectives: [
            "Write efficient SELECT queries with filtering and sorting",
            "Perform complex JOIN operations across multiple tables",
            "Use aggregate functions and GROUP BY clauses effectively",
            "Implement data manipulation with INSERT, UPDATE, DELETE",
            "Apply subqueries and nested query techniques",
            "Understand database constraints and relationships",
            "Optimize query performance and execution",
            "Handle data types and conversions properly",
        ],
        industryValue:
            "SQL proficiency is fundamental for DevOps engineers working with databases, data pipelines, and automation scripts. This certification demonstrates ability to work with data effectively in various technical roles.",
        skills: [
            "SQL Queries",
            "Data Manipulation",
            "Database Operations",
            "JOIN Operations",
            "Data Analysis",
            "Query Optimization",
            "Data Filtering",
        ],
        verifyUrl: "",
    },
    {
        id: "techforce-cybersecurity",
        name: "Advanced Cyber Security with Internship",
        issuer: "TechForce Academy",
        date: "May 26, 2025 – July 10, 2025",
        credentialId: "uk8+xf",
        category: "security",
        issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        details:
            "Comprehensive cybersecurity training program with practical internship experience. Covered advanced security concepts, threat analysis, and hands-on security implementations.",
        fullDescription:
            "This intensive cybersecurity program combines theoretical knowledge with practical internship experience. The curriculum covers advanced security concepts, threat detection and analysis, incident response, and hands-on implementation of security measures in real-world scenarios.",
        objectives: [
            "Identify and analyze various cybersecurity threats",
            "Implement comprehensive security measures and controls",
            "Conduct thorough risk assessments and vulnerability scans",
            "Develop incident response procedures and protocols",
            "Apply network security principles and configurations",
            "Use security tools for monitoring and detection",
            "Create security policies and compliance frameworks",
            "Perform penetration testing and security audits",
        ],
        industryValue:
            "Cybersecurity skills are critical in today's digital landscape. This certification with internship experience demonstrates practical ability to protect infrastructure and applications, making it highly valuable for DevOps and security-focused roles.",
        skills: [
            "Cybersecurity Fundamentals",
            "Threat Analysis",
            "Security Implementation",
            "Risk Assessment",
            "Incident Response",
            "Network Security",
            "Vulnerability Assessment",
        ],
        verifyUrl: "",
    },
    {
        id: "nptel-os-fundamentals",
        name: "Operating System Fundamentals (Elite)",
        issuer: "NPTEL – IIT Kharagpur",
        date: "Jul – Oct 2025",
        credentialId: "NPTEL25CS141S1258604640",
        category: "os",
        issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        details:
            "12-week NPTEL course on Operating System Fundamentals from IIT Kharagpur. Achieved Elite certification with a consolidated score of 60%.",
        fullDescription:
            "This comprehensive 12-week course from IIT Kharagpur covers fundamental concepts of operating systems including process management, memory management, file systems, CPU scheduling, and synchronization. The course included online assignments (scored 25/25) and a proctored exam (34.5/75), demonstrating both theoretical knowledge and practical understanding of OS internals.",
        objectives: [
            "Understand process creation, scheduling, and inter-process communication",
            "Implement memory management techniques including paging and segmentation",
            "Analyze file system structures and storage management",
            "Apply CPU scheduling algorithms and evaluate performance",
            "Handle synchronization problems using semaphores and monitors",
            "Detect and resolve deadlock situations",
            "Understand I/O subsystems and device management",
            "Apply OS concepts to real-world system design",
        ],
        industryValue:
            "Operating system fundamentals are essential for DevOps engineers, system administrators, and cloud engineers. Understanding OS internals helps in performance tuning, troubleshooting, containerization, and building efficient infrastructure.",
        skills: [
            "Process Management",
            "Memory Management",
            "File Systems",
            "CPU Scheduling",
            "Synchronization",
            "Deadlock Handling",
            "I/O Management",
        ],
        verifyUrl: "",
    },
];

export type AwsEducateBadge = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    earnedDate: string;
    badgeUrl?: string;
};

export const awsEducateBadges: AwsEducateBadge[] = [
    {
        id: "aws-cloud-computing",
        name: "Introduction to Cloud 101",
        description: "Completed AWS Educate foundational course covering core cloud concepts, AWS global infrastructure, and basic cloud services including compute, storage, and networking.",
        imageUrl: "https://images.credly.com/images/8d67bbf4-128b-4141-b5f1-1bc61bbfbaa6/image.png",
        earnedDate: "2024",
        badgeUrl: "https://www.credly.com/users/suraj-suthar.34931b98/badges",
    },
    {
        id: "aws-cloud-101",
        name: "Getting Started with Storage",
        description: "Demonstrated understanding of Amazon S3, EBS, EFS storage solutions and fundamental data storage principles in the AWS cloud environment.",
        imageUrl: "https://images.credly.com/images/9358115e-ead7-47c2-91e2-165b6a650a1b/image.png",
        earnedDate: "2024",
        badgeUrl: "https://www.credly.com/users/suraj-suthar.34931b98/badges",
    },
    {
        id: "aws-compute",
        name: "Getting Started with Compute",
        description: "Completed training on AWS compute services including EC2 instances, Auto Scaling, Elastic Load Balancing, and serverless computing with AWS Lambda.",
        imageUrl: "https://images.credly.com/images/9f5e7858-2d27-4d57-857b-b8e9a2c0bb73/image.png",
        earnedDate: "2024",
        badgeUrl: "https://www.credly.com/users/suraj-suthar.34931b98/badges",
    },
    {
        id: "aws-networking",
        name: "Getting Started with Networking",
        description: "Mastered AWS networking fundamentals covering VPCs, subnets, security groups, NACLs, Route 53 DNS, and CloudFront content delivery.",
        imageUrl: "https://images.credly.com/images/979e42e2-1d32-4d21-97ea-53d991ea50fb/image.png",
        earnedDate: "2024",
        badgeUrl: "https://www.credly.com/users/suraj-suthar.34931b98/badges",
    },
    {
        id: "aws-databases",
        name: "Getting Started with Databases",
        description: "Gained proficiency in AWS database services including RDS, DynamoDB, Redshift, and Aurora, with hands-on experience in cloud database management.",
        imageUrl: "https://images.credly.com/images/05c7f012-4814-4b9c-85cb-fbe5f1b3eaf5/image.png",
        earnedDate: "2024",
        badgeUrl: "https://www.credly.com/users/suraj-suthar.34931b98/badges",
    },
    {
        id: "aws-security",
        name: "Getting Started with Security",
        description: "Completed AWS security training covering IAM, KMS, Shield, WAF, and cloud security best practices for maintaining compliance and protecting cloud infrastructure.",
        imageUrl: "https://images.credly.com/images/80845928-d1f8-4549-ae9d-27676fba897e/image.png",
        earnedDate: "2024",
        badgeUrl: "https://www.credly.com/users/suraj-suthar.34931b98/badges",
    },
];

export const educationTimeline: Education[] = [
    {
        id: "btech",
        title: "Bachelor of Technology in Computer Science",
        institute: "Arya College of Engineering & IT",
        period: "2022 - 2026",
        score: "CGPA: 8.6",
        location: "Jaipur, Rajasthan, India",
        current: true,
        details:
            "Pursuing B.Tech in Computer Science with a focus on software engineering, data structures, algorithms, and modern development practices.",
        tags: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Computer Networks",
            "Database Management",
            "Software Engineering",
            "Cloud Computing",
        ],
    },
    {
        id: "senior-secondary",
        title: "Senior Secondary",
        institute: "Govt. SR SEC School, Karju, Pratapgarh",
        period: "Completed 2022",
        score: "Grade: 80.80%",
        location: "Pratapgarh, Rajasthan, India",
        current: false,
        details:
            "Completed higher secondary education with strong performance in Science and Mathematics.",
        tags: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
    {
        id: "secondary",
        title: "Secondary School",
        institute: "Vimla Vidhya Mandir Sec School, Bambori, Pratapgarh",
        period: "Completed 2020",
        score: "Grade: 81.00%",
        location: "Pratapgarh, Rajasthan, India",
        current: false,
        details: "General education with fundamental focus on Mathematics and Science.",
        tags: ["Mathematics", "Science", "English", "Social Science"],
    },
];

export const keyCompetencies: KeyCompetency[] = [
    {
        title: "Linux Administration",
        text: "RHCSA-certified Linux expert specializing in system setup, security hardening, and performance optimization.",
        icon: "Server",
        tags: [
            "System Administration",
            "Security Hardening",
            "Performance Tuning",
            "RHEL/CentOS",
        ],
    },
    {
        title: "Cloud Infrastructure",
        text: "AWS cloud solutions including EC2, S3, VPC, IAM with security best practices and monitoring.",
        icon: "Cloud",
        tags: ["AWS EC2", "S3", "VPC", "IAM", "CloudWatch"],
    },
    {
        title: "Infrastructure as Code",
        text: "Automating infrastructure with Terraform and configuration management with Ansible for consistent environments.",
        icon: "Settings",
        tags: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
    },
    {
        title: "Containerization",
        text: "Docker containerization and Kubernetes orchestration for scalable, portable application deployments.",
        icon: "Box",
        tags: ["Docker", "Kubernetes", "Helm", "Container Security"],
    },
    {
        title: "CI/CD Pipeline Design",
        text: "Creating efficient Jenkins pipelines for continuous integration, testing, and deployment workflows.",
        icon: "GitBranch",
        tags: ["Jenkins", "GitLab CI", "GitHub Actions", "Pipeline Design"],
    },
    {
        title: "Monitoring & Observability",
        text: "Implementing Prometheus and Grafana for comprehensive system monitoring and visualization.",
        icon: "Monitor",
        tags: ["Prometheus", "Grafana", "ELK Stack", "Alerting"],
    },
];

export const devopsTools: DevOpsTool[] = [
    {
        name: "Ansible",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
        category: "Automation",
        desc: "Configuration management tool.",
        percentage: 88,
    },
    {
        name: "Kubernetes",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        category: "Orchestration",
        desc: "Automating deployment, scaling, and management of containerized applications.",
        percentage: 75,
    },
    {
        name: "Terraform",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
        category: "IaC",
        desc: "Infrastructure as Code tool.",
        percentage: 78,
    },
    {
        name: "Jenkins",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        category: "CI/CD",
        desc: "Open source automation server.",
        percentage: 75,
    },
    {
        name: "Prometheus",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
        category: "Monitoring",
        desc: "Monitoring system and time series database.",
        percentage: 85,
    },
    {
        name: "Grafana",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
        category: "Visualization",
        desc: "Analytics and interactive visualization web application.",
        percentage: 85,
    },
    {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        category: "Containerization",
        desc: "Platform for developing, shipping, and running applications in containers.",
        percentage: 88,
    },
    {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        category: "Cloud",
        desc: "Cloud computing platform.",
        percentage: 85,
    },
    {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        category: "Version Control",
        desc: "Version control system.",
        percentage: 98,
    },
    {
        name: "Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        category: "Operating System",
        desc: "Open source operating system.",
        percentage: 98,
    },
];

export const fallbackRepos: Repo[] = [
    {
        id: 1,
        name: "mern-notes-app",
        html_url: "https://github.com/Surajsuthar01/mern-notes-app",
        description: "Full-stack MERN notes application with MongoDB, Express, React, and Node.js. Features CRUD operations, REST API, and a clean UI for managing personal notes.",
        language: "JavaScript",
        stargazers_count: 0,
        forks_count: 0,
        pushed_at: "2026-01-13T13:48:32Z",
        fork: false,
    },
    {
        id: 2,
        name: "surajlogistic",
        html_url: "https://github.com/Surajsuthar01/surajlogistic",
        description: "Logistics management web application built to streamline shipment tracking, route management, and delivery operations.",
        language: "JavaScript",
        stargazers_count: 0,
        forks_count: 0,
        pushed_at: "2025-11-10T09:22:00Z",
        fork: false,
    },
    {
        id: 3,
        name: "bash_scripting",
        html_url: "https://github.com/Surajsuthar01/bash_scripting",
        description: "Collection of Bash automation scripts for Linux system administration — covering file management, user provisioning, log rotation, and DevOps workflows.",
        language: "Shell",
        stargazers_count: 0,
        forks_count: 0,
        pushed_at: "2025-10-05T17:00:00Z",
        fork: false,
    },
];

