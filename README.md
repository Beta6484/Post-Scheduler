# mLabs Post-Scheduler

Simulação de agendamento de posts para o teste de desenvolvedor Angular Pleno mLabs gerada com [Angular CLI](https://github.com/angular/angular-cli) versão 8.3.8.

## Rodando o projeto

1. Execute o comando `npm i` ou `npm install` para instalar as dependências do projeto.
2. Execute o comando `npm start` para rodar o projeto em modo desenvolvimento. O browser abrirá automaticamente no URL `http://localhost:4200/`.

## Build

Execute o comando `npm run build` para gerar o build do projeto. Os arquivos serão armazenados na pasta `dist`. Para este projeto o comando de build está configurado por padrão com a flag de produção `--prod`.

## Testes unitários

Execute o comando `npm run test` para executar testes unitários utilizando o [Karma](https://karma-runner.github.io).

## Apresentação online

Acesse o projeto online na plataforma [Netlify](https://mlabs-post-scheduler.netlify.app/).

## Observações

- Para limpar estilos padrão e garantir a consistência visual cross-browser foi utilizado neste projeto o [Normalize.css](https://necolas.github.io/normalize.css/);
- Foram adicionadas ao arquivo social-networks.json chaves contendo as cores padrão das redes sociais para a estilização quando necessária;
- Para simular um backend e garantir a persistência dos dados foi utilizado o serviço [ngx-indexed-db](https://github.com/assuncaocharles/ngx-indexed-db);
  - Na abertura da aplicação são criadas base de dados com os dados dos arquivos `schedules.json`, `schedules-status.json` e `social-networks.json` que passam então a ser consumidas através do serviço [ngx-indexed-db](https://github.com/assuncaocharles/ngx-indexed-db);
  - As imagens armazenadas em tempo de execução são convertidas em Base64 para viabilizar e facilitar o armazenamento no backend simulado.
- A listagem de agendamentos é acessada quando um post é agendado com sucesso. Para visualizar esta página a qualquer momento basta acessar a rota `/lista`. Observação: Parece que o [Netlify](https://mlabs-post-scheduler.netlify.app/) tem algum problema com acessos editando o URL na barra de endereços.

## Passos futuros

- Tratamento de erros especializados para as requisições;
- Indicação visual de carregamento de conteúdo;
- Foco em acessibilidade desde o layout;
- Trabalhar o SASS com variáveis, mixins, etc.
