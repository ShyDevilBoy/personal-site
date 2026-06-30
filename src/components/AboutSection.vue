<script setup lang="ts">
/**
 * 关于 + 技能栈（合并为一个 section）
 * - 桌面：2 列非对称（左 60% 介绍 / 右 40% 技能栈）
 * - 与 Hero 单列大字版式完全不同，满足反 AI 味"每版块换构图"
 * - 技能用分组标签云，不是三等分卡片
 * - 移动端：单列，介绍在上、标签云在下；标签云横向 scroll-snap
 */
import { skills } from '../data/skills'
import { profile } from '../data/profile'
import { useReveal } from '../composables/useReveal'

const { target, revealed } = useReveal()
</script>

<template>
  <section
    id="about"
    ref="target"
    class="relative py-24 sm:py-32 border-t border-ink-800 overflow-hidden"
    :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    style="transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
  >
    <!-- 克制版星点纹理，延续 Hero 背景语言 -->
    <div class="section-stardots absolute inset-0 -z-10 pointer-events-none"></div>
    <!-- 右侧青绿渐隐 -->
    <div
      class="absolute right-[-10%] top-[10%] w-[450px] h-[450px] rounded-full opacity-20 blur-[110px] -z-10 pointer-events-none"
      style="background: radial-gradient(circle, rgba(63,210,218,0.12) 0%, transparent 70%)"
    ></div>
    <div class="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <!-- 左 60%：自我介绍 -->
        <div class="lg:col-span-3">
          <h2 class="text-paper text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8">
            关于我
          </h2>
          <div class="space-y-5 max-w-[55ch]">
            <p
              v-for="(para, i) in profile.about"
              :key="i"
              class="text-mute text-base sm:text-lg leading-relaxed"
            >
              {{ para }}
            </p>
          </div>
        </div>

        <!-- 右 40%：技能栈标签云，分组展示 -->
        <div class="lg:col-span-2">
          <h3 class="text-paper text-sm font-mono tracking-widest uppercase mb-8">
            技术栈
          </h3>
          <div class="space-y-8">
            <div v-for="group in skills" :key="group.category">
              <p class="text-mute text-xs mb-3">{{ group.category }}</p>
              <!--
                移动端：横向 scroll-snap 滑动（不溢出页面）
                桌面端：flex-wrap 自动换行
              -->
              <div
                class="flex flex-wrap gap-2 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0"
                style="scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch"
              >
                <span
                  v-for="item in group.items"
                  :key="item"
                  class="shrink-0 px-3.5 py-1.5 border border-ink-700 text-paper text-sm rounded-full transition-colors duration-200 hover:border-signal hover:text-signal"
                  style="scroll-snap-align: start"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* section 星点纹理：比 Hero 更淡，保持背景连续性但不抢内容 */
.section-stardots {
  background-image: radial-gradient(rgba(245, 248, 242, 0.05) 1px, transparent 1.4px);
  background-size: 40px 40px;
  -webkit-mask: linear-gradient(90deg, transparent, #000 30%, #000 70%, transparent);
  mask: linear-gradient(90deg, transparent, #000 30%, #000 70%, transparent);
}
</style>
