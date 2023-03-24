import m from "mithril"


export const about = {
    view: function () {
        return m("main", { class: "animate__animated animate__fadeIn" }, [
            m("h2", "About Me"),
            m("div", [
                m("p", "I am a computer-science graduate from Toronto Metropolitan University (formerly Ryerson University).")
            ]),
            m("div", [
                m("p", "I like to build software and play video games.")
            ])
        ])
    }
}