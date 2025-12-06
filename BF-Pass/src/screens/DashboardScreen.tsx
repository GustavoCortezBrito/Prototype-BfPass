import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';
import { colors } from '../utils/colors';

export const DashboardScreen = ({ navigation }: any) => {
  const { user } = useAuth();

  const cards = [
    {
      title: 'Cupons',
      icon: 'ticket',
      color: colors.primary,
      screen: 'Coupons',
      description: 'Ver ofertas',
    },
    {
      title: 'Meus Cupons',
      icon: 'wallet',
      color: colors.accent,
      screen: 'MyCoupons',
      description: 'Histórico',
    },
    {
      title: 'Perfil',
      icon: 'person',
      color: colors.success,
      screen: 'Profile',
      description: 'Minha conta',
    },
  ];

  if (user?.role === 'admin') {
    cards.push({
      title: 'Admin',
      icon: 'shield',
      color: colors.warning,
      screen: 'AdminPanel',
      description: 'Gerenciar',
    });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, {user?.name}! 👋</Text>
          <Text style={styles.subtitle}>Bem-vindo ao BFclub</Text>
          <View style={styles.planBadge}>
            <Ionicons name="card" size={14} color={colors.white} />
            <Text style={styles.planText}>
              Plano {user?.planType?.charAt(0).toUpperCase()}{user?.planType?.slice(1)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.grid}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { backgroundColor: card.color }]}
            onPress={() => navigation.navigate(card.screen)}
            activeOpacity={0.8}
          >
            <Ionicons name={card.icon as any} size={32} color={colors.white} />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.infoCard}>
        <Ionicons name="trophy" size={24} color={colors.primary} />
        <View style={styles.infoContent}>
          <Text style={styles.infoTitle}>Aproveite seus benefícios BFclub</Text>
          <Text style={styles.infoText}>
            Explore cupons exclusivos em academias, suplementos e estabelecimentos parceiros em Barretos. Apresente seu cartão BF-PASS presencialmente para resgatar.
          </Text>
        </View>
      </View>

      {user?.cashbackActive && (
        <View style={styles.cashbackBanner}>
          <View style={styles.cashbackContent}>
            <Ionicons name="wallet" size={32} color={colors.success} />
            <View style={styles.cashbackInfo}>
              <Text style={styles.cashbackTitle}>Cashback Ativo</Text>
              <Text style={styles.cashbackPoints}>{user?.cashbackPoints || 0} pontos acumulados</Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.9,
    marginBottom: 8,
  },
  planBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  planText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
  },
  card: {
    width: '47%',
    aspectRatio: 1,
    borderRadius: 16,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 12,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 12,
    color: colors.white,
    opacity: 0.9,
    marginTop: 4,
  },
  infoCard: {
    flexDirection: 'row',
    margin: 16,
    padding: 16,
    backgroundColor: colors.card,
    borderRadius: 12,
    gap: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 20,
  },
  cashbackBanner: {
    margin: 16,
    marginTop: 0,
    backgroundColor: colors.success + '15',
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.success,
  },
  cashbackContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  cashbackInfo: {
    flex: 1,
  },
  cashbackTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  cashbackPoints: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.success,
  },
});
