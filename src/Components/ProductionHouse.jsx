import disney from './../assets/Videos/disney.mp4'
import marvel from './../assets/Videos/marvel.mp4'
import nationalGeographic from './../assets/Videos/national-geographic.mp4'
import pixar from './../assets/Videos/pixar.mp4'
import starWars from './../assets/Videos/star-wars.mp4'


import starwars from './../assets/Images/starwar.png'
import disneyIMG from './../assets/Images/disney.png'
import marvelIMG from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixarIMG from './../assets/Images/pixar.png'




function ProductionHouse() {

    const productionHouseList=[
        {
            id:1,
            image:disneyIMG,
            video:disney
        },
        {
            id:2,
            image:pixarIMG,
            video:pixar
        },
        {
            id:3,
            image:marvelIMG,
            video:marvel
        },
        {
            id:4,
            image:starwars,
            video:starWars
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographic
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item)=>(
            <div key={item.id} className='border-2 border-gray-600 cursor-pointer rounded-lg  hover:scale-110 transition-all duration-300 ease-in-out relative  shadow-x' >
                
                <img src={item.image} alt="" className='w-full z-[1]opacity-100'  />
                <video src={item.video} autoPlay loop playsInline className='absolute top-0 rounded-md z-0  object-cover  opacity-0 hover:opacity-50 '/>
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse