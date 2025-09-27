# Reabili

## Índice

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Como testar](#como-testar)
- [Nomes dos integrantes](#nomes-dos-integrantes)
- [Imagens e ícones relacionados ao projeto](#imagens-e-ícones-relacionados-ao-projeto)
- [Estrutura de pastas do projeto](#estrutura-de-pastas-do-projeto)
- [Link do GitHub](#link-do-github)
- [Link publicado (Vercel)](#link-publicado-vercel)
- [Link do vídeo do YouTube](#link-do-vídeo-do-youtube)

## Tecnologias utilizadas

- React
- Vite
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- React Router
- React Hook Form
- Node v22.18.0

_Observação: Para os ícones, estamos utilizando a biblioteca Phosphor Icons._

## Como testar

### Adicione as variáveis de ambiente

Para rodar o chatbot e o servidor de teste (json-server), são necessárias as seguintes variáveis de ambiente:

```.env
VITE_SERVER_URL=http://localhost:3001
VITE_JSON_ENDPOINT=http://localhost:3000/content
WATSON_ASSISTANT_APIKEY=QGmn6ql_GeiwS2GIVATF39sZL9E45GZR5Bn-wOnYxPBM
WATSON_ASSISTANT_URL=https://api.au-syd.assistant.watson.cloud.ibm.com/instances/0f3c70d7-86ee-446e-b0ef-406d247cc4d3
WATSON_ASSISTANT_ID=cf062b12-48b7-44c8-903d-031a15b42851
```

### Instalação

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Inicie os serviços de backend (API e chat):**
   Em um terminal, execute o seguinte comando para iniciar o servidor de conteúdo e o servidor do chat simultaneamente.

   ```bash
   npm run api
   ```

3. **Inicie o servidor de desenvolvimento do frontend:**
   Em **outro** terminal, execute o seguinte comando:

   ```bash
   npm run dev
   ```

   Após isso, abra seu navegador e acesse o endereço `http://localhost:5173` (ou a porta que for indicada no seu terminal).

### Testando as features

> Para testar as notificações e o chatbot precisa de uma comunicação segura, via HTTPS. Para isso usamos certificados gerados localmente e adicionamos na opção `server` do Vite. Para rodar a aplicação via https, use:

```bash
npm run dev:https
```

Após isso, abra seu navegador e acesse o endereço `https://localhost:5173` (ou a porta que for indicada no seu terminal).

## Nomes dos integrantes

- Camilo Micheletto
- Carlos Silva
- Guilherme Ribeiro

## Imagens e ícones relacionados ao projeto

- Bili.svg
- CardDisabledPerson.png
- CardTelephoneExample.png
- Carf.png
- Chrome.svg
- ExemploVideoChamada1.png
- ExemploVideoChamada2.png
- GoogleCalendar.svg
- LogoHcFmusp.svg
- LogomarcaColor.svg
- LogomarcaWhite.svg
- TeamCamiloMicheletto.jpeg
- TeamCarlosSilva.jpeg
- TeamGuilhermeRibeiro.jpeg
- IMREA.svg

## Estrutura de pastas do projeto

```bash
├── hc-chat-server
├── public
└── src
    ├── assets
    ├── components
    │   ├── Button
    │   ├── FeatureCard
    │   ├── Footer
    │   ├── Heading
    │   ├── Input
    │   ├── LinkItem
    │   ├── Navbar
    │   └── Notification
    ├── hooks
    ├── layout
    ├── pages
    │   ├── Agendamento
    │   ├── Ai
    │   ├── Contato
    │   ├── Duvida
    │   ├── EnvioAgendamento
    │   ├── Error
    │   ├── Faq
    │   ├── Integrantes
    │   └── Landing
    ├── types
    └── utils
```

## Link do GitHub

https://github.com/Challenge-2025-Equipe-07/hc-frontend-react

## Link publicado (Vercel)

(Sem backend conectado)
https://hc-frontend-react.vercel.app/

## Link do vídeo do YouTube

https://youtu.be/ZVOTUHtpnXM