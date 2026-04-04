import type { ThemeMode } from "../ui/theme";

const normalizeThemeMode = (value?: string): ThemeMode =>
  value?.toLowerCase() === "light" ? "light" : "dark";

const envThemeMode = (
  import.meta as unknown as { env?: Record<string, string | undefined> }
).env?.VITE_APP_THEME_MODE;

export const themeConfig = {
  // Change this to "light" if you want the pre-migration visual style.
  mode: normalizeThemeMode(envThemeMode ?? "dark"),
} as const;

export const getConfiguredThemeMode = (): ThemeMode =>
  normalizeThemeMode(themeConfig.mode);
