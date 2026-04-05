import React from "react";
import { Box, Typography } from "@mui/material";
import { darkTokens } from "../ui/theme";

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 550,
          color: darkTokens.text.primary,
          mb: 1,
        }}
      >
        404
      </Typography>
      <Typography sx={{ fontSize: "14px", color: darkTokens.text.secondary }}>
        The page you are looking for does not exist.
      </Typography>
    </Box>
  );
};

export default NotFound;
