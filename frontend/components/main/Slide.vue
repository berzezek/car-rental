<template>
  <div>
    <aside data-scroll-index="0" class="kenburns-section" id="kenburnsSliderContainer" data-overlay-dark="5">
    </aside>
    <div class="kenburns-inner">
      <div class="caption">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1>{{ $t('common.company_title_part1') }} {{ $t('common.company_title_part2') }}</h1>
              <h5>{{ $t('common.company_description') }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style>
.kenburns-inner {
  position: absolute;
  top: 0;
  left: 10rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
}

@media (max-width: 767px) {
  .kenburns-inner {
    left: 0;
    justify-content: center;
  }
}
</style>
