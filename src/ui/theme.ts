import { createTheme } from "@mui/material/styles";

export const darkTokens = {
  background: {
    app: "#202020",
    surface: "#2a2a2a",
    elevated: "#353535",
    muted: "#484848",
    hover: "#3d3d3d",
    hoverSoft: "#2d2d2d",
  },
  text: {
    primary: "#ffffff",
    secondary: "#bbbbbb",
    muted: "#9a9a9a",
  },
  border: {
    default: "rgba(136, 136, 136, 0.5)",
    subtle: "rgba(136, 136, 136, 0.35)",
    strong: "#595959",
    grid: "#3a3a3a",
  },
  accent: {
    primary: "#0083cd",
    primaryHover: "#006ba6",
    soft: "rgba(0, 131, 205, 0.2)",
    info: "#66c2ff",
    sky: "#309DEC",
    purple: "#BE91FF",
  },
  status: {
    success: "#1f9f2b",
    successLight: "#79cf7f",
    successBg: "rgba(31, 159, 43, 0.2)",
    warning: "#ffb114",
    warningBg: "rgba(255, 177, 20, 0.2)",
    warningBgSoft: "rgba(255, 177, 20, 0.08)",
    danger: "#d83329",
    dangerSoft: "#fd5b51",
    dangerBg: "rgba(216, 51, 41, 0.2)",
    dangerBorder: "rgba(216, 51, 41, 0.5)",
    dangerHoverBg: "rgba(216, 51, 41, 0.15)",
  },
  overlay: {
    panel: "rgba(32, 32, 32, 0.95)",
    hover: "rgba(255, 255, 255, 0.04)",
    rowHover: "rgba(255, 255, 255, 0.03)",
    shadowStrong: "0 12px 24px rgba(0, 0, 0, 0.35)",
    shadowTooltip:
      "0 2px 6px 0 rgba(0, 0, 0, 0.25), 0 6px 12px 0 rgba(0, 0, 0, 0.3)",
  },
} as const;

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: darkTokens.accent.primary,
      dark: darkTokens.accent.primaryHover,
      light: "rgba(0, 131, 205, 0.2)",
    },
    secondary: {
      main: darkTokens.status.success,
    },
    error: {
      main: darkTokens.status.danger,
    },
    warning: {
      main: darkTokens.status.warning,
    },
    info: {
      main: darkTokens.accent.primary,
    },
    success: {
      main: darkTokens.status.success,
    },
    background: {
      default: darkTokens.background.app,
      paper: darkTokens.background.surface,
    },
    text: {
      primary: darkTokens.text.primary,
      secondary: darkTokens.text.secondary,
    },
    divider: darkTokens.border.default,
    action: {
      hover: darkTokens.overlay.hover,
    },
  },
  typography: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: { fontSize: "2.25rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 550 },
    body1: { fontSize: "1rem", lineHeight: 1.5 },
    button: { textTransform: "none", fontWeight: 550, fontSize: "13px" },
  },
  spacing: 8, // base spacing unit → multiples (8, 16, 24, etc.)
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 550,
        },
        containedPrimary: {
          backgroundColor: darkTokens.accent.primary,
          color: darkTokens.text.primary,
          "&:hover": {
            backgroundColor: darkTokens.accent.primaryHover,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: darkTokens.text.secondary,
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: 4,
            color: darkTokens.text.primary,
            backgroundColor: darkTokens.background.app,
            "& fieldset": {
              borderColor: darkTokens.border.default,
            },
            "&:hover fieldset": {
              borderColor: darkTokens.text.secondary,
            },
            "&.Mui-focused fieldset": {
              borderColor: darkTokens.accent.primary,
            },
          },
        },
      },
    },
  },
});

export default theme;
