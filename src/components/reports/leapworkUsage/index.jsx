import { Box, Typography } from "@mui/material";
import { darkTokens } from "../../../ui/theme";

const LeapworkUsageTab = () => {
  return (
    <Box mt={6} textAlign="center" sx={{ color: darkTokens.text.secondary }}>
      <Typography sx={{ color: darkTokens.text.secondary }}>
        Leapwork usage data will appear here
      </Typography>
    </Box>
  );
};

export default LeapworkUsageTab;
