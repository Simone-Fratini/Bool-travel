import HeaderComponent from "./HeaderComponet"
import FooterComponent from "./FooterComponent"
import { Outlet } from "react-router-dom"

export default DefaultLayout(){

    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponennt />
        </>
    )
}