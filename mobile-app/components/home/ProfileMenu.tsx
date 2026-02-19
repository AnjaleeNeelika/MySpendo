import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@/constants/ThemeContext';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

interface ProfileMenuProps {
    isVisible: boolean;
    onClose: () => void;
    onLogout: () => void;
}

export function ProfileMenu({ isVisible, onClose, onLogout }: ProfileMenuProps) {
    const { theme } = useTheme();
    const { colors, spacing, borderRadius, shadows } = theme;

    return (
        <Modal
            visible={isVisible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <View style={[styles.menu, {
                            backgroundColor: colors.surface,
                            padding: spacing.md,
                            borderRadius: borderRadius.lg,
                            ...shadows.lg
                        }]}>
                            <View style={styles.header}>
                                <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
                                    <Octicons name="person" size={24} color={colors.white} />
                                </View>
                                <View>
                                    <Text style={[styles.userName, { color: colors.textPrimary }]}>Anjalee Neelika</Text>
                                    <Text style={[styles.userEmail, { color: colors.textSecondary }]}>anjalee@example.com</Text>
                                </View>
                            </View>

                            <View style={[styles.divider, { backgroundColor: colors.border }]} />

                            <TouchableOpacity style={styles.menuItem} onPress={() => { onClose(); /* Profile logic */ }}>
                                <MaterialIcons name="person-outline" size={22} color={colors.textPrimary} />
                                <Text style={[styles.menuText, { color: colors.textPrimary }]}>My Profile</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.menuItem} onPress={() => { onClose(); /* Settings logic */ }}>
                                <MaterialIcons name="settings" size={22} color={colors.textPrimary} />
                                <Text style={[styles.menuText, { color: colors.textPrimary }]}>Settings</Text>
                            </TouchableOpacity>

                            <View style={[styles.divider, { backgroundColor: colors.border }]} />

                            <TouchableOpacity style={styles.menuItem} onPress={() => { onClose(); onLogout(); }}>
                                <MaterialIcons name="logout" size={22} color={colors.error} />
                                <Text style={[styles.menuText, { color: colors.error }]}>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingTop: 80,
        paddingRight: 16,
    },
    menu: {
        width: 250,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
    },
    userEmail: {
        fontSize: 12,
    },
    divider: {
        height: 1,
        width: '100%',
        marginVertical: 12,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    menuText: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 12,
    },
});
