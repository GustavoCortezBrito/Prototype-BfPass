import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';
import { SplashScreen } from '../screens/SplashScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { DashboardScreen } from '../screens/DashboardScreen';
import { CouponsScreen } from '../screens/CouponsScreen';
import { CouponDetailScreen } from '../screens/CouponDetailScreen';
import { MyCouponsScreen } from '../screens/MyCouponsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { AdminPanelScreen } from '../screens/AdminPanelScreen';
import { AdminCreateUserScreen } from '../screens/AdminCreateUserScreen';
import { AdminEditUserScreen } from '../screens/AdminEditUserScreen';
import { colors } from '../utils/colors';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {!user ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: 'Criar Conta' }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Coupons"
              component={CouponsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CouponDetail"
              component={CouponDetailScreen}
              options={{ title: 'Detalhes do Cupom' }}
            />
            <Stack.Screen
              name="MyCoupons"
              component={MyCouponsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
            {user.role === 'admin' && (
              <>
                <Stack.Screen
                  name="AdminPanel"
                  component={AdminPanelScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AdminCreateUser"
                  component={AdminCreateUserScreen}
                  options={{ title: 'Criar Usuário' }}
                />
                <Stack.Screen
                  name="AdminEditUser"
                  component={AdminEditUserScreen}
                  options={{ title: 'Editar Usuário' }}
                />
              </>
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
