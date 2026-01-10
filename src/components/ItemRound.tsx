import laptop from "../assets/laptop.jpg";

const ItemRound = () => {
  return (
    <div className="flex flex-col items-center text-center w-max hover:cursor-pointer ">
      <img
        src={laptop}
        className="object-cover rounded-full w-45 aspect-square"
      />
      <p className="mt-3 font-semibold text-md">Laptops</p>
    </div>
  );
};
export default ItemRound;
