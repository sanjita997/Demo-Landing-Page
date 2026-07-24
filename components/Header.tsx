import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="header" aria-label="Site header">
      <div className="shell header-inner">
        <div className="logo-wrap">
          <img
            className="logo"
            src="/images/techverse-sanjita-logo-transparent.png"
            alt="TechVerse Sanjita"
            width={1752}
            height={897}
          />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
