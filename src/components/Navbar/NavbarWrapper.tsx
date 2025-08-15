const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="c-navigation stack">
      <div className="c-navigation__container row">
        <a
          href="../index.html"
          aria-label="Ir para home"
          className="c-navigation__logo"
        >
          <img src="../assets/images/LogomarcaWhite.svg" alt="" />
          <strong>Ajuda HC</strong>
        </a>
        {children}
      </div>
    </header>
  );
};

export { NavbarWrapper };
