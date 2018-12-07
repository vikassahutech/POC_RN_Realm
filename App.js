import dummyScreen from './src/screens/dummyScreen';
import screenId from './src/constants/screen.id.enum';
import { Navigation } from 'react-native-navigation';
import NavigationUtil from './src/utils/navigation.util';
Navigation.registerComponent(screenId.DummyScreen,() => dummyScreen);

Navigation.events().registerAppLaunchedListener(() => { //Change default launcher screen to login 
  NavigationUtil.authenticationEntry();
  NavigationUtil.setDefaultOptions();
});