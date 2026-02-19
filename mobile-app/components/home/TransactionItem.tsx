import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/constants/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';

interface TransactionItemProps {
    title: string;
    category: string;
    amount: string;
    date: string;
    type: 'income' | 'expense';
    icon: keyof typeof MaterialIcons.glyphMap;
}

export function TransactionItem({ title, category, amount, date, type, icon }: TransactionItemProps) {
    const { theme } = useTheme();
    const { colors, spacing, borderRadius } = theme;

    return (
        <View style={[styles.container, {
            backgroundColor: colors.surface,
            padding: spacing.md,
            borderRadius: borderRadius.lg,
            marginBottom: spacing.sm,
        }]}>
            <View style={[styles.iconContainer, { backgroundColor: colors.gray100 }]}>
                <MaterialIcons name={icon} size={24} color={type === 'income' ? colors.income : colors.expense} />
            </View>

            <View style={styles.content}>
                <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
                <Text style={[styles.category, { color: colors.textSecondary }]}>{category}</Text>
            </View>

            <View style={styles.rightContent}>
                <Text style={[styles.amount, { color: type === 'income' ? colors.income : colors.expense }]}>
                    {type === 'income' ? '+' : '-'}{amount}
                </Text>
                <Text style={[styles.date, { color: colors.textTertiary }]}>{date}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 2,
    },
    category: {
        fontSize: 12,
    },
    rightContent: {
        alignItems: 'flex-end',
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    date: {
        fontSize: 12,
    },
});
