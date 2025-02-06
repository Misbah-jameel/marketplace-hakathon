"use client";

export default function AboutSection() {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-8">About Us</h2>

        {/* Tree-like structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-600 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-lg text-gray-300">
              We aim to provide eco-friendly products that make a positive impact on the environment and people s lives.
            </p>
          </div>

          <div className="bg-blue-600 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-gray-300">
              To curate and offer high-quality sustainable products that are affordable and accessible to everyone.
            </p>
          </div>

          <div className="bg-blue-600 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
            <ul className="text-lg text-gray-300 list-disc pl-6">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Sustainability</li>
              <li>Customer-centricity</li>
            </ul>
          </div>
        </div>

        {/* Tree Root */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-400">
            Our foundation lies in providing eco-conscious products that foster a sustainable lifestyle. Join us in our mission
            to create a better world for future generations.
          </p>
        </div>
      </div>
    </div>
  );
}
