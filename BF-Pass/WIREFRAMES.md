# 📐 Wireframes e Layout - BF Pass

## 🎨 Visão Geral do Design

Este documento descreve visualmente o layout de cada tela do aplicativo.

---

## 1. 🌟 Splash Screen

```
┌─────────────────────────┐
│                         │
│                         │
│                         │
│      BF Pass            │
│   (Logo Grande)         │
│                         │
│  Seu passaporte para    │
│    o bem-estar          │
│                         │
│      ⟳ Loading...       │
│                         │
│                         │
└─────────────────────────┘
```

**Cores**: Fundo roxo (#8B5CF6), texto branco

---

## 2. 🔐 Login Screen

```
┌─────────────────────────┐
│                         │
│      BF Pass            │
│   Bem-vindo de volta!   │
│                         │
│  ┌───────────────────┐  │
│  │ E-mail            │  │
│  │ seu@email.com     │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ Senha         👁  │  │
│  │ ••••••••          │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │     ENTRAR        │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │   CRIAR CONTA     │  │
│  └───────────────────┘  │
│                         │
│  ┌─────────────────┐    │
│  │ Contas de teste │    │
│  │ Admin: admin... │    │
│  │ User: joao...   │    │
│  └─────────────────┘    │
└─────────────────────────┘
```

---

## 3. 📝 Register Screen

```
┌─────────────────────────┐
│  ← Criar Conta          │
├─────────────────────────┤
│                         │
│  Preencha seus dados    │
│  para começar           │
│                         │
│  ┌───────────────────┐  │
│  │ Nome completo     │  │
│  │ João Silva        │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ E-mail            │  │
│  │ seu@email.com     │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ Senha         👁  │  │
│  │ ••••••••          │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ Confirmar Senha👁 │  │
│  │ ••••••••          │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │   CRIAR CONTA     │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ JÁ TENHO CONTA    │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

## 4. 🏠 Dashboard Screen

```
┌─────────────────────────┐
│  Olá, João! 👋          │
│  Bem-vindo ao BF Pass   │
└─────────────────────────┘
│                         │
│  ┌─────────┐ ┌────────┐ │
│  │  🎫     │ │  💰    │ │
│  │ Cupons  │ │  Meus  │ │
│  │Ver      │ │Cupons  │ │
│  │ofertas  │ │Históri │ │
│  └─────────┘ └────────┘ │
│                         │
│  ┌─────────┐ ┌────────┐ │
│  │  👤     │ │  🛡️    │ │
│  │ Perfil  │ │ Admin  │ │
│  │Minha    │ │Gerenci │ │
│  │conta    │ │ar      │ │
│  └─────────┘ └────────┘ │
│                         │
│  ┌─────────────────┐    │
│  │ ℹ️ Aproveite    │    │
│  │ seus benefícios │    │
│  │ Explore cupons  │    │
│  └─────────────────┘    │
└─────────────────────────┘
```

**Nota**: Card Admin só aparece para administradores

---

## 5. 🎫 Coupons Screen

```
┌─────────────────────────┐
│  Cupons Disponíveis     │
│  5 ofertas ativas       │
└─────────────────────────┘
│                         │
│  ┌───────────────────┐  │
│  │ [Imagem Cupom]    │  │
│  │                   │  │
│  │ 50%    [Fitness]  │  │
│  │ 50% OFF Academia  │  │
│  │ SmartFit          │  │
│  │ Desconto especial │  │
│  │ 📅 Válido até...→ │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ [Imagem Cupom]    │  │
│  │                   │  │
│  │ 30%  [Bem-estar]  │  │
│  │ 30% OFF em Yoga   │  │
│  │ Yoga Studio       │  │
│  │ Aulas de yoga...  │  │
│  │ 📅 Válido até...→ │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ [Mais cupons...]  │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

## 6. 🔍 Coupon Detail Screen

```
┌─────────────────────────┐
│  ← Detalhes do Cupom    │
├─────────────────────────┤
│  [Imagem Grande]        │
│                         │
└─────────────────────────┘
│                         │
│  50%        [Fitness]   │
│                         │
│  50% OFF em Academia    │
│  SmartFit               │
│                         │
│  ℹ️ Descrição           │
│  Desconto especial para │
│  novos alunos           │
│                         │
│  📄 Termos e Condições  │
│  Válido apenas para     │
│  novos alunos. Não      │
│  cumulativo.            │
│                         │
│  ┌─────────────────┐    │
│  │ 📅 Válido até   │    │
│  │ 31/12/2025      │    │
│  └─────────────────┘    │
│                         │
│  ┌───────────────────┐  │
│  │ RESGATAR CUPOM    │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

**Após resgate**:
```
│  ┌───────────────────┐  │
│  │ ✅ Cupom Resgatado│  │
│  └───────────────────┘  │
```

---

## 7. 💰 My Coupons Screen

```
┌─────────────────────────┐
│  Meus Cupons            │
│  3 cupons resgatados    │
└─────────────────────────┘
│                         │
│  ┌───────────────────┐  │
│  │ [Imagem]          │  │
│  │                   │  │
│  │ 50%  ✅ Resgatado │  │
│  │ 50% OFF Academia  │  │
│  │ SmartFit          │  │
│  │ ⏰ Resgatado em   │  │
│  │    01/12/2025     │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ [Imagem]          │  │
│  │                   │  │
│  │ 30%  ✅ Resgatado │  │
│  │ 30% OFF em Yoga   │  │
│  │ Yoga Studio       │  │
│  │ ⏰ Resgatado em   │  │
│  │    28/11/2025     │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

**Quando vazio**:
```
┌─────────────────────────┐
│  Meus Cupons            │
└─────────────────────────┘
│                         │
│         🎫              │
│                         │
│  Nenhum cupom resgatado │
│                         │
│  Explore os cupons      │
│  disponíveis e comece   │
│  a economizar!          │
│                         │
└─────────────────────────┘
```

---

## 8. 👤 Profile Screen

```
┌─────────────────────────┐
│                         │
│      ┌─────────┐        │
│      │   👤    │        │
│      └─────────┘        │
│                         │
│      João Silva         │
│     [Usuário]           │
│                         │
└─────────────────────────┘
│                         │
│  Informações Pessoais   │
│                         │
│  ┌───────────────────┐  │
│  │ Nome completo     │  │
│  │ João Silva        │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ E-mail            │  │
│  │ joao@email.com    │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ SALVAR ALTERAÇÕES │  │
│  └───────────────────┘  │
│                         │
│  ┌─────────────────┐    │
│  │ 🛡️ Conta        │    │
│  │ Verificada      │    │
│  │ Membro desde    │    │
│  │ 01/01/2025      │    │
│  └─────────────────┘    │
│                         │
│  ┌───────────────────┐  │
│  │  SAIR DA CONTA    │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

## 9. 🛡️ Admin Panel Screen

```
┌─────────────────────────┐
│  Painel Admin           │
│  5 usuários cadastrados │
└─────────────────────────┘
│                         │
│  ┌───────────────────┐  │
│  │ ➕ CRIAR USUÁRIO  │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ 🛡️ Admin User     │  │
│  │ admin@bfpass.com  │  │
│  │ [Admin]      ✏️ 🗑️│  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ 👤 João Silva     │  │
│  │ joao@email.com    │  │
│  │ [Usuário]    ✏️ 🗑️│  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ 👤 Maria Santos   │  │
│  │ maria@email.com   │  │
│  │ [Usuário]    ✏️ 🗑️│  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

## 10. ➕ Admin Create User Screen

```
┌─────────────────────────┐
│  ← Criar Usuário        │
├─────────────────────────┤
│                         │
│  Criar Novo Usuário     │
│                         │
│  ┌───────────────────┐  │
│  │ Nome completo     │  │
│  │ João Silva        │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ E-mail            │  │
│  │ joao@email.com    │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ Senha             │  │
│  │ ••••••••          │  │
│  └───────────────────┘  │
│                         │
│  Permissão              │
│  ┌───────────────────┐  │
│  │ Usuário        ▼  │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │  CRIAR USUÁRIO    │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │    CANCELAR       │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

## 11. ✏️ Admin Edit User Screen

```
┌─────────────────────────┐
│  ← Editar Usuário       │
├─────────────────────────┤
│                         │
│  Editar Usuário         │
│                         │
│  ┌───────────────────┐  │
│  │ Nome completo     │  │
│  │ João Silva        │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ E-mail            │  │
│  │ joao@email.com    │  │
│  └───────────────────┘  │
│                         │
│  Permissão              │
│  ┌───────────────────┐  │
│  │ Usuário        ▼  │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ SALVAR ALTERAÇÕES │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │    CANCELAR       │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

## 🎨 Paleta de Cores por Tela

| Tela | Cor Principal | Uso |
|------|---------------|-----|
| Splash | Roxo (#8B5CF6) | Fundo completo |
| Login | Roxo (#8B5CF6) | Logo e botões |
| Dashboard | Roxo (#8B5CF6) | Header |
| Cupons | Roxo (#8B5CF6) | Header |
| Detalhes | Roxo (#8B5CF6) | Badges |
| Meus Cupons | Verde Água (#06B6D4) | Header |
| Perfil | Verde (#10B981) | Header |
| Admin | Amarelo (#F59E0B) | Header |

---

## 📐 Dimensões e Espaçamentos

### Botões
- Altura: 56px
- Border Radius: 12px
- Padding: 16px vertical, 24px horizontal

### Cards
- Border Radius: 16px
- Padding: 16px
- Margin Bottom: 16px
- Shadow: Elevation 2

### Inputs
- Altura: 56px
- Border Radius: 12px
- Padding: 16px
- Border: 1px

### Headers
- Padding: 24px
- Padding Top: 60px (status bar)
- Border Radius Bottom: 24px

---

## 🔄 Fluxo de Navegação Visual

```
        [Splash]
            ↓
        [Login] ←→ [Register]
            ↓
      [Dashboard]
       /  |  |  \
      /   |  |   \
[Cupons] [My] [Profile] [Admin]
    ↓    Cupons           ↓
[Details]              [Create]
                       [Edit]
```

---

## 📱 Responsividade

Todas as telas são responsivas e se adaptam a:
- Smartphones (iOS e Android)
- Tablets
- Diferentes resoluções
- Orientação portrait e landscape

---

## ✨ Animações e Transições

- **Navegação**: Slide horizontal
- **Botões**: Opacity 0.8 ao pressionar
- **Cards**: Elevation ao pressionar
- **Loading**: Spinner animado
- **Modals**: Fade in/out

---

Este wireframe serve como guia visual para entender o layout e a estrutura de cada tela do aplicativo BF Pass.
