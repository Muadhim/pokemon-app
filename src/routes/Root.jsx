import { Outlet } from "react-router"
import MainNav from "./mainNav/MainNav"

const Root = () => {
    return(
        <>
            <MainNav />
            <Outlet />
        </>
    )
}

export default Root