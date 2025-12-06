# 📋 User Stories - BF Pass

## ✅ Implementadas

### US-01: Cadastro de Usuário
**Como** usuário novo  
**Quero** criar minha conta no aplicativo  
**Para** acessar os benefícios e cupons disponíveis

**Critérios de Aceitação:**
- ✅ Formulário com nome, email, senha e confirmação de senha
- ✅ Validação de campos obrigatórios
- ✅ Validação de email único
- ✅ Validação de senha mínima (6 caracteres)
- ✅ Validação de senhas coincidentes
- ✅ Feedback visual de erros
- ✅ Redirecionamento automático após cadastro
- ✅ Permissão padrão "user"

**Tela:** `RegisterScreen.tsx`

---

### US-02: Login de Usuário
**Como** usuário cadastrado  
**Quero** entrar no aplicativo com meu email e senha  
**Para** acessar minha conta e benefícios

**Critérios de Aceitação:**
- ✅ Formulário com email e senha
- ✅ Validação de credenciais
- ✅ Mensagem de erro clara
- ✅ Sessão persistente (AsyncStorage)
- ✅ Redirecionamento para dashboard
- ✅ Opção de criar conta
- ✅ Informações de contas de teste

**Tela:** `LoginScreen.tsx`

---

### US-03: Visualizar Cupons Disponíveis
**Como** usuário logado  
**Quero** ver todos os cupons disponíveis  
**Para** escolher quais descontos me interessam

**Critérios de Aceitação:**
- ✅ Lista de cupons em cards visuais
- ✅ Informações: título, parceiro, desconto, categoria
- ✅ Imagem do cupom
- ✅ Data de validade
- ✅ Contador de ofertas ativas
- ✅ Scroll suave
- ✅ Navegação para detalhes ao clicar

**Telas:** `CouponsScreen.tsx`, `CouponCard.tsx`

---

### US-04: Resgatar Cupom
**Como** usuário logado  
**Quero** resgatar um cupom de desconto  
**Para** usar na loja ou academia parceira

**Critérios de Aceitação:**
- ✅ Tela de detalhes completa do cupom
- ✅ Botão "Resgatar Cupom" destacado
- ✅ Confirmação visual de resgate
- ✅ Registro no histórico do usuário
- ✅ Feedback de sucesso
- ✅ Termos e condições visíveis
- ✅ Informações do parceiro

**Tela:** `CouponDetailScreen.tsx`

---

### US-05: Ver Histórico de Cupons
**Como** usuário logado  
**Quero** ver meus cupons resgatados  
**Para** acompanhar meus benefícios utilizados

**Critérios de Aceitação:**
- ✅ Lista de cupons resgatados
- ✅ Data de resgate
- ✅ Status "Resgatado"
- ✅ Informações do cupom
- ✅ Mensagem quando não há cupons
- ✅ Contador de cupons resgatados

**Tela:** `MyCouponsScreen.tsx`

---

### US-06: Editar Perfil
**Como** usuário logado  
**Quero** editar meu nome e email  
**Para** manter meus dados atualizados

**Critérios de Aceitação:**
- ✅ Formulário pré-preenchido
- ✅ Edição de nome e email
- ✅ Validação de campos
- ✅ Botão salvar alterações
- ✅ Feedback de sucesso
- ✅ Atualização em tempo real
- ✅ Informações da conta (data de criação)

**Tela:** `ProfileScreen.tsx`

---

### US-07: Logout
**Como** usuário logado  
**Quero** sair da minha conta  
**Para** proteger meus dados

**Critérios de Aceitação:**
- ✅ Botão de logout no perfil
- ✅ Confirmação antes de sair
- ✅ Limpeza da sessão
- ✅ Redirecionamento para login
- ✅ Dados não acessíveis após logout

**Tela:** `ProfileScreen.tsx`

---

### US-08: Dashboard Personalizado
**Como** usuário logado  
**Quero** ver um dashboard com acesso rápido  
**Para** navegar facilmente pelo app

**Critérios de Aceitação:**
- ✅ Saudação personalizada com nome
- ✅ Cards de navegação coloridos
- ✅ Ícones intuitivos
- ✅ Acesso a: Cupons, Meus Cupons, Perfil
- ✅ Card Admin (apenas para admins)
- ✅ Informações sobre o app

**Tela:** `DashboardScreen.tsx`

---

### US-09: Painel Administrativo
**Como** administrador  
**Quero** acessar um painel de gerenciamento  
**Para** administrar os usuários do sistema

**Critérios de Aceitação:**
- ✅ Acesso exclusivo para role "admin"
- ✅ Lista de todos os usuários
- ✅ Informações: nome, email, role
- ✅ Contador de usuários
- ✅ Botão criar novo usuário
- ✅ Ações de editar e excluir por usuário
- ✅ Ícones diferenciados para admin/user

**Tela:** `AdminPanelScreen.tsx`

---

### US-10: Criar Usuário (Admin)
**Como** administrador  
**Quero** criar novos usuários  
**Para** adicionar pessoas ao sistema

**Critérios de Aceitação:**
- ✅ Formulário completo: nome, email, senha
- ✅ Seletor de permissão (user/admin)
- ✅ Validação de email único
- ✅ Validação de campos obrigatórios
- ✅ Feedback de sucesso
- ✅ Atualização da lista
- ✅ Botão cancelar

**Tela:** `AdminCreateUserScreen.tsx`

---

### US-11: Editar Usuário (Admin)
**Como** administrador  
**Quero** editar dados de usuários  
**Para** corrigir informações ou alterar permissões

**Critérios de Aceitação:**
- ✅ Formulário pré-preenchido
- ✅ Edição de nome, email e role
- ✅ Validação de campos
- ✅ Seletor de permissão
- ✅ Feedback de sucesso
- ✅ Atualização da lista
- ✅ Botão cancelar

**Tela:** `AdminEditUserScreen.tsx`

---

### US-12: Excluir Usuário (Admin)
**Como** administrador  
**Quero** excluir usuários do sistema  
**Para** remover contas inativas ou indesejadas

**Critérios de Aceitação:**
- ✅ Botão de exclusão por usuário
- ✅ Confirmação antes de excluir
- ✅ Remoção permanente
- ✅ Feedback de sucesso
- ✅ Atualização da lista
- ✅ Não pode excluir a si mesmo (proteção)

**Tela:** `AdminPanelScreen.tsx`

---

### US-13: Proteção de Rotas
**Como** sistema  
**Quero** proteger rotas por autenticação e permissão  
**Para** garantir segurança e acesso adequado

**Critérios de Aceitação:**
- ✅ Usuários não logados veem apenas Login/Cadastro
- ✅ Usuários logados acessam área interna
- ✅ Admins acessam painel administrativo
- ✅ Users não veem opções de admin
- ✅ Sessão persistente entre aberturas
- ✅ Redirecionamento automático

**Arquivo:** `AppNavigator.tsx`

---

### US-14: Persistência de Dados
**Como** sistema  
**Quero** salvar dados localmente  
**Para** simular um backend e manter estado

**Critérios de Aceitação:**
- ✅ AsyncStorage para persistência
- ✅ Usuários salvos e recuperados
- ✅ Sessão mantida
- ✅ Cupons resgatados salvos
- ✅ Dados iniciais (mock) carregados
- ✅ Sincronização entre telas

**Arquivo:** `storage.ts`, `AuthContext.tsx`

---

## 📊 Resumo

- **Total de User Stories:** 14
- **Implementadas:** 14 (100%)
- **Telas Criadas:** 11
- **Componentes Reutilizáveis:** 3
- **Contextos:** 1 (AuthContext)
- **Serviços:** 1 (Storage)

## 🎯 Cobertura Funcional

| Categoria | Funcionalidades |
|-----------|----------------|
| **Autenticação** | Login, Cadastro, Logout, Sessão Persistente |
| **Cupons** | Listar, Detalhes, Resgatar, Histórico |
| **Perfil** | Visualizar, Editar |
| **Admin** | Listar Users, Criar, Editar, Excluir, Permissões |
| **Navegação** | Stack Navigator, Proteção de Rotas |
| **UI/UX** | Design Moderno, Cores Vibrantes, Feedback Visual |

## 🚀 Próximas User Stories (Futuro)

### US-15: Buscar Cupons
**Como** usuário  
**Quero** buscar cupons por nome ou categoria  
**Para** encontrar ofertas específicas rapidamente

### US-16: Filtrar Cupons
**Como** usuário  
**Quero** filtrar cupons por categoria  
**Para** ver apenas ofertas do meu interesse

### US-17: Notificações
**Como** usuário  
**Quero** receber notificações de novos cupons  
**Para** não perder ofertas

### US-18: Favoritar Cupons
**Como** usuário  
**Quero** marcar cupons como favoritos  
**Para** acessá-los rapidamente

### US-19: Compartilhar Cupons
**Como** usuário  
**Quero** compartilhar cupons com amigos  
**Para** indicar boas ofertas

### US-20: Estatísticas (Admin)
**Como** administrador  
**Quero** ver estatísticas de uso  
**Para** entender o comportamento dos usuários
