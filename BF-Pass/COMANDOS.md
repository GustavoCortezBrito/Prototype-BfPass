# 🛠️ Comandos Úteis - BF Pass

## 📦 Instalação

```bash
# Navegar para a pasta do projeto
cd BF-Pass

# Instalar dependências (já feito)
npm install
```

## 🚀 Executar o Projeto

```bash
# Iniciar o servidor de desenvolvimento
npm start

# Iniciar com cache limpo
npm start -- --clear

# Ou usar o Expo CLI diretamente
expo start

# Limpar cache do Expo
expo start -c
```

## 📱 Executar em Dispositivos

```bash
# Android
npm run android

# iOS (apenas macOS)
npm run ios

# Web
npm run web
```

## 🔍 Verificação de Código

```bash
# Executar linter
npm run lint

# Verificar erros TypeScript
npx tsc --noEmit
```

## 📦 Dependências Instaladas

```bash
# AsyncStorage (já instalado)
npm install @react-native-async-storage/async-storage

# Picker (já instalado)
npm install @react-native-picker/picker

# React Navigation (já instalado)
npm install @react-navigation/native
npm install @react-navigation/native-stack
```

## 🧹 Limpeza

```bash
# Limpar cache do npm
npm cache clean --force

# Limpar node_modules e reinstalar
rm -rf node_modules
npm install

# Limpar cache do Expo
expo start -c
```

## 📱 Expo Go

### Android
1. Baixe o Expo Go na Play Store
2. Abra o app
3. Escaneie o QR Code

### iOS
1. Baixe o Expo Go na App Store
2. Abra o app Camera
3. Escaneie o QR Code
4. Toque na notificação

## 🔧 Troubleshooting

### Erro: "Unable to resolve module"
```bash
npm install
expo start -c
```

### Erro: "Metro bundler issues"
```bash
watchman watch-del-all
rm -rf node_modules
npm install
expo start -c
```

### Erro: "AsyncStorage not found"
```bash
npm install @react-native-async-storage/async-storage
expo start -c
```

### Erro: "Picker not found"
```bash
npm install @react-native-picker/picker
expo start -c
```

## 📊 Estrutura de Pastas

```bash
# Ver estrutura do projeto
tree src/

# Ou no Windows
dir /s /b src\
```

## 🔄 Git (Opcional)

```bash
# Inicializar repositório
git init

# Adicionar arquivos
git add .

# Commit
git commit -m "Protótipo BF Pass completo"

# Adicionar remote
git remote add origin <url>

# Push
git push -u origin main
```

## 📝 Scripts Disponíveis

```json
{
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web",
  "lint": "expo lint"
}
```

## 🎯 Comandos Rápidos

```bash
# Iniciar projeto
npm start

# Ver logs
# Os logs aparecem automaticamente no terminal

# Recarregar app
# Pressione 'r' no terminal
# Ou sacuda o dispositivo e selecione "Reload"

# Abrir DevTools
# Pressione 'd' no terminal
# Ou sacuda o dispositivo e selecione "Debug"
```

## 🔐 Variáveis de Ambiente (Futuro)

Para adicionar variáveis de ambiente:

```bash
# Criar arquivo .env
touch .env

# Adicionar variáveis
API_URL=https://api.bfpass.com
API_KEY=sua_chave_aqui
```

Instalar dotenv:
```bash
npm install react-native-dotenv
```

## 📦 Build (Futuro)

```bash
# Build para Android
eas build --platform android

# Build para iOS
eas build --platform ios

# Build para ambos
eas build --platform all
```

## 🚀 Deploy (Futuro)

```bash
# Publicar no Expo
expo publish

# Ou usar EAS
eas update
```

## 📱 Testar em Múltiplos Dispositivos

```bash
# O QR Code funciona para múltiplos dispositivos
# Basta escanear o mesmo QR Code em diferentes aparelhos
```

## 🎨 Customização

### Mudar cores
Edite: `src/utils/colors.ts`

### Mudar ícones
Use: `@expo/vector-icons`
Referência: https://icons.expo.fyi/

### Mudar fontes
```bash
expo install expo-font
```

## 📚 Documentação

- **Expo**: https://docs.expo.dev/
- **React Navigation**: https://reactnavigation.org/
- **React Native**: https://reactnative.dev/
- **AsyncStorage**: https://react-native-async-storage.github.io/

## ✅ Checklist de Desenvolvimento

- [x] Projeto inicializado
- [x] Dependências instaladas
- [x] Estrutura de pastas criada
- [x] Componentes implementados
- [x] Telas criadas
- [x] Navegação configurada
- [x] Autenticação implementada
- [x] Persistência configurada
- [x] Design aplicado
- [x] Funcionalidades testadas

## 🎉 Pronto para Desenvolver!

O projeto está 100% configurado e pronto para uso.
Execute `npm start` e comece a testar!
