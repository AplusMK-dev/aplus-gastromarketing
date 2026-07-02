export interface AplusConfig {
  apiUrl: string;
  nonce: string;
  siteUrl: string;
  isWordPress: boolean;
}

declare global {
  interface Window {
    aplusConfig?: AplusConfig;
  }
}

export {};
