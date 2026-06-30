<script setup lang="ts">
/**
 * 页面骨架：各 section 编排
 * 版式节奏（反 AI 味"每版块换构图"）：
 * - Hero：单列大字左对齐
 * - About：2 列非对称网格
 * - Projects：纵向时间线
 * - Now：居中聚焦陈述
 * - Contact：大字邮箱 CTA
 * 没有两个 section 共用同一种布局家族。
 */
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import NowSection from './components/NowSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <ProjectsSection />
    <NowSection />
    <ContactSection />
  </main>
</template>
