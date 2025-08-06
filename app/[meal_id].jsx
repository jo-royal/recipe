import { View, Text, Image, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import apiService from '../services/api';
import { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';


const MealDetail = () => {

    const [meal, setMeal] = useState("")

    const { meal_id } = useLocalSearchParams();

    const getProduct = async (id = meal_id) => {
        try {
            const res = await apiService.getProduct(id);
            setMeal(res.data?.meals[0])
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }


    useEffect(() => {
        setMeal("")
        getProduct();
    }, [meal_id]);

    const renderIngredients = () => {
        const items = [];
        for (let i = 1; i <= 20; i++) {
            const ing = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ing && ing.trim()) {
                items.push(
                    <Text key={i} style={styles.ingredientItem}>• {measure?.trim()} {ing.trim()}</Text>
                );
            }
        }
        return items;
    };



    const videoId = meal.strYoutube?.split('v=')[1];
    // Construct the embed URL
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    if (!meal) {
        return <Text style={styles.loading}>Loading meal details...</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: meal.strMealThumb }} style={styles.image} />

            <Text style={styles.title}>{meal.strMeal}</Text>
            <Text style={styles.meta}>Category: {meal.strCategory} • Area: {meal.strArea}</Text>

            <Text style={styles.sectionTitle}>Ingredients</Text>
            <View style={styles.ingredientList}>
                {renderIngredients()}
            </View>

            <Text style={styles.sectionTitle}>Instructions</Text>
            <Text style={styles.instructions}>{meal.strInstructions}</Text>

            {meal.strYoutube ? (
                <>
                    <Text style={styles.sectionTitle}>Watch Tutorial</Text>
                    <WebView
                        source={{ uri: embedUrl }}
                        style={{ height: 200, marginTop: 10 }}
                        allowsFullscreenVideo
                    />
                </>
            ) : null}

            {meal.strSource ? (
                <>
                    <Text style={styles.sectionTitle}>Source</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(meal.strSource)}>
                        <Text style={styles.linkText}>{meal.strSource}</Text>
                    </TouchableOpacity>
                </>
            ) : null}
        </ScrollView>
    );
};

export default MealDetail;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingBottom: 40,
    },
    loading: {
        padding: 20,
        fontSize: 16,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    meta: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 16,
        marginBottom: 6,
    },
    ingredientList: {
        marginLeft: 8,
    },
    ingredientItem: {
        fontSize: 14,
        marginBottom: 2,
    },
    instructions: {
        fontSize: 15,
        lineHeight: 22,
        marginTop: 4,
    },
    linkButton: {
        backgroundColor: '#f4511e',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    linkText: {
        color: 'gray',
        fontWeight: '600',
    },
});