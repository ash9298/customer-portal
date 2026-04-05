interface ImportMetaEnv {
  readonly VITE_AZURE_AD_CLIENT_ID: string;
  readonly VITE_AZURE_AD_TENANT_ID: string;
  readonly VITE_AZURE_AD_AUTHORITY: string;
  readonly VITE_AZURE_AD_REDIRECT_URI: string;
  readonly VITE_AZURE_AD_POST_LOGOUT_REDIRECT_URI: string;
  readonly VITE_AZURE_AD_SCOPES?: string;
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
