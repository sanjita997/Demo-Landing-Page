import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="header" aria-label="Site header">
      <div className="shell header-inner">
        <div className="logo-wrap">
          <img
            className="logo"
            src="/images/techverse-sanjita-logo-original.png"
            alt="TechVerse Sanjita"
            width={699}
            height={357}
          />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
