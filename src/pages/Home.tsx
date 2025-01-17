import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="pt-16">
      <section className="h-screen bg-cover bg-center flex items-center transition-all duration-700 animate-fadeIn" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slideUp">SHAPING THE WORLD</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-slideUp animation-delay-200">A global leader in innovation, investment, and sustainable development</p>
          <Link to="/about" className="inline-block">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105 animate-slideUp animation-delay-400">
              <span>Discover Our Vision</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fadeIn relative">
          <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-pink-500 opacity-40 z-10"></span>
          OUR COMPANY
        </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[{
              title: "Thanks Foundation",
              description: "Empowering communities through sustainable development",
              image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              link: "/subsidiaries"
            }, {
              title: "Studio Thanks",
              description: "Capturing moments that tell powerful stories",
              image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              link: "/subsidiaries"
            }, {
              title: "Thanks Investments Plc.",
              description: "Building wealth through strategic investments",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              link: "/subsidiaries"
            }].map((company, index) => (
              <Link to={company.link} key={index}>
                <div className="bg-black p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 animate-fadeIn animation-delay-400 cursor-pointer">
                  <img src={company.image} alt={company.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{company.title}</h3>
                  <p className="text-gray-400">{company.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-19 bg-black">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fadeIn">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[{
              title: "Thanks Group Inc. Announces New Sustainable Initiative",
              date: "March 15, 2024",
              category: "Press Release",
              link: "/news"
            }, {
              title: "Q1 2024 Financial Results Exceed Expectations",
              date: "March 10, 2024",
              category: "Financial News",
              link: "/news"
            }, {
              title: "Studio Thanks Wins Prestigious Photography Award",
              date: "March 5, 2024",
              category: "Company News",
              link: "/news"
            }, {
              title: "Thanks Investments Plc. Acquires Leading Tech Startup",
              date: "February 28, 2024",
              category: "Investment News",
              link: "/news"
            }, {
              title: "Thanks Foundation Partners With UNICEF For Clean Water Project",
              date: "February 20, 2024",
              category: "Community News",
              link: "/news"
            }].map((news, index) => (
              <Link to={news.link} key={index}>
                <div className="border border-gray-800 p-5 rounded-lg hover:bg-gray-900 transition-all duration-300 animate-fadeIn animation-delay-600 cursor-pointer">
                  <span className="text-purple-500 text-sm">{news.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-4">{news.title}</h3>
                  <p className="text-gray-400">{news.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
