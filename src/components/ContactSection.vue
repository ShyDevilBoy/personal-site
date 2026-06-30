<script setup lang="ts">
/**
 * 联系 + Footer
 * - 邮箱大字 CTA（信号绿），一眼可点
 * - 社交用真实 lucide 图标 mark，非纯文字 wordmark
 * - Footer 极简：© 名字 + 年份，无版本号、无 locale 装饰条
 */
import { profile } from '../data/profile'
import { useReveal } from '../composables/useReveal'

const { target, revealed } = useReveal()
const year = new Date().getFullYear()
</script>

<template>
  <section
    id="contact"
    ref="target"
    class="relative py-24 sm:py-32 border-t border-ink-800 overflow-hidden"
    :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    style="transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
  >
    <!-- 收尾氛围：强信号绿渐隐，呼应 Hero 开篇 -->
    <div
      class="absolute right-[-15%] top-[-15%] w-[700px] h-[700px] rounded-full opacity-25 blur-[130px] -z-10 pointer-events-none"
      style="background: radial-gradient(circle, rgba(182,245,0,0.22) 0%, transparent 70%)"
    ></div>
    <div class="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
      <div class="max-w-3xl">
        <h2 class="text-paper text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-10">
          一起做点<br class="sm:hidden" />有意思的事
        </h2>

        <!-- 邮箱大字 CTA -->
        <a
          :href="`mailto:${profile.email}`"
          class="inline-flex items-center gap-3 text-signal text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-12 transition-opacity duration-200 hover:opacity-80 active:scale-[0.98] break-all"
        >
          <span class="i-lucide-mail text-2xl sm:text-3xl"></span>
          {{ profile.email }}
        </a>

        <!-- 社交：图标 + 标签，真实 mark -->
        <div class="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            v-for="social in profile.socials"
            :key="social.label"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 min-h-11 px-4 py-2.5 border border-ink-700 text-paper text-sm rounded-full transition-colors duration-200 hover:border-signal hover:text-signal"
          >
            <span :class="social.icon" class="text-lg"></span>
            {{ social.label }}
          </a>
        </div>
      </div>
    </div>

    <!-- Footer：极简，无装饰条 -->
    <footer class="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mt-24 pt-8 border-t border-ink-800 pb-safe">
      <p class="text-mute text-xs sm:text-sm">
        © {{ year }} {{ profile.name }}
      </p>
    </footer>
  </section>
</template>
