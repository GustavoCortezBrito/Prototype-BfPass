import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { User, AuthContextData, RedeemedCoupon, Coupon } from '../types';
import { storageService } from '../services/storage';
import { mockUsers, mockCoupons } from '../mock/data';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    try {
      const storedUser = await storageService.getUser();
      const storedUsers = await storageService.getUsers();
      
      if (storedUsers.length === 0) {
        await storageService.saveUsers(mockUsers);
      }
      
      if (storedUser) {
        setUser(storedUser);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    const users = await storageService.getUsers();
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error('E-mail ou senha incorretos');
    }
    
    await storageService.saveUser(foundUser);
    setUser(foundUser);
  }

  async function signUp(name: string, email: string, password: string) {
    const users = await storageService.getUsers();
    
    if (users.find(u => u.email === email)) {
      throw new Error('E-mail já cadastrado');
    }
    
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      password,
      role: 'user',
      createdAt: new Date().toISOString(),
    };
    
    users.push(newUser);
    await storageService.saveUsers(users);
    await storageService.saveUser(newUser);
    setUser(newUser);
  }

  async function signOut() {
    await storageService.removeUser();
    setUser(null);
  }

  async function updateUser(data: Partial<User>) {
    if (!user) return;
    
    const updatedUser = { ...user, ...data };
    const users = await storageService.getUsers();
    const index = users.findIndex(u => u.id === user.id);
    
    if (index !== -1) {
      users[index] = updatedUser;
      await storageService.saveUsers(users);
    }
    
    await storageService.saveUser(updatedUser);
    setUser(updatedUser);
  }

  async function updatePassword(currentPassword: string, newPassword: string) {
    if (!user) return;
    
    if (user.password !== currentPassword) {
      throw new Error('Senha atual incorreta');
    }
    
    const updatedUser = { ...user, password: newPassword };
    const users = await storageService.getUsers();
    const index = users.findIndex(u => u.id === user.id);
    
    if (index !== -1) {
      users[index] = updatedUser;
      await storageService.saveUsers(users);
    }
    
    await storageService.saveUser(updatedUser);
    setUser(updatedUser);
  }

  async function updateProfileImage(imageUri: string) {
    if (!user) return;
    
    const updatedUser = { ...user, profileImage: imageUri };
    const users = await storageService.getUsers();
    const index = users.findIndex(u => u.id === user.id);
    
    if (index !== -1) {
      users[index] = updatedUser;
      await storageService.saveUsers(users);
    }
    
    await storageService.saveUser(updatedUser);
    setUser(updatedUser);
  }

  async function redeemCoupon(couponId: string) {
    if (!user) return;
    
    const coupon = mockCoupons.find(c => c.id === couponId);
    if (!coupon) throw new Error('Cupom não encontrado');
    
    const redeemedCoupons = await storageService.getRedeemedCoupons();
    const newRedeemed: RedeemedCoupon = {
      id: Date.now().toString(),
      couponId,
      userId: user.id,
      redeemedAt: new Date().toISOString(),
      coupon,
    };
    
    redeemedCoupons.push(newRedeemed);
    await storageService.saveRedeemedCoupons(redeemedCoupons);
  }

  function getRedeemedCoupons(): RedeemedCoupon[] {
    return [];
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
        updateUser,
        updatePassword,
        updateProfileImage,
        redeemCoupon,
        getRedeemedCoupons,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
