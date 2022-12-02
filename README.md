# james-bot
Um bot de discord desenvolvido com a biblioteca [Discord.js](https://discord.js.org/)

## Funcionamento

O bot utiliza RegEx em JavaScript para entender o que foi enviado a ele via chat do discord atraves do comando /james 

Se na mensagem conter os caracteres 'noticia' no caso insensitivo (maiusculo ou minusculo)

Tras como resposta no seu atual desenvolvimento os titulos das noticias do site da Globo.com via WebScraping também com RegExp.

- Saiba mais sobre as funções que utilizam RegExp nesse projeto: [Explicação das funções](https://github.com/s1lviuz/james-bot/blob/master/RegExp.md)

## Como utilizar

Você pode criar seu próprio James e continuar desenvolvendo mais utilidades para ele, basta ter um conhecimento basico de JavaScript e seguir os seguintes passos:

### 1 - Primeiro aprenda como criar um bot e obter seus dados para começar

Faça login e crie uma nova aplicação: [discord.com/developers/applications](https://discord.com/developers/applications)

![screencapture-discord-developers-applications-2022-12-01-22_41_37](https://user-images.githubusercontent.com/54729104/205195642-b01e0a7b-8a34-4c35-a0e0-cb0146b6bb95.png)

Nomeie sua aplicação como desejar e prossiga

![Captura de tela 2022-12-01 224517](https://user-images.githubusercontent.com/54729104/205196031-689edef2-a997-4768-a6fd-4821081162df.png)

Se deu tudo certo você será redirecionado para a página de informações gerais sobre o sua aplicação

Dentre todas as informações importantes aqui você vai precisar essencialmente dessas:

![screencapture-discord-developers-applications-1048052588756598834-information-2022-12-01-22_47_40](https://user-images.githubusercontent.com/54729104/205196927-f5c6a96a-f001-4ce8-8ab1-df620b74d622.png)

Acesse a opção Bot na parte central a esquerda na pagina e agora sim vamos criar o seu bot

![screencapture-discord-developers-applications-1048052588756598834-bot-2022-12-01-23_01_01](https://user-images.githubusercontent.com/54729104/205197931-2df1ad86-042d-4769-8a5a-c5b93db7b606.png)

Só aceita e prossiga!

![Captura de tela 2022-12-01 230332](https://user-images.githubusercontent.com/54729104/205198194-bc299fd9-b78a-4a7e-808d-8e74c4349c94.png)

Aceite e você será redirecionado para a pagina on tem as informações do seu bot, dentre elas precisaremos do TOKEN

![screencapture-discord-developers-applications-1048052588756598834-bot-2022-12-01-23_07_32](https://user-images.githubusercontent.com/54729104/205199866-ac598057-750b-4f42-a6f0-c2df1a4cd6d6.png)

Aceite tudo novamente e copie com COPY o TOKEN, cole ele temporariamente em algum documento de texto pois ele não aparecerá de novo quando sair da pagina ;)

![screencapture-discord-developers-applications-1048052588756598834-bot-2022-12-01-23_19_05](https://user-images.githubusercontent.com/54729104/205200115-8765bd5e-a9a9-44c8-9f8d-c960c9ec1881.png)

Agora navegue entre as seguintes opções = OAuth2 => URL Generator e marque essas caixas:

![screencapture-discord-developers-applications-1048052588756598834-oauth2-url-generator-2022-12-01-22_56_40](https://user-images.githubusercontent.com/54729104/205197388-ba3b96e2-79a3-480f-884e-c88b45e62b62.png)

Aqui em GENERATED URL você tem o link para adicionar o bot no seu sevidor, basta copiar clicando em COPY e abrir no seu navegador

Siga os passos e adicione ele, é bem simples :)

Agora que você já criou seu bot vamos pro segundo passo:

### 2 - Crie um deploy em nuvem para o codigo do seu bot com o [Glitch](https://glitch.com/)

Acesse o deploy do James bot aqui: [glitch.com/james-bot7](https://glitch.com/edit/#!/james-bot7)

Clique em Remix para criar um deploy baseado no James bot para ser seu

![screencapture-glitch-edit-2022-12-01-23_27_49](https://user-images.githubusercontent.com/54729104/205201445-739e7fd5-48fc-4c6e-84cd-fed36422c54c.png)

Se deu tudo certo você será redirecionado para a pagina onde está o seu deploy remixando o James bot, se quiser pode criar uma conta onde ficara salvo na sua conta, mas você também pode somente manter o link dela onde conseguirá editar o codigo livremente. (recomendo que crie uma conta no Glitch, é de graça ;) )

Agora pra finalizar vamos configurar as chaves que você obteve enquanto criava o bot no passo 1

Acesse pelo diretório do projeto a esquerda o arquivo .env

![screencapture-glitch-edit-2022-12-01-23_31_23](https://user-images.githubusercontent.com/54729104/205202348-29fe33ad-5dc0-460e-91e2-3eaa69029e42.png)

Fora a GUILD_ID todas as outras chaves você já possui se concluiu com êxito o passo 1

Agora vamos pegar o GUILD_ID que é o id do seu servidor onde adicionou o bot

Pra isso vá no seu servidor e clique com o botão direito do mouse em qualquer sala e selecione Copiar link

![Captura de tela 2022-12-01 234213](https://user-images.githubusercontent.com/54729104/205203137-3186dd4f-75e0-4d15-ad2e-684350ba7294.png)

O ID do seu servidor estará apos channels/. Por exemplo: https://discord.com/channels/12345/678910 onde 12345 é o seu GUILD_ID que você colocará na .env :)

Com tudo preenchido acesse LOGS no canto inferior esquerdo e cheque se apresenta a mensagem de Preparado!

![screencapture-glitch-edit-2022-12-01-23_53_04](https://user-images.githubusercontent.com/54729104/205204538-41b1221a-7a98-488c-81da-0f1bcf118c63.png)

Agora pra finalizar vamos registrar os comandos do bot para que apareçam quando for digitar a mensagem no canal de texto do Discord

Basta clicar em TERMINAL no canto inferior esquerdo e digitar o seguinte comando $ node deploy-commands.js

Se estiver tudo certo você terá este retorno

![screencapture-glitch-edit-2022-12-01-23_58_14](https://user-images.githubusercontent.com/54729104/205205663-d7b0fcae-75fd-4950-b859-7dae234026d8.png)

E finalmente Pronto! Agora vá no canal de texto e faça o teste: /ajuda

![Captura de tela 2022-12-02 000140](https://user-images.githubusercontent.com/54729104/205205684-7bf1b555-5bca-42dd-8324-4654d8083c22.png)

Agora você pode aperfeiçoar seu bot estudando a documentação do Discord.js tmj :)

## Links úteis

- [Documentação do Dsenvolvimento de aplicações no Discord](https://discord.com/developers/docs/intro)
- [Documentação Discord.js](https://discord.js.org/#/docs/discord.js/main/general/welcome)
- [Aprenda mais sobre o Glitch](https://glitch.com/discover)
