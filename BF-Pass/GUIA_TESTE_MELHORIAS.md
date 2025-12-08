# Guia de Teste - Melhorias BF-Pass

## 🧪 Como Testar as Novas Funcionalidades

### Preparação
```bash
cd BF-Pass
npm install
npm start
```

### 1. Testar Seta de Voltar ✅

**Passos:**
1. Faça login no app
2. Navegue para "Cupons Disponíveis"
3. Verifique se a seta de voltar está visível no canto superior esquerdo
4. Clique na seta e confirme que volta para o Dashboard
5. Repita para "Meus Cupons" e "Perfil"

**Resultado Esperado:**
- Seta sempre visível e clicável
- Navegação funcionando corretamente

---

### 2. Testar Alteração de Senha 🔐

**Passos:**
1. Acesse o Perfil
2. Role até encontrar o botão "Alterar Senha"
3. Clique no botão
4. Teste os seguintes cenários:

**Cenário A - Senha Atual Incorreta:**
- Senha Atual: `senha_errada`
- Nova Senha: `123456`
- Confirmar: `123456`
- Resultado: Erro "Senha atual incorreta"

**Cenário B - Senhas Não Coincidem:**
- Senha Atual: `admin123` (ou sua senha)
- Nova Senha: `123456`
- Confirmar: `654321`
- Resultado: Erro "As senhas não coincidem"

**Cenário C - Senha Muito Curta:**
- Senha Atual: `admin123`
- Nova Senha: `123`
- Confirmar: `123`
- Resultado: Erro "A nova senha deve ter no mínimo 6 caracteres"

**Cenário D - Sucesso:**
- Senha Atual: `admin123`
- Nova Senha: `novaSenha123`
- Confirmar: `novaSenha123`
- Resultado: Sucesso, modal fecha

**Cenário E - Testar Nova Senha:**
- Faça logout
- Tente login com senha antiga: Deve falhar
- Faça login com nova senha: Deve funcionar

---

### 3. Testar Foto de Perfil 📸

**Passos:**
1. Acesse o Perfil
2. Clique no avatar (círculo com ícone de pessoa)
3. Permita acesso à galeria quando solicitado
4. Selecione uma foto
5. Ajuste o crop (1:1)
6. Confirme

**Resultado Esperado:**
- Foto aparece no avatar
- Ícone de câmera continua visível
- Mensagem de sucesso
- Foto persiste após recarregar o app

**Teste Adicional:**
- Clique novamente no avatar
- Selecione outra foto
- Confirme que a foto é atualizada

---

### 4. Testar Sistema de GPS 📍

**Passos:**
1. Acesse "Cupons Disponíveis"
2. Permita acesso à localização quando solicitado
3. Aguarde o carregamento da localização
4. Verifique o badge "Localização ativa" no header

**Teste A - Ordenar por Distância:**
1. Clique em "Ordenar por Distância"
2. Botão deve ficar azul com texto "Mais Próximos"
3. Cupons devem ser reordenados
4. Cada cupom deve mostrar a distância (ex: "2.5km de você")

**Teste B - Desativar Ordenação:**
1. Clique novamente no botão
2. Botão volta ao estado normal
3. Cupons voltam à ordem original
4. Distâncias não são mais exibidas

**Teste C - Sem Permissão:**
1. Negue permissão de localização
2. Tente clicar em "Ordenar por Distância"
3. Deve aparecer alerta informando que localização não está disponível

---

### 5. Testar Responsividade 📱

**Teste em Diferentes Dispositivos:**
- iPhone SE (tela pequena)
- iPhone 14 (tela média)
- iPhone 14 Pro Max (tela grande)
- iPad (tablet)

**Verificar:**
- Headers não cortam conteúdo
- Setas de voltar sempre visíveis
- Cards bem espaçados
- Textos legíveis
- Imagens proporcionais
- Botões acessíveis

---

## 🎯 Checklist Completo

### Navegação
- [ ] Seta de voltar em Cupons
- [ ] Seta de voltar em Meus Cupons
- [ ] Seta de voltar em Perfil
- [ ] Navegação entre telas fluida

### Perfil
- [ ] Alterar nome e email
- [ ] Alterar senha (todos os cenários)
- [ ] Alterar foto de perfil
- [ ] Dados persistem após reload

### GPS e Localização
- [ ] Solicita permissão corretamente
- [ ] Mostra badge de localização ativa
- [ ] Ordena cupons por distância
- [ ] Exibe distância em cada cupom
- [ ] Funciona sem permissão (com limitações)

### Design e Responsividade
- [ ] Headers bem posicionados
- [ ] Cards com sombras adequadas
- [ ] Espaçamento consistente
- [ ] Fontes legíveis
- [ ] Funciona em diferentes tamanhos de tela

---

## 🐛 Problemas Conhecidos

Nenhum problema conhecido no momento.

---

## 📝 Notas de Teste

### Credenciais de Teste
- **Admin:**
  - Email: `admin@bfpass.com`
  - Senha: `admin123`

- **Usuário:**
  - Email: `joao@email.com`
  - Senha: `123456`

### Localização de Teste
Os cupons mock estão configurados com coordenadas em Barretos-SP:
- Latitude: ~-20.55
- Longitude: ~-48.57

Para testar a ordenação por distância, você pode:
1. Usar um emulador e definir localização manual
2. Usar um dispositivo físico em Barretos
3. Modificar as coordenadas no mock para sua localização atual

---

## ✅ Resultado Esperado Final

Após todos os testes, o app deve:
- Navegar suavemente entre telas
- Permitir alteração de senha com validações
- Permitir upload de foto de perfil
- Mostrar cupons ordenados por distância
- Ter design responsivo e consistente
- Funcionar sem crashes ou erros
