import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './src/components/HomeScreen/HomeScreen';
import HomeSideNav from './src/components/HomeSideNav/HomeSideNav';

const App = createDrawerNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    contentComponent: props => <HomeSideNav {...props} />
  }
);

export default App;
