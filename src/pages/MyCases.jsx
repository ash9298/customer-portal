import { Typography } from "@mui/material";
import Cases from "../components/cases";
import { darkTokens } from "../ui/theme";

const MyCases = () => (
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
      My Cases
    </Typography>
    <Cases />
  </>
);

export default MyCases;
