import { Box } from "@mui/material";
import LogoImg from "../../assets/logo.svg";

const Logo = () => {
  return (
    <Box
      component="img"
      src={LogoImg}
      alt="Customer Portal"
      sx={{ width: 200, height: "auto", my: 2, alignSelf: "center" }}
    />
  );
};

export default Logo;
