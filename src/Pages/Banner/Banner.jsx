import imgBanner from "/public/404/banner1.png";

const Banner = () => {
  return (
    <div className="mb-8">
      <div className="relative">
        <div className="">
          <img
            src={imgBanner}
            alt=""
            className=" w-[500px] md:w-[100%] h-[600px] md:h-[800px]"
          />
        </div>
        <div className="absolute top-[30%] md:top-2/4 left-0   ">
          <h2 className="text-black text-3xl  w-[60%] md:w-[65%] font-roboto font-bold ml-2 lg:ml-10 md:text-5xl">
            Would you like Online Shopping? You can see our products.
          </h2>
           <p className="text-black my-3 ml-2 lg:ml-10 w-[60%] text-base md:text-lg font-roboto ">
            It is the activity or action of buying products or services over the
            Internet. It means going online,<br></br> landing on a seller s
            website, selecting something, and arranging for its delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
