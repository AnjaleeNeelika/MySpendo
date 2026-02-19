import { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/constants/ThemeContext";
import { Button } from "@/components/ui/Button";
import { useRouter } from "expo-router";
import { SummaryCard } from "@/components/home/SummaryCard";
import { TransactionItem } from "@/components/home/TransactionItem";
import { ProfileMenu } from "@/components/home/ProfileMenu";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

const TRANSACTIONS = [
    { id: '1', title: 'Salary', category: 'Monthly', amount: '$5,000.00', date: 'Feb 15, 2026', type: 'income' as const, icon: 'payments' as const },
    { id: '2', title: 'Grocery Store', category: 'Food', amount: '$85.20', date: 'Feb 18, 2026', type: 'expense' as const, icon: 'shopping-cart' as const },
    { id: '3', title: 'Rent', category: 'Housing', amount: '$1,200.00', date: 'Feb 1, 2026', type: 'expense' as const, icon: 'home' as const },
    { id: '4', title: 'Freelance Work', category: 'Design', amount: '$450.00', date: 'Feb 17, 2026', type: 'income' as const, icon: 'work' as const },
    { id: '5', title: 'Netflix', category: 'Entertainment', amount: '$15.99', date: 'Feb 10, 2026', type: 'expense' as const, icon: 'subscriptions' as const },
];

export default function HomeScreen() {
    const { theme } = useTheme();
    const { colors, spacing, typography } = theme;
    const router = useRouter();
    const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

    const handleLogout = () => {
        router.replace('/(auth)/login');
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>MySpendo Dashboard</Text>
                {/* <Button title="Log Out" onPress={handleLogout} variant="outline" /> */}
                <TouchableOpacity
                    onPress={() => setIsProfileMenuVisible(true)}
                    style={[styles.profileButton, { backgroundColor: colors.primary }]}
                >
                    <Octicons name="person" size={24} color={colors.white} />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <SummaryCard
                    balance="$4,148.81"
                    income="$5,450.00"
                    expenses="$1,301.19"
                />

                <View style={styles.sectionHeader}>
                    <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Quick Actions</Text>
                </View>

                <View style={styles.actionsRow}>
                    <View style={styles.actionButton}>
                        <Button title="Add Expense" onPress={() => { }} variant="primary" />
                    </View>
                    <View style={{ width: spacing.md }} />
                    <View style={styles.actionButton}>
                        <Button title="Add Income" onPress={() => { }} variant="secondary" />
                    </View>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Recent Transactions</Text>
                    <Text style={[styles.seeAll, { color: colors.primary }]}>See All</Text>
                </View>

                {TRANSACTIONS.map((item) => (
                    <TransactionItem key={item.id} {...item} />
                ))}

                <View style={{ height: 40 }} />
            </ScrollView>

            <ProfileMenu
                isVisible={isProfileMenuVisible}
                onClose={() => setIsProfileMenuVisible(false)}
                onLogout={handleLogout}
            />
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    profileButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 24,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAll: {
        fontSize: 14,
        fontWeight: '600',
    },
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        flex: 1,
    }
})