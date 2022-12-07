import { Carousel } from "./Carousel";
import { Product } from "./Product";

export const Body = () => {
  return (
    <div className=" flex flex-col w-full">
      <div className=" grid h-100 card bg-base-300 rounded-box place-items-center">
        <Carousel></Carousel>
      </div>
      <div className="divider"></div>
      <div className="grid h-70 card bg-base-300 rounded-box place-items-center">
        <Product></Product>
      </div>
      <div className="divider"></div>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        content3
      </div>
      <div className="divider"></div>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        content4
      </div>
      <div className="divider"></div>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        content5
      </div>
    </div>
  );
};
