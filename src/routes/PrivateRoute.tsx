import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Box, CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
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
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
