import { Tabs } from 'expo-router';
import '../global.css';
import { useColorScheme } from "react-native"
import Colors from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';


const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme || 'light'];

    return (
        <Tabs screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },

            tabBarStyle: { backgroundColor: theme.surface, paddingTop: 10, height: 90 },
            tabBarActiveTintColor: theme.primary,
            tabBarInactiveTintColor: theme.accent,

        }}>
            <Tabs.Screen name="index" options={{
                headerShown: false, title: 'Home', tabBarIcon: ({ focused }) => (
                    <Ionicons
                        size={24}
                        name={focused ? 'home' : 'home-outline'}
                        color={focused ? theme.primary : theme.accent}
                    />
                )
            }} />
            <Tabs.Screen name="details" options={{
                title: 'Details', tabBarIcon: ({ focused }) => (
                    <Ionicons
                        size={24}
                        name={focused ? 'apps' : 'apps-outline'}
                        color={focused ? theme.primary : theme.accent}
                    />
                )
            }} />
            <Tabs.Screen name="[meal_id]" options={{
                title: 'Meal Details'
            }} />
        </Tabs>

    )
}

export default RootLayout