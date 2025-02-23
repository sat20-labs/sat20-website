<template>
  <button 
    class="base-button"
    :class="{
      'primary': primary,
      'secondary': secondary
    }"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  primary: Boolean,
  secondary: Boolean
});
</script>

<style scoped>
.base-button {
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  text-transform: none;
  letter-spacing: 0.5px;
}

/* 主按钮样式 */
.primary {
  background: linear-gradient(135deg, var(--primary), var(--neon));
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3);
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4);
  background: linear-gradient(135deg, var(--neon), var(--primary));
}

.primary:active {
  transform: translateY(0);
}

/* 次要按钮样式 */
.secondary {
  background: transparent;
  color: var(--text-secondary);
  border: 2px solid transparent;
  background-image: linear-gradient(var(--bg-primary), var(--bg-primary)), 
                    linear-gradient(135deg, var(--primary), var(--neon));
  background-origin: border-box;
  -webkit-background-clip: padding-box, border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.1);
}

.secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.2);
  color: var(--primary);
}

.secondary:active {
  transform: translateY(0);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .base-button {
    width: 100%;
    padding: 14px 24px;
  }
}

/* 添加微光效果 */
.base-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.15),
    transparent
  );
  transition: 0.5s;
}

.base-button:hover::after {
  left: 100%;
}

/* 禁用状态 */
.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}
</style>