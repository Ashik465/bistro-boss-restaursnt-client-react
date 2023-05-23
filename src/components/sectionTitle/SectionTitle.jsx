
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className=" mx-auto text-center md:w-3/12 mt-10">
            
            <p className=" text-[#D99904] mb-3 ">---{heading}--- </p>
            <h3 className=" border-y-4 text-4xl uppercase py-4"> {subHeading} </h3>

        </div>
    );
};

export default SectionTitle;