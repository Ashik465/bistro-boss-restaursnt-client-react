const Button = ({ text }) => {
  return (
    <>
     <div className=" text-center">
        <button className=" uppercase btn btn-outline border-0 border-b-4 mt-5 mb-10">
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
