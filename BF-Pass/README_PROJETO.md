# BF Pass - Protótipo Completo

## 📱 Sobre o Projeto

BF Pass é um aplicativo de cupons e benefícios inspirado no TotalPass, desenvolvido em React Native com Expo. O app permite que usuários resgatem cupons de desconto em academias e estúdios parceiros, com um painel administrativo completo para gerenciamento.

## 🎨 Design

- **Cores vibrantes**: Roxo (#8B5CF6), Lilás (#A78BFA), Verde Água (#06B6D4)
- **Interface moderna**: Botões arredondados, cards com sombras, ícones minimalistas
- **Inspiração**: TotalPass

## ✨ Funcionalidades

### Usuário Comum
- ✅ Cadastro e Login
- ✅ Dashboard com navegação intuitiva
- ✅ Lista de cupons disponíveis
- ✅ Detalhes e resgate de cupons
- ✅ Histórico de cupons resgatados
- ✅ Edição de perfil
- ✅ Logout

### Administrador
- ✅ Todas as funcionalidades de usuário
- ✅ Painel administrativo
- ✅ Listar todos os usuários
- ✅ Criar novos usuários
- ✅ Editar usuários (nome, email, permissão)
- ✅ Excluir usuários
- ✅ Alterar permissões (user/admin)

## 🏗️ Arquitetura

```
BF-Pass/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── CouponCard.tsx
│   ├── contexts/         # Context API
│   │   └── AuthContext.tsx
│   ├── mock/            # Dados mockados
│   │   └── data.ts
│   ├── navigation/      # Navegação
│   │   └── AppNavigator.tsx
│   ├── screens/         # Telas do app
│   │   ├── SplashScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   ├── DashboardScreen.tsx
│   │   ├── CouponsScreen.tsx
│   │   ├── CouponDetailScreen.tsx
│   │   ├── MyCouponsScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── AdminPanelScreen.tsx
│   │   ├── AdminCreateUserScreen.tsx
│   │   └── AdminEditUserScreen.tsx
│   ├── services/        # Serviços
│   │   └── storage.ts
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   └── utils/           # Utilitários
│       └── colors.ts
└── App.tsx              # Arquivo principal
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- Expo CLI instalado globalmente: `npm install -g expo-cli`
- Expo Go app no celular (iOS/Android)

### Instalação

1. Navegue até a pasta do projeto:
```bash
cd BF-Pass
```

2. Instale as dependências (já instaladas):
```bash
npm install
```

3. Inicie o projeto:
```bash
npm start
```

4. Escaneie o QR Code com o Expo Go (Android) ou Camera (iOS)

## 🔐 Contas de Teste

### Administrador
- **E-mail**: admin@bfpass.com
- **Senha**: admin123

### Usuário Comum
- **E-mail**: joao@email.com
- **Senha**: 123456

## 📦 Dependências Principais

- **expo**: Framework principal
- **react-navigation**: Navegação entre telas
- **@react-native-async-storage/async-storage**: Persistência local
- **@expo/vector-icons**: Ícones
- **@react-native-picker/picker**: Seletor de permissões

## 🎯 Fluxo de Navegação

### Não Autenticado
```
Login → Register
```

### Usuário Comum
```
Dashboard → Cupons → Detalhes do Cupom
         → Meus Cupons
         → Perfil
```

### Administrador
```
Dashboard → Admin Panel → Criar Usuário
                       → Editar Usuário
         → (todas as telas de usuário comum)
```

## 💾 Armazenamento

O app utiliza AsyncStorage para simular um backend:
- **Usuários**: Lista de todos os usuários cadastrados
- **Sessão**: Usuário logado atualmente
- **Cupons Resgatados**: Histórico de resgates por usuário

## 🎨 Paleta de Cores

```javascript
primary: '#8B5CF6'      // Roxo
secondary: '#A78BFA'    // Lilás
accent: '#06B6D4'       // Verde Água
success: '#10B981'      // Verde
danger: '#EF4444'       // Vermelho
warning: '#F59E0B'      // Amarelo
```

## 📝 Próximos Passos (Integração Real)

Para conectar com um backend real:

1. Substituir `storageService` por chamadas API
2. Implementar autenticação JWT
3. Adicionar validações server-side
4. Implementar upload de imagens
5. Adicionar notificações push
6. Implementar busca e filtros de cupons

## 🐛 Troubleshooting

### Erro ao iniciar
```bash
npm start -- --clear
```

### Problemas com cache
```bash
expo start -c
```

## 📄 Licença

Projeto de demonstração - Uso livre para fins educacionais.
