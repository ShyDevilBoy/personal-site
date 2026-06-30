import {
  defineConfig,
  presetIcons,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// 全站设计令牌：单一配色 + 单一字体系 + 单一圆角系统，全站锁定。
// 改这里 = 改全站。详见 src/styles/base.css 的安全区域与触屏降级。
export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      // 暗色信号绿配色：近黑底 + off-white 文字 + 单一信号绿强调
      ink: {
        DEFAULT: '#0a0a0b', // 近黑底（非纯黑，保留深度）
        900: '#18181b', // 表面
        800: '#27272a', // 发丝线 / 边界
        700: '#3f3f46',
      },
      paper: '#ededed', // 主文字 off-white
      mute: '#a1a1aa', // 次文字 zinc-400
      signal: '#b6f500', // 全站唯一强调色：信号绿
    },
    fontFamily: {
      // 中文 PingFang 优先，英文走系统无衬线栈；不外链 Google Fonts 避免拖慢首屏
      sans: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji"',
      mono: '"SF Mono", "JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    },
    breakpoints: {
      // 移动优先：默认样式针对 <640，sm/md/lg 递进增强
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  // 安全区域快捷工具：刘海屏 / Home 条不遮挡
  safelist: [
    'pt-safe', 'pb-safe', 'pl-safe', 'pr-safe',
  ],
})
