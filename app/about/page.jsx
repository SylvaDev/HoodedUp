'use client';

import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4 bg-hooded-midnight text-hooded-ice">
      <header className="w-full max-w-6xl mx-auto py-4 flex justify-start">
        <Link href="/" className="text-hooded-neon hover:underline text-lg font-semibold">
          &larr; Back to Home
        </Link>
      </header>
      <div className="max-w-6xl w-full text-center space-y-12">
        <h1 className="text-5xl font-extrabold mb-8 animate-fade-in">About Us</h1>

        <section className="mb-12 p-8 bg-hooded-charcoal rounded-xl shadow-lg animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 text-hooded-neon">Our Mission</h2>
          <p className="text-lg leading-relaxed text-hooded-ice/80 max-w-3xl mx-auto">
            Our mission is to provide high-quality, fashionable hooded apparel that combines comfort, style, and durability. We believe in empowering individuals to express their unique personalities through their clothing, while also promoting sustainable and ethical manufacturing practices.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-hooded-neon animate-fade-in">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Team Member 1 */}
            <div className="bg-hooded-charcoal rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out animate-slide-up">
              <img
                src="https://via.placeholder.com/150" // Replace with actual image
                alt="Sylvester A."
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-hooded-neon shadow-neon-glow"
              />
              <h3 className="text-2xl font-bold text-center mb-3 text-hooded-neon">Sylvester A</h3>
              <p className="text-hooded-ice/70 text-center text-md mb-4">Founder & CEO</p>
              <p className="text-hooded-ice/80 text-sm leading-relaxed">
                Sylvester is the visionary behind HoodedUp, driven by a passion for fashion and a commitment to quality. He oversees all aspects of the company, ensuring that our products meet the highest standards.
              </p>
            </div>

            {/* Example Team Member 2 */}
            <div className="bg-hooded-charcoal rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out animate-slide-up delay-100">
              <img
                src="https://via.placeholder.com/150" // Replace with actual image
                alt="Jane Doe"
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-hooded-neon shadow-neon-glow"
              />
              <h3 className="text-2xl font-bold text-center mb-3 text-hooded-neon">Jane Doe</h3>
              <p className="text-hooded-ice/70 text-center text-md mb-4">Lead Designer</p>
              <p className="text-hooded-ice/80 text-sm leading-relaxed">
                Jane brings creativity and innovation to our designs, constantly pushing the boundaries of hooded apparel. Her keen eye for detail ensures every piece is both stylish and functional.
              </p>
            </div>

            {/* Example Team Member 3 */}
            <div className="bg-hooded-charcoal rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out animate-slide-up delay-200">
              <img
                src="https://via.placeholder.com/150" // Replace with actual image
                alt="John Smith"
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-hooded-neon shadow-neon-glow"
              />
              <h3 className="text-2xl font-bold text-center mb-3 text-hooded-neon">John Smith</h3>
              <p className="text-hooded-ice/70 text-center text-md mb-4">Head of Operations</p>
              <p className="text-hooded-ice/80 text-sm leading-relaxed">
                John ensures that our operations run smoothly, from sourcing sustainable materials to efficient production and timely delivery. He's dedicated to ethical practices and customer satisfaction.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 bg-hooded-charcoal rounded-xl shadow-lg animate-slide-up delay-300">
          <h2 className="text-4xl font-bold mb-4 text-hooded-neon">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-hooded-ice/80 max-w-3xl mx-auto space-y-2">
            <li>Quality Craftsmanship</li>
            <li>Sustainable Practices</li>
            <li>Customer Satisfaction</li>
            <li>Innovation in Design</li>
            <li>Ethical Sourcing</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
