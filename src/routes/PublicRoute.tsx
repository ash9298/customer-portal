import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { type RootState } from "../store";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
