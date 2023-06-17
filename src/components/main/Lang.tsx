type Props = {
  lang: number;
  changeLang: (lang: number) => void;
};

const Lang = ({ lang, changeLang }: Props) => {
  return (
    <div className="fixed right-0 top-0 z-10 flex h-10 items-center justify-between px-5 font-body font-light text-bk transition">
      <p
        className={
          lang === 0 ? "font-medium text-blue opacity-100" : "opacity-40"
        }
        onClick={() => changeLang(0)}
      >
        JP
      </p>
      <p className="px-1 opacity-60">/</p>
      <p
        className={
          lang === 1 ? "font-medium text-blue opacity-100" : "opacity-40"
        }
        onClick={() => changeLang(1)}
      >
        EN
      </p>
    </div>
  );
};

export default Lang;
