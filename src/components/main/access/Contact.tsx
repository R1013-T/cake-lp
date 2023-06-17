import React from "react";
import Title from "../Title";
import { useTitleScript } from "../../../scripts/Title";

type Props = {
  lang: number;
  isDesktop: boolean;
};
const Contact = (props: Props) => {
  const title = useTitleScript();

  return (
    <section
      className={`${
        props.isDesktop ? "w-otherMenu" : "mb-4 w-full"
      } h-52 border border-teal-500`}
    >
      <Title title={title.contact[props.lang]} />
    </section>
  );
};

export default Contact;
