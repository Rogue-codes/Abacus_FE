import { Outlet } from "react-router-dom";
import AuthGuard from "./guard/Authguard";

const AppOutlet = () => {
    return (
        <AuthGuard>
            {/* <DashboardLayout> */}
            <div>
                <Outlet />

            </div>
            {/* </DashboardLayout> */}
        </AuthGuard>
    );
};

export default AppOutlet;