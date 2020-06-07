import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

// Navigator
import HomeNavigator from './Home';

// Components
import Footer from '../components/layout/Footer';


const BottomNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeNavigator },
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: (props) => {
      return <Footer {...props} />
    },
    tabBarOptions: {
      activeTintColor: '#D3D3D3',
    },
  }
);

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        headerTitle: '',
      },
    },  
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: '#ffffff',
      }
    },
  },
);

StackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    return {
      tabBarVisible: false,
    };
  }
  return {
    tabBarVisible
  };
};

export default createAppContainer(BottomNavigator);
