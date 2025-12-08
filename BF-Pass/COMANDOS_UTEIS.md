# 🛠️ Comandos Úteis - BF-Pass

## 🚀 Iniciar o Projeto

```bash
# Navegar para o diretório
cd BF-Pass

# Iniciar o servidor de desenvolvimento
npm start

# Ou usar Expo CLI diretamente
npx expo start
```

## 📱 Executar em Dispositivos

```bash
# Android
npm run android
# ou
npx expo start --android

# iOS (apenas macOS)
npm run ios
# ou
npx expo start --ios

# Web
npm run web
# ou
npx expo start --web
```

## 🧹 Limpeza e Reset

```bash
# Limpar cache do Metro
npx expo start --clear

# Limpar cache do npm
npm cache clean --force

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install

# Reset completo do projeto Expo
npx expo start --clear --reset-cache
```

## 🔍 Verificação de Código

```bash
# Verificar erros TypeScript
npx tsc --noEmit

# Executar linter
npm run lint

# Verificar formatação
npx prettier --check "src/**/*.{ts,tsx}"

# Corrigir formatação automaticamente
npx prettier --write "src/**/*.{ts,tsx}"
```

## 📦 Gerenciamento de Dependências

```bash
# Instalar nova dependência
npm install <package-name>

# Instalar dependência de desenvolvimento
npm install --save-dev <package-name>

# Atualizar dependências
npm update

# Verificar dependências desatualizadas
npm outdated

# Remover dependência
npm uninstall <package-name>
```

## 🏗️ Build e Deploy

```bash
# Build para Android (APK)
npx eas build --platform android --profile preview

# Build para iOS
npx eas build --platform ios --profile preview

# Build para ambas plataformas
npx eas build --platform all

# Publicar atualização OTA
npx eas update --branch production
```

## 🧪 Testes

```bash
# Executar testes (quando implementados)
npm test

# Executar testes em modo watch
npm test -- --watch

# Executar testes com cobertura
npm test -- --coverage
```

## 📊 Análise e Debug

```bash
# Analisar bundle size
npx expo export --dump-sourcemap

# Verificar configuração do Expo
npx expo config

# Verificar diagnósticos
npx expo doctor

# Verificar versões
npx expo --version
node --version
npm --version
```

## 🔧 Configuração de Ambiente

```bash
# Instalar Expo CLI globalmente
npm install -g expo-cli

# Instalar EAS CLI
npm install -g eas-cli

# Login no Expo
npx expo login

# Verificar status de login
npx expo whoami
```

## 📱 Emuladores e Simuladores

```bash
# Listar emuladores Android disponíveis
emulator -list-avds

# Iniciar emulador Android específico
emulator -avd <nome-do-avd>

# Listar simuladores iOS (macOS)
xcrun simctl list devices

# Abrir simulador iOS
open -a Simulator
```

## 🐛 Debug e Logs

```bash
# Ver logs do Android
npx react-native log-android

# Ver logs do iOS
npx react-native log-ios

# Abrir DevTools
# Pressione 'd' no terminal onde o Expo está rodando
# Ou sacuda o dispositivo físico
```

## 🔄 Atualização de Dependências

```bash
# Atualizar Expo SDK
npx expo upgrade

# Atualizar React Native
npx expo install react-native@latest

# Atualizar todas as dependências Expo
npx expo install --fix
```

## 📝 Geração de Assets

```bash
# Gerar ícones e splash screens
npx expo prebuild

# Gerar apenas ícones
npx expo-optimize

# Otimizar imagens
npx expo-optimize --quality 80
```

## 🌐 Compartilhamento

```bash
# Publicar no Expo Go (desenvolvimento)
npx expo publish

# Criar link de compartilhamento
npx expo start --tunnel

# Gerar QR code
npx expo start
```

## 🔐 Variáveis de Ambiente

```bash
# Criar arquivo .env
touch .env

# Exemplo de conteúdo .env:
# API_URL=https://api.exemplo.com
# API_KEY=sua-chave-aqui

# Usar no código:
# import Constants from 'expo-constants';
# const apiUrl = Constants.expoConfig.extra.apiUrl;
```

## 📚 Documentação

```bash
# Abrir documentação do Expo
npx expo docs

# Abrir documentação de um pacote específico
npx expo docs expo-location
```

## 🎯 Comandos Específicos do Projeto

```bash
# Resetar dados do AsyncStorage (útil para testes)
# Execute no código:
# import AsyncStorage from '@react-native-async-storage/async-storage';
# await AsyncStorage.clear();

# Verificar permissões no Android
adb shell dumpsys package com.seu.pacote | grep permission

# Verificar permissões no iOS
# Configurações > Privacidade > Localização/Fotos
```

## 🚨 Solução de Problemas Comuns

```bash
# Erro de porta em uso
# Matar processo na porta 8081
npx kill-port 8081

# Erro de watchman (macOS)
brew install watchman
watchman watch-del-all

# Erro de cache persistente
rm -rf node_modules
rm -rf .expo
rm -rf $TMPDIR/react-*
npm install
npx expo start --clear

# Erro de permissões (Linux/macOS)
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
```

## 📊 Performance

```bash
# Analisar performance do bundle
npx expo export --dump-sourcemap
npx source-map-explorer bundle.js bundle.js.map

# Verificar tamanho do bundle
npx expo export
du -sh dist/
```

## 🔄 Git (Controle de Versão)

```bash
# Inicializar repositório
git init

# Adicionar arquivos
git add .

# Commit
git commit -m "feat: implementar melhorias de GPS e perfil"

# Push
git push origin main

# Ver status
git status

# Ver histórico
git log --oneline
```

## 💡 Dicas Úteis

### Atalhos no Terminal do Expo
- `a` - Abrir no Android
- `i` - Abrir no iOS
- `w` - Abrir no Web
- `r` - Recarregar app
- `m` - Alternar menu
- `d` - Abrir DevTools
- `shift+d` - Abrir DevMenu no dispositivo

### Debug no Dispositivo
- **Android**: Sacudir o dispositivo ou `adb shell input keyevent 82`
- **iOS**: Cmd+D no simulador ou sacudir dispositivo físico

### Melhor Performance
```bash
# Usar modo de produção
npx expo start --no-dev --minify

# Desabilitar Fast Refresh temporariamente
# Pressione 'r' no terminal para reload manual
```

---

## 📞 Ajuda Adicional

- Documentação Expo: https://docs.expo.dev
- React Native: https://reactnative.dev
- Stack Overflow: https://stackoverflow.com/questions/tagged/expo
- Discord Expo: https://chat.expo.dev

---

**Dica:** Salve este arquivo para referência rápida! 🚀
