# 画笔与算法的较量 — 研究论文展示网站

一个绘画老师在生成式 AI 时代的工作重塑、福祉设计与职业路线图。
INT6140 (01P) · Future of Work and Workforce Trends · Research Paper 2026 · 郑雨丝 ZHENG YUSI

纯静态网站（HTML + CSS + JS），无需任何构建工具或依赖，可直接部署到 GitHub Pages。

## 目录结构

```
brush-and-algorithm/
├── index.html          # 页面结构与全部论文内容
├── css/
│   └── style.css       # 样式（纸感米色 + 藏青学术风，含响应式）
├── js/
│   └── main.js         # 阅读进度条、滚动渐显、返回顶部
└── assets/
    ├── fig1-website.png    # 图1：AI 协作美育教学网站截图
    └── radar-chart.png     # 制品1：技能重构图谱雷达图
```

## 本地运行

直接双击 `index.html` 用浏览器打开即可；或启动任意静态服务器：

```bash
cd brush-and-algorithm
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库（例如 `brush-and-algorithm`）。
2. 把本文件夹的全部内容推送到仓库：

   ```bash
   git init
   git add .
   git commit -m "feat: 论文展示网站"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/brush-and-algorithm.git
   git push -u origin main
   ```

3. 仓库 **Settings → Pages → Source** 选择 `main` 分支 / `(root)`，保存。
4. 约 1 分钟后访问 `https://<你的用户名>.github.io/brush-and-algorithm/`。
