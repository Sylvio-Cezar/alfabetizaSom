## Guia de inicialização

## Instalações necessárias

- Node.js: https://nodejs.org/en/download --> Após a instalação, é necessário abrir o cmd e inserir o comando "npm install -g cordova ionic" 
- VS Code: https://code.visualstudio.com/

## Configuração das variáveis de ambiente do sistema 

- Variáveis de ambiente:
  
  ![image](https://github.com/Sylvio-Cezar/alfabetizaSom/assets/75698717/d8858600-b029-44da-ad3d-ae3ae6a785c2)

- Variáveis do sistema:

  ![image](https://github.com/Sylvio-Cezar/alfabetizaSom/assets/75698717/f491273d-f6cc-49d2-89c4-86db07d48e98)
  ![image](https://github.com/Sylvio-Cezar/alfabetizaSom/assets/75698717/d58eed0d-4b55-4dad-a3b8-d76351406f0d)

  OBS: utilizar Java 11.

## Estrutura do projeto

```
.
 ├── resources                    # Arquivos de construção nas plataformas específicas (iOS, Android) e ícone do aplicativo + tela inicial
 ├── src                          # Aqui é onde o aplicativo fica - *a pasta principal*
 ├── .editorconfig                # Um arquivo auxiliar para definir e manter estilos de codificação em diferentes ambientes
 ├── .gitignore                   # Especifica arquivos intencionalmente não rastreados para serem ignorados ao usar o Git
 ├── config.xml                   # Arquivo de configuração do Ionic
 ├── .ionic.config.json           # Configuração global para o seu aplicativo Ionic
 ├── package.json                 # Dependências e scripts de construção
 ├── README.md                    # Descrição do projeto
 ├── tsconfig.json                # Configurações do TypeScript
 └── tslint.json                  # Opções de verificação de código TypeScript
```

### Diretório src
```
.
   ├── ...
   ├── src                       
   │   ├── app                    # Esta pasta contém módulos globais e estilos
   │   ├── assets                 # Esta pasta contém imagens
   |   ├── pages                  # Contém todas as páginas individuais
   |   ├── theme                  # As variáveis globais SCSS a serem usadas em todo o aplicativo
   |   ├── global.scss            # SCSS global a ser usado em todo o aplicativo
   |   ├── index.html             # O arquivo de índice raiz do aplicativo - Isso inicia o aplicativo
   └── ...
```


## Como iniciar o projeto

O projeto é iniciado com os comandos regulares do Ionic.

1. Clone o repositório do projeto para seu computador --> "git clone {url_do_repositório}" via Git ou cmd.
2. Adicione a pasta do projeto ao VS Code.
3. Abra o terminal do VS Code e execute o comando "npm install" para instalar todas as dependências.
4. Execute o comando "ionic serve" para iniciar o ambiente de desenvolvimento.
5. Para construir o projeto no dispositivo, execute "ionic capacitor run android" ou "ionic capacitor run ios" (necessário apenas para testes finais da aplicação).
