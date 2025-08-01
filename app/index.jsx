import { View, Image, Text, useColorScheme, ScrollView, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors';
import avater from '../assets/avater.jpg';
import breakfast from '../assets/breakfast-cat.png';
import beef from '../assets/beef-cat.png';
import chicken from '../assets/chicken-cat.png';
import dessert from '../assets/dessert-cat.png';
import all from '../assets/all-cat.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import apiService from '../services/api';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Index = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme || 'light'];
    const safeArea = useSafeAreaInsets();

    const [topMeals, setTopMeals] = useState([]);
    const [moreMeals, setMoreMeals] = useState([]);

    useEffect(() => {
        getProducts();
    }
        , []);

    const getProducts = async () => {
        try {
            const res = await apiService.getProducts();
            const meals = res.data.meals || [];
            // Take only first 10
            const firstTen = meals.slice(0, 10);
            setTopMeals(firstTen.slice(0, 5));
            setMoreMeals(firstTen.slice(5, 10));

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }


    return (
        <ScrollView className="h-full" horizontal={false} showsVerticalScrollIndicator={false} style={{ backgroundColor: theme.background, paddingTop: safeArea.top, paddingBottom: safeArea.bottom }}>
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
                    <View className="flex-col gap-2">
                        <Text className="text-white text-[1.4rem]">Get 20% off Premium</Text>
                        <Text className="text-white text-[1.4rem]">Subscription</Text>
                    </View>
                    <Text className="bg-white px-4 py-2.5 rounded-2xl ml-3 font-medium" style={{ color: theme.primary }}>Get Now</Text>
                </View>
            </View>

            <Text className="font-semibold text-2xl p-5 mt-2">Categories</Text>
            <View className="px-5 w-full flex-row justify-between items-center">
                <View className="flex-col gap-3 items-center">
                    <View className="p-5 w-fit h-fit rounded-full" style={{ backgroundColor: theme.surface }}>
                        <Image className="w-10 h-10 rounded-full" source={breakfast}></Image>
                    </View>
                    <Text className="font-semibold">Breakfast</Text>
                </View>
                <View className="flex-col gap-3 items-center">
                    <View className="p-5 w-fit h-fit rounded-full bg-gray-200" style={{ backgroundColor: theme.surface }}>
                        <Image className="w-10 h-10 rounded-full" source={beef}></Image>
                    </View>
                    <Text className="font-semibold">Beef</Text>
                </View>
                <View className="flex-col gap-3 items-center">
                    <View className="p-5 w-fit h-fit rounded-full bg-gray-200" style={{ backgroundColor: theme.surface }}>
                        <Image className="w-10 h-10 rounded-full" source={chicken}></Image>
                    </View>
                    <Text className="font-semibold">Chicken</Text>
                </View>
                <View className="flex-col gap-3 items-center">
                    <View className="p-5 w-fit h-fit rounded-full bg-gray-200" style={{ backgroundColor: theme.surface }}>
                        <Image className="w-10 h-10 rounded-full" source={dessert}></Image>
                    </View>
                    <Text className="font-semibold">Dessert</Text>
                </View>
                <View className="flex-col gap-3 items-center">
                    <View className="p-5 w-fit h-fit rounded-full bg-gray-200" style={{ backgroundColor: theme.surface }}>
                        <Image className="w-10 h-10 rounded-full" source={all}></Image>
                    </View>
                    <Text className="font-semibold">All</Text>
                </View>
            </View>

            <View className="mt-10 px-5">
                <Text className="font-semibold text-2xl">Top Picks</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="my-5">
                    {topMeals.map((meal, index) => (
                        <TouchableOpacity key={index} className="w-[230px] h-fit mr-3 rounded-xl overflow-hidden relative" style={{ backgroundColor: theme.surface }}>
                            <Image className="w-full h-36 rounded-t-xl" source={{ uri: meal.strMealThumb }} />
                            <Ionicons className="absolute top-0 left-0 p-2 bg-white/40 rounded-full " name="heart-outline" size={30} style={{ color: "red" }} />
                            <Text className="text-lg font-semibold px-2 pt-2 w-full truncate" numberOfLines={1} style={{ color: theme.text }}>{meal.strMeal}</Text>
                            <View className="flex-row gap-5 px-2 py-1">
                                <Ionicons className="" style={{ color: "green" }} name='bar-chart-outline' size={15}> <Text className="text-sm" style={{ color: theme.text }}> Easy</Text></Ionicons>
                                <Ionicons className="" style={{ color: "green" }} name='time-outline' size={16}> <Text className="text-sm" style={{ color: theme.text }}> 15min</Text></Ionicons>
                            </View>
                            <View className="flex-row justify-between p-2">
                                <Text className="text-sm">By: Chef Ogba</Text>
                                <Text className="font-medium" style={{ color: theme.primary }}>{"★".repeat(Math.floor(4.7))}{"☆".repeat(5 - Math.floor(4.7))} 4.7</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text className="font-semibold text-2xl my-5">More Meals</Text>
                {moreMeals.map((meal, index) => (
                    <TouchableOpacity className="w-full h-[100px] flex-row justify-between mb-3 rounded-lg" key={index} style={{ backgroundColor: theme.surface }} >
                        <View className="h-full w-[90%] flex-row gap-2">
                            <Image className="w-[120px] h-full rounded-lg" source={{ uri: meal.strMealThumb }} />
                            <View className="flex-col justify-between">
                                <Text className="text-lg font-semibold mt-2 w-full truncate" numberOfLines={1} >{meal.strMeal}</Text>
                                <View className="flex-row gap-5">
                                    <Ionicons className="" style={{ color: "green" }} name='bar-chart-outline' size={15}> <Text className="text-sm" style={{ color: theme.text }}> Easy</Text></Ionicons>
                                    <Ionicons className="" style={{ color: "green" }} name='time-outline' size={15}> <Text className="text-sm" style={{ color: theme.text }}> 15min</Text></Ionicons>
                                </View>
                                <View className="flex-row gap-8 p-2">
                                    <Text className="text-sm">By: Chef Ogba</Text>
                                    <Text className="font-medium" style={{ color: theme.primary }}>{"★"} 4.7</Text>
                                </View>
                            </View>
                        </View>
                        <Ionicons className="p-2 -ml-3" name="heart-outline" size={30} style={{ color: "red" }} />
                    </TouchableOpacity>
                ))}

            </View>
        </ScrollView>
    )
};

export default Index;