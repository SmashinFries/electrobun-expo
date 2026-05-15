import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Alert, Platform } from 'react-native';
import { ExpoDesktopRPCType } from '../shared/types';

export const ElectroRPC = {
	getSystemInfo: async (props?: ExpoDesktopRPCType['bun']['requests']['getSystemInfo']['params']): Promise<ExpoDesktopRPCType['bun']['requests']['getSystemInfo']['response']> => {
		return {
			arch: `${Device.supportedCpuArchitectures?.join(', ') ?? 'N/A'}`,
			hostname: `${Device.deviceName}`,
			platform: `${Platform.OS}`,
			freeMem: 0,
		}
	},
	sendNotification: (props: ExpoDesktopRPCType['bun']['messages']['sendNotification']) => {
		if (!!Constants.expoGoConfig) {
			Alert.alert(props.title, props.body);
		} else {
			Notifications.setNotificationHandler({
				handleNotification: async () => ({
					shouldPlaySound: !props.silent,
					shouldSetBadge: false,
					shouldShowBanner: true,
					shouldShowList: true,
				}),
			});

			Notifications.scheduleNotificationAsync({
				content: {
					title: props.title,
					subtitle: props.subtitle,
					body: props.body,
				},
				trigger: null,
			});
		}
        
	},
}