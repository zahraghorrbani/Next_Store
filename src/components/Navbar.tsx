"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

function Navbar() {
  const pathname = usePathname();
  const {cartTotalQty} = useShoppingCartContext();
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
        <div className="flex flex-row-reverse justify-between">
          <div>
            {navlinks.map((link) => (
              <Link
                key={link.href}
                className={`mr-4 ${
                  pathname === link.href ? "text-sky-500" : ""
                }`}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div>
            <span className="px-2 py-1 bg-red-500 text-white rounded-full">{cartTotalQty}</span>
            <Link href="/cart">سبد خرید</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
