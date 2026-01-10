import { Divider } from "antd";
import ItemRound from "./ItemRound";

const PopularItems = () => {
  return (
    <div className="flex flex-col w-4/5 pb-5">
      <p className="home-heading ml-3 mt-5">Popular Items</p>
      <Divider className="bg-gray-700" />
      <div className="flex w-full justify-center items-center gap-10">
        <ItemRound />
        <ItemRound />
        <ItemRound />
        <ItemRound />
        <ItemRound />
        <ItemRound />
      </div>
    </div>
  );
};
export default PopularItems;
