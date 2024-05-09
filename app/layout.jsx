import "@/assets/styles/globals.css";

export const metadata = {
  title: "Nestopia | Find The Best Rental",
  description: "Find your dream rental property.",
  keywords:
    "rental, property, real estate, home, apartment, house, condo, townhouse, loft, penthouse, studio, villa, mansion, cottage, cabin, bungalow, chalet, flat, duplex, triplex, quadplex, pentaplex, hexaplex, heptaplex, octaplex, nonaplex, decaplex, rental property, real estate property, home rental, apartment rental, house rental, condo rental, townhouse rental, loft rental, penthouse rental, studio rental, villa rental, mansion rental, cottage rental, cabin rental, bungalow rental, chalet rental, flat rental, duplex rental, triplex rental, quadplex rental, pentaplex rental, hexaplex rental, heptaplex rental, octaplex rental, nonaplex rental, decaplex rental",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
