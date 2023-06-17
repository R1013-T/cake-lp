const logoFontStyle = {
  fontSize: "0.5rem",
  fontFamily: "antipol-variable",
  fontVariationSettings: "'wdth' 100, 'wght' 95, 'STCH' 70",
};
const Header = () => {
  return (
    <header className="fixed z-10 flex h-10 w-full items-center justify-between px-5">
      <p className="text-xs text-blue" style={logoFontStyle}>
        Petit Cake
      </p>
    </header>
  );
};

export default Header;
