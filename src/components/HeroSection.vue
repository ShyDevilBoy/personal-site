<script setup lang="ts">
/**
 * Hero 第一屏
 * - 左文字 + 右机器人形象（原版图片）
 * - 巨号姓名 + 一句话定位（信号绿高亮关键词）+ 双 CTA
 * - 背景科技氛围：仪表盘网格 + 信号绿光点 + 扫描线（呼应驾驶舱控制台气质）
 * - 移动端单列：机器人在上、文字在下
 */
import { profile } from '../data/profile'
import RobotAvatar from './RobotAvatar.vue'

// 把 tagline 中的 {{关键词}} 拆成普通文本 + 高亮片段
function renderTagline(tagline: string): Array<{ text: string; highlight: boolean }> {
  const parts: Array<{ text: string; highlight: boolean }> = []
  const regex = /\{\{([^}]+)\}\}/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = regex.exec(tagline)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: tagline.slice(lastIndex, match.index), highlight: false })
    }
    parts.push({ text: match[1], highlight: true })
    lastIndex = regex.lastIndex
  }
  if (lastIndex < tagline.length) {
    parts.push({ text: tagline.slice(lastIndex), highlight: false })
  }
  return parts
}

const taglineParts = renderTagline(profile.tagline)

// 仪表盘光点：固定位置 + 伪随机闪烁延迟，营造控制台氛围
const dots = [
  { top: '12%', left: '8%', d: '0s' },
  { top: '28%', left: '22%', d: '0.6s' },
  { top: '18%', left: '38%', d: '1.2s' },
  { top: '72%', left: '12%', d: '0.3s' },
  { top: '85%', left: '30%', d: '0.9s' },
  { top: '62%', left: '46%', d: '1.5s' },
  { top: '22%', left: '62%', d: '0.4s' },
  { top: '78%', left: '68%', d: '1.1s' },
]

// 扫光线动画：鼠标移入时触发一次横扫（参考站 sweep 手法）
import { ref } from 'vue'
const swept = ref(false)
function triggerSweep() {
  swept.value = false
  requestAnimationFrame(() => (swept.value = true))
}
</script>

<template>
  <section
    id="top"
    class="relative min-h-[100dvh] flex items-center overflow-hidden"
    @pointermove="triggerSweep"
  >
    <!-- 背景科技氛围（搬自参考站驾驶舱手法） -->
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <!-- 层1：星点网格（参考站 stage 的 radial-gradient 1px 光点） -->
      <div class="hero-stardots"></div>

      <!-- 层2：青绿径向光晕（参考站 cyan/green radial） -->
      <div
        class="absolute left-[10%] top-[15%] w-[600px] h-[600px] rounded-full opacity-30 blur-[100px]"
        style="background: radial-gradient(circle, rgba(63,210,218,0.18) 0%, transparent 70%)"
      ></div>

      <!-- 层3：信号绿主光斑（托住机器人） -->
      <div
        class="absolute right-[-15%] bottom-[-25%] w-[700px] h-[700px] rounded-full opacity-30 blur-[130px]"
        style="background: radial-gradient(circle, rgba(182,245,0,0.25) 0%, transparent 70%)"
      ></div>

      <!-- 层4：scrim 斜向深色渐变压暗（参考站 scrim 96deg） -->
      <div class="hero-scrim"></div>

      <!-- 层5：扫光线（参考站 sweep，鼠标移入横扫一次） -->
      <div class="hero-sweep" :class="{ 'is-swept': swept }"></div>

      <!-- 层6：仪表盘状态光点 -->
      <span
        v-for="(dot, i) in dots"
        :key="i"
        class="hero-dot"
        :style="{ top: dot.top, left: dot.left, animationDelay: dot.d }"
      ></span>
    </div>

    <div class="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-12 pt-20 pb-16">
      <!-- 左右两栏：桌面 7/5，移动单列 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <!-- 左 7/12：文字内容 -->
        <div class="lg:col-span-7">
          <p class="text-mute text-xs sm:text-sm font-mono tracking-widest uppercase mb-6">
            {{ profile.roleEn }}
          </p>

          <h1 class="text-paper font-bold leading-[1.05] tracking-tight text-5xl sm:text-7xl lg:text-8xl mb-8">
            {{ profile.name }}
          </h1>

          <p class="text-paper text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-[20ch] sm:max-w-[28ch] mb-12 font-light">
            <template v-for="(part, i) in taglineParts" :key="i">
              <span v-if="part.highlight" class="text-signal font-medium">{{ part.text }}</span>
              <span v-else>{{ part.text }}</span>
            </template>
          </p>

          <!-- 双 CTA -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
            <a
              href="#projects"
              class="inline-flex items-center justify-center min-h-12 px-7 py-3.5 bg-signal text-ink font-semibold text-sm rounded-full transition-transform duration-150 active:scale-[0.98] hover:opacity-90"
            >
              {{ profile.primaryCta }}
            </a>
            <a
              href="#contact"
              class="inline-flex items-center justify-center min-h-12 px-7 py-3.5 border border-ink-700 text-paper font-semibold text-sm rounded-full transition-colors duration-200 hover:border-paper"
            >
              {{ profile.secondaryCta }}
            </a>
          </div>
        </div>

        <!-- 右 5/12：机器人形象（原版图片） -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-none">
          <RobotAvatar :size="260" class="lg:hidden" />
          <RobotAvatar :size="360" class="hidden lg:block" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 星点网格：参考站 stage 的 radial-gradient 1px 光点 + mask 渐隐 */
.hero-stardots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(245, 248, 242, 0.08) 1px, transparent 1.4px);
  background-size: 36px 36px;
  -webkit-mask: radial-gradient(60% 55% at 30% 40%, #000 0%, transparent 75%);
  mask: radial-gradient(60% 55% at 30% 40%, #000 0%, transparent 75%);
}

/* scrim：斜向深色渐变压暗（参考站 96deg scrim） */
.hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    96deg,
    rgba(4, 7, 10, 0.9) 0%,
    rgba(4, 7, 10, 0.78) 26%,
    rgba(4, 7, 10, 0.28) 52%,
    rgba(4, 7, 10, 0.04) 70%,
    transparent 100%
  );
}

/* sweep：扫光线，鼠标移入横扫一次（参考站 sweep 手法） */
.hero-sweep {
  position: absolute;
  inset: -20% -60%;
  background: linear-gradient(
    100deg,
    transparent 42%,
    rgba(155, 255, 146, 0.05) 49%,
    rgba(255, 255, 255, 0.06) 50%,
    rgba(155, 255, 146, 0.05) 51%,
    transparent 58%
  );
  transform: translateX(-40%);
  opacity: 0;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease;
}
.hero-sweep.is-swept {
  transform: translateX(60%);
  opacity: 1;
}

/* 仪表盘光点：信号绿状态灯，缓慢闪烁 */
.hero-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #b6f500;
  box-shadow: 0 0 8px rgba(182, 245, 0, 0.6);
  animation: dot-blink 3s ease-in-out infinite;
  opacity: 0.7;
}

@keyframes dot-blink {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 0.15; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-dot { animation: none; }
  .hero-sweep { display: none; }
}
</style>
