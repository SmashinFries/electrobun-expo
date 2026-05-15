import { BrowserWindow } from "electrobun/bun";
import { browserRpc } from "./rpc/browser";

const isDev = process.env.NODE_ENV === "development";
const targetUrl = isDev ? "http://localhost:8081" : "views://index.html";

const win = new BrowserWindow({
	title: "Expo Desktop",
	url: targetUrl,
	rpc: browserRpc,
	frame: {
		width: 1024,
		height: 768,
		x: 2000,
		y: 2000,
	}
});