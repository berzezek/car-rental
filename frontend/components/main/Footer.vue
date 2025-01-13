<template>
  <!-- Footer -->
  <footer class="footer clearfix" data-scroll-index="7" id="contact">
    <div class="container">
      <!-- first footer -->
      <div class="first-footer">
        <div class="row">
          <div class="col-md-12">
            <div class="links dark footer-contact-links">
              <div class="footer-contact-links-wrapper">
                <a :href="`tel:${$t('common.phone_number')}`">
                  <div class="footer-contact-link-wrapper">
                    <div class="image-wrapper footer-contact-link-icon">
                      <div class="icon-footer"> <i class="flaticon-phone-call"></i> </div>
                    </div>
                    <div class="footer-contact-link-content">
                      <h6>{{ $t('footer.call_us') }}</h6>
                      <p>{{ $t('common.phone_number') }}</p>
                    </div>
                  </div>
                </a>
                <div class="footer-contact-links-divider"></div>
                <a href="mailto:info@azureresort.uz">
                  <div class="footer-contact-link-wrapper">
                    <div class="image-wrapper footer-contact-link-icon">
                      <div class="icon-footer"> <i class="omfi-envelope"></i> </div>
                    </div>
                    <div class="footer-contact-link-content">
                      <h6>{{ $t('footer.write_to_us') }}</h6>
                      <p>info@azureresort.uz</p>
                    </div>
                  </div>
                </a>
                <div class="footer-contact-links-divider"></div>
                <div class="footer-contact-link-wrapper">
                  <div class="image-wrapper footer-contact-link-icon">
                    <div class="icon-footer"> <i class="omfi-location"></i> </div>
                  </div>
                  <div class="footer-contact-link-content">
                    <h6>{{ $t('footer.address') }}</h6>
                    <p>{{ $t('footer.location') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- second footer -->
      <div class="second-footer">
        <div class="row">
          <!-- about & social icons -->
          <div class="col-md-4 widget-area">
            <div class="widget clearfix">
              <div class="footer-logo">
                <h3 class="widget-title">{{ $t('common.company_title') }}</h3>
              </div>
              <div class="widget-text">
                <p>{{ $t('footer.about_description') }}</p>
                <div class="social-icons">
                  <ul class="list-inline">
                    <li><a href="https://wa.me/998947779955" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                    </li>
                    <li><a href="https://www.facebook.com/@azureresort.uz" target="_blank"><i
                          class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://t.me/azureresort" target="_blank"><i class="fa-brands fa-telegram"></i></a>
                    </li>
                    <!-- <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- quick links -->
          <div class="col-md-3 offset-md-1 widget-area">
            <div class="widget clearfix usful-links">
              <h3 class="widget-title">{{ $t('footer.quick_links') }}</h3>
              <ul>
                <li><nuxt-link :to="localePath('/#about')">{{ $t('navbar.about') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/#process')">{{ $t('navbar.process') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/activities')">{{ $t('navbar.activity') }}</nuxt-link></li>
                <!-- <li><a href="cars.html">{{ $t('footer.cars') }}</a></li> -->
                <!-- <li><a href="car-types.html">{{ $t('footer.car_types') }}</a></li> -->
              </ul>
            </div>
          </div>
          <!-- subscribe -->
          <div class="col-md-4 widget-area">
            <div class="widget clearfix">
              <h3 class="widget-title">{{ $t('footer.map') }}</h3>
              <div style="width: 100%; max-width: 600px; height: auto;">
                <iframe :src="mapSrc" width="100%" height="200" style="border: 0;" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- bottom footer -->
      <div class="bottom-footer-text">
        <div class="row copyright">
          <div class="col-md-12">
            <p class="mb-0">&copy;2024 <a>{{ $t('common.company_title') }}</a>. {{ $t('footer.all_rights_reserved') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { locale } = useI18n()

const mapSrc = ref(`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.425475323622!2d69.97383839999999!3d41.5167235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38af0d3d54130df3%3A0x16048f067ec0703!2sAzure%20Resort!5e0!3m2!1s${locale.value}!2suz!4v1734780395308!5m2!1s${locale.value}!2suz`)
</script>

<style scoped>
.footer {
  background-color: #28808E;
  color: #F4BE67 !important;
}

.footer-contact-link-wrapper p,
h6,
.second-footer .widget-area .widget p,
.footer .widget .widget-title,
.footer .usful-links ul li a,
.copyright p,
.copyright a,
.social-icons li {
  color: #F4BE67 !important;
}
</style>