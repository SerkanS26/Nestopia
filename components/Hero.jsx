"use client";

import PropertySearchForm from "./PropertySearchForm";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="bg-primary py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <motion.h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Find The Perfect Rental
          </motion.h1>
          <motion.p
            className="my-4 text-xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Discover the perfect property that suits your needs.
          </motion.p>
        </div>
        <PropertySearchForm />
      </div>
    </section>
  );
};

export default Hero;
