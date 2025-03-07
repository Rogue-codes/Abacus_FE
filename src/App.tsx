import { Navigate, Route, Routes } from "react-router-dom"
import Appwrapper from "./layout/Appwrapper"
import Login from "./views/auth/Login"
import { paths } from "./routes/paths"
import routes from "./routes"
import { Suspense } from "react"
import Preloader from "./components/preloader/Preloader"
import PublicOutlet from "./layout/guard/public/PublicOutlet"
import AppOutlet from "./layout/AppOutlet"


function App() {

  return (
    <main>
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
          </Route>
        </Routes>
      </Appwrapper>
    </main>
  )
}

export default App
