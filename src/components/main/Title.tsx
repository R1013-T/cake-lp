import React from "react";

type Props = {
  title: string;
};
const MenuTitle = (props: Props) => {
  return (
    <h2 className="w-full pb-2 text-center font-body text-base font-light tracking-widest text-blue">
      {props.title}
    </h2>
  );
};

export default MenuTitle;
