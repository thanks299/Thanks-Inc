import React from 'react';
import { Calendar, Tag } from 'lucide-react';

export default function News() {
  const news = [
    {
      title: "Thanks Group Inc. Announces Major Sustainable Energy Initiative",
      date: "March 15, 2024",
      category: "Press Release",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      excerpt: "Nexus Group unveils a groundbreaking $500M investment in renewable energy projects across developing nations..."
    },
    {
      title: "Q1 2024 Financial Results Exceed Market Expectations",
      date: "March 10, 2024",
      category: "Financial News",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      excerpt: "Strong performance across all business units leads to record-breaking first quarter results..."
    },
    {
      title: "Studio Thanks Wins International Award",
      date: "March 5, 2024",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      excerpt: "Our photography division receives prestigious recognition for its groundbreaking work in documentary storytelling..."
    },
    {
      title: "Thanks Foundation Launches Education Initiative",
      date: "March 1, 2024",
      category: "Foundation",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      excerpt: "New program aims to provide technology education to underprivileged communities worldwide..."
    }
  ];

  return (
    <main className="pt-16">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-12">Latest News</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <article key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      {item.date}
                    </div>
                    <div className="flex items-center text-purple-500">
                      <Tag size={16} className="mr-2" />
                      {item.category}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-4">{item.title}</h2>
                  <p className="text-gray-400 mb-6">{item.excerpt}</p>
                  <button className="text-purple-500 hover:text-purple-400 font-semibold transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}