import { HelpCircle } from 'lucide-react';
import { faqData } from '../data/faq';

const FAQ: React.FC = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Frequently asked questions
                </h2>
                <div className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-2 md:gap-16 dark:border-gray-700">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-10">
                            <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                                <HelpCircle className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                                {faq.question}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                {faq.answer}
                            </p>
                            {faq.additionalContent && (
                                <p className="text-gray-500 dark:text-gray-400">
                                    {faq.additionalContent}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ;