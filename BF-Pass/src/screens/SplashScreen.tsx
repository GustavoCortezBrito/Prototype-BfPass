import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../utils/colors';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>BF<Text style={styles.logoAccent}>pass</Text></Text>
      <Text style={styles.subtitle}>Seu passaporte para o bem-estar</Text>
      <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 56,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  logoAccent: {
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.8,
    fontStyle: 'italic',
  },
  loader: {
    marginTop: 32,
  },
});
