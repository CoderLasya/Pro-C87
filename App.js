import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './stellar/screens/Home'
import StarMapScreen from './stellar/screens/StarMap'
import DailyPicScreen from './stellar/screens/DailyPic'
import SpaceCraftScreen from './stellar/screens/SpaceCraft'

const Stack = createStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="StarMap" component={StarMapScreen}/>
                <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
                <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;