import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//also import the screens
//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeShop from './screens/HomeShop'
import DetailsPhone from './screens/DetailsPhone'

export type RootStackParamList ={  //check spelling if not works
  Home : undefined;
  Details : {product : Product}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={HomeShop}        
        options={{
          title: 'Trending Products'
        }}
        />
        <Stack.Screen
        name='Details'
        component={DetailsPhone}        
        options={{
          title: 'Product Details'
        }}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})