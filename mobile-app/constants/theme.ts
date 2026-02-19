// Light Mode Colors
export const lightColors = {
    // Primary Colors - Professional Indigo
    primary: '#6366F1',
    primaryDark: '#4F46E5',
    primaryLight: '#818CF8',

    // Secondary Colors - Slate
    secondary: '#64748B',
    secondaryDark: '#475569',
    secondaryLight: '#94A3B8',

    // Accent Colors - Professional Cyan
    accent: '#06B6D4',
    accentDark: '#0891B2',
    accentLight: '#22D3EE',

    // Financial Semantic Colors
    income: '#10B981',   // Emerald
    expense: '#EF4444',  // Red
    savings: '#3B82F6',  // Blue

    // Neutral Colors
    white: '#FFFFFF',
    black: '#020617',
    gray50: '#F8FAFC',
    gray100: '#F1F5F9',
    gray200: '#E2E8F0',
    gray300: '#CBD5E1',
    gray400: '#94A3B8',
    gray500: '#64748B',
    gray600: '#475569',
    gray700: '#334155',
    gray800: '#1E293B',
    gray900: '#0F172A',

    // Semantic Colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#6366F1',

    // Background Colors
    background: '#F8FAFC',
    backgroundSecondary: '#F1F5F9',
    surface: '#FFFFFF',

    // Text Colors
    textPrimary: '#0F172A',
    textSecondary: '#64748B',
    textTertiary: '#94A3B8',
    textInverse: '#FFFFFF',

    // Border Colors
    border: '#E2E8F0',
    borderDark: '#CBD5E1',
};

// Dark Mode Colors
export const darkColors = {
    // Primary Colors - Professional Indigo
    primary: '#818CF8',
    primaryDark: '#6366F1',
    primaryLight: '#A5B4FC',

    // Secondary Colors - Slate
    secondary: '#94A3B8',
    secondaryDark: '#64748B',
    secondaryLight: '#CBD5E1',

    // Accent Colors - professional Cyan
    accent: '#22D3EE',
    accentDark: '#06B6D4',
    accentLight: '#67E8F9',

    // Financial Semantic Colors
    income: '#34D399',   // Emerald
    expense: '#F87171',  // Red
    savings: '#60A5FA',  // Blue

    // Neutral Colors
    white: '#FFFFFF',
    black: '#020617',
    gray50: '#0F172A',
    gray100: '#1E293B',
    gray200: '#334155',
    gray300: '#475569',
    gray400: '#64748B',
    gray500: '#94A3B8',
    gray600: '#CBD5E1',
    gray700: '#E2E8F0',
    gray800: '#F1F5F9',
    gray900: '#F8FAFC',

    // Semantic Colors
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
    info: '#818CF8',

    // Background Colors
    background: '#020617',
    backgroundSecondary: '#0F172A',
    surface: '#0F172A',

    // Text Colors
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    textInverse: '#020617',

    // Border Colors
    border: '#1E293B',
    borderDark: '#334155',
};

// Typography (same for both themes)
export const typography = {
    // Font Sizes
    fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 28,
        '4xl': 32,
        '5xl': 36,
    },

    // Font Weights
    fontWeight: {
        normal: '400' as const,
        medium: '500' as const,
        semibold: '600' as const,
        bold: '700' as const,
    },

    // Line Heights
    lineHeight: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.75,
    },
};

// Spacing Scale (same for both themes)
export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
};

// Border Radius (same for both themes)
export const borderRadius = {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
};

// Shadows (same for both themes)
export const shadows = {
    sm: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    md: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    lg: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
};

// Default to light colors for backward compatibility
export const colors = lightColors;

// Export theme objects
export const lightTheme = {
    colors: lightColors,
    typography,
    spacing,
    borderRadius,
    shadows,
};

export const darkTheme = {
    colors: darkColors,
    typography,
    spacing,
    borderRadius,
    shadows,
};

export const theme = lightTheme;

export default theme;
