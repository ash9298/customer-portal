import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
