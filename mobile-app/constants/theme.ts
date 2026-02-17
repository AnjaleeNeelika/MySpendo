// Light Mode Colors
export const lightColors = {
    // Primary Colors
    primary: '#007AFF',
    primaryDark: '#0051D5',
    primaryLight: '#4DA2FF',

    // Secondary Colors
    secondary: '#5856D6',
    secondaryDark: '#3634A3',
    secondaryLight: '#7D7BE8',

    // Accent Colors
    accent: '#34C759',
    accentDark: '#248A3D',
    accentLight: '#5DD97C',

    // Neutral Colors
    white: '#FFFFFF',
    black: '#000000',
    gray50: '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',

    // Semantic Colors
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#007AFF',

    // Background Colors
    background: '#FFFFFF',
    backgroundSecondary: '#F9FAFB',
    surface: '#FFFFFF',

    // Text Colors
    textPrimary: '#000000',
    textSecondary: '#6B7280',
    textTertiary: '#9CA3AF',
    textInverse: '#FFFFFF',

    // Border Colors
    border: '#E5E7EB',
    borderDark: '#D1D5DB',
};

// Dark Mode Colors
export const darkColors = {
    // Primary Colors
    primary: '#0A84FF',
    primaryDark: '#0066CC',
    primaryLight: '#409CFF',

    // Secondary Colors
    secondary: '#5E5CE6',
    secondaryDark: '#4846B8',
    secondaryLight: '#7D7AFF',

    // Accent Colors
    accent: '#30D158',
    accentDark: '#248A3D',
    accentLight: '#5DD97C',

    // Neutral Colors
    white: '#FFFFFF',
    black: '#000000',
    gray50: '#1C1C1E',
    gray100: '#2C2C2E',
    gray200: '#3A3A3C',
    gray300: '#48484A',
    gray400: '#636366',
    gray500: '#8E8E93',
    gray600: '#AEAEB2',
    gray700: '#C7C7CC',
    gray800: '#D1D1D6',
    gray900: '#E5E5EA',

    // Semantic Colors
    success: '#30D158',
    warning: '#FF9F0A',
    error: '#FF453A',
    info: '#0A84FF',

    // Background Colors
    background: '#000000',
    backgroundSecondary: '#1C1C1E',
    surface: '#1C1C1E',

    // Text Colors
    textPrimary: '#FFFFFF',
    textSecondary: '#AEAEB2',
    textTertiary: '#8E8E93',
    textInverse: '#000000',

    // Border Colors
    border: '#38383A',
    borderDark: '#48484A',
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
