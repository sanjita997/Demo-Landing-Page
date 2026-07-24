import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="header" aria-label="Site header">
      <div className="shell header-inner">
        <div className="logo-wrap"><Image className="logo" src="/logo.png" alt="TechVerse Sanjita" width={500} height={500} priority /></div>
        <ThemeToggle />
      </div>
    </header>
  );
}
