"use client";

export default function AboutSection() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* About Heading with Hover Effect */}
        <h2 className="text-6xl font-extrabold text-pink-300 mb-12 transition-all duration-300 transform hover:scale-110 hover:text-white hover:underline cursor-pointer">
          UniqueShop
        </h2>

        {/* Section with Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* First Card */}
          <div className="bg-gradient-to-r from-pink-300 via-white to-pink-300 text-white p-10 rounded-xl shadow-xl hover:scale-105 transition-all duration-500 transform hover:translate-y-4">
            <h3 className="text-3xl font-bold mb-6 text-black">Our Vision</h3>
            <p className="text-lg text-gray-800">
              We aim to revolutionize the market with sustainable and eco-friendly products that transform lives.
            </p>
          </div>

          {/* Second Card */}
          <div className="bg-gradient-to-r from-pink-300 via-white to-pink-300 text-white p-10 rounded-xl shadow-xl hover:scale-105 transition-all duration-500 transform hover:translate-y-4">
            <h3 className="text-3xl font-bold mb-6 text-black">Our Mission</h3>
            <p className="text-lg text-gray-800">
              To create an environmentally conscious world by offering products that are both affordable and high-quality.
            </p>
          </div>

          {/* Third Card */}
          <div className="bg-gradient-to-r from-pink-300 via-white to-pink-300 text-white p-10 rounded-xl shadow-xl hover:scale-105 transition-all duration-500 transform hover:translate-y-4">
            <h3 className="text-3xl font-bold mb-6 text-black">Our Values</h3>
            <ul className="text-lg text-gray-800 list-disc pl-6">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Sustainability</li>
              <li>Customer-centricity</li>
            </ul>
          </div>

          {/* Fourth Card */}
          <div className="bg-gradient-to-r from-pink-300 via-white to-pink-300 text-white p-10 rounded-xl shadow-xl hover:scale-105 transition-all duration-500 transform hover:translate-y-4">
            <h3 className="text-3xl font-bold mb-6 text-black">Our Commitment</h3>
            <p className="text-lg text-gray-800">
              We are committed to providing products that not only enhance your life but also protect the planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
