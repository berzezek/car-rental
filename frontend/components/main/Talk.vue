<template>
  <section class="lets-talk bg-img bg-fixed section-padding" data-overlay-dark="5"
    data-background="/assets/img/slider/3.jpg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h6>{{ $t('rent_your_car') }}</h6>
          <h5>{{ $t('interested_in_renting') }}</h5>
          <p>{{ $t('dont_hesitate') }}</p> 
          <a href="tel:+8001234567" class="button-1 mt-15 mb-15 mr-10">
            <i class="fa-brands fa-whatsapp"></i> Whatsapp
          </a> 
          <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#0" class="button-2 mt-15 mb-15">
            {{ $t('rent_now') }} <span class="ti-arrow-top-right"></span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
