import { Outlet } from "react-router-dom";
import Header from "../../components/sections/header";

const Layout = () => {
    return ( 
        <div className="relative">
            <Header />
            <Outlet />
        </div>
     );
}

export default Layout;