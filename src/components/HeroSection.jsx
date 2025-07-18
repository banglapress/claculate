// src/components/HeroSection.jsx
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-rose-50 to-pink-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Your <span className="text-rose-600">Perfect Match</span> for Life
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Join thousands of happy couples who found their life partners through our trusted matrimony service. 
              Your journey to forever starts here.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/register" 
                className="px-8 py-3.5 text-base font-semibold text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Create Free Profile
              </Link>
              <Link 
                href="/search" 
                className="px-8 py-3.5 text-base font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                Browse Profiles
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item} 
                    className="h-10 w-10 rounded-full border-2 border-white bg-gray-200"
                  ></div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-semibold">5,000+</span> matches made last month
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl shadow-xl overflow-hidden border-8 border-white">
              <div className="absolute inset-0 bg-[url('/couple-silhouette.svg')] bg-center bg-no-repeat bg-contain opacity-20"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Verified Profiles</p>
                  <p className="text-xs text-gray-500">100% Authentic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}