export interface resourcesLink {
  title: string;
  href: string;
  star?: "*";
}
export const computerScienceLinks: resourcesLink[] = [
  {
    title: "Harvard University's CS50",
    href: "https://cs50.harvard.edu/x/2023/",
    star: "*",
  },
];
export const cssAndHtmlLinks: resourcesLink[] = [
  {
    title: "W3 Schools CSS tutorial",
    href: "https://www.w3schools.com/css/default.asp",
  },
  {
    title: "W3 Schools HTML tutorial",
    href: "https://www.w3schools.com/html/default.asp",
  },
  {
    title: "freeCodeCamp - Responsive Web Design",
    href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
  },
  { title: "CSS-Tricks", href: "https://css-tricks.com/guides/" },
  { title: "CSSBattle", href: "https://cssbattle.dev/", star: "*" },
];
export const javaScriptLinks: resourcesLink[] = [
  {
    title: "freeCodeCamp - JavaScript Algorithms and Data Structures",
    href: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
  },
  {
    title: "Eloquent JavaScript",
    href: "https://eloquentjavascript.net/",
    star: "*",
  },

  {
    title: "The TypeScript Handbook",
    href: "https://www.typescriptlang.org/docs/handbook/intro.html",
  },
  {
    title: "Microsoft's TypeScript learning path",
    href: "https://learn.microsoft.com/en-us/training/paths/build-javascript-applications-typescript/",
    star: "*",
  },
];
