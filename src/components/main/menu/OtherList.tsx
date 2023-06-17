import type { FC } from "react";
import OtherItem from "./OtherItme";
import { useTitleScript } from "../../../scripts/Title";
import Title from "../Title";

type Props = {
  name: string;
  lang: number;
  isDesktop: boolean;
};
const OtherList = (props: Props) => {
  const title = useTitleScript();

  return (
    <section
      className={`${
        props.isDesktop ? "w-otherMenu" : "mb-4 w-full"
      } h-52 border border-teal-500`}
    >
      <Title
        title={
          props.name === "drink"
            ? title.drinks[props.lang]
            : title.other[props.lang]
        }
      />
      <OtherItem />
    </section>
  );
};

export default OtherList;
