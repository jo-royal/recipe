import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import apiService from '../../services/api';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [meals, setMeals] = useState([]);
    const router = useRouter();

    const handleSearch = async () => {
        if (!query) return;

        try {
            const res = await apiService.getSearch(query)
            setMeals(res.data.meals || []); // fallback to empty if null
        } catch (err) {
            console.error('Search failed', err);
        }
    };

    return (
        <View className="flex-1 p-4 bg-white">
            <Text className="text-xl font-bold mb-4">Search Meals</Text>

            <View className="flex-row items-center gap-2 mb-4">
                <TextInput
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="e.g. chicken, pasta..."
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={handleSearch}
                />
            </View>

            <FlatList
                data={meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className="flex-row gap-3 mb-4 items-center"
                        onPress={() => router.push(`/${item.idMeal}`)}
                    >
                        <Image
                            source={{ uri: item.strMealThumb }}
                            className="w-20 h-20 rounded-lg"
                        />
                        <View className="flex-1">
                            <Text className="text-base font-semibold">{item.strMeal}</Text>
                            <Text className="text-xs text-gray-500">{item.strCategory} - {item.strArea}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

            {meals.length === 0 && query && (
                <Text className="text-center text-gray-500">No results found.</Text>
            )}
        </View>
    );
};

export default SearchPage;
