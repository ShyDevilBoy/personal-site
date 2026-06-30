<script setup lang="ts">
/**
 * Now - 正在探索
 * - 这个站的灵魂版块，呼应甲维斯机"主理人一手经验"气质
 * - 诚实、可迭代，没有独立 side project 也能有"内容"
 * - 列式清单：正在学 / 在折腾 / 在读
 * - 版式与前面都不同：居中聚焦的大号陈述，强调"此刻"
 */
import { profile } from '../data/profile'
import { useReveal } from '../composables/useReveal'

const { target, revealed } = useReveal()
</script>

<template>
  <section
    id="now"
    ref="target"
    class="relative py-24 sm:py-32 border-t border-ink-800 overflow-hidden"
    :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    style="transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
  >
    <!-- 中央聚焦光晕：强调"此刻" -->
    <div
      class="absolute left-1/2 top-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-[140px] -z-10 pointer-events-none"
      style="background: radial-gradient(circle, rgba(182,245,0,0.2) 0%, transparent 70%); transform: translate(-50%, -50%)"
    ></div>
    <div class="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
      <div class="max-w-3xl">
        <h2 class="text-paper text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-12">
          此刻
        </h2>

        <div class="space-y-10">
          <div
            v-for="(item, i) in profile.now"
            :key="i"
            class="grid grid-cols-[auto_1fr] gap-4 sm:gap-8 items-baseline border-b border-ink-800 pb-8 last:border-b-0"
          >
            <!-- 标签：信号绿，左对齐定宽 -->
            <span class="text-signal text-sm sm:text-base font-mono whitespace-nowrap pt-1">
              {{ item.label }}
            </span>
            <!-- 内容：大号陈述 -->
            <p class="text-paper text-lg sm:text-2xl font-light leading-relaxed">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
