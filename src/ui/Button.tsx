import { styled } from "@mui/material/styles";
import { Button, type ButtonProps } from "@mui/material";

export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  fontWeight: 600,
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const SecondaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#333",
  fontWeight: 600,
  border: "1px solid #d6d6d6",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#e6e6e6",
  },
}));
