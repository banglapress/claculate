// src/components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center">
              <div className="h-8 w-8 bg-rose-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold">Protishruti.com</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-xs">
              Helping you find your perfect life partner since 2010. Trusted by millions worldwide.
            </p>
            <div className="mt-6 flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Social media</span>
                  <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {['Home', 'Search', 'Matches', 'Messages', 'Premium'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Help & Support</h3>
            <ul className="mt-4 space-y-3">
              {['FAQ', 'Safety Tips', 'Contact Us', 'How It Works', 'Success Stories'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-gray-400">
              Subscribe to get updates on new features and success stories
            </p>
            <form className="mt-4 flex">
              <input 
                type="email" 
                placeholder="Your email address"
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-800 text-white"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-rose-600 rounded-r-lg hover:bg-rose-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {currentYear} Protishruti.com. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}