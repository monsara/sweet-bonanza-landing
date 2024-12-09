<script setup>
import { computed } from 'vue'
import BadgedText from '@/components/PromoBadgetText.vue'

const props = defineProps({
  value: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  withLabel: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="promo-bonus" :class="{ 'promo-bonus--large': props.withLabel }">
    <BadgedText v-if="props.withLabel" tag="span" color="purple"
      >Бонус</BadgedText
    >
    <span class="promo-bonus__value">
      {{ value }}
    </span>
    <span class="promo-bonus__name">{{ name }}</span>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/scss/abstracts' as *;

$promo-bonus-value-color: #cfff27;
$promo-bonus-name-color: #fff;

.promo-bonus {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: px-to-rem(1px);
  color: $promo-bonus-name-color;

  &__value {
    position: relative;
    display: flex;
    line-height: 1;
    text-align: center;
    color: $promo-bonus-value-color;

    .promo-bonus--large & {
      font-size: px-to-rem(80px);
    }
  }

  &__name {
    .promo-bonus--large & {
      font-size: px-to-rem(42px);
    }
  }

  & > .badged-text {
    position: relative;
    padding-left: calc-em(20px);
    padding-right: calc-em(20px);
  }
}
</style>
