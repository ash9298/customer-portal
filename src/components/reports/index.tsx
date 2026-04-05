import { Box, Tabs, Tab, Divider } from "@mui/material";
import type { SyntheticEvent } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { darkTokens } from "../../ui/theme";
import type { ReportTabKey } from "../../types/ui";

const tabMap: ReportTabKey[] = [
  "licenses",
  "user-activity",
  "test-results",
  "leapwork-usage",
];
const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = tabMap.findIndex((t) => location.pathname.endsWith(t));

  const tabIndex = currentTab === -1 ? 0 : currentTab;

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    navigate(`/dashboard/reports/${tabMap[newValue]}`);
  };

  const tabSx = {
    color: darkTokens.text.secondary,
    textTransform: "none",
    minHeight: 42,
    fontWeight: 450,
    "&.Mui-selected": {
      fontWeight: 550,
      color: darkTokens.text.primary,
      backgroundColor: darkTokens.background.hover,
      zIndex: 1,
    },
  };

  return (
    <Box
      p={0}
      sx={{
        backgroundColor: darkTokens.background.surface,
        border: `1px solid ${darkTokens.border.default}`,
        borderRadius: "4px",
      }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        sx={{
          minHeight: 42,
          "& .MuiTabs-indicator": {
            backgroundColor: darkTokens.accent.primary,
            height: 2,
          },
        }}
      >
        <Tab label="Licenses" sx={tabSx} />
        <Tab label="User activity" sx={tabSx} />
        <Tab label="Test results" sx={tabSx} />
        <Tab label="Leapwork usage" sx={tabSx} />
      </Tabs>
      <Divider sx={{ borderColor: darkTokens.border.default }} />
      <Outlet />
    </Box>
  );
};

export default Report;
