import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '@/constants/ThemeContext';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({ title, onPress, variant = 'primary', isLoading, disabled }: ButtonProps) {
  const { theme } = useTheme();
  const { colors, typography, spacing, borderRadius } = theme;

  const getBackgroundColor = () => {
    if (disabled) return colors.gray300;
    switch (variant) {
      case 'primary': return colors.primary;
      case 'secondary': return colors.secondary;
      case 'outline': return 'transparent';
      default: return colors.primary;
    }
  };

  const getTextColor = () => {
    if (disabled) return colors.gray500;
    if (variant === 'outline') return colors.primary;
    return colors.white;
  };

  return (
    <TouchableOpacity
      style={[
        {
          paddingVertical: spacing.md - 4,
          paddingHorizontal: spacing.lg,
          borderRadius: borderRadius.md,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: spacing.sm,
          minHeight: 48,
          backgroundColor: getBackgroundColor(),
        },
        variant === 'outline' && {
          borderWidth: 1,
          borderColor: colors.primary,
        }
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
    >
      {isLoading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Text style={{
          fontSize: typography.fontSize.base,
          fontWeight: typography.fontWeight.semibold,
          color: getTextColor(),
        }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

