import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherScreen from './screen/WeatherScreen';
import ZipCodeScreen from './screen/ZipCodeScreen';


const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Choose a zip code" component={ZipCodeScreen} />
                <Stack.Screen name="Weather" component={WeatherScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

