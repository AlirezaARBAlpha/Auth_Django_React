import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({outlet}: ProtectedRouteProps) {
  const auth = useSelector((state: RootState) => state.auth);

  if(auth.account) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: '/login' }} />;
  }
};