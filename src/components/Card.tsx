const Card = () => {
  return (
    <div className="w-65 h-80 bg-gray-100 rounded flex flex-col justify-start items-center p-3 hover:cursor-pointer hover:scale-105 transition ease-out duration-200 border border-gray-200">
      <div className="w-full h-3/4 bg-gray-300" />
      <text className="pt-3 font-thin w-full text-start">
        Image description
      </text>
    </div>
  );
};
export default Card;
