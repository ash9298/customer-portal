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
import LicensesTab from "./LicenseTab";
const tabs = ["Licenses", "User activity", "Test results", "Leapwork usage"];
const EmptyState = ({ title }) => (
  <Box mt={6} textAlign="center" color="text.secondary">
    <Typography>{title} data will appear here</Typography>
  </Box>
);
const Report = () => {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ p: 0 }}>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight={600}>
          Reports
        </Typography>

        <Select size="small" value="7">
          <MenuItem value="7">Last 7 days</MenuItem>
          <MenuItem value="30">Last 30 days</MenuItem>
          <MenuItem value="90">Last 90 days</MenuItem>
        </Select>
      </Stack>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        sx={{
          mb: 3,
          "& .MuiTab-root": { textTransform: "none" },
        }}
      >
        {tabs.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>

      <Divider />

      {/* Tab Panels */}
      {tab === 0 && <LicensesTab />}
      {tab === 1 && <EmptyState title="User activity" />}
      {tab === 2 && <EmptyState title="Test results" />}
      {tab === 3 && <EmptyState title="Leapwork usage" />}
    </Box>
  );
};

export default Report;
