import { Stack } from 'expo-router';
import '../global.css';


const RootLayout = () => {


    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
            <Stack.Screen name="details" options={{ title: 'Details' }} />
        </Stack>

    )
}

export default RootLayout