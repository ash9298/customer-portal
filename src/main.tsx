import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { MsalProvider } from "@azure/msal-react";
import theme from "./ui/theme.ts";
import App from "./App.jsx";
import { msalInstance } from "./auth/msalConfig";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element not found");
}

msalInstance
  .initialize()
  .then(() => msalInstance.handleRedirectPromise())
  .then((result) => {
    if (result?.account) {
      msalInstance.setActiveAccount(result.account);
    } else {
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        msalInstance.setActiveAccount(accounts[0]);
      }
    }

    createRoot(rootEl).render(
      <StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MsalProvider instance={msalInstance}>
            <App />
          </MsalProvider>
        </ThemeProvider>
      </StrictMode>,
    );
  })
  .catch((error) => {
    console.error("MSAL initialization failed:", error);
  });
