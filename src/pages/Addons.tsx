import { Typography } from "@mui/material";
import Addon from "../components/addons";
import { darkTokens } from "../ui/theme";

const Addons = () => (
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
      Add-ons
    </Typography>
    <Addon />
  </>
);

export default Addons;
