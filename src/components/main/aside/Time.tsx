import React from "react";
import Title from "../Title";
import { useTitleScript } from "../../../scripts/Title";

type Props = {
  lang: number;
  isDesktop: boolean;
};
const Time = (props: Props) => {
  const title = useTitleScript();

  return (
    <section className="border border-teal-500">
      <Title title={title.time[props.lang]} />
      <p>Time</p>
    </section>
  );
};

export default Time;
