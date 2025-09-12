import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto max-w-screen-md sm:text-center">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Stay ahead of the curve
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 sm:text-xl md:mb-12 dark:text-gray-400">
                        Get the latest insights on business automation, productivity tips, and product updates 
                        delivered straight to your inbox.
                    </p>
                    <form action="#">
                        <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
                            <div className="relative w-full">
                                <label
                                    htmlFor="email"
                                    className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Email address
                                </label>
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                </div>
                                <input
                                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 sm:rounded-none sm:rounded-l-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                    placeholder="Enter your work email"
                                    type="email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-primary-700 border-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full cursor-pointer rounded-lg border px-5 py-3 text-center text-sm font-medium text-white focus:ring-4 sm:rounded-none sm:rounded-r-lg"
                                >
                                    Get Updates
                                </button>
                            </div>
                        </div>
                        <div className="newsletter-form-footer mx-auto max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
                            We care about the protection of your data.
                            <a
                                href="#"
                                className="text-primary-600 dark:text-primary-500 font-medium hover:underline"> Read our Privacy Policy</a>.
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;