import { Link } from 'expo-router'
import { View, Text } from 'react-native'


const index = () => {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="font-black mb-5">Hello World</Text>
            <Link href="/details" className="text-blue-500">
                Go to Details
            </Link>
        </View>
    )
}

export default index