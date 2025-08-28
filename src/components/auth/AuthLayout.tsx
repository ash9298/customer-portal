import React, { type ReactNode } from "react";
import Logo from "../layouts/Logo";
import { Container, Paper, Typography, Box } from "@mui/material";

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "center", mt: 6 }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 3, width: "100%", textAlign: "center" }}
      >
        <Logo />

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        {subtitle && (
          <Typography variant="body2" color="text.secondary" mb={3}>
            {subtitle}
          </Typography>
        )}

        <Box>{children}</Box>
      </Paper>
    </Container>
  );
};

export default AuthLayout;
