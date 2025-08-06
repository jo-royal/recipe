import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';



const TabLayout = () => {

    return (
        <Tabs screenOptions={{
            tabBarStyle: { backgroundColor: '#fff', paddingTop: 10, height: 90 },
            tabBarActiveTintColor: '#f4511e',
            tabBarInactiveTintColor: '#888',
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="details"
                options={{
                    title: 'Details',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'apps' : 'apps-outline'} size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );

}

export default TabLayout