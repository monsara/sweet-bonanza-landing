<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'h2'
  }
})
</script>

<template>
  <component :is="props.tag" class="main-text">
    <slot />
  </component>
</template>

<style lang="scss">
@use 'sass:math';
@use '@/assets/styles/scss/abstracts' as *;

.main-text {
  display: flex;
  flex-flow: column;
  align-items: center;

  font-size: px-to-rem(30px);
  line-height: math.div(30, 32);
  color: $color-2;
}
</style>
