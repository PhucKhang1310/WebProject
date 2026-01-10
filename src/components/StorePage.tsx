import CardGrid from "./CardGrid";
import ChevronRight from "../assets/chevron-right.svg";
const StorePage = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="pl-5 pt-5">
        <ul className="flex">
          <li className="flex">
            <a href="/home" className="font-thin text-sm text-center">
              Home
            </a>
            <img src={ChevronRight} className="w-4.5 aspect-square mt-0.5" />
          </li>
          <li className="flex">
            <a href="/home" className="font-thin text-sm text-center">
              New Items
            </a>
          </li>
        </ul>
        <div className="font-semibold text-7xl pt-5">New Items</div>
      </div>

      <div className="flex w-full pt-5">
        <div className="bg-white w-1/6 h-lvh flex flex-col"></div>
        <div className="flex flex-col w-full mt-5">
          <CardGrid />
        </div>
      </div>
    </div>
  );
};
export default StorePage;
