import { Navigate, Route, Routes } from "react-router-dom";
import Appwrapper from "./layout/Appwrapper";
import AppOutlet from "./layout/AppOutlet";
import { paths } from "./routes/paths";
import routes from "./routes";
import { Suspense } from "react";
import Preloader from "./components/preloader/Preloader";
import PublicOutlet from "./layout/guard/public/PublicOutlet";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Subscription from "./views/subscription/Subscription";


export default function App() {

  return (
    <>
      <Appwrapper>
        <Routes>
          <Route element={<AppOutlet />}>
            <Route index element={<Navigate to={paths.DASHBOARD} />} />
            {routes.map(({ component: Component, path }) => (
              <Route
                path={path}
                key={path}
                element={
                  <Suspense fallback={<Preloader />}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
          </Route>

          <Route element={<PublicOutlet />}>
            <Route index element={<Navigate to={paths.LOGIN} />} />
            <Route
              path={paths.LOGIN}
              element={
                <Suspense fallback={<Preloader />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path={paths.REGISTER}
              element={
                <Suspense fallback={<Preloader />}>
                  <Register />
                </Suspense>
              }
            />
          </Route>

          <Route
            path={paths.SUBSCRIPTION}
            element={
              <Suspense fallback={<Preloader />}>
                <Subscription />
              </Suspense>
            }
          />
        </Routes>
      </Appwrapper>
    </>
  );
}