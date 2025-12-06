# 🎨 Guia de Customização - BF Pass

## 📋 Índice

1. [Cores](#cores)
2. [Fontes](#fontes)
3. [Ícones](#ícones)
4. [Imagens](#imagens)
5. [Textos](#textos)
6. [Componentes](#componentes)
7. [Telas](#telas)
8. [Navegação](#navegação)

---

## 🎨 Cores

### Alterar Paleta de Cores

**Arquivo**: `src/utils/colors.ts`

```typescript
export const colors = {
  primary: '#8B5CF6',        // Roxo principal
  primaryDark: '#7C3AED',    // Roxo escuro
  secondary: '#A78BFA',      // Lilás
  accent: '#06B6D4',         // Verde água
  accentLight: '#67E8F9',    // Verde água claro
  success: '#10B981',        // Verde
  danger: '#EF4444',         // Vermelho
  warning: '#F59E0B',        // Amarelo
  background: '#F9FAFB',     // Fundo
  card: '#FFFFFF',           // Cards
  text: '#1F2937',           // Texto principal
  textLight: '#6B7280',      // Texto secundário
  border: '#E5E7EB',         // Bordas
  white: '#FFFFFF',
  black: '#000000',
};
```

### Exemplos de Paletas Alternativas

#### Paleta Azul/Verde
```typescript
primary: '#3B82F6',      // Azul
secondary: '#60A5FA',    // Azul claro
accent: '#10B981',       // Verde
```

#### Paleta Rosa/Laranja
```typescript
primary: '#EC4899',      // Rosa
secondary: '#F472B6',    // Rosa claro
accent: '#F97316',       // Laranja
```

#### Paleta Escura
```typescript
primary: '#6366F1',      // Índigo
secondary: '#818CF8',    // Índigo claro
accent: '#14B8A6',       // Teal
background: '#111827',   // Fundo escuro
card: '#1F2937',         // Card escuro
text: '#F9FAFB',         // Texto claro
```

---

## 🔤 Fontes

### Adicionar Fontes Customizadas

1. **Instalar expo-font**:
```bash
expo install expo-font
```

2. **Baixar fontes** (ex: Google Fonts)

3. **Criar pasta de assets**:
```
assets/fonts/
  ├── Poppins-Regular.ttf
  ├── Poppins-Bold.ttf
  └── Poppins-SemiBold.ttf
```

4. **Carregar fontes no App.tsx**:
```typescript
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
```

5. **Usar nas telas**:
```typescript
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
```

---

## 🎯 Ícones

### Trocar Ícones

**Biblioteca**: `@expo/vector-icons`

**Explorar ícones**: https://icons.expo.fyi/

### Exemplos de Uso

```typescript
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

// Ionicons (atual)
<Ionicons name="ticket" size={24} color={colors.primary} />

// Material Icons
<MaterialIcons name="local-offer" size={24} color={colors.primary} />

// Font Awesome
<FontAwesome name="ticket" size={24} color={colors.primary} />
```

### Ícones Customizados

Para usar ícones SVG customizados:

```bash
expo install react-native-svg
```

```typescript
import Svg, { Path } from 'react-native-svg';

const CustomIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
    <Path d="M..." fill={colors.primary} />
  </Svg>
);
```

---

## 🖼️ Imagens

### Alterar Imagens dos Cupons

**Arquivo**: `src/mock/data.ts`

```typescript
export const mockCoupons: Coupon[] = [
  {
    id: '1',
    imageUrl: 'https://sua-url-aqui.com/imagem.jpg',
    // ou usar imagem local:
    // imageUrl: require('../assets/images/cupom1.jpg'),
  },
];
```

### Adicionar Logo Customizado

1. **Adicionar imagem**:
```
assets/images/logo.png
```

2. **Usar na Splash Screen**:
```typescript
import { Image } from 'react-native';

<Image 
  source={require('../../assets/images/logo.png')}
  style={{ width: 120, height: 120 }}
/>
```

### Otimizar Imagens

```bash
# Instalar expo-image
expo install expo-image

# Usar no código
import { Image } from 'expo-image';

<Image
  source={{ uri: coupon.imageUrl }}
  style={styles.image}
  contentFit="cover"
  transition={200}
/>
```

---

## 📝 Textos

### Alterar Textos da Interface

#### Splash Screen
**Arquivo**: `src/screens/SplashScreen.tsx`
```typescript
<Text style={styles.logo}>BF Pass</Text>
<Text style={styles.subtitle}>Seu passaporte para o bem-estar</Text>
```

#### Dashboard
**Arquivo**: `src/screens/DashboardScreen.tsx`
```typescript
<Text style={styles.greeting}>Olá, {user?.name}! 👋</Text>
<Text style={styles.subtitle}>Bem-vindo ao BF Pass</Text>
```

### Internacionalização (i18n)

Para suportar múltiplos idiomas:

```bash
npm install i18n-js
```

```typescript
// src/i18n/index.ts
import { I18n } from 'i18n-js';

const i18n = new I18n({
  pt: {
    welcome: 'Bem-vindo',
    login: 'Entrar',
  },
  en: {
    welcome: 'Welcome',
    login: 'Sign In',
  },
});

export default i18n;

// Uso
import i18n from '../i18n';
<Text>{i18n.t('welcome')}</Text>
```

---

## 🧩 Componentes

### Customizar Button

**Arquivo**: `src/components/Button.tsx`

#### Adicionar nova variante
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
}

const buttonStyle = [
  styles.button,
  variant === 'danger' && styles.buttonDanger,
];

const styles = StyleSheet.create({
  buttonDanger: {
    backgroundColor: colors.danger,
  },
});
```

#### Adicionar tamanhos
```typescript
interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
}

const buttonStyle = [
  styles.button,
  size === 'small' && styles.buttonSmall,
  size === 'large' && styles.buttonLarge,
];

const styles = StyleSheet.create({
  buttonSmall: {
    paddingVertical: 12,
    minHeight: 44,
  },
  buttonLarge: {
    paddingVertical: 20,
    minHeight: 64,
  },
});
```

### Customizar Input

**Arquivo**: `src/components/Input.tsx`

#### Adicionar ícone à esquerda
```typescript
interface InputProps {
  leftIcon?: string;
}

<View style={styles.inputContainer}>
  {leftIcon && (
    <Ionicons name={leftIcon} size={20} color={colors.textLight} />
  )}
  <TextInput style={styles.input} />
</View>
```

### Customizar CouponCard

**Arquivo**: `src/components/CouponCard.tsx`

#### Alterar layout
```typescript
// Trocar de vertical para horizontal
<View style={styles.card}>
  <Image source={{ uri: coupon.imageUrl }} style={styles.imageHorizontal} />
  <View style={styles.content}>
    {/* Conteúdo */}
  </View>
</View>

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // Horizontal
  },
  imageHorizontal: {
    width: 120,
    height: '100%',
  },
});
```

---

## 📱 Telas

### Adicionar Nova Tela

1. **Criar arquivo**:
```typescript
// src/screens/NotificationsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
});
```

2. **Adicionar à navegação**:
```typescript
// src/navigation/AppNavigator.tsx
import { NotificationsScreen } from '../screens/NotificationsScreen';

<Stack.Screen
  name="Notifications"
  component={NotificationsScreen}
  options={{ title: 'Notificações' }}
/>
```

3. **Adicionar ao Dashboard**:
```typescript
// src/screens/DashboardScreen.tsx
const cards = [
  // ... cards existentes
  {
    title: 'Notificações',
    icon: 'notifications',
    color: colors.warning,
    screen: 'Notifications',
  },
];
```

---

## 🧭 Navegação

### Adicionar Tab Navigation

```bash
npm install @react-navigation/bottom-tabs
```

```typescript
// src/navigation/TabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Coupons') iconName = 'ticket';
          else if (route.name === 'Profile') iconName = 'person';
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Coupons" component={CouponsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
```

### Adicionar Drawer Navigation

```bash
npm install @react-navigation/drawer
```

```typescript
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Cupons" component={CouponsScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
```

---

## 🎭 Animações

### Adicionar Animações

```bash
expo install react-native-reanimated
```

```typescript
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';

const AnimatedButton = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = withSpring(0.95);
    setTimeout(() => {
      scale.value = withSpring(1);
    }, 100);
  };

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Pressione-me</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
```

---

## 🌙 Modo Escuro

### Implementar Dark Mode

1. **Criar tema**:
```typescript
// src/utils/theme.ts
export const lightTheme = {
  background: '#F9FAFB',
  card: '#FFFFFF',
  text: '#1F2937',
  textLight: '#6B7280',
};

export const darkTheme = {
  background: '#111827',
  card: '#1F2937',
  text: '#F9FAFB',
  textLight: '#9CA3AF',
};
```

2. **Criar contexto**:
```typescript
// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

3. **Usar nas telas**:
```typescript
const { theme } = useTheme();

<View style={[styles.container, { backgroundColor: theme.background }]}>
  <Text style={[styles.text, { color: theme.text }]}>
    Olá!
  </Text>
</View>
```

---

## 📦 Componentes Adicionais

### Adicionar Modal

```typescript
import { Modal } from 'react-native';

const [modalVisible, setModalVisible] = useState(false);

<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text>Conteúdo do Modal</Text>
      <Button title="Fechar" onPress={() => setModalVisible(false)} />
    </View>
  </View>
</Modal>
```

### Adicionar Loading Overlay

```typescript
// src/components/LoadingOverlay.tsx
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const LoadingOverlay = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
});
```

---

## 🎉 Dicas Finais

1. **Sempre teste** as mudanças em diferentes dispositivos
2. **Mantenha consistência** visual em todo o app
3. **Use variáveis** para cores e espaçamentos
4. **Documente** suas customizações
5. **Faça backup** antes de grandes mudanças
6. **Teste performance** após adicionar animações
7. **Valide acessibilidade** (contraste, tamanho de fonte)

---

## 📚 Recursos Úteis

- **Expo Docs**: https://docs.expo.dev/
- **React Native Docs**: https://reactnative.dev/
- **Color Palette Generator**: https://coolors.co/
- **Icon Explorer**: https://icons.expo.fyi/
- **Google Fonts**: https://fonts.google.com/
- **UI Inspiration**: https://dribbble.com/

---

Com este guia, você pode personalizar completamente o BF Pass de acordo com suas necessidades! 🚀
