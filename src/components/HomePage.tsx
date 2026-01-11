import Banner from "./Banner";
import BigBanner from "./BigBanner";
import CurrentOffers from "./CurrentOffers";
import Footer from "./Footer";
import PopularItems from "./PopularItems";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center pt-5 gap-5 w-full">
      <Banner />
      <PopularItems />
      <CurrentOffers />
      <BigBanner />
      <Footer />
    </div>
  );
};
export default HomePage;
