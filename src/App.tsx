import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { paths } from "./routes/paths";
import PublicRoute from "./layout/guard/public/PublicRoute";
import AuthGuard from "./layout/guard/Authguard";
import Login from "./views/auth/Login";
import Home from "./views/home/Home";
import AppOutlet from "./layout/AppOutlet";
import Invemtory from "./views/inventory/Inventory";
import Invoice from "./views/invoice/Invoice";
import Wallet from "./views/wallet/Wallet";
import Settings from "./views/settings/Settings";
import Customers from "./views/customers/Customers";
import Reporting from "./views/reporting/Reporting";
import Profile from "./views/profile/Profile";
import Appwrapper from "./layout/Appwrapper";

const AppRoutes = () => {
  return (
    <Appwrapper>
    <Routes>
       <Route path={paths.DASHBOARD} element={<AppOutlet />}>
          <Route index element={<Home />} />  {/* Dashboard Home */}

          {/* ✅ Use relative paths for child routes */}
          <Route path="inventory" element={<Invemtory />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="settings" element={<Settings />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reporting" element={<Reporting />} />
          <Route path="profile" element={<Profile />} />
        </Route>
    </Routes>
    </Appwrapper>
  );
};

export default AppRoutes;