import type { FC } from "react";
import OtherItem from "./OtherItme";
import { useTitleScript } from "../../../scripts/Title";
import Title from "../Title";

type Props = {
  name: string;
  lang: number;
};
const OtherList = (props: Props) => {
  const title = useTitleScript();

  return (
    <section className="w-otherMenu border border-teal-500">
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
