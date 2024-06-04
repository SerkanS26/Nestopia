import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import FeaturedProperties from "@/components/FeaturedProperties";

import { Suspense } from "react";

const HomePage = async () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <InfoBoxes />
        <FeaturedProperties />
        <HomeProperties />
      </Suspense>
    </>
  );
};

export default HomePage;
