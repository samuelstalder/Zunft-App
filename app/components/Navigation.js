import React from 'react';
import HomeScreen from "../screens/HomeScreen";
import {getFocusedRouteNameFromRoute} from "@react-navigation/core";
import CalendarScreen from "../screens/CalendarScreen";
import RodelScreen from "../screens/RodelScreen";
import LeadershipScreen from "../screens/LeadershipScreen";
import SettingsScreen from "../screens/SettingsScreen";
import OccasionScreen from "../screens/OccasionScreen";
import DetailsScreen from "../screens/DetailsScreen";

import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={SettingsStackNavigator}
                    options={({ route }) => ({
                        tabBarVisible: ((route) => {
                            const routeName = getFocusedRouteNameFromRoute(route) ?? ""

                            if (routeName === "Settings") {
                                return false
                            }

                            return true
                        })(route),

                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        )
                    })}
                />
                <Tab.Screen name="Rodel"
                            component={RodelStackNavigator}
                            options={({ route }) => ({
                                tabBarVisible: ((route) => {
                                    const routeName = getFocusedRouteNameFromRoute(route) ?? ""

                                    if (routeName === "Details") {
                                        return false
                                    }

                                    return true
                                })(route),

                                tabBarLabel: 'Rodel',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon name="address-book-o" color={color} size={size} />
                                )
                            })}
                />
                <Tab.Screen name="Calendar"
                            component={CalendarStackNavigator}
                            options={({ route }) => ({
                                tabBarVisible: ((route) => {
                                    const routeName = getFocusedRouteNameFromRoute(route) ?? ""

                                    if (routeName === "Anlass") {
                                        return false
                                    }

                                    return true
                                })(route),

                                tabBarLabel: 'Calendar',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon name="calendar" color={color} size={size} />
                                )
                            })}
                />
                <Tab.Screen name="Vorsteherschaft"
                            component={LeadershipStackNavigator}
                            options={({ route }) => ({
                                tabBarVisible: ((route) => {
                                    const routeName = getFocusedRouteNameFromRoute(route) ?? ""

                                    if (routeName === "Details") {
                                        return false
                                    }

                                    return true
                                })(route),

                                tabBarLabel: 'Vorsteherschaft',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon name="users" color={color} size={size} />
                                )
                            })}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function CalendarStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Calendar" component={CalendarScreen} />
            <Stack.Screen name="Anlass" component={OccasionScreen} />
        </Stack.Navigator>
    )
}

function RodelStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Rodel" component={RodelScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

function LeadershipStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Vorsteherschaft" component={LeadershipScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

function SettingsStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    )
}

export default Navigation;