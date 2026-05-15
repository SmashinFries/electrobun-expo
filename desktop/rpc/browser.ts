import { BrowserView, Utils } from "electrobun/bun";
import * as os from "os";
import { ExpoDesktopRPCType } from "../shared/types";

export const browserRpc = BrowserView.defineRPC<ExpoDesktopRPCType>({
	maxRequestTime: 5000,
	handlers: {
		requests: {
			getSystemInfo: ({ includeMemory }) => {
				return {
					arch: os.arch(),
					platform: os.platform(),
					hostname: os.hostname(),
					freeMem: includeMemory ? (os.freemem() / (1024 ** 3)) : null,
				};
			},
		},
		messages: {
			sendNotification: (props) => {
				Utils.showNotification(props);
			}
		},
	},
});