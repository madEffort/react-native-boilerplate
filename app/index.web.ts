import { AppRegistry } from 'react-native';
import appConfig from './app.json'; // appConfig로 불러옴
import App from './App';

AppRegistry.registerComponent(appConfig.name, () => App);
AppRegistry.runApplication(appConfig.name, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
