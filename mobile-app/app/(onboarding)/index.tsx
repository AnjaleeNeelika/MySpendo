import { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/constants/ThemeContext';

const { width } = Dimensions.get('window');

interface OnboardingSlide {
    id: string;
    title: string;
    description: string;
    backgroundColor: string;
}

export default function OnboardingScreen() {
    const router = useRouter();
    const { theme } = useTheme();
    const { colors } = theme;
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides: OnboardingSlide[] = [
        {
            id: '1',
            title: 'Welcome to MySpendo',
            description: 'Your personal finance companion to track expenses and manage your budget.',
            backgroundColor: colors.primary,
        },
        {
            id: '2',
            title: 'Track Your Expenses',
            description: 'Easily log your daily expenses and categorize them for better insights.',
            backgroundColor: colors.secondary,
        },
        {
            id: '3',
            title: 'Gain Insights',
            description: 'Analyze your spending patterns and make smarter financial decisions.',
            backgroundColor: colors.accent,
        },
    ];

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        }
    };

    const handleSkip = () => {
        router.replace('/(auth)/login');
    };

    const handleGetStarted = () => {
        router.replace('/(auth)/login');
    };

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index || 0);
        }
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    const renderSlide = ({ item }: { item: OnboardingSlide }) => (
        <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.slideContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );

    const renderPagination = () => (
        <View style={styles.pagination}>
            {slides.map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.dot,
                        currentIndex === index ? styles.dotActive : styles.dotInactive,
                    ]}
                />
            ))}
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <FlatList
                ref={flatListRef}
                data={slides}
                renderItem={renderSlide}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />

            {renderPagination()}

            <View style={styles.footer}>
                {currentIndex < slides.length - 1 ? (
                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                            <Text style={styles.skipText}>Skip</Text>
                        </TouchableOpacity>
                        <Button title="Next" onPress={handleNext} variant="primary" />
                    </View>
                ) : (
                    <Button title="Get Started" onPress={handleGetStarted} variant="primary" />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    slideContent: {
        alignItems: 'center',
        maxWidth: 320,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#fff',
    },
    description: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 24,
        opacity: 0.9,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    dotActive: {
        backgroundColor: '#007AFF',
        width: 24,
    },
    dotInactive: {
        backgroundColor: '#ccc',
    },
    footer: {
        padding: 24,
        paddingBottom: 48,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    skipButton: {
        padding: 12,
    },
    skipText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
