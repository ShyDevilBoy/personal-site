/**
 * 个人信息数据源（单数据源）
 * 替换这里的字段即可更新全站。不要在组件里硬编码姓名/联系方式。
 */

export interface SocialLink {
  label: string
  url: string
  icon: string // lucide 图标名，见 https://lucide.dev/icons
}

export interface Profile {
  name: string
  /** 一句话定位，Hero 区核心文案 */
  tagline: string
  /** tagline 中需要信号绿高亮的关键词（用 {{kw}} 包裹的方式见组件实现） */
  highlightKeywords: string[]
  /** 英文角色 / 副标题 */
  roleEn: string
  /** About 区自我介绍，2-3 句，讲清"我是谁、做什么" */
  about: string[]
  /** CTA 文案 */
  primaryCta: string
  secondaryCta: string
  /** 联系邮箱 */
  email: string
  /** 社交链接 */
  socials: SocialLink[]
  /** Now 区：正在探索的事，诚实、可迭代 */
  now: {
    label: string
    text: string
  }[]
}

export const profile: Profile = {
  name: '你的名字',
  tagline: '把{{想法}}变成{{能跑的产品}}。',
  highlightKeywords: ['想法', '能跑的产品'],
  roleEn: 'Frontend Developer',
  about: [
    '我是一名前端开发者，喜欢把模糊的需求拆成清晰的界面，再把它做到能上线、能用。',
    '平时关注工程化、性能和交互细节。这个网站本身就是我用 Vue3 + UnoCSS 一行行写出来的。',
    '与其堆罗列，不如把每件事讲清楚。下面是我做过的项目，和现在正在折腾的事。',
  ],
  primaryCta: '查看项目',
  secondaryCta: '联系我',
  email: 'hello@example.com',
  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/',
      icon: 'lucide:github',
    },
    {
      label: '邮箱',
      url: 'mailto:hello@example.com',
      icon: 'lucide:mail',
    },
  ],
  now: [
    { label: '正在学', text: 'Vue3 组合式 API 的进阶用法和响应式原理' },
    { label: '在折腾', text: '用 UnoCSS 搭一套自己的暗色设计令牌' },
    { label: '在读', text: '《重构：改善既有代码的设计》' },
  ],
}
