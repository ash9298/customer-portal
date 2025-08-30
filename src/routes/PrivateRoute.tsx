import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { checkAuth } from "../store/authSlice";
import { type AppDispatch, type RootState } from "../store";
import { CircularProgress, Box } from "@mui/material";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { user, isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth
  );
  useEffect(() => {
    if (!user) {
      dispatch(checkAuth());
    }
  }, [dispatch, user]);

  if (loading) {
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
