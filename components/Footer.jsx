import Image from "next/image";

import logo from "@/assets/images/logo-white.png";
import Nestopia from "@/assets/images/Nestopia.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary py-4 mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image
            src={Nestopia}
            alt="Logo"
            height={70}
            className="rounded-full "
          />
        </div>

        <div>
          <p className="text-sm text-gray-200 mt-2 md:mt-0">
            &copy; {currentYear} Nestopia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
