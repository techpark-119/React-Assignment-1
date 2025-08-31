import type { LucideIcon } from 'lucide-react';

export interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface FAQItem {
    question: string;
    answer: string;
    additionalContent?: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface FooterColumn {
    title: string;
    links: string[];
}

export interface FooterData {
    company: {
        name: string;
    };
    columns: FooterColumn[];
}