"use client";
import { motion } from "framer-motion";
import { fetchProperties } from "@/utils/requests";
import FeaturedPropertyCard from "@/components/FeaturedPropertyCard";
import { Suspense } from "react";

const FeaturedProperties = async () => {
  const properties = await fetchProperties({ showFeatured: true });

  const featuredProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 2);

  return (
    properties.length > 0 && (
      <Suspense>
        <section className="bg-softGreen px-4 pt-6 pb-10">
          <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Featured Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProperties.map((property) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  key={property._id}
                >
                  <FeaturedPropertyCard
                    key={property._id}
                    property={property}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Suspense>
    )
  );
};

export default FeaturedProperties;
