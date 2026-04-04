import React, { type ReactNode } from "react";
import Logo from "../layouts/Logo";
import { Container, Paper, Typography, Box } from "@mui/material";
import { darkTokens } from "../../ui/theme";

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
        sx={{
          p: 4,
          borderRadius: 2,
          width: "100%",
          textAlign: "center",
          backgroundColor: darkTokens.background.surface,
          border: `1px solid ${darkTokens.border.default}`,
          color: darkTokens.text.primary,
          boxShadow: darkTokens.overlay.shadowStrong,
        }}
      >
        <Logo />

        <Typography
          variant="h6"
          fontWeight={550}
          color={darkTokens.text.primary}
          gutterBottom
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography variant="body2" color={darkTokens.text.secondary} mb={3}>
            {subtitle}
          </Typography>
        )}

        <Box>{children}</Box>
      </Paper>
    </Container>
  );
};

export default AuthLayout;
