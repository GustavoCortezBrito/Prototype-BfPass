import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Coupon } from '../types';
import { colors } from '../utils/colors';

interface CouponCardProps {
  coupon: Coupon;
  onPress: () => void;
}

export const CouponCard = ({ coupon, onPress }: CouponCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: coupon.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.discount}>{coupon.discount}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{coupon.category}</Text>
          </View>
        </View>
        <Text style={styles.title}>{coupon.title}</Text>
        <Text style={styles.partner}>{coupon.partner}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {coupon.description}
        </Text>
        <View style={styles.footer}>
          <View style={styles.validContainer}>
            <Ionicons name="calendar-outline" size={16} color={colors.textLight} />
            <Text style={styles.validText}>Válido até {new Date(coupon.validUntil).toLocaleDateString()}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: colors.border,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  discount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
  },
  badge: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  partner: {
    fontSize: 14,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  validContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  validText: {
    fontSize: 12,
    color: colors.textLight,
  },
});
