# 🎨 Theme System Documentation

## Overview

The ReteamNow app uses a centralized theme system that makes it easy to maintain consistent styling across the entire application. Any changes to colors, fonts, or other design tokens in the configuration files will automatically reflect throughout the app.

## 📁 File Structure

```
src/config/
├── colors.ts        # Color palette and color utilities
├── typography.ts    # Font sizes, weights, and text styles
├── theme.ts         # Main theme configuration combining all design tokens
└── themeExamples.tsx # Usage examples and documentation
```

## 🎯 Quick Start

### 1. Import the theme in your component:
```typescript
import { theme } from '../config/theme';
```

### 2. Extract the values you need:
```typescript
const { colors, typography, spacing, borderRadius, shadows, commonStyles } = theme;
```

### 3. Use in your StyleSheet:
```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  title: {
    ...typography.h1,
    color: colors.text,
  },
  card: {
    ...commonStyles.card, // Pre-built card style
  },
});
```

## 🎨 Available Design Tokens

### Colors
- **Brand Colors**: `primary`, `secondary`, `success`
- **System Colors**: `warning`, `danger`, `info`
- **Background Colors**: `background`, `surface`, `accent`
- **Text Colors**: `text`, `textSecondary`, `textLight`
- **Interactive Colors**: `active`, `inactive`, `disabled`

### Typography
- **Headings**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- **Body Text**: `body`, `bodyLarge`, `bodySmall`
- **UI Text**: `buttonLarge`, `caption`, `label`

### Spacing
- **Scale**: `xs` (4), `sm` (8), `md` (16), `lg` (24), `xl` (32), `xxl` (48)

### Border Radius
- **Scale**: `xs` (2), `sm` (4), `md` (8), `lg` (12), `xl` (16), `full` (9999)

### Shadows
- **Presets**: `none`, `xs`, `sm`, `md`, `lg`, `xl`

## 🚀 Common Styles

Pre-built component styles for quick implementation:

```typescript
// Use pre-built styles
<View style={commonStyles.card}>
<Text style={commonStyles.headerTitle}>
<TouchableOpacity style={commonStyles.buttonPrimary}>
```

Available common styles:
- `container`, `card`, `cardSmall`
- `header`, `headerTitle`, `headerSubtitle`
- `buttonPrimary`, `buttonSecondary`, `buttonOutline`
- `input`, `section`, `divider`
- `errorContainer`, `successContainer`

## 📱 Screen Styles

Pre-built screen layouts:

```typescript
// Tab screen layout
<View style={screenStyles.tabScreen}>
  <ScrollView style={screenStyles.tabScrollContainer}>

// Settings screen items
<View style={screenStyles.settingsItem}>
```

## 🔧 Customization

### To change colors app-wide:
Edit `src/config/colors.ts`:
```typescript
export const colors = {
  primary: '#YOUR_NEW_COLOR',
  secondary: '#YOUR_ACCENT_COLOR',
  // ... other colors
};
```

### To change typography:
Edit `src/config/typography.ts`:
```typescript
export const fontSizes = {
  h1: 36, // Make headings larger
  body: 16, // Make body text larger
  // ...
};
```

### To change spacing:
Edit `src/config/theme.ts`:
```typescript
export const spacing = {
  md: 20, // Increase default spacing
  // ...
};
```

## ✅ Best Practices

1. **Always use theme values** instead of hardcoded numbers
2. **Use common styles** when possible for consistency
3. **Prefer semantic color names** (e.g., `colors.text` instead of `colors.gray900`)
4. **Use spacing scale** for consistent layouts
5. **Leverage typography presets** for text consistency

## 🎯 Examples

### Basic Component
```typescript
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.md,
  },
  button: {
    ...commonStyles.buttonPrimary,
  },
  buttonText: {
    ...commonStyles.buttonText,
  },
});
```

### Using Common Styles
```typescript
const QuickComponent = () => (
  <View style={commonStyles.container}>
    <View style={commonStyles.header}>
      <Text style={commonStyles.headerTitle}>Quick Setup</Text>
    </View>
    <View style={commonStyles.card}>
      <Text style={[typography.body, { color: colors.text }]}>
        This uses common styles for rapid development.
      </Text>
    </View>
  </View>
);
```

## 🔄 Theme Updates

When you update any theme file, the changes automatically apply to:
- ✅ All screens using the theme
- ✅ All components importing theme values
- ✅ All common styles and presets

## 📋 Current Theme Status

The theme system is currently implemented in:
- ✅ SettingsScreen (updated to use theme)
- ⏳ HomeScreen (needs update)
- ⏳ AttendanceScreen (needs update)
- ⏳ AnnouncementsScreen (needs update)
- ⏳ FunZoneScreen (needs update)
- ⏳ Navigation components (needs update)

## 🎉 Benefits

1. **Consistency**: All components follow the same design language
2. **Maintainability**: Change colors/fonts in one place
3. **Speed**: Common styles accelerate development
4. **Flexibility**: Easy to implement design changes
5. **Scalability**: New components automatically follow design system
6. **Dark Mode Ready**: Easy to implement theme switching

---

*This theme system ensures your app maintains a professional, consistent appearance that can be easily modified as design requirements evolve.*
