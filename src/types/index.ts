
export type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    pushed_at: string;
    fork: boolean;
};

export type Certification = {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    details?: string;
    fullDescription?: string;
    objectives?: string[];
    industryValue?: string;
    skills?: string[];
    verifyUrl?: string;
    category?: "linux" | "cloud" | "devops" | "security" | "database" | "os";
    issuerLogo?: string;
    featured?: boolean;
};

export type NavLink = {
    id: string;
    label: string;
};

export type Role = string;

export type LeetCodeBadge = string;

export type DevOpsTool = {
    name: string;
    logo: string;
    category?: string;
    desc?: string;
    percentage?: number;
};

export type KeyCompetency = {
    title: string;
    text: string;
    icon?: string;
    tags?: string[];
};

export type Education = {
    id: string;
    title: string;
    institute: string;
    period: string;
    score: string;
    location?: string;
    current?: boolean;
    details?: string;
    tags?: string[];
};
