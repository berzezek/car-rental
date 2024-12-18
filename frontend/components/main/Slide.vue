<template>
  <div>
    <aside data-scroll-index="0" class="kenburns-section" id="kenburnsSliderContainer" data-overlay-dark="5">
    </aside>
    <div class="kenburns-inner">
      <div class="caption">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1>{{ $t('company_title_part1') }} {{ $t('company_title_part2') }}</h1>
              <!-- <img src="/assets/img/logo-light.png" alt="line" class="mt-15 mb-15" /> -->
              <h5>{{ $t('company_description') }}</h5>
              <a href="#0" class="button-1 mt-15 mb-15 mr-15">
                {{ $t('view_details') }}<span class="ti-arrow-top-right"></span>
              </a>
              <a href="#" data-scroll-nav="1" class="button-2 mt-15 mb-15">
                {{ $t('order_now') }}<span class="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
