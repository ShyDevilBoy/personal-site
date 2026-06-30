/**
 * 精选项目数据（替代"作品集"）
 * 没有独立 side project 没关系，把做过的、有亮点的项目当作品。
 * 每个讲清：解决了什么 + 你的角色 + 结果。
 * 替换为你的真实项目。
 */

export interface Project {
  /** 年份/时间段，用于时间线排序 */
  period: string
  name: string
  /** 一句话成果：解决了什么、带来什么结果 */
  outcome: string
  /** 技术栈标签 */
  stack: string[]
  /** 你在项目里的角色 */
  role: string
}

export const projects: Project[] = [
  {
    period: '2024',
    name: '某运营管理后台',
    outcome: '主导前端架构，用 Vue3 + UnoCSS 搭起可复用的组件体系，新页面开发效率提升明显。',
    stack: ['Vue3', 'TypeScript', 'UnoCSS', 'ECharts'],
    role: '前端负责人',
  },
  {
    period: '2023',
    name: '某数据可视化看板',
    outcome: '把多源数据接进实时图表，解决关键指标"看不到、看不懂"的问题。',
    stack: ['Vue3', 'ECharts', 'Pinia'],
    role: '前端开发',
  },
  {
    period: '2022',
    name: '某移动端 H5 活动',
    outcome: '在短周期内交付高保真活动页，覆盖刘海屏与低端机型，上线即达标。',
    stack: ['Vue3', 'Vite', 'CSS'],
    role: '独立开发',
  },
]
