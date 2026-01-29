import { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  Stack,
  Divider,
} from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const tabMap = ["licenses", "user-activity", "test-results", "leapwork-usage"];
const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = tabMap.findIndex((t) => location.pathname.endsWith(t));

  const tabIndex = currentTab === -1 ? 0 : currentTab;

  const handleChange = (_, newValue) => {
    navigate(`/dashboard/reports/${tabMap[newValue]}`);
  };

  return (
    <Box p={3}>
      <Tabs value={tabIndex} onChange={handleChange}>
        <Tab label="Licenses" />
        <Tab label="User activity" />
        <Tab label="Test results" />
        <Tab label="Leapwork usage" />
      </Tabs>

      {/* THIS IS CRITICAL */}
      <Outlet />
    </Box>
  );
};

export default Report;
