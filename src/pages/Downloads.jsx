import { Typography } from "@mui/material";
import Downloads from "../components/downloads";
import { darkTokens } from "../ui/theme";

const Download = () => (
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
      Download
    </Typography>

    <Downloads />
  </>
);

export default Download;
