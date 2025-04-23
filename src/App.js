import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="p-4 max-w-3xl mx-auto text-center">
      <motion.h1
        className="text-5xl font-bold text-yellow-600 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Craft Folly
      </motion.h1>
      <p className="text-xl text-gray-700 mb-6">
        Where stash meets cash — buy, sell, and share craft supplies with ease.
      </p>
      <div className="space-y-4">
        <a
          href="#shop"
          className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600 transition"
        >
          Start Shopping
        </a>
        <br />
        <a
          href="#sell"
          className="inline-block text-yellow-600 underline hover:text-yellow-800"
        >
          Become a Seller
        </a>
      </div>
    </main>
  );
}
