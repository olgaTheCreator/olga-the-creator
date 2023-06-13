"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navRoutes } from "./navRoutes";

export const Navbar = () => {
  const pathname = usePathname();
  const activeLink =
    "h-24 w-full flex place-items-center justify-center p-6 rounded-t-xl border-x-4 border-t-4 border-black";
  const navStyle =
    "h-20 w-full flex place-items-center justify-center p-6  border-t-2 border-b-4 border-x border-black relative";
  return (
    <div className="w-full flex font-vibur">
      <div className="basis-2/3 lg:grid lg:grid-cols-4 place-items-end text-5xl relative">
        {navRoutes.map((link) => {
          const isActive = pathname.startsWith(link.path);

          return (
            <Link
              className={
                isActive
                  ? activeLink + link.activeStyle
                  : navStyle + link.regularStyle
              }
              href={link.path}
              key={link.title}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className="h-24 w-full basis-1/3 border-b-4 border-black"></div>
    </div>
  );
};
