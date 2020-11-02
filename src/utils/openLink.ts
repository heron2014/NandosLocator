import { Linking } from 'react-native';

export const openUrl = async (url: string) => {
  try {
    const isSupported = await Linking.canOpenURL(url);

    if (!isSupported) {
      return new Error(`Invalid URL provided: ${url}`);
    }
    return Linking.openURL(url);
  } catch (e) {
    // some error logger
    console.log('Could not open the url with:', e);
  }
};
