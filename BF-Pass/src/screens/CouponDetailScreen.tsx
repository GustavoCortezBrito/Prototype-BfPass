import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/Button';
import { colors } from '../utils/colors';

export const CouponDetailScreen = ({ route, navigation }: any) => {
  const { coupon } = route.params;
  const { redeemCoupon } = useAuth();
  const [loading, setLoading] = useState(false);
  const [redeemed, setRedeemed] = useState(false);

  const handleRedeem = async () => {
    setLoading(true);
    try {
      await redeemCoupon(coupon.id);
      setRedeemed(true);
      Alert.alert(
        'Sucesso! 🎉',
        'Cupom resgatado com sucesso! Confira em "Meus Cupons".',
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    } catch (error: any) {
      Alert.alert('Erro', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: coupon.imageUrl }} style={styles.image} />
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{coupon.discount}</Text>
          </View>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{coupon.category}</Text>
          </View>
        </View>

        <Text style={styles.title}>{coupon.title}</Text>
        <Text style={styles.partner}>{coupon.partner}</Text>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="information-circle" size={20} color={colors.primary} />
            <Text style={styles.sectionTitle}>Descrição</Text>
          </View>
          <Text style={styles.description}>{coupon.description}</Text>
        </View>

        {coupon.address && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="location" size={20} color={colors.primary} />
              <Text style={styles.sectionTitle}>Localização</Text>
            </View>
            <Text style={styles.description}>{coupon.address}</Text>
            {coupon.phone && (
              <View style={styles.contactRow}>
                <Ionicons name="call" size={16} color={colors.textLight} />
                <Text style={styles.contactText}>{coupon.phone}</Text>
              </View>
            )}
            {coupon.hours && (
              <View style={styles.contactRow}>
                <Ionicons name="time" size={16} color={colors.textLight} />
                <Text style={styles.contactText}>{coupon.hours}</Text>
              </View>
            )}
          </View>
        )}

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="document-text" size={20} color={colors.primary} />
            <Text style={styles.sectionTitle}>Termos e Condições</Text>
          </View>
          <Text style={styles.terms}>{coupon.terms}</Text>
        </View>

        <View style={styles.alertBox}>
          <Ionicons name="information-circle" size={20} color={colors.warning} />
          <Text style={styles.alertText}>
            Este cupom só pode ser resgatado presencialmente no estabelecimento parceiro. Apresente seu cartão BF-PASS.
          </Text>
        </View>

        <View style={styles.validContainer}>
          <Ionicons name="calendar" size={20} color={colors.textLight} />
          <Text style={styles.validText}>
            Válido até {new Date(coupon.validUntil).toLocaleDateString('pt-BR')}
          </Text>
        </View>

        {redeemed ? (
          <View style={styles.redeemedBanner}>
            <Ionicons name="checkmark-circle" size={24} color={colors.success} />
            <Text style={styles.redeemedText}>Cupom Resgatado!</Text>
          </View>
        ) : (
          <Button
            title="Resgatar Cupom"
            onPress={handleRedeem}
            loading={loading}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 250,
    backgroundColor: colors.border,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  discountBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12,
  },
  discountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  categoryBadge: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  partner: {
    fontSize: 18,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  description: {
    fontSize: 16,
    color: colors.textLight,
    lineHeight: 24,
  },
  terms: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 20,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  contactText: {
    fontSize: 14,
    color: colors.textLight,
  },
  alertBox: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    backgroundColor: colors.warning + '15',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.warning,
    marginBottom: 16,
  },
  alertText: {
    flex: 1,
    fontSize: 13,
    color: colors.text,
    lineHeight: 20,
  },
  validContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: 24,
  },
  validText: {
    fontSize: 14,
    color: colors.textLight,
  },
  redeemedBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: colors.success,
    borderRadius: 12,
  },
  redeemedText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
});
