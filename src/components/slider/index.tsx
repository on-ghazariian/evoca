import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../../lib/firebase'; // Քո firebase.ts ֆայլի ճանապարհը
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper ոճերը
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Տիպի սահմանում ըստ քո տվյալների բազայի
interface SlideData {
  backgroundColor: string;
  body: string;
  img: string;
  title: string;
  url: string;
}

const EvocaSlider: React.FC = () => {
  const [slides, setSlides] = useState<SlideData[]>([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const slidesRef = ref(db, 'slides');
      const snapshot = await get(slidesRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Մաքրում ենք հնարավոր null արժեքները զանգվածից
        const formattedSlides = Array.isArray(data) 
            ? data.filter((item) => item !== null) 
            : Object.values(data);
            
        setSlides(formattedSlides as SlideData[]);
      }
    };

    fetchSlides();
  }, []);

  if (slides.length === 0) {
    return <div className="w-full h-[400px] flex items-center justify-center">Բեռնվում է...</div>;
  }

  return (
    <div className="w-full relative group">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[550px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Ֆոնի գույնը վերցվում է բազայից */}
            <div
              className=" rounded-bl-[100px] w-full h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-10"
              style={{ backgroundColor: slide.backgroundColor }}
            >
              {/* Ձախ մաս (Տեքստ և Կոճակ) */}
              <div  className="flex flex-col items-start justify-center max-w-xl space-y-6 z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-[#3d2c5e] leading-tight font-sans">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 font-medium">
                  {slide.body}
                </p>
                <a
                  href={slide.url}
                  className="mt-4 bg-[#5600e3] hover:bg-[#4300b0] text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 shadow-md"
                >
                  Ծանոթանալ պայմաններին
                </a>
              </div>

              {/* Աջ մաս (Նկար) */}
              <div className="h-full w-full md:w-1/2 flex items-center justify-end relative mt-8 md:mt-0">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="max-h-[90%] md:max-h-full object-contain  relative z-10"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS Swiper-ի ներքևի սլաքների և կետերի ոճավորման համար (համապատասխանեցված դիզայնին) */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #5600e3 !important;
          transform: scale(0.6);
          top: 90%;
        }
        .swiper-pagination-bullet {
          background-color: #5600e3 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default EvocaSlider;