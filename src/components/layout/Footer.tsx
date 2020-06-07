import React from 'react'
import { View } from 'react-native';
import { Footer as FooterBase, FooterTab, Button, Icon } from 'native-base';

import { navigationProps } from '../../types';
import { NavigationParams, NavigationAction, NavigationState } from 'react-navigation';

const Footer: React.FC<navigationProps> = ({ navigation }) => {
  const { navigate } = navigation;

  const navState = navigation.state;
  // https://oblador.github.io/react-native-vector-icons/
  return (
    <View>
      <FooterBase>
        <FooterTab style={{ backgroundColor: '#fff' }}>
          <FooterMenu navigateTo={navigate} navState={navState} routePath='Home' iconName='home' />
        </FooterTab>
      </FooterBase>
    </View>
  );
;}

interface FooterMenuProps {
  navigateTo: (routeNameOrOptions: string, params?: NavigationParams, action?: NavigationAction) => boolean
  navState: NavigationState & { params?: NavigationParams }
  routePath: string
  iconName: string
}

const FooterMenu: React.FC<FooterMenuProps> = ({ navigateTo, navState, routePath, iconName }) => {
  let isActive = false
  if (navState.routes.findIndex(element => element.routeName === routePath) === navState.index) {
    isActive = true;
  }

  return (
    <Button onPress={() => navigateTo(routePath)}>
      <Icon
        style={{ color: isActive ? '#D3D3D3' : '#BDBDBD' }}
        name={iconName} />
    </Button>
  );
};

export default Footer;
