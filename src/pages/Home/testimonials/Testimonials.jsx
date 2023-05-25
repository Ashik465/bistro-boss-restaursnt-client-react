import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import quotation from '../../../assets/home/quotation-mark.png'


const Testimonials = () => {


 const [reviews, setReviews] = useState([])
   
 useEffect(()=>{
        fetch('http://localhost:5000/reviews')
            .then(res=>res.json())
            .then(data=>setReviews(data))
    }
    ,[])




    return (
        <>
            <section>

                <SectionTitle
                    heading={"What our customers say"}
                    subHeading={"TESTIMONIALS"}
                ></SectionTitle>


<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        
{
    reviews.map(review=><SwiperSlide key={review._id}>
        <div className="flex flex-col items-center justify-center m-24 space-y-4">
          
        <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />


        <img className="w-24 h-24" src={quotation} alt="" />

            <p className="text-center "> {review.details}   </p>
            
            <h3 className="text-center text-[#CD9003] text-2xl font-bold my-5">{review.name}</h3>
            
        </div>
    </SwiperSlide>)

}





      </Swiper>


            </section>




        </>
    );
};

export default Testimonials;