import { Divider } from "antd";
import ItemCard from "./ItemCard";

const CurrentOffers = () => {
  return (
    <div className="w-4/5 mt-5">
      <p className="home-heading ml-3 mt-5">Current offers</p>
      <Divider className="bg-gray-700" />
      <div className="flex justify-center items-center gap-5">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};
export default CurrentOffers;
