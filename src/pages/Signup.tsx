import React from "react";
import { Box } from "@mui/material";
import SignupForm from "../components/auth/SignupForm";
import { darkTokens } from "../ui/theme";

const Signup: React.FC = () => (
  <Box
    sx={{
      minHeight: "100vh",
      backgroundColor: darkTokens.background.surface,
      py: 1,
    }}
  >
    <SignupForm />
  </Box>
);

export default Signup;
