import Top from "./Top";
import Time from "./aside/Time";
import Size from "./aside/Size";
import CakeList from "./menu/CakeList";
import OtherList from "./menu/OtherList";
import { useEffect, useState } from "react";
import Lang from "./Lang";

const Main = () => {
  const [lang, setLang] = useState("en");
  const [width, setWidth] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const changeLang = (lang: string): void => {
    setLang(lang);
  };

  useEffect(() => {
    const updateSize = (): void => {
      setWidth(window.innerWidth);
    };
    updateSize();

    window.addEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (width > 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [width]);

  return (
    <main className="p-5 pt-10">
      <Lang lang={lang} changeLang={changeLang} />
      <Top isDesktop={isDesktop} />
      <article className="my-3 grid w-full grid-cols-main gap-3">
        <aside className="flex flex-col justify-between">
          <Time />
          <Size />
        </aside>
        <CakeList />
      </article>
      <article className="flex justify-between">
        <OtherList name="drink" />
        <OtherList name="food" />
      </article>
    </main>
  );
};

export default Main;
