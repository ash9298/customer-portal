import { Box, CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";
import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
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
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
