import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { colors } from '../utils/colors';

export const ProfileScreen = ({ navigation }: any) => {
  const { user, signOut, updateUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!name || !email) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      await updateUser({ name, email });
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    } catch (error: any) {
      Alert.alert('Erro', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', onPress: signOut, style: 'destructive' },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {navigation && (
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>
        )}
        <View style={styles.avatarContainer}>
          <Ionicons name="person" size={48} color={colors.white} />
        </View>
        <Text style={styles.headerTitle}>{user?.name}</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>
            {user?.role === 'admin' ? 'Administrador' : 'Usuário'}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>
        
        <Input
          label="Nome completo"
          value={name}
          onChangeText={setName}
          placeholder="Seu nome"
        />
        
        <Input
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholder="seu@email.com"
          keyboardType="email-address"
        />

        <Button
          title="Salvar Alterações"
          onPress={handleUpdate}
          loading={loading}
        />

        <View style={styles.planSection}>
          <Text style={styles.sectionTitle}>Meu Plano BF-PASS</Text>
          
          <View style={styles.planCard}>
            <View style={styles.planHeader}>
              <Ionicons name="card" size={32} color={colors.primary} />
              <View style={styles.planInfo}>
                <Text style={styles.planType}>
                  Plano {user?.planType?.charAt(0).toUpperCase()}{user?.planType?.slice(1)}
                </Text>
                <Text style={styles.planValid}>
                  Válido até {new Date(user?.planValidUntil || '').toLocaleDateString('pt-BR')}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.cashbackCard}>
            <View style={styles.cashbackHeader}>
              <Ionicons name="wallet" size={24} color={colors.success} />
              <Text style={styles.cashbackTitle}>Cashback</Text>
              <View style={[styles.statusBadge, { backgroundColor: user?.cashbackActive ? colors.success : colors.danger }]}>
                <Text style={styles.statusText}>
                  {user?.cashbackActive ? 'Ativo' : 'Inativo'}
                </Text>
              </View>
            </View>
            <Text style={styles.cashbackPoints}>{user?.cashbackPoints || 0} pontos</Text>
            <Text style={styles.cashbackInfo}>
              Acumule pontos a cada cupom resgatado e troque por benefícios exclusivos
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Ionicons name="shield-checkmark" size={24} color={colors.primary} />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Membro BFclub</Text>
            <Text style={styles.infoText}>
              Desde {new Date(user?.createdAt || '').toLocaleDateString('pt-BR')}
            </Text>
          </View>
        </View>

        <Button
          title="Sair da Conta"
          onPress={handleLogout}
          variant="outline"
        />
      </View>
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
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  avatarContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.white + '30',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  roleBadge: {
    backgroundColor: colors.white + '30',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
  },
  roleText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
  content: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  planSection: {
    marginBottom: 16,
  },
  planCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  planInfo: {
    flex: 1,
  },
  planType: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  planValid: {
    fontSize: 14,
    color: colors.textLight,
  },
  cashbackCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
  },
  cashbackHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  cashbackTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
  cashbackPoints: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.success,
    marginBottom: 8,
  },
  cashbackInfo: {
    fontSize: 12,
    color: colors.textLight,
    lineHeight: 18,
  },
  infoCard: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: colors.card,
    borderRadius: 12,
    gap: 12,
    marginVertical: 16,
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
  },
});
