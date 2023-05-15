import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden w-64 mx-20 my-5">
      <img src={image} alt={name} className="w-full" />
      <div className="px-4 py-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

const CardList = () => {
  const data = [
    { name: "Card 1", image: "https://picsum.photos/id/1018/400/300" },
    { name: "Card 2", image: "https://picsum.photos/id/1025/400/300" },
    { name: "Card 3", image: "https://picsum.photos/id/1035/400/300" },
    { name: "Card 4", image: "https://picsum.photos/id/1052/400/300" },
    { name: "Card 5", image: "https://picsum.photos/id/1062/400/300" },
    { name: "Card 6", image: "https://picsum.photos/id/107/400/300" },
  ];

  return (
    <div className="flex flex-wrap justify-center ">
      {data.map((item) => (
        <Card key={item.name} name={item.name} image={item.image} />
      ))}
    </div>
  );
};

export default CardList;
