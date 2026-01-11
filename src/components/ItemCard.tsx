interface ItemCardProps {
  item: { src: string; name: string; price: number; originalPrice: number };
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div className="flex flex-col w-1/5">
      <div className="aspect-square rounded-3xl ">
        <img src={item.src} className="object-cover" />
      </div>
      <div>
        <p className="font-normal text-md w-3/4">{item.name}</p>
        <div className="flex items-end gap-1">
          <p className="font-semibold text-xl flex-1">{item.price}</p>
          <p className="font-thin text-sm flex-1 line-through text-gray-400 ">
            {item.originalPrice}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
