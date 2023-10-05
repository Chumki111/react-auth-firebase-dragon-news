import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins px-2">
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default MainLayout;