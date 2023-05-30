import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigator from './Navigator';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Navigator);