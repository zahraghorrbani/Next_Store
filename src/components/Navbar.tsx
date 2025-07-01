"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const navlinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/store",
      title: "Store",
    },
  ];

  return (
    <nav className="shadow p-4">
      {navlinks.map((link) => (
        <Link
          key={link.href}
          className={`mr-4 ${pathname === link.href ? "text-sky-500" : ""}`}
          href={link.href}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
