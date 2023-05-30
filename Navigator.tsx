import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen from './src/components/Screen';

const Stack = createNativeStackNavigator();

function Navigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{headerShown: false}}
                >
                <Stack.Screen name="Home" component={Screen.HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}

export default Navigator;