import { createTheme } from "@mui/material/styles";

export type ThemeMode = "dark" | "light";

type ThemeTokens = {
  background: {
    app: string;
    surface: string;
    elevated: string;
    muted: string;
    hover: string;
    hoverSoft: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  border: {
    default: string;
    subtle: string;
    strong: string;
    grid: string;
  };
  accent: {
    primary: string;
    primaryHover: string;
    soft: string;
    info: string;
    sky: string;
    purple: string;
  };
  status: {
    success: string;
    successLight: string;
    successBg: string;
    warning: string;
    warningBg: string;
    warningBgSoft: string;
    danger: string;
    dangerSoft: string;
    dangerBg: string;
    dangerBorder: string;
    dangerHoverBg: string;
  };
  overlay: {
    panel: string;
    hover: string;
    rowHover: string;
    shadowStrong: string;
    shadowTooltip: string;
  };
};

const darkTokenValues: ThemeTokens = {
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
};

// Light values mimic the pre-migration look.
const lightTokenValues: ThemeTokens = {
  background: {
    app: "#F9FAFB",
    surface: "#FFFFFF",
    elevated: "#FFFFFF",
    muted: "#f5f5f5",
    hover: "#e6e6e6",
    hoverSoft: "#eeeeee",
  },
  text: {
    primary: "#1A1A1A",
    secondary: "#6B7280",
    muted: "#7C7C7C",
  },
  border: {
    default: "#d6d6d6",
    subtle: "#e0e0e0",
    strong: "#d1d5db",
    grid: "#E5E7EB",
  },
  accent: {
    primary: "#002d2f",
    primaryHover: "#00767b",
    soft: "#E6F2F2",
    info: "#1565c0",
    sky: "#309DEC",
    purple: "#8b5cf6",
  },
  status: {
    success: "#37a656",
    successLight: "#10b981",
    successBg: "rgba(16, 185, 129, 0.15)",
    warning: "#f59e0b",
    warningBg: "rgba(245, 158, 11, 0.15)",
    warningBgSoft: "rgba(245, 158, 11, 0.08)",
    danger: "#f44336",
    dangerSoft: "#ef4444",
    dangerBg: "rgba(244, 67, 54, 0.12)",
    dangerBorder: "rgba(244, 67, 54, 0.35)",
    dangerHoverBg: "rgba(244, 67, 54, 0.08)",
  },
  overlay: {
    panel: "rgba(255, 255, 255, 0.95)",
    hover: "rgba(0, 0, 0, 0.04)",
    rowHover: "rgba(0, 0, 0, 0.03)",
    shadowStrong: "0 12px 24px rgba(0, 0, 0, 0.12)",
    shadowTooltip:
      "0 2px 6px 0 rgba(0, 0, 0, .12), 0 6px 12px 0 rgba(55, 55, 55, .08)",
  },
};

const tokenVars: ThemeTokens = {
  background: {
    app: "var(--cp-background-app)",
    surface: "var(--cp-background-surface)",
    elevated: "var(--cp-background-elevated)",
    muted: "var(--cp-background-muted)",
    hover: "var(--cp-background-hover)",
    hoverSoft: "var(--cp-background-hover-soft)",
  },
  text: {
    primary: "var(--cp-text-primary)",
    secondary: "var(--cp-text-secondary)",
    muted: "var(--cp-text-muted)",
  },
  border: {
    default: "var(--cp-border-default)",
    subtle: "var(--cp-border-subtle)",
    strong: "var(--cp-border-strong)",
    grid: "var(--cp-border-grid)",
  },
  accent: {
    primary: "var(--cp-accent-primary)",
    primaryHover: "var(--cp-accent-primary-hover)",
    soft: "var(--cp-accent-soft)",
    info: "var(--cp-accent-info)",
    sky: "var(--cp-accent-sky)",
    purple: "var(--cp-accent-purple)",
  },
  status: {
    success: "var(--cp-status-success)",
    successLight: "var(--cp-status-success-light)",
    successBg: "var(--cp-status-success-bg)",
    warning: "var(--cp-status-warning)",
    warningBg: "var(--cp-status-warning-bg)",
    warningBgSoft: "var(--cp-status-warning-bg-soft)",
    danger: "var(--cp-status-danger)",
    dangerSoft: "var(--cp-status-danger-soft)",
    dangerBg: "var(--cp-status-danger-bg)",
    dangerBorder: "var(--cp-status-danger-border)",
    dangerHoverBg: "var(--cp-status-danger-hover-bg)",
  },
  overlay: {
    panel: "var(--cp-overlay-panel)",
    hover: "var(--cp-overlay-hover)",
    rowHover: "var(--cp-overlay-row-hover)",
    shadowStrong: "var(--cp-overlay-shadow-strong)",
    shadowTooltip: "var(--cp-overlay-shadow-tooltip)",
  },
};

const flattenTokens = (
  value: Record<string, unknown>,
  path: string[] = [],
  out: Record<string, string> = {},
) => {
  for (const [key, entry] of Object.entries(value)) {
    const nextPath = [...path, key];
    if (typeof entry === "string") {
      out[`--cp-${nextPath.join("-")}`] = entry;
      continue;
    }
    if (entry && typeof entry === "object") {
      flattenTokens(entry as Record<string, unknown>, nextPath, out);
    }
  }
  return out;
};

const getTokenValues = (mode: ThemeMode): ThemeTokens =>
  mode === "light" ? lightTokenValues : darkTokenValues;

export const darkTokens = tokenVars;
export const themeTokens = tokenVars;

export const createAppTheme = (mode: ThemeMode = "dark") => {
  const values = getTokenValues(mode);
  const cssVars = flattenTokens(values);

  return createTheme({
    palette: {
      mode,
      primary: {
        main: values.accent.primary,
        dark: values.accent.primaryHover,
        light: values.accent.soft,
      },
      secondary: {
        main: values.status.success,
      },
      error: {
        main: values.status.danger,
      },
      warning: {
        main: values.status.warning,
      },
      info: {
        main: values.accent.primary,
      },
      success: {
        main: values.status.success,
      },
      background: {
        default: values.background.app,
        paper: values.background.surface,
      },
      text: {
        primary: values.text.primary,
        secondary: values.text.secondary,
      },
      divider: values.border.default,
      action: {
        hover: values.overlay.hover,
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
    spacing: 8,
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ":root": cssVars as Record<string, string>,
          "html, body, #root": {
            backgroundColor: values.background.app,
          },
          body: {
            color: values.text.primary,
            backgroundColor: values.background.app,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            fontWeight: 550,
          },
          containedPrimary: {
            backgroundColor: tokenVars.accent.primary,
            color: tokenVars.text.primary,
            "&:hover": {
              backgroundColor: tokenVars.accent.primaryHover,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root": {
              color: tokenVars.text.secondary,
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: 4,
              color: tokenVars.text.primary,
              backgroundColor: tokenVars.background.app,
              "& fieldset": {
                borderColor: tokenVars.border.default,
              },
              "&:hover fieldset": {
                borderColor: tokenVars.text.secondary,
              },
              "&.Mui-focused fieldset": {
                borderColor: tokenVars.accent.primary,
              },
            },
          },
        },
      },
    },
  });
};

const theme = createAppTheme("dark");

export default theme;
