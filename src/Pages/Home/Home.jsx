import Upcomingbrand from "../../BrandPages/Upcoming brand/Upcomingbrand";
import HomeCard from "../../Components/HomeCard/HomeCard";
import MarqueeCard from "../../Components/Marquees/MarqueeCard";
import Whybuy from "../../Components/Why buy/Whybuy";

import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <HomeCard></HomeCard>
      <MarqueeCard></MarqueeCard>
      <Whybuy></Whybuy>
      <Upcomingbrand></Upcomingbrand>
    </div>
  );
};

export default Home;
