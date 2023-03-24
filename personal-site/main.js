// index.js
import m, { route } from "mithril";

import { header } from "./views/components/header";
import { footer } from "./views/components/footer";
import { index } from "./views/index";
import { about } from "./views/about";
import { projects } from "./views/projects";

import './style.css';

const template = {
    view: function (vnode) {
        return [
            m(header),
            vnode.children,
            m(footer)
        ]
    }
}

const pageIndex = { view: () => { return m(template, m(index)); } }
const pageAbout = { view: () => { return m(template, m(about)); } }
const pageProjects = { view: () => { return m(template, m(projects)); } }

var root = document.body

route.prefix = '' // Removes #! from URL

route(root, "/", {
    "/": {
        render: function () {
            document.title = "Aidan Buchanan - Home"
            return m(pageIndex)
        }
    },
    "/about": {
        render: function () {
            document.title = "Aidan Buchanan - About Me"
            return m(pageAbout)
        }
    },
    "/projects": {
        render: function () {
            document.title = "Aidan Buchanan - Projects"
            return m(pageProjects)
        }
    }
})