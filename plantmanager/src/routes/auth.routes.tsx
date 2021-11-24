import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Signin } from '../pages/Signin'
import { About } from '../pages/About'
import { Ready } from '../pages/Ready'
import { Profile } from '../pages/Profile'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen 
                name='Signin'
                component={Signin}
            />
            <Screen 
                name='About'
                component={About}
            />
            <Screen 
                name='Ready'
                component={Ready}
            />
            <Screen 
                name='Profile'
                component={Profile}
            />
        </Navigator>
    )
}