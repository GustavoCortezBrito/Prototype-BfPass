# 🧪 Guia de Testes - BF Pass

## 📋 Checklist de Testes Manuais

### ✅ Autenticação

#### Login
- [ ] Login com credenciais válidas (admin)
- [ ] Login com credenciais válidas (user)
- [ ] Login com email inválido
- [ ] Login com senha incorreta
- [ ] Login com campos vazios
- [ ] Mensagens de erro aparecem corretamente
- [ ] Redirecionamento após login bem-sucedido
- [ ] Sessão persiste após fechar o app

#### Cadastro
- [ ] Cadastro com dados válidos
- [ ] Cadastro com email já existente
- [ ] Cadastro com senhas diferentes
- [ ] Cadastro com senha curta (< 6 caracteres)
- [ ] Cadastro com campos vazios
- [ ] Validação de email
- [ ] Redirecionamento após cadastro
- [ ] Novo usuário tem role "user"

#### Logout
- [ ] Logout funciona corretamente
- [ ] Confirmação antes de sair
- [ ] Sessão é limpa
- [ ] Redirecionamento para login
- [ ] Não é possível acessar áreas protegidas após logout

---

### 🎫 Cupons

#### Lista de Cupons
- [ ] Cupons são exibidos corretamente
- [ ] Imagens carregam
- [ ] Informações estão corretas (título, desconto, parceiro)
- [ ] Contador de cupons está correto
- [ ] Scroll funciona suavemente
- [ ] Navegação para detalhes funciona

#### Detalhes do Cupom
- [ ] Todas as informações são exibidas
- [ ] Imagem carrega corretamente
- [ ] Termos e condições visíveis
- [ ] Data de validade formatada
- [ ] Botão "Resgatar" funciona
- [ ] Confirmação após resgate
- [ ] Status muda para "Resgatado"

#### Resgate de Cupom
- [ ] Cupom é resgatado com sucesso
- [ ] Mensagem de confirmação aparece
- [ ] Cupom aparece em "Meus Cupons"
- [ ] Data de resgate está correta
- [ ] Não é possível resgatar cupom inativo

#### Meus Cupons
- [ ] Lista de cupons resgatados aparece
- [ ] Informações corretas (data, cupom)
- [ ] Status "Resgatado" visível
- [ ] Mensagem quando não há cupons
- [ ] Filtro por usuário funciona

---

### 👤 Perfil

#### Visualização
- [ ] Nome exibido corretamente
- [ ] Email exibido corretamente
- [ ] Role exibida (Admin/Usuário)
- [ ] Data de criação da conta
- [ ] Avatar/ícone aparece

#### Edição
- [ ] Campos pré-preenchidos
- [ ] Edição de nome funciona
- [ ] Edição de email funciona
- [ ] Validação de campos vazios
- [ ] Confirmação de sucesso
- [ ] Dados atualizados em tempo real
- [ ] Mudanças persistem após recarregar

---

### 🛡️ Painel Admin

#### Acesso
- [ ] Apenas admins veem o card Admin
- [ ] Apenas admins acessam o painel
- [ ] Users não conseguem acessar

#### Lista de Usuários
- [ ] Todos os usuários são exibidos
- [ ] Informações corretas (nome, email, role)
- [ ] Contador de usuários correto
- [ ] Ícones diferentes para admin/user
- [ ] Botões de ação visíveis

#### Criar Usuário
- [ ] Formulário funciona
- [ ] Validação de campos
- [ ] Email único validado
- [ ] Seletor de permissão funciona
- [ ] Usuário criado com sucesso
- [ ] Lista atualiza automaticamente
- [ ] Botão cancelar funciona

#### Editar Usuário
- [ ] Campos pré-preenchidos
- [ ] Edição de nome funciona
- [ ] Edição de email funciona
- [ ] Alteração de role funciona
- [ ] Validações aplicadas
- [ ] Confirmação de sucesso
- [ ] Lista atualiza automaticamente

#### Excluir Usuário
- [ ] Confirmação antes de excluir
- [ ] Usuário removido com sucesso
- [ ] Lista atualiza automaticamente
- [ ] Não é possível excluir a si mesmo
- [ ] Feedback de sucesso

---

### 🧭 Navegação

#### Stack Navigation
- [ ] Navegação entre telas funciona
- [ ] Botão voltar funciona
- [ ] Headers aparecem corretamente
- [ ] Títulos corretos em cada tela
- [ ] Transições suaves

#### Proteção de Rotas
- [ ] Usuários não logados veem apenas Login/Cadastro
- [ ] Usuários logados acessam área interna
- [ ] Admins acessam painel admin
- [ ] Users não veem opções de admin
- [ ] Redirecionamento automático funciona

---

### 💾 Persistência

#### AsyncStorage
- [ ] Dados salvos corretamente
- [ ] Dados recuperados ao abrir app
- [ ] Sessão mantida entre aberturas
- [ ] Cupons resgatados persistem
- [ ] Usuários criados persistem
- [ ] Edições persistem

---

### 🎨 Interface

#### Visual
- [ ] Cores aplicadas corretamente
- [ ] Botões arredondados
- [ ] Cards com sombras
- [ ] Ícones aparecem
- [ ] Imagens carregam
- [ ] Fontes legíveis

#### Responsividade
- [ ] Layout adapta a diferentes tamanhos
- [ ] Scroll funciona em listas longas
- [ ] Teclado não sobrepõe inputs
- [ ] Safe area respeitada
- [ ] Orientação landscape funciona

#### Feedback Visual
- [ ] Loading states aparecem
- [ ] Mensagens de erro claras
- [ ] Confirmações de sucesso
- [ ] Botões mudam ao pressionar
- [ ] Validações em tempo real

---

## 🤖 Testes Automatizados (Futuro)

### Setup de Testes

```bash
# Instalar dependências
npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
```

### Exemplo de Teste - Button Component

```typescript
// src/components/__tests__/Button.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Button title="Test Button" onPress={() => {}} />
    );
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={onPressMock} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    const { getByTestId } = render(
      <Button title="Test Button" onPress={() => {}} loading={true} />
    );
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('is disabled when disabled prop is true', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={onPressMock} disabled={true} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
```

### Exemplo de Teste - AuthContext

```typescript
// src/contexts/__tests__/AuthContext.test.tsx
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../AuthContext';

describe('AuthContext', () => {
  it('provides initial state', () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    expect(result.current.user).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('signs in user successfully', async () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    await act(async () => {
      await result.current.signIn('admin@bfpass.com', 'admin123');
    });
    
    expect(result.current.user).not.toBeNull();
    expect(result.current.user?.email).toBe('admin@bfpass.com');
  });

  it('throws error on invalid credentials', async () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    await expect(
      result.current.signIn('invalid@email.com', 'wrongpassword')
    ).rejects.toThrow('E-mail ou senha incorretos');
  });
});
```

### Exemplo de Teste - Screen

```typescript
// src/screens/__tests__/LoginScreen.test.tsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { LoginScreen } from '../LoginScreen';
import { AuthProvider } from '../../contexts/AuthContext';

const mockNavigation = {
  navigate: jest.fn(),
};

describe('LoginScreen', () => {
  it('renders login form', () => {
    const { getByPlaceholderText, getByText } = render(
      <AuthProvider>
        <LoginScreen navigation={mockNavigation} />
      </AuthProvider>
    );
    
    expect(getByPlaceholderText('seu@email.com')).toBeTruthy();
    expect(getByPlaceholderText('••••••••')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
  });

  it('shows error on empty fields', async () => {
    const { getByText } = render(
      <AuthProvider>
        <LoginScreen navigation={mockNavigation} />
      </AuthProvider>
    );
    
    fireEvent.press(getByText('Entrar'));
    
    await waitFor(() => {
      expect(getByText('Preencha todos os campos')).toBeTruthy();
    });
  });

  it('navigates to register screen', () => {
    const { getByText } = render(
      <AuthProvider>
        <LoginScreen navigation={mockNavigation} />
      </AuthProvider>
    );
    
    fireEvent.press(getByText('Criar conta'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Register');
  });
});
```

### Configurar Jest

```json
// package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
    ],
    "collectCoverageFrom": [
      "src/**/*.{ts,tsx}",
      "!src/**/*.test.{ts,tsx}",
      "!src/types/**"
    ]
  }
}
```

---

## 🔍 Testes de Integração

### Fluxo Completo - Usuário

```typescript
describe('User Flow', () => {
  it('completes full user journey', async () => {
    // 1. Cadastro
    const { getByText, getByPlaceholderText } = render(<App />);
    
    fireEvent.press(getByText('Criar conta'));
    fireEvent.changeText(getByPlaceholderText('Nome'), 'Test User');
    fireEvent.changeText(getByPlaceholderText('E-mail'), 'test@email.com');
    fireEvent.changeText(getByPlaceholderText('Senha'), '123456');
    fireEvent.press(getByText('Criar conta'));
    
    // 2. Dashboard
    await waitFor(() => {
      expect(getByText('Olá, Test User!')).toBeTruthy();
    });
    
    // 3. Ver cupons
    fireEvent.press(getByText('Cupons'));
    await waitFor(() => {
      expect(getByText('Cupons Disponíveis')).toBeTruthy();
    });
    
    // 4. Resgatar cupom
    fireEvent.press(getByText('50% OFF em Academia'));
    fireEvent.press(getByText('Resgatar Cupom'));
    
    await waitFor(() => {
      expect(getByText('Cupom Resgatado!')).toBeTruthy();
    });
    
    // 5. Ver histórico
    fireEvent.press(getByText('Meus Cupons'));
    await waitFor(() => {
      expect(getByText('1 cupons resgatados')).toBeTruthy();
    });
  });
});
```

---

## 📊 Cobertura de Testes

### Metas de Cobertura

- **Componentes**: 80%+
- **Contextos**: 90%+
- **Serviços**: 90%+
- **Telas**: 70%+
- **Geral**: 80%+

### Executar Cobertura

```bash
npm run test:coverage
```

---

## 🐛 Testes de Regressão

### Checklist Após Mudanças

- [ ] Todos os testes passam
- [ ] Nenhuma funcionalidade quebrou
- [ ] Performance mantida
- [ ] UI não quebrou
- [ ] Navegação funciona
- [ ] Dados persistem

---

## 📱 Testes em Dispositivos

### iOS
- [ ] iPhone SE (tela pequena)
- [ ] iPhone 14 (tela média)
- [ ] iPhone 14 Pro Max (tela grande)
- [ ] iPad (tablet)

### Android
- [ ] Dispositivo pequeno (5")
- [ ] Dispositivo médio (6")
- [ ] Dispositivo grande (6.5"+)
- [ ] Tablet

---

## ⚡ Testes de Performance

### Métricas

- [ ] Tempo de carregamento inicial < 3s
- [ ] Navegação entre telas < 300ms
- [ ] Scroll suave (60fps)
- [ ] Sem memory leaks
- [ ] Tamanho do bundle < 50MB

### Ferramentas

```bash
# Analisar bundle
npx react-native-bundle-visualizer

# Profile performance
# Use React DevTools Profiler
```

---

## 🔒 Testes de Segurança

### Checklist

- [ ] Senhas não aparecem em logs
- [ ] Dados sensíveis não em plain text
- [ ] Validações no frontend
- [ ] Proteção contra SQL injection (quando integrar API)
- [ ] Proteção contra XSS
- [ ] HTTPS obrigatório (quando integrar API)

---

## ♿ Testes de Acessibilidade

### Checklist

- [ ] Contraste de cores adequado (WCAG AA)
- [ ] Tamanho de fonte legível
- [ ] Áreas de toque > 44x44px
- [ ] Labels em elementos interativos
- [ ] Suporte a screen readers
- [ ] Navegação por teclado (web)

### Ferramentas

```bash
# Instalar
npm install --save-dev @testing-library/jest-native

# Testar acessibilidade
expect(element).toBeAccessible();
```

---

## 📝 Relatório de Bugs

### Template

```markdown
## Bug Report

**Título**: [Descrição curta]

**Severidade**: Crítico / Alto / Médio / Baixo

**Descrição**:
[Descrição detalhada do bug]

**Passos para Reproduzir**:
1. Passo 1
2. Passo 2
3. Passo 3

**Resultado Esperado**:
[O que deveria acontecer]

**Resultado Atual**:
[O que está acontecendo]

**Screenshots**:
[Se aplicável]

**Ambiente**:
- Dispositivo: iPhone 14
- OS: iOS 17
- Versão do App: 1.0.0

**Logs**:
```
[Logs relevantes]
```
```

---

## ✅ Checklist Final

Antes de considerar o app pronto:

- [ ] Todos os testes manuais passam
- [ ] Testes automatizados implementados
- [ ] Cobertura de testes > 80%
- [ ] Testado em múltiplos dispositivos
- [ ] Performance adequada
- [ ] Acessibilidade validada
- [ ] Sem bugs críticos
- [ ] Documentação completa
- [ ] Code review realizado

---

## 🎉 Conclusão

Com este guia de testes, você pode garantir que o BF Pass funcione perfeitamente em todos os cenários!
