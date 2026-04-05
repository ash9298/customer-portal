import { Box, CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";
import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useSelector } from "react-redux";
import { type RootState } from "../store";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { inProgress } = useMsal();
  const isMsalAuthenticated = useIsAuthenticated();
  const isStoreAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const isStoreLoading = useSelector((state: RootState) => state.auth.loading);

  if (inProgress !== InteractionStatus.None || isStoreLoading) {
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
    <Navigate to="/dashboard" replace />
  ) : (
    children
  );
};

export default PublicRoute;
