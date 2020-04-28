import React from 'react'
import { render } from '@testing-library/react-native'
import Home from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()
it('should render', () => {
  const { container } = render(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='home' component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  )

  expect(container).not.toBeNull()
})
