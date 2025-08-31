import { TrendingUp, GraduationCap, Briefcase, DollarSign, Palette, Settings } from 'lucide-react';
import type { Feature } from '../types';

export const featuresData: Feature[] = [
    {
        title: "Marketing",
        description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
        icon: TrendingUp
    },
    {
        title: "Legal",
        description: "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
        icon: GraduationCap
    },
    {
        title: "Business Automation",
        description: "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.",
        icon: Briefcase
    },
    {
        title: "Finance",
        description: "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.",
        icon: DollarSign
    },
    {
        title: "Enterprise Design",
        description: "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
        icon: Palette
    },
    {
        title: "Operations",
        description: "Keep your company's lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
        icon: Settings
    }
];