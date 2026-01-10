import Card from "./Card";

const CardGrid = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-y-10 justify-items-center">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export default CardGrid;
