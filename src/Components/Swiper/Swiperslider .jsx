import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import un from '/Images/Untitled-1.png'
import un_2 from '/Images/Untitled-2.png'
import un_3 from '/Images/Untitled-3.png'
// import un_4 from '/Images/Untitled-4.png'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const Swiperslider  = () => {


  return (

    <div className="">
    <div>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}

  >
   
    <SwiperSlide><img src={un_2} alt="" style={{width:"100%", height:"700px"}} /></SwiperSlide>
    <SwiperSlide><img src={un} alt="" style={{width:"100%", height:"700px"}}/></SwiperSlide>
    <SwiperSlide><img src={un_3} alt="" style={{width:"100%", height:"700px"}}/></SwiperSlide>
    {/* <SwiperSlide><img src={un_4} alt="" style={{width:"100%", height:"700px"}}/></SwiperSlide> */}
    
  </Swiper>
    </div>
    </div>

);
};

export default Swiperslider ;