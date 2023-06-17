import React from "react";
import Title from "../Title";
import { useTitleScript } from "../../../scripts/Title";

type Props = {
  lang: number;
};
const Size = (props: Props) => {
  const title = useTitleScript();

  return (
    <section className="border border-teal-500">
      <Title title={title.size[props.lang]} />
      <p>size</p>
    </section>
  );
};

export default Size;
