"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

function Navbar() {
  const pathname = usePathname();

  const navlinks = [
    {
      href: "/",
      title: "خانه",
    },
    {
      href: "/store",
      title: "فروشگاه",
    },
  ];

  return (
    <nav className="shadow p-4">
      <Container>
       <div className="flex flex-row-reverse">
         {navlinks.map((link) => (
          <Link
            key={link.href}
            className={`mr-4 ${pathname === link.href ? "text-sky-500" : ""}`}
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
       </div>
      </Container>
    </nav>
  );
}

export default Navbar;
