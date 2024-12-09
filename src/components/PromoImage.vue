<script setup></script>

<template>
  <div class="image-container">
    <picture class="image-container__main-image">
      <source
        media="(max-width: 1024px)"
        srcset="@/assets/images/main-img-mobile.webp"
      />
      <source
        media="(min-width: 1025px)"
        srcset="@/assets/images/desktop.webp"
      />
      <img
        src="@/assets/images/main-img-mobile.webp"
        alt="Кольоровий текст Свит Бонанза з цукеркою та сердцем по боках"
        loading="eager"
      />
    </picture>
  </div>
</template>

<style lang="scss">
@use 'sass:math';
@use '@/assets/styles/scss/abstracts' as *;

.image-container {
  $design-w: 390px;
  $design-h: 844px;
  $adapt-ratio: 1.22;
  $container-image-w: 403px;
  $container-image-h: 297px;
  $angle: -4.17deg;

  --scale-start: 0.95;
  --scale-end: 1.05;

  position: relative;
  left: px-to-rem(-28px);
  bottom: px-to-rem(100px);

  width: px-to-rem($container-image-w) * $adapt-ratio;
  height: px-to-rem($container-image-h) * $adapt-ratio;

  @include tablet-mf-em {
    $adapt-ratio: 1.8;

    left: px-to-rem(-23px);
    bottom: px-to-rem(84px);

    width: px-to-rem($container-image-w) * $adapt-ratio;
    height: px-to-rem($container-image-h) * $adapt-ratio;
  }

  @include media-mf-unit(1024, em) {
    $adapt-ratio: 1.1;

    width: px-to-rem($container-image-w) * $adapt-ratio;
    height: px-to-rem($container-image-h) * $adapt-ratio;
  }

  @include laptop-mf-em {
    $design-w: 1440px;
    $design-h: 900px;
    $adapt-ratio: 1.22;
    $container-image-w: 905px;
    $container-image-h: 667px;
    $angle: -4.17deg;

    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100vh;
  }

  &__main-image,
  &__main-image img {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: rotate($angle);
    animation: growMainImage 2.5s ease-in-out infinite alternate both 1s;

    @include laptop-mf-em {
      --scale-start: 1;
      --scale-end: 1.1;

      object-position: top right;
      transform: rotate(0);
      animation: none;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
  }

  &::before {
    $decor-elems-w: 360px;
    $decor-elems-h: 84px;
    display: none;

    @include tablet-mf-em {
      $adapt-ratio: 1.7;

      width: px-to-rem($decor-elems-w) * $adapt-ratio;
      height: px-to-rem($decor-elems-h) * $adapt-ratio;
      background-size: contain;
      background-position: top;
    }

    @include media-mf-unit(1024, em) {
      $adapt-ratio: 1.3;

      left: -7% * $adapt-ratio;

      width: px-to-rem($decor-elems-w) * $adapt-ratio;
      height: px-to-rem($decor-elems-h) * $adapt-ratio;
    }

    @include laptop-mf-em {
      $decor-elems-w: 534px;
      $decor-elems-h: 940px;
      $design-w: 1440px;
      $design-h: 900px;

      top: to-vmax(51px, $design-w);
      left: to-vmin(32px, $design-h);
      z-index: 2;

      display: block;
      width: to-vmax($decor-elems-w, $design-w);
      height: to-vmin($decor-elems-h, $design-h);

      background: url(@/assets/images/decor-img-wide.webp) center/contain
        no-repeat;
      animation: growDecorElems 7s ease-in-out 1s infinite alternate;
    }
  }

  &::after {
    $adapt-ratio: 1.1;
    $slots-w: 448px * $adapt-ratio;
    $slots-h: 327px * $adapt-ratio;
    $angle: -4.17deg;

    right: px-to-rem(-60px);
    bottom: px-to-rem(-227px);

    width: px-to-rem($slots-w) * $adapt-ratio;
    height: px-to-rem($slots-h) * $adapt-ratio;

    background: url(@/assets/images/slots-mobile.webp) no-repeat center / cover;
    transform: rotate($angle);

    @include tablet-mf-em {
      $adapt-ratio: 1.8;

      right: unset;
      left: 60%;
      transform: translateX(-60%) rotate($angle);
      bottom: px-to-rem(-150px);
    }

    @include media-mf-unit(1024, em) {
      $adapt-ratio: 0.8;

      width: px-to-rem($slots-w) * $adapt-ratio;
      height: px-to-rem($slots-h) * $adapt-ratio;
    }

    @include laptop-mf-em {
      display: none;
    }
  }

  @keyframes growDecorElems {
    $angle: -7deg;

    to {
      transform: scale(1.2);
    }
  }

  @keyframes growMainImage {
    from {
      scale: 0.95;
    }

    to {
      scale: 1.05;
    }
  }
}
</style>
