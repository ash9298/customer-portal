import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { MsalProvider } from "@azure/msal-react";
import { type AccountInfo } from "@azure/msal-browser";
import { createAppTheme } from "./ui/theme.ts";
import App from "./App";
import { msalInstance } from "./auth/msalConfig";
import { getConfiguredThemeMode } from "./config/theme.config";
import store from "./store";
import { checkAuth, setAuthenticatedUser } from "./store/authSlice";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element not found");
}

const appTheme = createAppTheme(getConfiguredThemeMode());

const mapMsalAccountToUser = (account: AccountInfo) => {
  const fullName = account.name?.trim() ?? "";
  const nameParts = fullName.split(/\s+/).filter(Boolean);
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ") || undefined;
  const email = account.username || `${account.localAccountId}@sso.local`;

  return {
    email,
    name: fullName || email.split("@")[0],
    firstName,
    lastName,
  };
};

msalInstance
  .initialize()
  .then(() => msalInstance.handleRedirectPromise())
  .then(async (result) => {
    if (result?.account) {
      msalInstance.setActiveAccount(result.account);
    } else {
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        msalInstance.setActiveAccount(accounts[0]);
      }
    }

    await store.dispatch(checkAuth());

    const activeAccount = msalInstance.getActiveAccount();
    if (!store.getState().auth.user && activeAccount) {
      store.dispatch(setAuthenticatedUser(mapMsalAccountToUser(activeAccount)));
    }

    createRoot(rootEl).render(
      <StrictMode>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <MsalProvider instance={msalInstance}>
            <App />
          </MsalProvider>
        </ThemeProvider>
      </StrictMode>
    );
  })
  .catch((error) => {
    console.error("MSAL initialization failed:", error);
  });


