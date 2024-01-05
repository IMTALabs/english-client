

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`
import help from "../assets/help_icon.svg"
import listening from "../assets/listening_icon.svg"
import speaking from "../assets/speaking_icon.svg"
import reading from "../assets/reading_icon.svg"
import writing from "../assets/writing_icon.svg"

const routes = [
    {
        submenu: "",
        path: "listening",
        name: "Listening",
        icon: listening
    },
    {
        submenu: "",
        path: "reading",
        name: "Reading",
        icon: reading
    },
    {
        submenu: "",
        path: "writing",
        name: "Writing",
        icon: writing
    },
    {
        submenu: "",
        path: "speaking",
        name: "Speaking",
        icon: speaking
    },
    {
        submenu: "",
        path: "help",
        name: "Help",
        icon: help
    }
]
export default routes;