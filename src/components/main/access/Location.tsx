import React from "react";
import { useTitleScript } from "../../../scripts/Title";
import Title from "../Title";

type Props = {
  lang: number;
};

const Location = (props: Props) => {
  const title = useTitleScript();

  return (
    <section className="w-otherMenu border border-teal-500">
      <Title title={title.location[props.lang]} />
    </section>
  );
};

export default Location;
