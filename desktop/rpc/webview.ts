import { Electroview } from "electrobun/view";
import { ExpoDesktopRPCType } from "../shared/types";

export const webviewRpc = Electroview.defineRPC<ExpoDesktopRPCType>({
	maxRequestTime: 5000,
	handlers: {
		requests: { },
		messages: { },
	},
});

export const electroview = new Electroview({
	rpc: webviewRpc
});