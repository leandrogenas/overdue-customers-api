# overdue-customers-api

Aplicação independente que faz a leitura de um banco de dados MongoDB e exibe-os numa página da web.

A aplicação é estruturada da seguinte maneira:

```
./overdue-customers
  packages/
    angular/
      dist/
      src/
      package.json
      ...
    nestjs/
      dist/
      src/
      public/
      package.json
      ...
  docker-compose.yml
  package.json
  README.md
  LICENSE.md
```

na pasta ```packages``` você encontra tanto o projeto frontend em Angular 11 quanto o backend em NestJS, cada um deles possui um arquivo Dockerfile para construção e execução dos conteineres.

o arquivo ```docker-compose.yml``` contém todas as configurações necessárias para rodar os conteineres do projeto como um todo, apesar de estar otimizado para o ambiente de desenvolvimento, pode ser usado em produção sem problemas, ao custo de um pouco mais de processamento devido ao watcher do livereload.

### Requisitos

1. Docker

### Instalação

1. Inicialize o Docker


Na pasta atual (deste README), rode o comando
```
docker-compose up (-d para desacoplar do console)
```  
O docker irá se inicializar e será servido no endereço http://localhost:3000

Para uso em produção, é isso que é necessário para rodar a aplicação, ajustando o arquivo docker-compose.yml para as portas externas conforme necessário.

---
2. Instalação de dependencias para desenvolvimento

Na pasta atual (deste README), rode o comando
```
npm i -g yarn
yarn
yarn develop
```
Obs.: Se a aplicação abrir em branco, vá em 'View' -> 'Reload' na janela do electron.