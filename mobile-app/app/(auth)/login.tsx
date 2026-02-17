import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useTheme } from '@/constants/ThemeContext';

export default function LoginScreen() {
    const router = useRouter();
    const { theme } = useTheme();
    const { colors } = theme;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Alert.alert('Success', 'Logged in successfully!');
            // Navigate to main app (placeholder)
            router.replace('/(home)');
        }, 1500);
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: colors.textPrimary }]}>Welcome Back</Text>
                <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Sign in to continue</Text>
            </View>

            <View style={styles.form}>
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Button
                    title="Log In"
                    onPress={handleLogin}
                    isLoading={isLoading}
                />

                <View style={styles.footer}>
                    <Text style={[styles.footerText, { color: colors.textSecondary }]}>Don't have an account? </Text>
                    <Link href="/(auth)/signup" asChild>
                        <TouchableOpacity>
                            <Text style={[styles.link, { color: colors.primary }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    header: {
        marginBottom: 32,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
    },
    form: {
        width: '100%',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    footerText: {
        fontSize: 14,
    },
    link: {
        fontSize: 14,
        fontWeight: '600',
    },
});
