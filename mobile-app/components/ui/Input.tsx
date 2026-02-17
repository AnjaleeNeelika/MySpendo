import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '@/constants/ThemeContext';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function Input({ label, error, style, ...props }: InputProps) {
  const { theme } = useTheme();
  const { colors, typography, spacing, borderRadius } = theme;

  return (
    <View style={{ marginBottom: spacing.md, width: '100%' }}>
      {label && (
        <Text style={{
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.medium,
          marginBottom: 6,
          color: colors.textPrimary,
        }}>
          {label}
        </Text>
      )}
      <TextInput
        style={[
          {
            height: 48,
            borderWidth: 1,
            borderColor: error ? colors.error : colors.border,
            borderRadius: borderRadius.md,
            paddingHorizontal: spacing.md - 4,
            fontSize: typography.fontSize.base,
            backgroundColor: colors.background,
            color: colors.textPrimary,
          },
          style
        ]}
        placeholderTextColor={colors.gray400}
        {...props}
      />
      {error && (
        <Text style={{
          color: colors.error,
          fontSize: typography.fontSize.xs,
          marginTop: 4,
        }}>
          {error}
        </Text>
      )}
    </View>
  );
}

