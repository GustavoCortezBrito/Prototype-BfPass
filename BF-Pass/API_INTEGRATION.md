# 🔌 Guia de Integração com API - BF Pass

## 📋 Visão Geral

Este documento descreve como integrar o protótipo BF Pass com uma API real, substituindo os dados mockados e o AsyncStorage por chamadas HTTP.

## 🏗️ Arquitetura Atual vs. Futura

### Atual (Mock)
```
App → AuthContext → AsyncStorage → Mock Data
```

### Futura (API)
```
App → AuthContext → API Service → Backend REST API
```

## 📦 Dependências Necessárias

```bash
# Axios para requisições HTTP
npm install axios

# Opcional: React Query para cache e gerenciamento de estado
npm install @tanstack/react-query
```

## 🔧 Estrutura de Serviços

### 1. Criar API Client

```typescript
// src/services/api.ts
import axios from 'axios';
import { storageService } from './storage';

const api = axios.create({
  baseURL: 'https://api.bfpass.com', // Sua URL da API
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token
api.interceptors.request.use(async (config) => {
  const user = await storageService.getUser();
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

// Interceptor para tratar erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado, fazer logout
      storageService.removeUser();
    }
    return Promise.reject(error);
  }
);

export default api;
```

### 2. Criar Auth Service

```typescript
// src/services/authService.ts
import api from './api';
import { User } from '../types';

export const authService = {
  async signIn(email: string, password: string): Promise<User> {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  async signUp(name: string, email: string, password: string): Promise<User> {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  },

  async getProfile(): Promise<User> {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  async updateProfile(data: Partial<User>): Promise<User> {
    const response = await api.put('/auth/profile', data);
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
  },
};
```

### 3. Criar Coupon Service

```typescript
// src/services/couponService.ts
import api from './api';
import { Coupon, RedeemedCoupon } from '../types';

export const couponService = {
  async getCoupons(): Promise<Coupon[]> {
    const response = await api.get('/coupons');
    return response.data;
  },

  async getCouponById(id: string): Promise<Coupon> {
    const response = await api.get(`/coupons/${id}`);
    return response.data;
  },

  async redeemCoupon(couponId: string): Promise<RedeemedCoupon> {
    const response = await api.post('/coupons/redeem', { couponId });
    return response.data;
  },

  async getRedeemedCoupons(): Promise<RedeemedCoupon[]> {
    const response = await api.get('/coupons/redeemed');
    return response.data;
  },
};
```

### 4. Criar User Service (Admin)

```typescript
// src/services/userService.ts
import api from './api';
import { User } from '../types';

export const userService = {
  async getUsers(): Promise<User[]> {
    const response = await api.get('/users');
    return response.data;
  },

  async createUser(data: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const response = await api.post('/users', data);
    return response.data;
  },

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    const response = await api.put(`/users/${id}`, data);
    return response.data;
  },

  async deleteUser(id: string): Promise<void> {
    await api.delete(`/users/${id}`);
  },
};
```

## 🔄 Atualizar AuthContext

```typescript
// src/contexts/AuthContext.tsx (atualizado)
import React, { createContext, useState, useContext, useEffect } from 'react';
import { User, AuthContextData } from '../types';
import { storageService } from '../services/storage';
import { authService } from '../services/authService';
import { couponService } from '../services/couponService';

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
      if (storedUser) {
        // Validar token com backend
        const profile = await authService.getProfile();
        setUser(profile);
      }
    } catch (error) {
      await storageService.removeUser();
    } finally {
      setLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    const userData = await authService.signIn(email, password);
    await storageService.saveUser(userData);
    setUser(userData);
  }

  async function signUp(name: string, email: string, password: string) {
    const userData = await authService.signUp(name, email, password);
    await storageService.saveUser(userData);
    setUser(userData);
  }

  async function signOut() {
    await authService.logout();
    await storageService.removeUser();
    setUser(null);
  }

  async function updateUser(data: Partial<User>) {
    const updatedUser = await authService.updateProfile(data);
    await storageService.saveUser(updatedUser);
    setUser(updatedUser);
  }

  async function redeemCoupon(couponId: string) {
    await couponService.redeemCoupon(couponId);
  }

  async function getRedeemedCoupons() {
    return await couponService.getRedeemedCoupons();
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
        redeemCoupon,
        getRedeemedCoupons,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

## 📡 Endpoints da API

### Autenticação

```
POST   /auth/register          - Criar conta
POST   /auth/login             - Login
POST   /auth/logout            - Logout
GET    /auth/profile           - Obter perfil
PUT    /auth/profile           - Atualizar perfil
```

### Cupons

```
GET    /coupons                - Listar cupons
GET    /coupons/:id            - Obter cupom
POST   /coupons/redeem         - Resgatar cupom
GET    /coupons/redeemed       - Cupons resgatados
```

### Usuários (Admin)

```
GET    /users                  - Listar usuários
POST   /users                  - Criar usuário
GET    /users/:id              - Obter usuário
PUT    /users/:id              - Atualizar usuário
DELETE /users/:id              - Excluir usuário
```

## 📝 Formato de Dados

### User
```json
{
  "id": "uuid",
  "name": "João Silva",
  "email": "joao@email.com",
  "role": "user",
  "token": "jwt_token_here",
  "createdAt": "2025-01-01T00:00:00Z"
}
```

### Coupon
```json
{
  "id": "uuid",
  "title": "50% OFF em Academia",
  "description": "Desconto especial",
  "partner": "SmartFit",
  "discount": "50%",
  "category": "Fitness",
  "imageUrl": "https://...",
  "validUntil": "2025-12-31",
  "terms": "Termos e condições",
  "active": true
}
```

### RedeemedCoupon
```json
{
  "id": "uuid",
  "couponId": "uuid",
  "userId": "uuid",
  "redeemedAt": "2025-01-01T00:00:00Z",
  "coupon": { /* Coupon object */ }
}
```

## 🔒 Segurança

### Headers Necessários

```typescript
{
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <token>',
  'X-API-Key': '<api_key>' // Opcional
}
```

### Tratamento de Erros

```typescript
try {
  const response = await api.get('/coupons');
  return response.data;
} catch (error) {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 401) {
      // Não autorizado
      throw new Error('Sessão expirada');
    } else if (error.response?.status === 404) {
      // Não encontrado
      throw new Error('Recurso não encontrado');
    } else if (error.response?.status === 500) {
      // Erro do servidor
      throw new Error('Erro no servidor');
    }
  }
  throw new Error('Erro de conexão');
}
```

## 🎯 Migração Passo a Passo

### Passo 1: Instalar Dependências
```bash
npm install axios
```

### Passo 2: Criar API Client
Criar `src/services/api.ts`

### Passo 3: Criar Services
Criar `authService.ts`, `couponService.ts`, `userService.ts`

### Passo 4: Atualizar AuthContext
Substituir mock por chamadas API

### Passo 5: Atualizar Telas
Adicionar loading states e error handling

### Passo 6: Testar
Testar todas as funcionalidades com API real

## 🧪 Ambiente de Desenvolvimento

```typescript
// src/config/env.ts
const ENV = {
  development: {
    apiUrl: 'http://localhost:3000',
  },
  staging: {
    apiUrl: 'https://staging-api.bfpass.com',
  },
  production: {
    apiUrl: 'https://api.bfpass.com',
  },
};

export const config = ENV[process.env.NODE_ENV || 'development'];
```

## 📊 Loading States

```typescript
// Exemplo de tela com loading
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

const loadCoupons = async () => {
  setLoading(true);
  setError(null);
  try {
    const data = await couponService.getCoupons();
    setCoupons(data);
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
```

## 🔄 React Query (Opcional)

```typescript
// src/hooks/useCoupons.ts
import { useQuery } from '@tanstack/react-query';
import { couponService } from '../services/couponService';

export const useCoupons = () => {
  return useQuery({
    queryKey: ['coupons'],
    queryFn: couponService.getCoupons,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

// Uso na tela
const { data: coupons, isLoading, error } = useCoupons();
```

## ✅ Checklist de Integração

- [ ] Instalar axios
- [ ] Criar API client
- [ ] Criar services (auth, coupon, user)
- [ ] Atualizar AuthContext
- [ ] Adicionar loading states
- [ ] Adicionar error handling
- [ ] Testar autenticação
- [ ] Testar CRUD de cupons
- [ ] Testar CRUD de usuários
- [ ] Configurar ambientes
- [ ] Adicionar retry logic
- [ ] Implementar refresh token
- [ ] Adicionar analytics
- [ ] Testar offline mode

## 🚀 Pronto para Integração!

Com este guia, você pode facilmente migrar do protótipo mock para uma API real.
