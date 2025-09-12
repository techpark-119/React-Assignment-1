import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const location = useLocation();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 backdrop-blur-md shadow-lg">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="6" cy="6" r="3" fill="currentColor"/>
                            <circle cx="18" cy="6" r="3" fill="currentColor"/>
                            <circle cx="12" cy="18" r="3" fill="currentColor"/>
                            <path d="M9 9l6 0" strokeLinecap="round"/>
                            <path d="M9 9l3 6" strokeLinecap="round"/>
                            <path d="M15 9l-3 6" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <span className="text-2xl font-bold text-white">
                        WorkFlow
                    </span>
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <Menu className="h-5 w-5" />
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="mt-4 flex flex-col rounded-lg bg-white/10 backdrop-blur-md p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0">
                        <li>
                            <Link
                                to="/"
                                className={`block rounded-lg px-3 py-2 transition-colors ${location.pathname === '/' ? 'bg-white/20 text-white md:bg-white/20 md:text-white' : 'text-white/90 hover:bg-white/10 md:hover:text-white'}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`block rounded-lg px-3 py-2 transition-colors ${location.pathname === '/about' ? 'bg-white/20 text-white md:bg-white/20 md:text-white' : 'text-white/90 hover:bg-white/10 md:hover:text-white'}`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className={`block rounded-lg px-3 py-2 transition-colors ${location.pathname === '/services' ? 'bg-white/20 text-white md:bg-white/20 md:text-white' : 'text-white/90 hover:bg-white/10 md:hover:text-white'}`}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/pricing"
                                className={`block rounded-lg px-3 py-2 transition-colors ${location.pathname === '/pricing' ? 'bg-white/20 text-white md:bg-white/20 md:text-white' : 'text-white/90 hover:bg-white/10 md:hover:text-white'}`}
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`block rounded-lg px-3 py-2 transition-colors ${location.pathname === '/contact' ? 'bg-white/20 text-white md:bg-white/20 md:text-white' : 'text-white/90 hover:bg-white/10 md:hover:text-white'}`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;