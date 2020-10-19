import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile'

const Stack = createStackNavigator()

function Routes() {
    return (
            <Stack.Navigator screenOptions={{
                headerTintColor: '#FFF',
                headerStyle: {
                    backgroundColor: '#7D40E7',
                }
            }}>
                <Stack.Screen name="Main" component={Main} options={{title: "DevRadar"}} />
                <Stack.Screen name="Profile" component={Profile} options={{title: "Perfil no Github"}} />
            </Stack.Navigator>
    )
}

export default Routes