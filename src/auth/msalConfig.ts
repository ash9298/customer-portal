import { LogLevel, PublicClientApplication } from "@azure/msal-browser";
import { EventType } from "@azure/msal-browser";

const clientId = import.meta.env.VITE_AZURE_AD_CLIENT_ID as string | undefined;
const authority = import.meta.env.VITE_AZURE_AD_AUTHORITY as string | undefined;
const redirectUri =
  (import.meta.env.VITE_AZURE_AD_REDIRECT_URI as string | undefined) ??
  window.location.origin;
const postLogoutRedirectUri =
  (import.meta.env.VITE_AZURE_AD_POST_LOGOUT_REDIRECT_URI as
    | string
    | undefined) ?? window.location.origin;
console.log("clientId", clientId);
export const msalInstance = new PublicClientApplication({
  auth: {
    clientId: clientId ?? "",
    authority,
    redirectUri,
    postLogoutRedirectUri,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      logLevel: LogLevel.Warning,
      piiLoggingEnabled: true,
      loggerCallback: (level, message) => {
        if (level <= LogLevel.Warning) {
          console.warn(message);
        }
      },
    },
  },
});

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const account = event.payload.account;
    if (account) {
      msalInstance.setActiveAccount(account);
    }
  }
});

export const isMsalConfigured = Boolean(clientId);

export const loginRequest = {
  scopes: (import.meta.env.VITE_AZURE_AD_SCOPES as string | undefined)
    ?.split(" ")
    .filter(Boolean) ?? ["openid", "profile", "email"],
};
