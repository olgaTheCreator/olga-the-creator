"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navRoutes } from "../navRoutes";

export const Navbar = () => {
  const pathname = usePathname();
  const activeLink =
    "h-24 w-full flex place-items-center justify-center p-6 rounded-t-xl border-x-4 border-t-4 border-black";
  const navStyle =
    "h-20 w-full flex place-items-center justify-center p-6  border-t-2 border-b-4 border-x border-black relative";
  return (
    <div className="w-full flex">
      <div className="basis-2/3 lg:grid lg:grid-cols-4 place-items-end text-5xl relative">
        {navRoutes.map((link) => {
          const isActive = pathname.startsWith(link.path);

          return (
            <Link
              className={isActive ? "text-blue" : "text-black"}
              href={link.path}
              key={link.title}
            >
              {link.title}
            </Link>
          );
        })}
        {/* <Link
          href="/about"
          className={({ isActive }) =>
            isActive
              ? `${activeLink} bg-yellow_bright`
              : `${navStyle} bg-yellow_light border-l-2 rounded-tl-xl`
          }
        >
          <button className="">about me</button>
        </Link>
        <Link
          href="/resources"
          className={({ isActive }) =>
            isActive
              ? `${activeLink} bg-red_bright`
              : `${navStyle} bg-red_light`
          }
        >
          <button>portfolio</button>
        </Link>
        <Link
          href="/projects"
          className={({ isActive }) =>
            isActive
              ? `${activeLink} bg-blue_bright`
              : `${navStyle} bg-blue_light`
          }
        >
          <button>resources</button>
        </Link>
        <Link
          href="/contact"
          className={({ isActive }) =>
            isActive
              ? `${activeLink} bg-green_bright`
              : `${navStyle} bg-green_light rounded-tr-xl`
          }
        >
          <button>contact</button>
        </Link> */}
      </div>
      <div className="h-24 w-full basis-1/3 border-b-4 border-black"></div>
    </div>
  );
};
