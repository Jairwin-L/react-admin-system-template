# admin-system-template

- Vite + React + TS + Antd

## 接口层说明

因为中台系统基本以curd为主，所以做成统一的接口配置，与一般的RestFul风格不一样的是，接口不用调整，用一个接口类型作为每个crud的类型，同时也保持着crud的风格

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

pnpm i -g @vitejs/create-app
```

## Run

- Dev

```
dev环境：pnpm dev
联调环境：pnpm dev:debug
mock环境：pnpm dev:mock
test环境：pnpm dev:test
生产环境：pnpm dev:production
```

- Build

```
dev环境：pnpm build:dev
test环境：pnpm build:test
生产环境：pnpm build:prod
```

- Preview

```
pnpm preview
```

## Link

vitejs：https://cn.vitejs.dev/guide/
