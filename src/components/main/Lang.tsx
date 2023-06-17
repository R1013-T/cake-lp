type Props = {
  lang: string;
  changeLang: (lang: string) => void;
};

const Lang = ({ lang, changeLang }: Props) => {
  return (
    <div className="fixed right-0 top-0 z-10 flex h-10 items-center justify-between px-5 font-body font-light text-bk transition">
      <p
        className={lang === "jp" ? "opacity-100" : "opacity-40"}
        onClick={() => changeLang("jp")}
      >
        JP
      </p>
      <p className="px-1 opacity-60">/</p>
      <p
        className={lang === "en" ? "opacity-100" : "opacity-40"}
        onClick={() => changeLang("en")}
      >
        EN
      </p>
    </div>
  );
};

export default Lang;
