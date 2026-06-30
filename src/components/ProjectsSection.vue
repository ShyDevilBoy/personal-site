<script setup lang="ts">
/**
 * 精选项目（替代"作品集"）
 * - 没有独立 side project 没关系，把做过的项目当作品
 * - 纵向时间线布局，每项讲清：项目名 + 成果 + 技术栈 + 角色
 * - 不用 divide-y 每行发丝线，用时间线轴代替
 * - 移动端：单列时间线，轴在左侧
 */
import { projects } from '../data/projects'
import { useReveal } from '../composables/useReveal'

const { target, revealed } = useReveal()
</script>

<template>
  <section
    id="projects"
    ref="target"
    class="relative py-24 sm:py-32 border-t border-ink-800 overflow-hidden"
    :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    style="transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
  >
    <!-- 背景延续：左下信号绿光斑 -->
    <div
      class="absolute left-[-12%] bottom-[5%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] -z-10 pointer-events-none"
      style="background: radial-gradient(circle, rgba(182,245,0,0.18) 0%, transparent 70%)"
    ></div>
    <div class="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
      <!-- 标题区：纵向堆叠，非左标题右说明的 split-header -->
      <div class="mb-16">
        <h2 class="text-paper text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
          精选项目
        </h2>
        <p class="text-mute text-base sm:text-lg max-w-[45ch]">
          把每件事讲清楚，比堆一长串更有用。下面是我做过的、有亮点的几个。
        </p>
      </div>

      <!-- 时间线 -->
      <div class="relative pl-8 sm:pl-12">
        <!-- 左侧时间轴线 -->
        <div
          class="absolute left-0 top-2 bottom-2 w-px bg-ink-800"
          aria-hidden="true"
        ></div>

        <div class="space-y-12 sm:space-y-16">
          <article
            v-for="(project, i) in projects"
            :key="i"
            class="relative"
          >
            <!-- 时间线节点（信号绿圆点，仅做位置标记，非装饰状态点） -->
            <span
              class="absolute -left-8 sm:-left-12 top-1.5 w-3 h-3 rounded-full bg-signal translate-x-[-5px]"
              aria-hidden="true"
            ></span>

            <!-- 年份 -->
            <p class="text-signal text-sm font-mono mb-2">{{ project.period }}</p>

            <!-- 项目名 + 角色 -->
            <div class="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-3">
              <h3 class="text-paper text-xl sm:text-2xl font-bold">
                {{ project.name }}
              </h3>
              <span class="text-mute text-sm">{{ project.role }}</span>
            </div>

            <!-- 成果 -->
            <p class="text-mute text-base sm:text-lg leading-relaxed max-w-[60ch] mb-4">
              {{ project.outcome }}
            </p>

            <!-- 技术栈标签 -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="px-3 py-1 bg-ink-900 text-mute text-xs sm:text-sm rounded font-mono"
              >
                {{ tech }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
