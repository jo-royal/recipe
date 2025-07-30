import { Link } from 'expo-router'
import { View, Image, Text, useColorScheme, SafeAreaView } from 'react-native'
import Colors from '../constants/colors';
import avater from '../assets/avater.jpg';
import Ionicons from '@expo/vector-icons/Ionicons';

const Index = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme || 'light'];


    return (
        <SafeAreaView className="h-full" style={{ backgroundColor: theme.background }}>
            <View className="h-25 flex-row justify-between items-center px-5">
                <View className="flex-row gap-3 items-center">
                    <Image className="h-16 w-16 rounded-full -ml-2" source={avater} />
                    <View className="">
                        <Text className="" style={{ color: theme.text }}>Welcome Back!</Text>
                        <Text className="text-xl font-semibold">Cristina Kiehn</Text>
                    </View>
                </View>

                <View className="flex-row gap-4">
                    <Ionicons className="p-1.5 rounded-full border" style={{ borderColor: theme.accent }} name="search-outline" size={22} color={theme.text} />
                    <Ionicons className="p-1.5 rounded-full border" style={{ borderColor: theme.accent }} name="notifications-outline" size={22} color={theme.text} />
                </View>
            </View>

            <View className="mt-5 px-5">
                <View className="rounded-xl h-[100px] w-full" style={{ backgroundColor: theme.primary }}></View>
            </View>

        </SafeAreaView>
    )
}

export default Index