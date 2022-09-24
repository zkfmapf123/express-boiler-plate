# Express-Inversify-Boiler-plate

- Express
- Inversify
- Decorator
- Serialize
- Jest

## Settings

```ts
    // eslint
    npm i eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

```ts
    // babel
    npm i @babel/cli @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/plugin-transform-runtime @babel/preset-typescript @babel/preset-env babel-plugin-module-resolver @babel/plugin-proposal-decorators babel-plugin-parameter-decorator babel-plugin-inline-json-import
```

## Architecture

###

- index.ts -> Middlewares -> Controller -> Handler -> Service -> Repository

> infra

- Docker, Docker-Compose 외 운영

> src/bases

- Model, Enum, Type, Interface

> src/configs

- 환경변수

> src/controllers

- Controller Layer

> src/decorators

- Deocreators

> src/handlers

- Handler Layer

> src/middlewares

- Middlwares

> src/policies

- Server 실행 시 필요한 라이브러리 설정 ex) Inversify, Swagger

> src/repositories

- Repository Layer

> src/utils

- Utils 함수

> src/helpers

- Helper 함수

> src/services

- Services Layer