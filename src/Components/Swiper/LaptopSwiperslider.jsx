
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import un_4 from '/Images/Untitled-4.png'
import un_5 from '/Images/Untitled-5.png'
import un_6 from '/Images/Untitled-6.png'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const LaptopSwiperslider = () => {
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
       
        <SwiperSlide><img src={un_4} alt="" style={{width:"100%", height:"700px"}} /></SwiperSlide>
        <SwiperSlide><img src={un_5} alt="" style={{width:"100%", height:"700px"}}/></SwiperSlide>
        <SwiperSlide><img src={un_6} alt="" style={{width:"100%", height:"700px"}}/></SwiperSlide>
        {/* <SwiperSlide><img src={un_4} alt="" style={{width:"100%", height:"700px"}}/></SwiperSlide> */}
        
      </Swiper>
        </div>
        </div>
    
    );}

export default LaptopSwiperslider;