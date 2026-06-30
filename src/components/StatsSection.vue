<script setup lang="ts">
/**
 * 数据墙（诚实的小数字）
 * 参考甲维斯机数字墙，但克制：4 个数字横排，信号绿大号数字。
 * 个人站要诚实，数字都真实可控，不堆 fake-precise。
 * 版式与前面都不同：水平横排数字网格，简洁有力。
 */
import { stats } from '../data/stats'
import { useReveal } from '../composables/useReveal'

const { target, revealed } = useReveal()
</script>

<template>
  <section
    ref="target"
    class="py-16 sm:py-20 border-t border-ink-800"
    :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    style="transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
  >
    <div class="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="text-center lg:text-left lg:border-l lg:border-ink-800 lg:pl-6"
        >
          <p class="text-signal text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 font-mono">
            {{ stat.value }}
          </p>
          <p class="text-mute text-sm sm:text-base">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
