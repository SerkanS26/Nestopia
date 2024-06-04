"use client";

import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import { fetchProperties } from "@/utils/requests";
import { Suspense } from "react";

const HomeProperties = async () => {
  const data = await fetchProperties();

  const recentProperties = data.properties

    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <Suspense>
        <section className="px-4 py-6">
          <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Recent Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProperties === 0 ? (
                <p>No Properties Found</p>
              ) : (
                recentProperties.map((property) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    key={property._id}
                  >
                    <PropertyCard key={property._id} property={property} />
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>
        <section className="m-auto max-w-lg my-10 px-6">
          <Link
            href="/properties"
            className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          >
            View All Properties
          </Link>
        </section>
      </Suspense>
    </>
  );
};

export default HomeProperties;
