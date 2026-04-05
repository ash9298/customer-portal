import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { type RootState } from "../store";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { inProgress } = useMsal();
  const isMsalAuthenticated = useIsAuthenticated();
  const isStoreAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (inProgress !== InteractionStatus.None) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return isMsalAuthenticated || isStoreAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
