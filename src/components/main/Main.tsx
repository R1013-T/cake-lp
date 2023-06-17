import Top from "./Top";
import Time from "./aside/Time";
import Size from "./aside/Size";
import CakeList from "./menu/CakeList";
import OtherList from "./menu/OtherList";
import { useEffect, useState } from "react";
import Lang from "./Lang";
import Location from "./access/Location";
import Contact from "./access/Contact";

const Main = () => {
  const [lang, setLang] = useState(0);
  const [width, setWidth] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const changeLang = (lang: number): void => {
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
      {isDesktop ? (
        <article className="my-3 grid w-full grid-cols-main gap-3">
          <aside className="flex flex-col justify-between">
            <Time lang={lang} isDesktop={isDesktop} />
            <Size lang={lang} isDesktop={isDesktop} innerWidth={width} />
          </aside>
          <CakeList lang={lang} isDesktop={isDesktop} />
        </article>
      ) : (
        <article className="my-3 w-full">
          <aside className="mb-3">
            <Time lang={lang} isDesktop={isDesktop} />
            <Size lang={lang} isDesktop={isDesktop} innerWidth={width} />
          </aside>
          <CakeList lang={lang} isDesktop={isDesktop} />
        </article>
      )}
      <article className="mb-3 flex justify-between">
        <OtherList name="drink" lang={lang} />
        <OtherList name="other" lang={lang} />
      </article>
      <article className="flex justify-between">
        <Location lang={lang} />
        <Contact lang={lang} />
      </article>
    </main>
  );
};

export default Main;
