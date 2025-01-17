import React from 'react'; 
import { ArrowRight } from 'lucide-react'; 

export default function Subsidiaries() { 
  const companies = [ 
    { name: "Thanks Foundation", description: "Driving positive change through sustainable development initiatives, community empowerment, and environmental conservation projects worldwide.", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", achievements: ["100+ community projects completed", "50,000+ lives impacted", "25+ countries reached"] }, 
    { name: "Studio Thanks", description: "A leading creative agency specializing in commercial photography, documentary projects, and visual storytelling for global brands.", image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", achievements: ["200+ international awards", "1000+ successful campaigns", "Global client portfolio"] }, 
    { name: "Thanks Investments Plc.", description: "Strategic investment firm focusing on emerging technologies, sustainable ventures, and high-growth opportunities across diverse sectors.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", achievements: ["$10B+ assets under management", "30+ successful exits", "15+ years of growth"] } 
  ]; 
  return ( 
    <main className="pt-16"> 
      <section className="py-20 bg-black"> 
        <div className="max-w-7xl mx-auto px-6"> 
          <h1 className="text-4xl font-bold text-white mb-12">Our Companies</h1> 
          <div className="space-y-20"> 
            {companies.map((company, index) => ( 
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> 
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}> 
                  <h2 className="text-3xl font-bold text-white mb-4">{company.name}</h2> 
                  <p className="text-gray-400 mb-6">{company.description}</p> 
                  <div className="mb-8"> 
                    <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3> 
                    <ul className="space-y-2"> 
                      {company.achievements.map((achievement, i) => ( 
                        <li key={i} className="text-gray-400 flex items-center"> 
                          <ArrowRight className="text-purple-500 mr-2" size={16} /> 
                          {achievement} 
                        </li> 
                      ))} 
                    </ul> 
                  </div> 
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all"> 
                    <span>Learn More</span> 
                    <ArrowRight size={20} /> 
                  </button> 
                </div> 
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}> 
                  <img src={company.image} alt={company.name} className="rounded-lg shadow-lg hover:transform hover:scale-105 transition-all" /> 
                </div> 
              </div> 
            ))} 
          </div> 
        </div> 
      </section> 
    </main> 
  ); 
}
