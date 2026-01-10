import { Carousel } from "antd";
import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/banner (1).jpg";
import banner3 from "../assets/banner (2).jpg";

const banners = [banner1, banner2, banner3];
const Banner = () => {
  return (
    
      <div className="flex w-4/5 gap-1">
        <div className="flex-2 w-3/5">
          <Carousel arrows autoplay autoplaySpeed={1000}>
            {banners.map((banner) => (
              <img src={banner} className="object-cover h-81" />
            ))}
          </Carousel>
        </div>
        <div className="flex-1 flex flex-col gap-1 h-80">
          <img className="h-1/2" src={banner1} />
          <img className="h-1/2" src={banner2} />
        </div>
      </div>
  );
};
export default Banner;
