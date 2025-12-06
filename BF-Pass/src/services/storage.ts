import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, RedeemedCoupon } from '../types';

const STORAGE_KEYS = {
  USER: '@BFPass:user',
  USERS: '@BFPass:users',
  REDEEMED_COUPONS: '@BFPass:redeemedCoupons',
};

export const storageService = {
  async saveUser(user: User): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  },

  async getUser(): Promise<User | null> {
    const user = await AsyncStorage.getItem(STORAGE_KEYS.USER);
    return user ? JSON.parse(user) : null;
  },

  async removeUser(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEYS.USER);
  },

  async saveUsers(users: User[]): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  },

  async getUsers(): Promise<User[]> {
    const users = await AsyncStorage.getItem(STORAGE_KEYS.USERS);
    return users ? JSON.parse(users) : [];
  },

  async saveRedeemedCoupons(coupons: RedeemedCoupon[]): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.REDEEMED_COUPONS, JSON.stringify(coupons));
  },

  async getRedeemedCoupons(): Promise<RedeemedCoupon[]> {
    const coupons = await AsyncStorage.getItem(STORAGE_KEYS.REDEEMED_COUPONS);
    return coupons ? JSON.parse(coupons) : [];
  },
};
