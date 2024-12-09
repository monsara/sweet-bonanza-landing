<script setup>
defineProps({
  gap: {
    type: [String, Number],
    default: '10px'
  }
})
</script>

<template>
  <div class="text-block">
    <slot />
  </div>
</template>

<style lang="scss">
@use 'sass:math';
@use '@/assets/styles/scss/abstracts' as *;

.text-block {
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: px-to-rem(20px);

  @include desktop-mf-em {
    gap: px-to-rem(17px);
  }

  .main-text {
    font-size: px-to-rem(40px);
    color: $color-2;

    // @include desktop-mf-em {
    //   font-size: px-to-rem(41px);
    //   line-height: math.div(43, 41);
    // }

    &__content {
      display: block;
    }
  }
}
</style>
