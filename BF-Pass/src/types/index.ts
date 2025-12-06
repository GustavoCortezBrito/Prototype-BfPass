export type UserRole = 'user' | 'admin';
export type PlanType = 'mensal' | 'trimestral' | 'semestral' | 'anual';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: string;
  planType?: PlanType;
  planValidUntil?: string;
  cashbackActive?: boolean;
  cashbackPoints?: number;
}

export interface Coupon {
  id: string;
  title: string;
  description: string;
  partner: string;
  discount: string;
  category: string;
  imageUrl: string;
  validUntil: string;
  terms: string;
  active: boolean;
  address?: string;
  phone?: string;
  hours?: string;
}

export interface RedeemedCoupon {
  id: string;
  couponId: string;
  userId: string;
  redeemedAt: string;
  coupon: Coupon;
}

export interface AuthContextData {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (data: Partial<User>) => Promise<void>;
  redeemCoupon: (couponId: string) => Promise<void>;
  getRedeemedCoupons: () => RedeemedCoupon[];
}
