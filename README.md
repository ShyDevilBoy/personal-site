# 个人主页

暗色信号绿风格的个人简历/主页，桌面 + 移动端 H5 双适配。
技术栈：Vue3 + UnoCSS + Vite + TypeScript（全部最新版）。

## 启动

```bash
# 需要 Node 18+（项目用 Node 24 验证）
nvm use 24
npm install
npm run dev      # 开发，默认 http://localhost:5173
npm run build    # 生产构建，输出到 dist/
npm run preview  # 预览构建产物
```

## 怎么改内容（重点）

所有内容集中在 `src/data/` 三个文件里，改这里 = 改全站，不要去组件里硬编码：

| 文件 | 改什么 |
|---|---|
| `src/data/profile.ts` | 姓名、一句话定位、自我介绍、邮箱、社交链接、正在探索的事 |
| `src/data/skills.ts` | 技术栈分组 |
| `src/data/projects.ts` | 精选项目（时间线） |

### profile.ts 速查

- `name`：你的名字
- `tagline`：Hero 一句话定位，用 `{{关键词}}` 包裹的词会显示成信号绿高亮
- `about`：关于区的 2-3 句介绍
- `email` / `socials`：联系方式
- `now`：「此刻」版块，随时更新你正在学/折腾/读的东西

## 设计说明（反 AI 味）

参考 jiaweisiji.pages.dev 的极简科技感，遵循反 AI 味设计规则：

- **单一强调色**：信号绿 `#b6f500`，全站唯一，不混其他彩色
- **每版块不同构图**：Hero 单列大字 / About 两列网格 / Projects 时间线 / Now 居中陈述 / Contact 大字 CTA，没有两个 section 共用布局
- **无紫蓝渐变、无三等分卡片、无假截图 div、无 em-dash**
- **暗色全站一致**，近黑底 `#0a0a0b` + off-white 文字 `#ededed`

## 移动端 H5 适配

- viewport-fit=cover + 安全区域 `env(safe-area-inset-*)`，刘海屏/Home 条不遮挡
- 全用 `min-h-[100dvh]`，防 iOS 地址栏跳动
- 触屏 hover 降级、点击热区 ≥44px、CTA 移动端全宽
- 技能标签云移动端横向 scroll-snap 滑动

## 目录结构

```
src/
├─ main.ts                # 入口
├─ App.vue                # 页面骨架
├─ styles/base.css        # 全局样式 + 安全区域 + 触屏/reduced-motion 降级
├─ data/                  # 内容数据源（改这里）
├─ composables/useReveal.ts  # 滚动入场动效
└─ components/            # 各版块组件
```

## 部署

`npm run build` 后把 `dist/` 上传到任意静态托管：
Cloudflare Pages、Vercel、Netlify、GitHub Pages 均可。
