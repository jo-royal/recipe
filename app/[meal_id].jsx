import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';


const MealDetail = () => {
    const { meal_id } = useLocalSearchParams();
    return (
        <View>
            <Text>MealDetail {meal_id}</Text>
        </View>
    )
}

export default MealDetail;