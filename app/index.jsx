import { Link } from 'expo-router'
import { View, Image, Text, useColorScheme, SafeAreaView, ScrollView } from 'react-native'
import Colors from '../constants/colors';
import avater from '../assets/avater.jpg';
import breakfast from '../assets/breakfast-cat.png';
import beef from '../assets/beef-cat.png';
import chicken from '../assets/chicken-cat.png';
import dessert from '../assets/dessert-cat.png';
import all from '../assets/all-cat.png';
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
                <View className="rounded-xl h-[100px] w-full p-5 flex-row gap-3 items-center" style={{ backgroundColor: theme.primary }}>
                    <Ionicons className="p-4 bg-white rounded-full h-full w-auto" name="bag-handle-sharp" size={33} color={theme.primary} />
                    <View>
                        <Text className="text-white text-[1.4rem]">Get 20% off Premium</Text>
                        <Text className="text-white text-[1.4rem]">Subscription</Text>
                    </View>
                    <Text className="bg-white px-4 py-2.5 rounded-2xl ml-3 font-medium" style={{ color: theme.primary }}>Get Now</Text>
                </View>
            </View>

            <View className="mt-5 px-5 w-full flex-row justify-between items-center">
                <View className="flex-col gap-3 items-center">
                    <View className="p-5 w-fit h-fit rounded-full bg-gray-200">
                        <Image className="w-10 h-10 rounded-full" source={breakfast}></Image>
                    </View>
                    <Text className="font-semibold">Breakfast</Text>
                </View>
                <View className="flex-col gap-3 items-center">
                    <View className="p-5 w-fit h-fit rounded-full bg-gray-200">
                        <Image className="w-10 h-10 rounded-full" source={beef}></Image>
                    </View>
                    <Text className="font-semibold">Beef</Text>
                </View>
                <View className="flex-col gap-3 items-center">
                    <View className="p-5 w-fit h-fit rounded-full bg-gray-200">
                        <Image className="w-10 h-10 rounded-full" source={chicken}></Image>
                    </View>
                    <Text className="font-semibold">Chicken</Text>
                </View>
                <View className="flex-col gap-3 items-center">
                    <View className="p-5 w-fit h-fit rounded-full bg-gray-200">
                        <Image className="w-10 h-10 rounded-full" source={dessert}></Image>
                    </View>
                    <Text className="font-semibold">Dessert</Text>
                </View>
                <View className="flex-col gap-3 items-center">
                    <View className="p-5 w-fit h-fit rounded-full bg-gray-200">
                        <Image className="w-10 h-10 rounded-full" source={all}></Image>
                    </View>
                    <Text className="font-semibold">All</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Index