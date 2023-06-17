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
        <h1 className="text-center text-bg-white" style={logoFontStyle}>
          Petit Cake
        </h1>
      </div>
      {props.isDesktop && (
        <div className="h-full border border-teal-500 bg-top1 bg-cover bg-no-repeat brightness-50"></div>
      )}
      <div className="h-full border border-teal-500 bg-top2 bg-cover bg-no-repeat brightness-50"></div>

      {props.isDesktop && (
        <div className="h-full border border-teal-500 bg-top3 bg-cover bg-no-repeat brightness-50"></div>
      )}
    </section>
  );
};

export default Top;
