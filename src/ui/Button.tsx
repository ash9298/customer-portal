import { styled } from "@mui/material/styles";
import { Button, type ButtonProps } from "@mui/material";

export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  fontWeight: 600,
  height: 50,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
