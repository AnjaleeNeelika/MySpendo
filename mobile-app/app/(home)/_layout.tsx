import { Tabs } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import { useTheme } from "@/constants/ThemeContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreenLayout() {
    const { theme } = useTheme();
    const { colors } = theme;
    const insets = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.border,
                    paddingTop: 8,
                    paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
                    height: 60 + (insets.bottom > 0 ? insets.bottom : 8),
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "500",
                    marginBottom: 4,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <Octicons name="home" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: "History",
                    tabBarIcon: ({ color }) => <Octicons name="history" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="budget"
                options={{
                    title: "Budget",
                    tabBarIcon: ({ color }) => <Octicons name="briefcase" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="stats"
                options={{
                    title: "Stats",
                    tabBarIcon: ({ color }) => <Octicons name="graph" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}