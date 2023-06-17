import React from "react";
import Title from "../Title";
import { useTitleScript } from "../../../scripts/Title";
import { useTimeScript } from "../../../scripts/Time";

type Props = {
  lang: number;
  isDesktop: boolean;
};
const Time = (props: Props) => {
  const title = useTitleScript();
  const time = useTimeScript();

  return (
    <section className="font-body text-bk">
      <Title title={title.time[props.lang]} />
      <div className="flex w-full flex-wrap justify-around">
        <p
          className={`${
            props.isDesktop ? "w-full" : "w-1/3"
          } mb-3 text-center text-base tracking-wider`}
        >
          {time.weekday.name[props.lang]}
          <span className="mt-1 block text-sm opacity-80">
            {time.weekday.time[props.lang]}
          </span>
        </p>
        <p
          className={`${
            props.isDesktop ? "w-full" : "w-1/3"
          } mb-3 text-center text-base tracking-wider`}
        >
          {time.Sat.name[props.lang]}
          <span className="mt-1 block text-sm opacity-80">
            {time.Sat.time[props.lang]}
          </span>
        </p>
        <p
          className={`${
            props.isDesktop ? "w-full" : "w-1/3"
          } mb-3 text-center text-base tracking-wider`}
        >
          {time.Sun.name[props.lang]}
          <span className="mt-1 block text-sm opacity-80">
            {time.Sun.time[props.lang]}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Time;
