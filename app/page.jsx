import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl text-green-800">Welcome</h1>
      <Link href="/properties">Properties</Link>
    </div>
  );
};

export default HomePage;
