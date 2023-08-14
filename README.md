## Guia de inicialização

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

1. Execute o comando npm install para instalar todas as dependências.
2. Execute o comando ionic serve para iniciar o ambiente de desenvolvimento.
3. Para construir o projeto, execute ionic build android ou ionic build ios.

Uma alternativa é emular o aplicativo em um dispositivo ou enviá-lo para a nuvem do Ionic. A partir daqui, você pode baixar o aplicativo Ionic View e utilizar o app em todos os dispositivos.
