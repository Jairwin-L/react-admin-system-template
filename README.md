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
