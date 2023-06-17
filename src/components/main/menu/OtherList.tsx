import type { FC } from "react";
import OtherItem from "./OtherItme";

type Props = {
  name: string;
};
const OtherList: FC<Props> = ({ name }) => {
  return (
    <section className="w-otherMenu border border-teal-500">
      <p>{name}</p>
      <OtherItem />
    </section>
  );
};

export default OtherList;
