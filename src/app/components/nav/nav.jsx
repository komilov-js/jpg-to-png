"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.scss";
import Logo from "./logo-jpg.png";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      <Link href="/" className="logo">
        <Image src={Logo} alt="logo" />
        <div className="text">
          <h2>PixRem</h2>
          <span>Remove BG</span>
        </div>
      </Link>

      {/* Kompyuter menyu */}
      <div className="menu desktop">
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/jpg-png" className={pathname === "/jpg-png" ? "active" : ""}>Convert PDF</Link>
        <Link href="/remove-bg" className={pathname === "/remove-bg" ? "active" : ""}>Remove BG</Link>
      </div>

      {/* Mobil icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Kichkina mobil menyu */}
      {menuOpen && (
        <div className="menu-mobile">
          <Link href="/" onClick={() => setMenuOpen(false)} className={pathname === "/" ? "active" : ""}>Home</Link>
          <Link href="/jpg-png" onClick={() => setMenuOpen(false)} className={pathname === "/jpg-png" ? "active" : ""}>Convert PDF</Link>
          <Link href="/remove-bg" onClick={() => setMenuOpen(false)} className={pathname === "/remove-bg" ? "active" : ""}>Remove BG</Link>
        </div>
      )}
    </div>
  );
}
