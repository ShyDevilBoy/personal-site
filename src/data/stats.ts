/**
 * 数据墙数据（诚实的小数字）
 * 参考甲维斯机的数字墙，但个人站要诚实：用真实的、可核对的小数字。
 * 没有 fake-precise（如 99.9%），都是真实可控的统计。
 * 替换为你的真实数字。
 */

export interface Stat {
  /** 大号数字 */
  value: string
  /** 单位说明，简洁名词 */
  label: string
}

export const stats: Stat[] = [
  { value: '3', label: '年开发经验' },
  { value: '10+', label: '上线项目' },
  { value: '5', label: '常用技术栈' },
  { value: '∞', label: '还在学习' },
]
