import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { storageService } from '../services/storage';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { User, UserRole } from '../types';
import { colors } from '../utils/colors';

export const AdminCreateUserScreen = ({ navigation, route }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('user');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!name || !email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      const users = await storageService.getUsers();
      
      if (users.find(u => u.email === email)) {
        Alert.alert('Erro', 'E-mail já cadastrado');
        return;
      }

      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        password,
        role,
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      await storageService.saveUsers(users);
      
      Alert.alert('Sucesso', 'Usuário criado com sucesso!', [
        {
          text: 'OK',
          onPress: () => {
            route.params?.onRefresh?.();
            navigation.goBack();
          },
        },
      ]);
    } catch (error: any) {
      Alert.alert('Erro', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Criar Novo Usuário</Text>
      </View>
      <View style={styles.content}>

        <Input
          label="Nome completo"
          value={name}
          onChangeText={setName}
          placeholder="João Silva"
        />

        <Input
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholder="joao@email.com"
          keyboardType="email-address"
        />

        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          secureTextEntry
        />

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Permissão</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={role}
              onValueChange={(value) => setRole(value)}
              style={styles.picker}
            >
              <Picker.Item label="Usuário" value="user" />
              <Picker.Item label="Administrador" value="admin" />
            </Picker>
          </View>
        </View>

        <Button title="Criar Usuário" onPress={handleCreate} loading={loading} />
        <Button
          title="Cancelar"
          onPress={() => navigation.goBack()}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  content: {
    padding: 24,
  },
  pickerContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  pickerWrapper: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  picker: {
    height: 56,
  },
});
