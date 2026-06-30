/**
 * 技能栈数据
 * 分组展示，不是平铺标签。替换为你的真实技术栈。
 */

export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: '前端核心',
    items: ['Vue3', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: '工程与工具',
    items: ['Vite', 'UnoCSS', 'Tailwind', 'Pinia', 'Git'],
  },
  {
    category: '正在深入',
    items: ['Node.js', '性能优化', '可访问性', '响应式设计'],
  },
]
