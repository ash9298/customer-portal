import { createTheme } from "@mui/material/styles";

// ✅ Define reusable colors, typography, spacing, overrides
const theme = createTheme({
  palette: {
    primary: {
      main: "#002d2f",
      dark: "#00767b",
      light: "#E6F2F2",
    },
    secondary: {
      main: "#FF6B6B",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontSize: "2.25rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.5 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  spacing: 8, // base spacing unit → multiples (8, 16, 24, etc.)
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: "#002d2f",
          "&:hover": {
            backgroundColor: "#00767b",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

export default theme;
