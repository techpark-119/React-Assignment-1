import { MessageCircle, Users, Code, Camera } from 'lucide-react';
import { footerData } from '../data/footer';

const Footer: React.FC = () => {
    return (
      <footer className="bg-slate-800 text-gray-400">
        <div className="mx-auto max-w-screen-xl px-4 py-7">
          <div className="grid grid-cols-1 mt-6 gap-8 md:grid-cols-4">
            <div className="space-y-4">
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
            </div>
            {footerData.columns.map((column, index) => (
              <div key={index}>
                <h3 className="mb-6 text-lg font-semibold text-white">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <hr className="my-8 border-gray-700" />
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <span className="text-sm">
              Learning Online © 2025. Developed by Arham Ali
            </span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Users className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Code className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Camera className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;