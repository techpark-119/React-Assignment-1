import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Posts } from '../types';
import { getRandomImage, getRandomDate, getRandomReadTime } from '../utils/blog';

const BlogSection: React.FC = () => {
    const [posts, setPosts] = useState<Posts[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/c/0fbf-9108-43d1-8249')
          .then((response: Response) => response.json())
          .then((data: { posts: Posts[] }) => setPosts(data.posts || []))
          .catch(() => setPosts([]))
    }, []);

    return (
        <>
            <div className="bg-gray-50 py-8">
                <div className="mx-auto max-w-screen-xl px-4">
                    <div className="flex items-center justify-center space-x-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1"></div>
                        <div className="flex items-center space-x-2 px-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1"></div>
                    </div>
                </div>
            </div>
            <section className="bg-white py-16">
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
                    <p className="text-gray-600">Expert insights on business automation, productivity, and growth strategies</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts && posts.length > 0 ? posts.map((post, index) => (
                        <div key={post.id} className="bg-gray-50 rounded-lg overflow-hidden">
                            <div className="flex flex-col sm:flex-row">
                                <img 
                                    src={getRandomImage(index)} 
                                    alt={post.title}
                                    className="w-full sm:w-48 h-48 sm:h-auto object-cover"
                                />
                                <div className="p-6 flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.body}
                                    </p>
                                    <div className="text-sm text-gray-500">
                                        {getRandomDate()} | {getRandomReadTime()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-2 text-center py-8">
                            <p className="text-gray-500">Loading blog posts...</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 mt-16">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white px-6 text-gray-500">
                            <ChevronDown className="h-6 w-6" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default BlogSection;