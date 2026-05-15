// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// This solves the error: "Unable to resolve module ../shared/rpc.js"
// rpc.js should actually be rpc.ts, so we strip the .js from it.
config.resolver.resolveRequest = (context, moduleName, platform) => {
	if (
		context.originModulePath.includes("node_modules/electrobun") ||
    moduleName.includes("electrobun")
	) {
		if (moduleName.endsWith(".js")) {
			const strippedModuleName = moduleName.slice(0, -3);

			try {
				return context.resolveRequest(context, strippedModuleName, platform);
			} catch (e) {
				// Fall back to original if stripping fails
			}
		}
	}

	// Forward everything else to Metro's default resolution behavior
	return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
