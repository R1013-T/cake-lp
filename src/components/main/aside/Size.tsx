import React, { useEffect, useState } from "react";
import Title from "../Title";
import { useTitleScript } from "../../../scripts/Title";
import { useSizeScript } from "../../../scripts/Size";

type Props = {
  lang: number;
  isDesktop: boolean;
  innerWidth: number;
};

const Size = (props: Props) => {
  const title = useTitleScript();
  const size = useSizeScript();

  const [boxWidth, setBoxWidth] = useState(props.innerWidth / 4);
  const boxStyle = {
    width: boxWidth,
    height: boxWidth,
  };

  useEffect(() => {
    console.log(props.innerWidth);
    setBoxWidth(props.innerWidth / 4);
  }, [props.innerWidth]);

  return (
    <section className={`${props.isDesktop ? "" : "mt-4"}`}>
      <Title title={title.size[props.lang]} />
      {props.isDesktop ? (
        <div className="flex flex-wrap">
          <div className="mb-3 flex w-full flex-wrap justify-center text-bk">
            <img src="/images/cake.svg" className="w-3/6" alt="" />
            <p className="w-full text-center text-base">
              {size.large[props.lang]}
            </p>
            <p className="w-full text-center text-sm opacity-80">
              150mm × 150mm
            </p>
          </div>
          <div className="mb-3 flex w-full flex-wrap justify-center text-bk">
            <img src="/images/cake.svg" className="w-2/6" alt="" />
            <p className="w-full text-center text-base">
              {size.medium[props.lang]}
            </p>
            <p className="w-full text-center text-sm opacity-80">
              120mm × 120mm
            </p>
          </div>
          <div className="flex w-full flex-wrap justify-center text-bk">
            <img src="/images/cake.svg" className="w-1/6" alt="" />
            <p className="w-full text-center text-base">
              {size.small[props.lang]}
            </p>
            <p className="w-full text-center text-sm opacity-80">80mm × 80mm</p>
          </div>
        </div>
      ) : (
        <div className="flex w-full -translate-y-6 justify-center">
          <div className="relative" style={boxStyle}>
            <div className={`grid place-items-center`} style={boxStyle}>
              <img src="/images/cake.svg" className="w-4/6" alt="" />
            </div>
            <div className="absolute -bottom-4 right-0 w-full text-center">
              <p className="text-xs opacity-80">
                150mm <span className="-my-1 block">×</span> 150mm
              </p>
            </div>
          </div>
          <div className="relative" style={boxStyle}>
            <div className={`grid place-items-center`} style={boxStyle}>
              <img src="/images/cake.svg" className="w-3/6" alt="" />
            </div>
            <div className="absolute -bottom-4 right-0 w-full text-center">
              <p className="text-xs opacity-80">
                120mm <span className="-my-1 block">×</span> 120mm
              </p>
            </div>
          </div>
          <div className="relative" style={boxStyle}>
            <div className={`grid place-items-center`} style={boxStyle}>
              <img src="/images/cake.svg" className="w-2/6" alt="" />
            </div>
            <div className="absolute -bottom-4 right-0 w-full text-center">
              <p className="text-xs opacity-80">
                80mm <span className="-my-1 block">×</span> 80mm
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Size;
