# 🚀 Guia Rápido - BF Pass

## Iniciar o Projeto

```bash
cd BF-Pass
npm start
```

Escaneie o QR Code com o Expo Go app.

## 🔑 Login Rápido

### Admin
```
Email: admin@bfpass.com
Senha: admin123
```

### Usuário
```
Email: joao@email.com
Senha: 123456
```

## 📱 Navegação Principal

### Como Usuário:
1. **Dashboard** - Tela inicial com cards de navegação
2. **Cupons** - Ver todos os cupons disponíveis
3. **Detalhes** - Clicar em um cupom para ver detalhes e resgatar
4. **Meus Cupons** - Ver histórico de cupons resgatados
5. **Perfil** - Editar nome e email, fazer logout

### Como Admin:
1. Todas as funcionalidades de usuário +
2. **Admin Panel** - Gerenciar usuários
3. **Criar Usuário** - Adicionar novos usuários
4. **Editar Usuário** - Modificar dados e permissões
5. **Excluir Usuário** - Remover usuários do sistema

## 🎯 Testando Funcionalidades

### Teste 1: Cadastro
1. Na tela de login, clique em "Criar conta"
2. Preencha: Nome, Email, Senha, Confirmar Senha
3. Clique em "Criar conta"
4. Você será logado automaticamente

### Teste 2: Resgatar Cupom
1. Faça login
2. Clique em "Cupons" no dashboard
3. Escolha um cupom
4. Clique em "Resgatar Cupom"
5. Veja a confirmação
6. Acesse "Meus Cupons" para ver o histórico

### Teste 3: Painel Admin
1. Faça login como admin
2. Clique em "Admin" no dashboard
3. Veja a lista de usuários
4. Clique em "Criar Usuário" para adicionar
5. Use os ícones de editar/excluir em cada usuário

## 🎨 Características Visuais

- **Cores vibrantes**: Roxo, lilás e verde água
- **Botões arredondados**: Raio de 12px
- **Cards com sombra**: Elevação sutil
- **Ícones minimalistas**: Ionicons
- **Gradientes suaves**: Headers coloridos

## 💡 Dicas

- Os dados são salvos localmente no AsyncStorage
- Ao fazer logout, a sessão é limpa
- Admins podem alterar permissões de outros usuários
- Cupons podem ser resgatados múltiplas vezes (mock)
- Todas as validações são feitas no frontend

## 🔄 Resetar Dados

Para limpar todos os dados e começar do zero:
1. Feche o app completamente
2. Limpe o cache do Expo Go
3. Ou desinstale e reinstale o Expo Go

## 📞 Estrutura de Telas

```
┌─────────────────┐
│     Splash      │
└────────┬────────┘
         │
    ┌────▼────┐
    │  Login  │◄──┐
    └────┬────┘   │
         │        │
    ┌────▼────────┴──┐
    │   Cadastro     │
    └────────────────┘
         │
    ┌────▼────────┐
    │  Dashboard  │
    └────┬────────┘
         │
    ┌────┼────────────────┬──────────┐
    │    │                │          │
┌───▼──┐ │ ┌──────────┐ ┌▼──────┐ ┌▼──────┐
│Cupons│ │ │Meus      │ │Perfil │ │Admin  │
│      │ │ │Cupons    │ │       │ │Panel  │
└───┬──┘ │ └──────────┘ └───────┘ └───┬───┘
    │    │                              │
┌───▼────▼──┐                      ┌────▼────┐
│Detalhes   │                      │Criar/   │
│do Cupom   │                      │Editar   │
└───────────┘                      │User     │
                                   └─────────┘
```

## ✅ Checklist de Funcionalidades

- [x] Splash Screen
- [x] Login com validação
- [x] Cadastro com validação
- [x] Dashboard personalizado
- [x] Lista de cupons
- [x] Detalhes do cupom
- [x] Resgate de cupom
- [x] Histórico de cupons
- [x] Edição de perfil
- [x] Logout
- [x] Painel admin
- [x] CRUD de usuários
- [x] Controle de permissões
- [x] Persistência local
- [x] Navegação fluida
- [x] Design moderno

## 🎉 Pronto!

O protótipo está completo e funcional. Explore todas as telas e funcionalidades!
