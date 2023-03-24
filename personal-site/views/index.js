import m from "mithril"

import imgURL from "../src/profile-picture.jpg";


export const index = {
    view: function () {
        return m("main", { class: "animate__animated animate__fadeIn" },
            m("img", { src: imgURL }),
            m("h1", "Aidan Buchanan"),
        )
    }
}