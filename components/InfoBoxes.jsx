"use client";

import InfoBox from "./InfoBox";
import { motion } from "framer-motion";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <InfoBox
              heading="For Renters"
              backgroundColor="bg-gray-100"
              buttonInfo={{
                text: "Browse Properties",
                link: "/properties",
                backgroundColor: "bg-black",
              }}
            >
              Find your dream rental property. Bookmark properties and contact
              owners.
            </InfoBox>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <InfoBox
              heading="For Property Owners"
              backgroundColor="bg-softGreen"
              buttonInfo={{
                text: "Browse Properties",
                link: "/properties/add",
                backgroundColor: "bg-secondary",
              }}
            >
              List your properties and reach potential tenants. Rent as an
              Airbnb or long term.
            </InfoBox>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
