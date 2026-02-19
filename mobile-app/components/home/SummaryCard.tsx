import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/constants/ThemeContext';

interface SummaryCardProps {
    balance: string;
    income: string;
    expenses: string;
}

export function SummaryCard({ balance, income, expenses }: SummaryCardProps) {
    const { theme } = useTheme();
    const { colors, spacing, borderRadius, shadows } = theme;

    return (
        <View style={[styles.card, {
            backgroundColor: colors.primary,
            padding: spacing.lg,
            borderRadius: borderRadius.xl,
            ...shadows.lg
        }]}>
            <Text style={[styles.label, { color: colors.white, opacity: 0.8 }]}>Total Balance</Text>
            <Text style={[styles.balance, { color: colors.white }]}>{balance}</Text>

            <View style={styles.row}>
                <View style={styles.stat}>
                    <Text style={[styles.statLabel, { color: colors.white, opacity: 0.8 }]}>Income</Text>
                    <Text style={[styles.statValue, { color: colors.white }]}>{income}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.stat}>
                    <Text style={[styles.statLabel, { color: colors.white, opacity: 0.8 }]}>Expenses</Text>
                    <Text style={[styles.statValue, { color: colors.white }]}>{expenses}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 4,
    },
    balance: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    stat: {
        flex: 1,
    },
    statLabel: {
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 2,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginHorizontal: 16,
    },
});
