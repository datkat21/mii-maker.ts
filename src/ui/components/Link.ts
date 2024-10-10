import Html from "@datkat21/html";

export const Link = (name: string, link: string) =>
  new Html("a").attr({ href: link }).text(name);
