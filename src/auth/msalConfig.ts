import {
  EventType,
  LogLevel,
  PublicClientApplication,
  type AuthenticationResult,
  type EventMessage,
} from "@azure/msal-browser";

const clientId = import.meta.env.VITE_AZURE_AD_CLIENT_ID as string | undefined;
const authority = import.meta.env.VITE_AZURE_AD_AUTHORITY as string | undefined;
const redirectUri =
  (import.meta.env.VITE_AZURE_AD_REDIRECT_URI as string | undefined) ??
  window.location.origin;
const postLogoutRedirectUri =
  (import.meta.env.VITE_AZURE_AD_POST_LOGOUT_REDIRECT_URI as
    | string
    | undefined) ?? window.location.origin;

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
      piiLoggingEnabled: false,
      loggerCallback: (level, message) => {
        if (level <= LogLevel.Warning) {
          console.warn(message);
        }
      },
    },
  },
});

msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType !== EventType.LOGIN_SUCCESS) {
    return;
  }

  const payload = event.payload as AuthenticationResult | null;
  if (payload?.account) {
    msalInstance.setActiveAccount(payload.account);
  }
});

export const isMsalConfigured = Boolean(clientId);

export const loginRequest = {
  scopes:
    (import.meta.env.VITE_AZURE_AD_SCOPES as string | undefined)
      ?.split(/[\s,]+/)
      .filter(Boolean) ?? ["openid", "profile", "email"],
};
