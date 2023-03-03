# admin-system-template

- Vite + React + TS + Antd

## node

v14.18.3

## 绑定 hosts

```
sudo vi /etc/hosts
```

```
127.0.1 dev.jairwin.cn
```

## Env Steps

```
brew install node

node -v

npm i yarn -g

yarn global add @vitejs/create-app
```

## Run

- Dev

```
dev环境：yarn dev
联调环境：yarn dev:debug
mock环境：yarn dev:mock
test环境：yarn dev:test
生产环境：yarn dev:production
```

- Build

```
dev环境：yarn build:dev
test环境：yarn build:test
生产环境：yarn build:prod
```

- Preview

```
yarn preview
```

## Link

vitejs：https://cn.vitejs.dev/guide/
