import React, { useEffect, useState } from "react";
import { useCakeMenuScript } from "../../../scripts/CakesMenu";
import lang from "../Lang";

type Props = {
  cakeNumber: number;
  lang: number;
  isDesktop: boolean;
};
const CakeItem = (props: Props) => {
  const cakeScript = useCakeMenuScript(props.cakeNumber);

  const [cakeName, setCakeName] = useState("");
  const [cakePrice, setCakePrice] = useState("");
  const [cakeDescription, setCakeDescription] = useState("");

  useEffect(() => {
    if (typeof cakeScript === "object") {
      setCakeName(cakeScript.name[props.lang]);
      setCakePrice(cakeScript.price[props.lang]);
      setCakeDescription(cakeScript.description[props.lang]);
    }
  }, [props.lang]);

  // if (typeof cakeScript === "object") {
  return (
    <div className={`py-3 ${props.isDesktop ? "w-52" : "w-28"}`}>
      {typeof cakeScript === "object" ? (
        <>
          <img
            src={`images/cake/${props.cakeNumber}.png`}
            alt={cakeName}
            className={`${props.isDesktop ? "w-48" : "w-28"}`}
          />
          <div className="mt-2 px-2 font-body">
            <div
              className={`tracking-wider ${
                props.isDesktop ? "flex items-end" : ""
              }`}
            >
              <h3 className="translate-y-0.5 text-base font-medium text-bk">
                {cakeName}
              </h3>
              <p className="text-xs opacity-70">
                <span className="mx-1">/</span>
                {cakePrice}
              </p>
            </div>
            <p className="mt-1 text-sm tracking-wide opacity-80">
              {cakeDescription}
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
  // }
};

export default CakeItem;
