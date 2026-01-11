import { Divider } from "antd";
import ItemRound from "./ItemRound";
import ebayLaptop from "../assets/ebay/ebay_laptop.jpg";
import ebayKeyboard from "../assets/ebay/ebay_keyboard.jpg";
import ebayIphone from "../assets/ebay/ebay_iphone.jpg";
import ebayPC from "../assets/ebay/ebay_pc.jpg";
import ebayTablet from "../assets/ebay/ebay_tablet.jpg";
import ebayStorage from "../assets/ebay/ebay_storage.jpg";
import ebayLenses from "../assets/ebay/ebay_lenses.jpg";

const popularOptions = [
  { src: ebayLaptop, title: "Laptops" },
  { src: ebayKeyboard, title: "Computer parts" },
  { src: ebayIphone, title: "Smartphones" },
  { src: ebayPC, title: "Enterprise networking" },
  { src: ebayTablet, title: "Tablets and eBooks" },
  { src: ebayStorage, title: "Storage and blank media" },
  { src: ebayLenses, title: "Lenses and filters" },
];

const PopularItems = () => {
  return (
    <div className="flex flex-col w-4/5 pb-5">
      <p className="home-heading ml-3 mt-5">Popular Items</p>
      <Divider className="bg-gray-700" />
      <div className="flex w-full justify-center items-center gap-5">
        {popularOptions.map((option, index) => (
          <ItemRound key={index} src={option.src} title={option.title} />
        ))}
      </div>
    </div>
  );
};
export default PopularItems;
