/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { paths } from "../../../routes/paths";
interface IPublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: IPublicRouteProps) => {
  const isAuthenticated = useSelector(
    (state: any) => state?.auth?.isAuthenticated
  );

  console.log("isAuthenticated:",isAuthenticated)

  if (!isAuthenticated) {
    return children;
  }

  return (
    <Navigate
      to={paths.DASHBOARD}
      state={{ expired: true }}
    />
  );
};

export default PublicRoute;