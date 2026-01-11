import { Divider } from "antd";
import ItemCard from "./ItemCard";
import ItemCardStarter from "./ItemCardStarter";
// import ebayPowerGen from "../assets/ebayPowerGen.webp";

const Items = [
  {
    src: "https://i.ebayimg.com/images/g/V6AAAeSwp5hpXUO9/s-l500.webp",
    name: "Cool Ass Power Gen from Ebay",
    price: 9000000,
    originalPrice: 10000000,
  },
];

const CurrentOffers = () => {
  return (
    <div className="w-4/5 mt-5">
      <p className="home-heading ml-3 mt-5">Current offers</p>
      <Divider className="bg-gray-700" />
      <div className="flex justify-center items-start gap-5">
        <ItemCardStarter />
        {Items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
};
export default CurrentOffers;
