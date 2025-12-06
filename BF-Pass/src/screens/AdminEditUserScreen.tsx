import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { storageService } from '../services/storage';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { UserRole } from '../types';
import { colors } from '../utils/colors';

export const AdminEditUserScreen = ({ navigation, route }: any) => {
  const { user } = route.params;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState<UserRole>(user.role);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!name || !email) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      const users = await storageService.getUsers();
      const index = users.findIndex(u => u.id === user.id);
      
      if (index !== -1) {
        users[index] = { ...users[index], name, email, role };
        await storageService.saveUsers(users);
        
        Alert.alert('Sucesso', 'Usuário atualizado com sucesso!', [
          {
            text: 'OK',
            onPress: () => {
              route.params?.onRefresh?.();
              navigation.goBack();
            },
          },
        ]);
      }
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
        <Text style={styles.headerTitle}>Editar Usuário</Text>
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

        <Button title="Salvar Alterações" onPress={handleUpdate} loading={loading} />
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
