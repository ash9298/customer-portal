import { Box } from "@mui/material";
import LicensesStats from "./licensesStats";
import LicenseOverview from "./licenseOverview";
import AgentProductivity from "./agentProductivity";
import AgentProductivityOverTime from "./agentProductivityOverTime";
const LicensesTab = () => {
  return (
    <Box mt={3}>
      <LicensesStats />
      <LicenseOverview />
      <AgentProductivity />
      <AgentProductivityOverTime />
    </Box>
  );
};

export default LicensesTab;
