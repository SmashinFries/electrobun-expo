import { ExpoDesktopRPCType } from "../shared/types";
import { electroview } from "./webview";

export const ElectroRPC = {
	getSystemInfo: async (props?: ExpoDesktopRPCType['bun']['requests']['getSystemInfo']['params']) => {
		try {
			return electroview.rpc?.request.getSystemInfo(props ?? {includeMemory: false});
		} catch (e) {
			console.error("Failed to get system info");
		}
	},
	sendNotification: (props: ExpoDesktopRPCType['bun']['messages']['sendNotification']) => {
		electroview.rpc?.send.sendNotification(props);
	},
}