import type { ElectrobunConfig } from "electrobun";

export default {
	app: {
		name: "Expo Electrobun",
		identifier: "com.my.app",
		version: "0.0.1",
	},
	runtime: {
		exitOnLastWindowClosed: true
	},
	build: {
		buildFolder: "desktop/build",
		artifactFolder: "desktop/artifact",
		linux: {
			icon: "assets/icon.png",
		},
		bun: {
			entrypoint: "desktop/index.ts",
		},
		views: {
			"main": {
				entrypoint: process.env.NODE_ENV === "development" 
					? "http://localhost:8081" 
					: "dist/index.html"
			},
		},
		watch: ["desktop"],
		copy: {
			// Directs the built static Expo assets to the views directory
			"dist": "views/" 
		}
	},
} satisfies ElectrobunConfig;