import { Typography } from "@mui/material";
import Cases from "../components/cases";

const MyCases = () => (
  <>
    <Typography variant="h1" sx={{ fontSize: "1.5rem", mb: 2 }}>
      My Cases
    </Typography>
    <Cases />
  </>
);

export default MyCases;
