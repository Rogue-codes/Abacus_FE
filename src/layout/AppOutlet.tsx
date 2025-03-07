import { Outlet } from "react-router-dom";
import AuthGuard from "./guard/Authguard";
import DashboardLayout from "./DashboardLayout";

const AppOutlet = () => {
    return (
        <AuthGuard>
            <DashboardLayout>
                <Outlet />
            </DashboardLayout>
        </AuthGuard>
    );
};

export default AppOutlet;