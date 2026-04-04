import { styled } from "@mui/material/styles";
import { Button, type ButtonProps } from "@mui/material";
import { darkTokens } from "./theme";

export const PrimaryButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: darkTokens.accent.primary,
  color: darkTokens.text.primary,
  fontWeight: 550,
  fontSize: "13px",
  height: "28px",
  padding: "0 10px",
  borderRadius: "4px",
  border: "1px solid transparent",
  "&:hover": {
    backgroundColor: darkTokens.accent.primaryHover,
  },
}));

export const SecondaryButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: darkTokens.background.muted,
  color: darkTokens.text.primary,
  fontWeight: 550,
  fontSize: "13px",
  height: "28px",
  padding: "0 10px",
  border: `1px solid ${darkTokens.border.default}`,
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: darkTokens.background.hover,
    borderColor: darkTokens.text.secondary,
  },
}));
