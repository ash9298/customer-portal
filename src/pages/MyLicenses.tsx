import React from "react";
import Licenses from "../components/licenses";
import { Typography } from "@mui/material";

const MyLicenses: React.FC = () => (
  <>
    <Typography variant="h1" sx={{ fontSize: "1.5rem", mb: 2 }}>
      Licenses
    </Typography>
    <Licenses />
  </>
);

export default MyLicenses;
