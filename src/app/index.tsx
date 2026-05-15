import { ElectroRPC } from "@/desktop/rpc";
import { ExpoDesktopRPCType } from "@/desktop/shared/types";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
	const [sysInfo, setSysInfo] =
    useState<
      ExpoDesktopRPCType["bun"]["requests"]["getSystemInfo"]["response"]
    >();

	useEffect(() => {
		ElectroRPC.getSystemInfo({ includeMemory: true }).then(setSysInfo);
	}, []);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				gap: 12,
			}}
		>
			<Stack.Screen options={{ title: "Home" }} />
			<View style={[styles.sys]}>
				<Text>{sysInfo?.hostname}</Text>
				<Text style={{ textTransform: "capitalize" }}>
          Platform: {sysInfo?.platform}
				</Text>
				<Text>Arch: {sysInfo?.arch}</Text>
				<Text>Free Memory: {sysInfo?.freeMem?.toFixed(2)} GB</Text>
			</View>
			<Button
				title="Send Notification"
				onPress={() =>
					ElectroRPC.sendNotification({
						title: "Electrobun",
						subtitle: "A subtitle",
						body: "Expo on desktop!",
					})
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	sys: {
		padding: 18,
		borderRadius: 8,
		backgroundColor: "#e1e1e1",
	},
});
