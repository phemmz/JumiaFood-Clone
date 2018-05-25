import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './src/components/Screens/HomeScreen/HomeScreen';
import HomeSideNav from './src/components/HomeSideNav/HomeSideNav';
import AccountScreen from './src/components/Screens/AccountScreen/AccountScreen';

const App = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Account: { screen: AccountScreen }
  },
  {
    contentComponent: props => <HomeSideNav {...props} />
  }
);

export default App;
