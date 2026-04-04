import React from "react";
import { Box } from "@mui/material";
import LoginForm from "../components/auth/LoginForm";
import { darkTokens } from "../ui/theme";

const Login: React.FC = () => (
  <Box
    sx={{
      minHeight: "100vh",
      backgroundColor: darkTokens.background.surface,
      py: 1,
    }}
  >
    <LoginForm />
  </Box>
);

export default Login;
