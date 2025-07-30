import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import { useColorScheme } from 'react-native';
import Colors from '../constants/colors';


const index = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme || 'light'];
    console.log('Color Scheme:', theme);



    return (
        <View className="flex-1 items-center justify-center">
            <Text className="font-black mb-5" style={{ color: theme.primary }}>Hello World</Text>
            <Link href="/details" className="text-blue-500">
                Go to Details
            </Link>
        </View>
    )
}

export default index