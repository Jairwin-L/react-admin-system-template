# CI/CD 自动化部署

本项目使用 GitHub Actions 完成 CI/CD：

- CI：在 `pull_request` 和 `main`、`dev` 分支推送时执行 `pnpm lint`、`pnpm typecheck`、`pnpm build`。
- CD：在 `main` 分支推送时构建 `dist`，通过 SSH 上传到服务器，并将 `current` 软链接切换到新版本目录。

## 服务器准备

假设部署用户为 `deploy`，部署目录为 `/var/www/react-admin-system-template`：

```bash
sudo mkdir -p /var/www/react-admin-system-template/releases
sudo chown -R deploy:deploy /var/www/react-admin-system-template
```

Nginx 可参考 [deploy/nginx.conf.example](../deploy/nginx.conf.example)，关键配置是：

```nginx
root /var/www/react-admin-system-template/current;
location / {
  try_files $uri $uri/ /index.html;
}
```

首次部署前 `current` 还不存在，GitHub Actions 成功跑完后会自动创建。

## 配置 SSH Key

本地生成专用于 GitHub Actions 的部署密钥：

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f github-actions-deploy
```

把公钥写入服务器部署用户：

```bash
ssh-copy-id -i github-actions-deploy.pub deploy@your-server-ip
```

然后在 GitHub 仓库 `Settings -> Secrets and variables -> Actions` 中新增以下 Secrets：

| Secret              | 必填 | 示例                                           |
| ------------------- | ---- | ---------------------------------------------- |
| `DEPLOY_HOST`       | 是   | `your-server-ip`                               |
| `DEPLOY_USER`       | 是   | `deploy`                                       |
| `DEPLOY_SSH_KEY`    | 是   | `github-actions-deploy` 私钥全文               |
| `DEPLOY_PATH`       | 是   | `/var/www/react-admin-system-template`         |
| `DEPLOY_PORT`       | 否   | `22`                                           |
| `DEPLOY_RELOAD_CMD` | 否   | `sudo nginx -t && sudo systemctl reload nginx` |

如果配置了 `DEPLOY_RELOAD_CMD`，需要确保部署用户执行该命令不需要交互式密码。

## 发布与回滚

合并或推送到 `main` 后会自动发布。也可以在 GitHub Actions 页面手动触发 `CD`。

每次发布会保留最近 5 个版本。需要回滚时，在服务器上把 `current` 指向旧版本目录即可：

```bash
cd /var/www/react-admin-system-template
ln -sfn releases/<commit-sha> current
sudo nginx -t && sudo systemctl reload nginx
```
