import CakeItem from "./CakeItem";
import React from "react";
import Title from "../Title";
import { useTitleScript } from "../../../scripts/Title";
import lang from "../Lang";

type Props = {
  lang: number;
  isDesktop: boolean;
};

const CAKE_LIST = [1, 2, 3, 4, 5, 6, 7, 8];
const CakeList = (props: Props) => {
  const title = useTitleScript();

  return (
    <section className="">
      <Title title={title.cakes[props.lang]} />
      <div
        className={`flex flex-wrap ${
          props.isDesktop ? "justify-between" : "justify-between"
        } `}
      >
        {CAKE_LIST.map((cakeNumber) => (
          <>
            <CakeItem
              key={cakeNumber}
              cakeNumber={cakeNumber}
              lang={props.lang}
              isDesktop={props.isDesktop}
            />
          </>
        ))}
        <div className={`${props.isDesktop ? "w-52" : "w-44"}`}></div>
        <div className={`${props.isDesktop ? "w-52" : "w-44"}`}></div>
      </div>
    </section>
  );
};

export default CakeList;
