"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navRoutes } from "./navRoutes";

export const Navbar = () => {
  const pathname = usePathname();
  const activeLink =
    "h-14 md:h-16 lg:h-24 col-span-2 md:col-span-1 text-4xl p-2 w-full flex place-items-center justify-center lg:p-6 rounded-t-xl border-x-4 border-t-4 border-black lg:text-6xl";
  const navStyle =
    "h-12 md:h-14 lg:h-20 w-full p-2 flex place-items-center justify-center lg:p-6  border-t-2 border-b-4 border-x border-black relative ";
  return (
    <div className="w-full flex font-vibur">
      <div className="md:basis-4/5 lg:basis-2/3 basis-full grid md:grid-cols-4 grid-cols-5 place-items-end lg:text-5xl relative md:text-3xl text-2xl">
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
              <span
                className={
                  !isActive ? "invisible md:visible w-0 md:w-full" : ""
                }
              >
                {link.title}
              </span>
              <span
                className={
                  !isActive
                    ? "visible md:invisible w-full md:w-0 text-center"
                    : "invisible"
                }
              >
                {link.shortTitle}
              </span>
            </Link>
          );
        })}
      </div>
      <div className=" invisible basis-0 md:basis-1/5  md:visible lg:h-24 w-full lg:basis-1/3 border-b-4 border-black"></div>
    </div>
  );
};
