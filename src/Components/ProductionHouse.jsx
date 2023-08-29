import disney from "./../assets/Videos/disney.mp4";
import marvel from "./../assets/Videos/marvel.mp4";
import nationalGeographic from "./../assets/Videos/national-geographic.mp4";
import pixar from "./../assets/Videos/pixar.mp4";
import starWars from "./../assets/Videos/star-wars.mp4";

import starwars from "./../assets/Images/starwar.png";
import disneyIMG from "./../assets/Images/disney.png";
import marvelIMG from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixarIMG from "./../assets/Images/pixar.png";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disneyIMG,
      video: disney,
    },
    {
      id: 2,
      image: pixarIMG,
      video: pixar,
    },
    {
      id: 3,
      image: marvelIMG,
      video: marvel,
    },
    {
      id: 4,
      image: starwars,
      video: starWars,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographic,
    },
  ];
  return (
    <div className="flex gap-2 p-2 px-5 md:gap-5 md:px-16">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="relative cursor-pointer rounded-lg border-2  border-gray-600 shadow-xl shadow-gray-700 transition-all duration-300  ease-in-out hover:scale-90"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 z-0 w-full rounded-md    opacity-0 hover:opacity-50  "
          />

          <img src={item.image} alt="" className="z-[1]opacity-100 w-full" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
