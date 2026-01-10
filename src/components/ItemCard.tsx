const ItemCard = () => {
  return (
    <div>
      <div className="aspect-square h-65 bg-black text-white rounded-3xl">
        <div className="ml-5">
          <p className="font-semibold text-2xl pt-5">Today's Deals</p>
          <p className="font-normal text-md pt-2">All With Free Shipping</p>
        </div>
      </div>
      <div>
        <p className="font-normal text-md w-3/4">
          Cool Ass Random Device Name For Reference
        </p>
        <div className="flex items-end">
          <p className="font-semibold text-xl flex-1">8.120.000.000đ</p>
          <p className="font-thin text-sm flex-1 line-through text-gray-400 ">
            9.000.000.00đ
          </p>
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
