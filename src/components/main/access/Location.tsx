import React from "react";
import { useTitleScript } from "../../../scripts/Title";
import Title from "../Title";

type Props = {
  lang: number;
  isDesktop: boolean;
};

const Location = (props: Props) => {
  const title = useTitleScript();

  return (
    <section
      className={`${
        props.isDesktop ? "w-otherMenu" : "mb-4 w-full"
      } h-52 border border-teal-500`}
    >
      <Title title={title.location[props.lang]} />
    </section>
  );
};

export default Location;
