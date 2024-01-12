import { Icon } from "src/assets/icon";


const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`


const routes = [
    {
        submenu: "",
        path: "listening",
        name: "Listening",
        icon: Icon("listening")
    },
    {
        submenu: "",
        path: "reading",
        name: "Reading",
        icon: Icon("reading")
    },
    {
        submenu: "",
        path: "writing",
        name: "Writing",
        icon: Icon("writing")
    },
    {
        submenu: "",
        path: "speaking",
        name: "Speaking",
        icon: Icon("speaking")
    }
]

export default routes;