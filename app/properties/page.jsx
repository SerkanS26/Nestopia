import Properties from "@/components/Properties";

import PropertySearchForm from "@/components/PropertySearchForm";

const PropertiesPage = () => {
  return (
    <>
      <section className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
};

export default PropertiesPage;
