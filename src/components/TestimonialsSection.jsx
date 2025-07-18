// src/components/TestimonialsSection.jsx
export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "After years of searching, I found my perfect match on Protishruti. The advanced matching system really understands preferences.",
      author: "Priya & Raj",
      location: "Mumbai",
      date: "Married in 2023"
    },
    {
      quote: "The verification process gave us confidence that we were talking to genuine people. We're grateful for this platform!",
      author: "Amit & Neha",
      location: "Delhi",
      date: "Engaged in 2024"
    },
    {
      quote: "As someone living abroad, I appreciated the detailed search filters that helped me find someone with similar values.",
      author: "Arjun & Meera",
      location: "London",
      date: "Married in 2022"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from couples who found their life partners through Protishruti
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-rose-600">
                <svg className="w-8 h-8 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="mt-4 text-gray-700 italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}