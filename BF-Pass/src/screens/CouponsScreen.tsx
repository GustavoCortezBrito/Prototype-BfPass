import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { CouponCard } from '../components/CouponCard';
import { mockCoupons } from '../mock/data';
import { colors } from '../utils/colors';
import { calculateDistance, formatDistance } from '../utils/location';
import { Coupon } from '../types';

interface CouponWithDistance extends Coupon {
  distance?: number;
}

export const CouponsScreen = ({ navigation }: any) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [sortedCoupons, setSortedCoupons] = useState<CouponWithDistance[]>(mockCoupons);
  const [sortByDistance, setSortByDistance] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (location && sortByDistance) {
      const couponsWithDistance = mockCoupons
        .map((coupon) => {
          if (coupon.latitude && coupon.longitude) {
            const distance = calculateDistance(
              location.coords.latitude,
              location.coords.longitude,
              coupon.latitude,
              coupon.longitude
            );
            return { ...coupon, distance };
          }
          return { ...coupon, distance: 999 };
        })
        .sort((a, b) => (a.distance || 999) - (b.distance || 999));

      setSortedCoupons(couponsWithDistance);
    } else {
      setSortedCoupons(mockCoupons);
    }
  }, [location, sortByDistance]);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert(
          'Localização',
          'Permita o acesso à localização para ver lojas próximas',
          [{ text: 'OK' }]
        );
        setLoadingLocation(false);
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      
      setLocation(currentLocation);
    } catch (error) {
      console.error('Erro ao obter localização:', error);
    } finally {
      setLoadingLocation(false);
    }
  };



  const toggleSort = () => {
    if (!location) {
      Alert.alert(
        'Localização não disponível',
        'Ative a localização para ordenar por proximidade'
      );
      return;
    }
    setSortByDistance(!sortByDistance);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {navigation && (
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>Cupons Disponíveis</Text>
        <View style={styles.headerInfo}>
          <Text style={styles.subtitle}>{mockCoupons.length} ofertas ativas</Text>
          {location && (
            <View style={styles.locationBadge}>
              <Ionicons name="location" size={14} color={colors.success} />
              <Text style={styles.locationText}>Localização ativa</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterButton, sortByDistance && styles.filterButtonActive]}
          onPress={toggleSort}
        >
          <Ionicons 
            name={sortByDistance ? "location" : "location-outline"} 
            size={20} 
            color={sortByDistance ? colors.white : colors.primary} 
          />
          <Text style={[styles.filterText, sortByDistance && styles.filterTextActive]}>
            {sortByDistance ? 'Mais Próximos' : 'Ordenar por Distância'}
          </Text>
        </TouchableOpacity>
      </View>

      {loadingLocation ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Obtendo sua localização...</Text>
        </View>
      ) : (
        <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
          {sortedCoupons.map((coupon) => (
            <View key={coupon.id}>
              <CouponCard
                coupon={coupon}
                onPress={() => navigation.navigate('CouponDetail', { coupon })}
              />
              {coupon.distance !== undefined && coupon.distance < 999 && sortByDistance && (
                <View style={styles.distanceBadge}>
                  <Ionicons name="navigate" size={16} color={colors.primary} />
                  <Text style={styles.distanceText}>
                    {formatDistance(coupon.distance)} de você
                  </Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    paddingTop: 56,
    backgroundColor: colors.secondary,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 36,
    left: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 4,
    paddingLeft: 48,
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
    paddingLeft: 48,
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.9,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.success + '30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  locationText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '600',
  },
  filterContainer: {
    padding: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  filterTextActive: {
    color: colors.white,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: colors.textLight,
  },
  distanceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.primary + '15',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: -8,
    marginBottom: 8,
    marginHorizontal: 16,
    alignSelf: 'flex-start',
  },
  distanceText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
});
