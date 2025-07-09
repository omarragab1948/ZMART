import { Grid } from "@/design-system/components/Grid/Grid";
import { GridItem } from "@/design-system/components/Grid/GridItem";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface IProImagesProps {
  images: string[];
}

const ProductImageGallery = ({ images }: IProImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || "");
  const selectHandler = (img: string) => {
    setSelectedImage(img);
  };

  return (
    <Grid columns={12}>
      <GridItem
        span={12}
        lg={12}
        className="max-w-[360px] h-[290px] md:h-[470px] md:max-w-[460px] rounded-3xl bg-[#F0EEED] mx-auto"
      >
        <img
          src={selectedImage || ""}
          alt="test"
          className="w-full h-full rounded-3xl"
        />
      </GridItem>
      <GridItem
        span={12}
        lg={12}
        className="max-w-[360px] md:max-w-[460px] mx-auto"
      >
        <div className="relative flex justify-center items-center flex-col overflow-hidden ">
          <Swiper
            slidesPerView={5}
            spaceBetween={15}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            className="pb-10"
          >
            {images.map((image, i) => (
              <SwiperSlide key={i} className="!w-20 !h-20">
                <button
                  onClick={() => selectHandler(image)}
                  className={`w-20 h-20 cursor-pointer rounded-2xl  bg-[#F0EEED] ${
                    selectedImage === image ? "border border-black" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className={`aspect-square rounded-2xl w-full h-full object-cover`}
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-pagination flex justify-center mt-4"></div>
        </div>
      </GridItem>
    </Grid>
  );
};

export default ProductImageGallery;
