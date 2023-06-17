type Props = {
  isDesktop: boolean;
};

const logoFontStyle = {
  fontSize: "2.5rem",
  fontFamily: "antipol-variable",
  fontVariationSettings: "'wdth' 100, 'wght' 95, 'STCH' 70",
};

const Top = (props: Props) => {
  return (
    <section
      className={`relative h-top w-full  ${
        props.isDesktop && "grid grid-cols-top gap-3"
      } `}
    >
      <div className="absolute right-0 top-0 z-10 grid h-full w-full place-items-center">
        <h1
          className="relative text-center text-bg-white after:absolute after:-bottom-5 after:right-1/2 after:translate-x-1/2 after:font-body after:text-xl after:tracking-widest after:text-blue after:content-['catch-copy'] "
          style={logoFontStyle}
        >
          Petit Cake
        </h1>
      </div>
      {props.isDesktop && (
        <div className="h-full bg-top1 bg-cover bg-no-repeat "></div>
      )}
      <div className="h-full bg-top2 bg-cover bg-no-repeat brightness-90"></div>

      {props.isDesktop && (
        <div className="h-full bg-top3 bg-cover bg-no-repeat "></div>
      )}
    </section>
  );
};

export default Top;
