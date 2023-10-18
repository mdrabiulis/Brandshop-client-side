// import imgBanner from '../../../public/404/banner2.jpg'
import imgBanner from "../../../public/404/banner1.png";

const Banner = () => {
  return (
  
    <div>
      <div className="relative">
        <div className="">
          <img src={imgBanner} alt="" className=" w-[500px] md:w-[1920px] h-[600px] md:h-[800px]" />
        </div>
        <div className="absolute top-2/4 left-40  ">
          <h2 className="text-5xl  ">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-[16px] my-3 ">
            It is coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! <br></br> Your companion of every moment!!! Enjoy
            the beautiful moments and make them memorable.
          </p>
          {/* <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">new</span>
              <button className="btn join-item">Search</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
