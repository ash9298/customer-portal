import { Typography } from "@mui/material";
import Report from "../components/reports";
import { darkTokens } from "../ui/theme";
const Reports = () => (
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
      Reports
    </Typography>
    <Report />
  </>
);

export default Reports;
