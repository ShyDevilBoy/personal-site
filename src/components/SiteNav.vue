<script setup lang="ts">
/**
 * 顶栏导航
 * - 桌面：单行 ≤64px，左名字 / 右锚点
 * - 移动：汉堡折叠，全屏覆盖式菜单
 * - 滚动后强化毛玻璃背景，提升可读性
 * - 菜单打开时锁定 body 滚动
 */
import { ref, watch } from 'vue'
import { profile } from '../data/profile'

const navItems = [
  { label: '关于', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '此刻', href: '#now' },
  { label: '联系', href: '#contact' },
]

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

// 菜单打开时锁定背景滚动，避免穿透
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <!-- 顶栏与移动菜单分离：避免 backdrop-blur 创建的层叠上下文困住菜单背景 -->
  <header
    class="fixed top-0 left-0 right-0 z-50 pt-safe bg-ink/80 backdrop-blur-lg border-b border-ink-800/60"
  >
    <nav
      class="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 h-14 flex items-center justify-between"
    >
      <!-- 左：名字 wordmark -->
      <a href="#top" class="text-paper font-bold text-base tracking-tight active:scale-95 transition-transform" @click="closeMenu">
        {{ profile.name }}
      </a>

      <!-- 右：桌面端锚点 -->
      <ul class="hidden sm:flex items-center gap-7">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="text-mute text-sm transition-colors duration-200 hover:text-paper relative group"
          >
            {{ item.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-px bg-signal transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      <!-- 移动端汉堡按钮 -->
      <button
        class="sm:hidden relative z-[60] flex items-center justify-center w-11 h-11 -mr-2 active:scale-90 transition-transform"
        :aria-expanded="menuOpen"
        aria-label="切换菜单"
        @click="menuOpen = !menuOpen"
      >
        <span class="i-lucide-menu text-paper text-xl" v-if="!menuOpen"></span>
        <span class="i-lucide-x text-paper text-xl" v-else></span>
      </button>
    </nav>
  </header>

  <!-- 移动端全屏菜单：作为 header 兄弟元素，独立层叠上下文，背景完全不透明 -->
  <Transition
    enter-active-class="transition-opacity duration-200"
    leave-active-class="transition-opacity duration-150"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="menuOpen"
      class="sm:hidden fixed inset-0 top-14 z-[55] bg-ink pt-safe overflow-y-auto"
    >
      <ul class="flex flex-col px-5 py-6 gap-0">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="flex items-center justify-between py-5 text-paper text-2xl font-bold border-b border-ink-800 active:text-signal transition-colors"
            @click="closeMenu"
          >
            {{ item.label }}
            <span class="i-lucide-arrow-right text-mute text-lg"></span>
          </a>
        </li>
      </ul>
    </div>
  </Transition>
</template>
