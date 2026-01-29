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
    <Box p={0}>
      <Tabs value={tabIndex} onChange={handleChange}>
        <Tab
          label="Licenses"
          sx={{
            "&.Mui-selected": {
              fontWeight: 600,
              color: "#333",
              backgroundColor: "#c7cece",
              zIndex: 1,
            },
          }}
        />
        <Tab
          label="User activity"
          sx={{
            "&.Mui-selected": {
              fontWeight: 600,
              color: "#333",
              backgroundColor: "#c7cece",
              zIndex: 1,
            },
          }}
        />
        <Tab
          label="Test results"
          sx={{
            "&.Mui-selected": {
              fontWeight: 600,
              color: "#333",
              backgroundColor: "#c7cece",
              zIndex: 1,
            },
          }}
        />
        <Tab
          label="Leapwork usage"
          sx={{
            "&.Mui-selected": {
              fontWeight: 600,
              color: "#333",
              backgroundColor: "#c7cece",
              zIndex: 1,
            },
          }}
        />
      </Tabs>
      <Divider />
      <Outlet />
    </Box>
  );
};

export default Report;
