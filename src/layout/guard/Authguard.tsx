/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { paths } from "../../routes/paths";

interface IAuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: IAuthGuardProps) => {
  const isAuthenticated = useSelector(
    (state: any) => state?.auth?.isAuthenticated
  );
  if (isAuthenticated) {
    return children;
  }

  return <Navigate to={paths.LOGIN} state={{ expired: true }} />;
};

export default AuthGuard;