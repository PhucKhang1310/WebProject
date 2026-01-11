interface ItemRoundProps {
  src: string;
  title: string;
}

const ItemRound = ({ src, title }: ItemRoundProps) => {
  return (
    <div className="flex flex-col items-center text-center hover:cursor-pointer ">
      <img src={src} className="object-cover rounded-full aspect-square" />
      <p className="mt-3 font-semibold text-md">{title}</p>
    </div>
  );
};
export default ItemRound;
