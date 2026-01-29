import React from "react";
import { Typography } from "@mui/material";
import Addon from "../components/addons";

const Addons = () => (
  <>
    <Typography variant="h1" sx={{ fontSize: "1.5rem", mb: 2 }}>
      Add-ons
    </Typography>
    <Addon />
  </>
);

export default Addons;
