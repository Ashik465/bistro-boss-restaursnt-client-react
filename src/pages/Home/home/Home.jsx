import Banner from "../banner/Banner";
import CallUs from "../callUs/CallUs";
import Category from "../category/Category";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>

        </>
    );
};

export default Home;