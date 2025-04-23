import React from "react";
import { motion } from "framer-motion";

const bundles = [
  {
    title: "Tumblers & More Bundle",
    image: "/images/tumblers.jpg",
    price: "$24.99",
  },
  {
    title: "Spring/Summer & Easter Collection",
    image: "/images/spring-easter.jpg",
    price: "$18.00",
  },
  {
    title: "Floral Bundle",
    image: "/images/floral.jpg",
    price: "$22.50",
  },
];

export default function App() {
  return (
    <main className="p-4 max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-center mb-6 text-yellow-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to Craft Folly
      </motion.h1>

      <p className="text-center mb-10 text-lg text-gray-600">
        Where stash meets cash! Explore unique craft bundles ready to spark your creativity.
      </p>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bundles.map((bundle, index) => (
          <div key={index} className="rounded-2xl shadow-xl bg-white">
            <img
              src={bundle.image}
              alt={bundle.title}
              className="rounded-t-2xl h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{bundle.title}</h2>
              <p className="text-gray-700 mb-3">{bundle.price}</p>
              <button className="w-full bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600 transition">
                View Collection
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
