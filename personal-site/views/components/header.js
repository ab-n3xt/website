import m, { route } from "mithril"


export const header = {
  view: function() {
    return m("header", [
      // m("img.logo", {src: Logo}),
      m("nav", [
        m(route.Link, {href: "/"}, "Home"),
        m(route.Link, {href: "/about"} , "About Me"),
        m(route.Link, {href: "/projects"} , "Projects"),
      ]),
    //   m("img.hamburger.animate__animated", {
    //     onclick: () => { document.querySelector("nav").classList.toggle("active") },
    //     src: Hamburger
    //   }, "click me!")
    ])
  }
}