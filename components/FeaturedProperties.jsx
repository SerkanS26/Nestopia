import React from "react";
import { fetchProperties } from "@/utils/requests";
import FeaturedPropertyCard from "@/components/FeaturedPropertyCard";

//  const data = await fetchProperties();

//  const recentProperties = data.properties
//    .sort(() => Math.random() - Math.random())
//    .slice(0, 3);

const FeaturedProperties = async () => {
  const properties = await fetchProperties({ showFeatured: true });

  const featuredProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 2);

  return (
    properties.length > 0 && (
      <section className="bg-softGreen px-4 pt-6 pb-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProperties.map((property) => (
              <FeaturedPropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default FeaturedProperties;
