/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Acobzildfiskwvhingupp from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Acobzildfiskwvhingupp);

setImmediate(() => {
  const { getMessaging, setBackgroundMessageHandler } = require('@react-native-firebase/messaging');
  const { cobzildfiskwvhinguOnMessageRecieved } = require('./services/initializatiocobzildfiskwvhingunShared');
  const messaging = getMessaging();
  setBackgroundMessageHandler(messaging, async remoteMessage => {
    await cobzildfiskwvhinguOnMessageRecieved(remoteMessage);
  });
});
