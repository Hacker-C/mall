# coderwhy vue2 mall 项目(移动端)

## 线上部署(移动端)

- http://m-mall.mphy.top

## 本地预览和开发

```
mkdir mall
git clone git@github.com:Hacker-C/mall.git mall
cd mall
npm install
npm run serve
```

## 打包部署

打包静态文件：
```
npm run build
```

nginx 部署：
```nginx
server {
  listen 80;
  server_name m-mall.mphy.top;
  location / {
    root /var/www/m-mall/dist;
    index index.html;
    try_files  $uri $uri/ /index.html;
  }
}
```
添加一条 DNS 记录指向你的服务器，重启 nginx。

## 提示

❗ 部署的网站底部有一条备案号信息，因工信部要求所添加，**所以影响了部分页面的布局**，在 `src\components\common\tabbar\TabBar.vue` 中移除 `BeiAn.vue` 组件即可。
## 技术栈

- vue2
- vue-router3
- vuex3
- axios
- vue-scroller
- less
- 移动端适配：amfe-flexible + postcss-pxtorem

## 接口文档

> 具体地址已变，详情咨询 coderwhy 老师账号

- https://www.showdoc.com.cn/552706891688509/3263464702153146
