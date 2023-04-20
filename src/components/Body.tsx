import { Product } from "./Product";
import { WeatherTable } from "./WeatherTable";

type NameProps = {
  name: string;
};

export const Body = (props: NameProps) => {
  return (
    <div className=" flex flex-col w-full">
      <div className=" grid h-100 card bg-base-300 rounded-box place-items-center">
        <WeatherTable></WeatherTable>
      </div>
      <div className="divider"></div>
      <div className="grid h-70 card bg-base-300 rounded-box place-items-center">
        <Product></Product>
      </div>
      <div className="divider"></div>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        {props.name}
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
