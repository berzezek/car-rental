 <template>
  <!-- Services 1 -->
  <section id="services" data-scroll-index="2" class="services1 section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mb-30">
          <div class="section-subtitle">{{ $t('what_we_do') }}</div>
          <div class="section-title">{{ $t('our_services') }} <span>{{ $t('services') }}</span></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="owl-carousel owl-theme">
            <div class="item" v-for="service, index in services">
              <div class="text">
                <h5>{{ $t(service.title) }}</h5>
                <p>{{ $t(service.description) }}</p>
              </div>
              <div class="numb">
                <div class="numb-curv">
                  <a href="service-details.html">
                    <div class="number"><i class="ti-arrow-top-right"></i></div>
                  </a>
                  <div class="shap-left-top">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#ffffff"></path>
                    </svg>
                  </div>
                  <div class="shap-right-bottom">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#ffffff"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'corporate_car_rental',
          description: 'corporate_car_rental_desc'
        },
        {
          title: 'car_rental_with_driver',
          description: 'car_rental_with_driver_desc'
        },
        {
          title: 'airport_transfer',
          description: 'airport_transfer_desc'
        },
        {
          title: 'fleet_leasing',
          description: 'fleet_leasing_desc'
        },
        {
          title: 'vip_transfer',
          description: 'vip_transfer_desc'
        },
        {
          title: 'private_transfer',
          description: 'private_transfer_desc'
        }
      ]
    };
  }
};
</script>
