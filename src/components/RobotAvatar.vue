<script setup lang="ts">
/**
 * 机器人形象（原版图片）
 *
 * 直接使用甲维斯机的原版机器人透明 PNG，保证视觉一致。
 * 图片位于 public/images/robot.png（1086x1448，RGBA 透明背景）。
 * 保留轻微浮动动效，营造悬浮感。
 *
 * 如需替换为自己的形象，覆盖 public/images/robot.png 即可。
 */
withDefaults(
  defineProps<{
    /** 机器人渲染宽度（px），高度按原图 1086:1448 比例自动计算 */
    size?: number
  }>(),
  { size: 340 },
)

// 原图比例 1086:1448 ≈ 1:1.334，据此计算高度
</script>

<template>
  <div
    class="robot-avatar"
    :style="{ '--robot-w': `${size}px` }"
    aria-label="机器人形象"
    role="img"
  >
    <picture>
      <!-- WebP 优先：1.1MB PNG → 132KB WebP，省 88% 体积 -->
      <source srcset="/images/robot.webp" type="image/webp" />
      <!-- PNG 兜底：兼容不支持 WebP 的老浏览器 -->
      <img
        src="/images/robot.png"
        alt="机器人形象"
        class="robot-img"
        :width="size"
        loading="eager"
        decoding="async"
      />
    </picture>
  </div>
</template>

<style scoped>
.robot-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--robot-w);
  /* 为底部信号绿投影留出空间 */
  padding-bottom: 14px;
  position: relative;
}

/* 底部信号绿投影：悬浮感 + 全站配色呼应 */
.robot-avatar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 55%;
  height: 14px;
  background: radial-gradient(ellipse, rgba(182, 245, 0, 0.22) 0%, transparent 70%);
  filter: blur(4px);
  z-index: 0;
  animation: robot-shadow-pulse 4s ease-in-out infinite;
}

.robot-img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.5));
  animation: robot-float 4s ease-in-out infinite;
  will-change: transform;
}

@keyframes robot-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes robot-shadow-pulse {
  0%, 100% { transform: translateX(-50%) scaleX(1); opacity: 0.22; }
  50% { transform: translateX(-50%) scaleX(0.85); opacity: 0.1; }
}

/* reduced-motion：全部停止 */
@media (prefers-reduced-motion: reduce) {
  .robot-img,
  .robot-avatar::after {
    animation: none;
  }
}
</style>
