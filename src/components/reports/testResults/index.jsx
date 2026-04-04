import { Box, Typography } from "@mui/material";
import { darkTokens } from "../../../ui/theme";

const TestResultsTab = () => {
  return (
    <Box mt={6} textAlign="center" sx={{ color: darkTokens.text.secondary }}>
      <Typography sx={{ color: darkTokens.text.secondary }}>
        Test results data will appear here
      </Typography>
    </Box>
  );
};

export default TestResultsTab;
