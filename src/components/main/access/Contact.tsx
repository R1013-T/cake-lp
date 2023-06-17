import React from "react";
import Title from "../Title";
import { useTitleScript } from "../../../scripts/Title";

type Props = {
  lang: number;
};
const Contact = (props: Props) => {
  const title = useTitleScript();

  return (
    <section className="w-otherMenu border border-teal-500">
      <Title title={title.contact[props.lang]} />
    </section>
  );
};

export default Contact;
