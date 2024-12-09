<script setup>
import { ref } from 'vue'

import PromoHeader from '@/components/PromoHeader.vue'
import LogoImage from '@/components/LogoImage.vue'
import TextBlock from '@/components/PromoTextBlock.vue'
import PromoImage from '@/components/PromoImage.vue'
import PromoModal from '@/components/PromoModal.vue'
import PromoSafePanel from '@/components/PromoSafePanel.vue'
import PromoBonus from '@/components/PromoBonus.vue'
import CtaBtn from '@/components/CtaBtn.vue'

const prizesList = ref([
  { id: 1, value: '150%', name: 'на депозит' },
  { id: 2, value: '125', name: 'фріспінів' },
  { id: 3, value: '375 грн', name: 'на счет' }
])

const showModal = ref(false)

const handleCtaBtnClick = () => {
  showModal.value = true
}
</script>

<template>
  <main class="wrapper">
    <section class="promo">
      <div class="promo__col promo__col--left">
        <div class="promo__cta-block">
          <div class="promo__top">
            <PromoHeader class="promo__header">
              <LogoImage>
                <img
                  src="@/assets/images/logo.svg"
                  alt="Логотип Prematch"
                  width="230"
                  height="30"
                  importance="high"
                />
              </LogoImage>
            </PromoHeader>

            <TextBlock>
              <PromoBonus
                class="promo-bonus--large"
                value="375"
                name="грн"
                withLabel
              />
            </TextBlock>

            <CtaBtn class="promo__cta-btn" @click="handleCtaBtnClick"></CtaBtn>
          </div>
        </div>
      </div>

      <div class="promo__col promo__col--right">
        <PromoImage />
      </div>

      <footer class="promo__footer">
        <PromoSafePanel />
      </footer>
    </section>

    <PromoModal :is-modal-visible="showModal" :prizes="prizesList" />
  </main>
</template>

<style lang="scss">
@use '@/assets/styles/scss/abstracts' as *;
@use 'sass:math';

.promo {
  position: relative;
  display: flex;
  flex-flow: column;
  padding: calc-rem(15px 15px 0);

  @include laptop-mf-em {
    flex-direction: row;
    padding: 0;
  }

  &__col {
    display: flex;
    flex-flow: column;
    justify-content: end;
    align-items: center;

    &--left {
      justify-content: end;
      flex: 10 1 auto;

      @include laptop-mf-em {
        width: 50%;
        flex: 0 0 50%;
        justify-content: center;
        gap: px-to-rem(20px);
      }
    }

    &--right {
      flex: 1 1 auto;

      @include laptop-mf-em {
        display: flex;
        flex-grow: 1;
        justify-content: start;
      }
    }
  }

  &__cta-block {
    z-index: 10;
    display: flex;
    flex-flow: column;
    align-items: center;

    @include laptop-mf-em {
      gap: px-to-rem(45px);
    }
  }

  &__top {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: px-to-rem(25px);

    @include laptop-mf-em {
      gap: px-to-rem(30px);
    }
  }

  &__cta-btn {
    position: absolute;
    bottom: px-to-rem(56px);

    @include laptop-mf-em {
      position: unset;
    }
  }

  &__footer {
    position: fixed;
    bottom: -1px;
    left: 0;
    z-index: 10;

    width: 100%;

    @include laptop-mf-em {
      bottom: px-to-rem(20px);
      left: 50%;

      min-width: px-to-rem(275px);
      width: max-content;
      transform: translateX(-50%);
    }
  }
}
</style>
