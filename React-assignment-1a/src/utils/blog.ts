export const getRandomImage = (index: number): string => {
    const images: string[] = [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop'
    ];
    return images[index % images.length];
};

export const getRandomDate = (): string => {
    const dates: string[] = ['14th July 2024', '25th May 2024', '10th February 2024', '15th April 2024', '20th March 2024', '10th June 2024'];
    return dates[Math.floor(Math.random() * dates.length)];
};

export const getRandomReadTime = (): string => {
    const times: string[] = ['5 min read', '10 min read', '7 min read', '12 min read', '15 min read', '8 min read'];
    return times[Math.floor(Math.random() * times.length)];
};