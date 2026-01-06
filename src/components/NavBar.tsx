import { NavBarItem } from "./NavBarItem";
import cart from "../assets/thin_cart.svg";
import SearchBar from "./SearchBar";
const pages = [
  { name: "Home", link: "/home" },
  { name: "Store", link: "/store" },
  { name: "News", link: "/news" },
];
const navigation = [{ name: "<" }, { name: ">" }];

const NavBar = () => {
  return (
    <div className="bg-green-500 flex w-full justify-between">
      <div className="flex flex-row">
        {navigation.map((nav) => (
          <NavBarItem isIcon key={nav.name}>
            {nav.name}
          </NavBarItem>
        ))}
        {pages.map((page) => (
          <NavBarItem key={page.link} link={page.link}>
            {page.name}
          </NavBarItem>
        ))}
      </div>
      <div className="flex flex-row mr-5 space-x-5">
        <SearchBar />
        <NavBarItem isIcon>
          <img src={cart} className="object-fill h-full w-10" />
        </NavBarItem>
      </div>
    </div>
  );
};

export default NavBar;
