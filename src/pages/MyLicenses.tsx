import React from "react";
import Licenses from "../components/licenses";
import { Typography } from "@mui/material";
import { darkTokens } from "../ui/theme";

const MyLicenses: React.FC = () => (
  <>
    <Typography
      variant="h1"
      sx={{
        fontSize: "20px",
        fontWeight: 550,
        lineHeight: "30px",
        mb: 2,
        color: darkTokens.text.primary,
      }}
    >
      Licenses
    </Typography>
    <Licenses />
  </>
);

export default MyLicenses;
