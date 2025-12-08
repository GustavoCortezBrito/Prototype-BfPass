import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';
import { storageService } from '../services/storage';
import { RedeemedCoupon } from '../types';
import { colors } from '../utils/colors';

export const MyCouponsScreen = ({ navigation }: any) => {
  const { user } = useAuth();
  const [redeemedCoupons, setRedeemedCoupons] = useState<RedeemedCoupon[]>([]);

  useEffect(() => {
    loadCoupons();
  }, []);

  const loadCoupons = async () => {
    const coupons = await storageService.getRedeemedCoupons();
    const userCoupons = coupons.filter(c => c.userId === user?.id);
    setRedeemedCoupons(userCoupons);
  };

  if (redeemedCoupons.length === 0) {
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
          <Text style={styles.title}>Meus Cupons</Text>
        </View>
        <View style={styles.emptyContainer}>
          <Ionicons name="ticket-outline" size={64} color={colors.textLight} />
          <Text style={styles.emptyTitle}>Nenhum cupom resgatado</Text>
          <Text style={styles.emptyText}>
            Explore os cupons disponíveis e comece a economizar!
          </Text>
        </View>
      </View>
    );
  }

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
        <Text style={styles.title}>Meus Cupons</Text>
        <Text style={styles.subtitle}>{redeemedCoupons.length} cupons resgatados</Text>
      </View>
      <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
        {redeemedCoupons.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.coupon.imageUrl }} style={styles.image} />
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.discount}>{item.coupon.discount}</Text>
                <View style={styles.statusBadge}>
                  <Ionicons name="checkmark-circle" size={16} color={colors.success} />
                  <Text style={styles.statusText}>Resgatado</Text>
                </View>
              </View>
              <Text style={styles.cardTitle}>{item.coupon.title}</Text>
              <Text style={styles.partner}>{item.coupon.partner}</Text>
              <View style={styles.dateContainer}>
                <Ionicons name="time" size={16} color={colors.textLight} />
                <Text style={styles.dateText}>
                  Resgatado em {new Date(item.redeemedAt).toLocaleDateString('pt-BR')}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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
  subtitle: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.9,
    paddingLeft: 48,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: 140,
    backgroundColor: colors.border,
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  discount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.success + '20',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.success,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  partner: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateText: {
    fontSize: 12,
    color: colors.textLight,
  },
});
