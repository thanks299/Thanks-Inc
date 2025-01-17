import React from 'react';

export default function About() {
  const executives = [
    { name: "Sarah Thanks", title: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { name: "Michael Rodriguez", title: "Chief Financial Officer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { name: "Emma Thompson", title: "Chief Operations Officer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <main className="pt-12">
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-4">Thanks Group Inc.</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Story</h2>
              <p className="text-gray-400 mb-3">Founded in 1970, Thanks Group Inc. has grown from a small investment firm into a global conglomerate spanning multiple industries. Our journey has been marked by strategic acquisitions, innovative ventures, and a commitment to sustainable growth.</p>
              <p className="text-gray-400">Today, we operate across three core sectors: sustainable development through our Foundation, creative industries via our Photography division, and financial services through our Investment arm.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Nexus Group headquarters" className="rounded-lg shadow-lg" />
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {executives.map((exec, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
                  <img src={exec.image} alt={exec.name} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{exec.name}</h3>
                    <p className="text-gray-400">{exec.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {[{ title: "Innovation", description: "Pushing boundaries and embracing new technologies" }, { title: "Sustainability", description: "Committed to environmental and social responsibility" }, { title: "Excellence", description: "Delivering exceptional value in everything we do" }].map((value, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
