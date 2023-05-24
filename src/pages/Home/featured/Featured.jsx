import SectionTitle from "../../../components/sectionTitle/SectionTitle";

import featured from '../../../assets/home/featured.jpg'


const Featured = () => {
  return (
    <>  <div className="my-20 bg-fixed  "  style={{ backgroundImage: `url(${featured})` }} >
        <div className="  bg-gradient-to-r from-[#151515B2] ">
       <div className="py-10">
       <SectionTitle
          heading={"check it out"}
          subHeading={"From our menu"}
        ></SectionTitle>
       </div>

        <div className="md:flex justify-center  items-center gap-6    py-8 px-16 md:py-20 md:px-36 text-white">
          
          <div className="mb-4">
            <img src={featured} alt="" />
          </div>
           <div className=" space-y-4">
            <h1 > March 20, 2023</h1>
            <h2 className=" uppercase">  WHERE CAN I GET SOME?</h2>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aut nisi, sit quo eum sunt. Aliquam magnam facere sint? Molestiae dignissimos illo possimus ipsum minima laboriosam ullam suscipit hic quidem ea. Perferendis doloribus repellat molestias asperiores ex nihil vel accusamus!
            </p>
            <button className=" btn btn-outline border-0 border-b-4 text-white ">Read more</button>
           </div>




        </div>



      </div>
    </div>
      
    </>
  );
};

export default Featured;
