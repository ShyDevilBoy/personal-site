/**
 * 滚动入场动效 composable
 *
 * 设计原则（反 AI 味 / 性能）：
 * - 用 IntersectionObserver，不用 window scroll 监听（jank-prone）
 * - once: true，元素进入视口只触发一次，不重复
 * - 自动尊重 prefers-reduced-motion，降级为始终可见（reveal=true）
 * - 暴露 ref + reveal 状态，组件用 v-show / class 控制显隐过渡
 *
 * 用法：
 *   const { target, revealed } = useReveal()
 *   <div ref="target" :class="revealed ? 'opacity-100' : 'opacity-0 translate-y-6'">
 */
import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useReveal(options: { threshold?: number } = {}): {
  target: Ref<HTMLElement | null>
  revealed: Ref<boolean>
} {
  const target = ref<HTMLElement | null>(null)
  const revealed = ref(false)
  const { threshold = 0.15 } = options

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    // reduced-motion 直接显示，无动效
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced || !target.value) {
      revealed.value = true
      return
    }

    // 不支持 IntersectionObserver 的环境降级为直接显示
    if (!('IntersectionObserver' in window)) {
      revealed.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealed.value = true
            // once: 触发后停止观察
            observer?.disconnect()
          }
        })
      },
      { threshold },
    )

    observer.observe(target.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { target, revealed }
}
