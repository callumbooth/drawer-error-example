import { createDrawerNavigator } from '@react-navigation/drawer'
import * as React from 'react'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'

const Drawer = createDrawerNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <Drawer.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Links' component={LinksScreen} />
    </Drawer.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'How to get started'
    case 'Links':
      return 'Links to learn more'
  }
}
