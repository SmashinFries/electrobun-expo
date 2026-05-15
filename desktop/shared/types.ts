import { RPCSchema } from "electrobun/bun";

export type ExpoDesktopRPCType = {
  // Functions implemented in Bun (backend) that the Expo webview can execute
  bun: RPCSchema<{
    requests: {
      getSystemInfo: {
        params: { includeMemory?: boolean };
        response: { arch: string; platform: string; hostname: string; freeMem: number | null };
      };
    };
    messages: {
      sendNotification: { title: string; subtitle?: string; body?: string; silent?: boolean };
    };
  }>;

  // Functions implemented in Expo (frontend) that Bun can execute
  webview: RPCSchema<{
    requests: {};
    messages: {};
  }>;
};