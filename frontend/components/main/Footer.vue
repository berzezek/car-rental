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
                <div class="footer-contact-link-wrapper">
                  <div class="image-wrapper footer-contact-link-icon">
                    <div class="icon-footer"> <i class="flaticon-phone-call"></i> </div>
                  </div>
                  <div class="footer-contact-link-content">
                    <h6>{{ $t('call_us') }}</h6>
                    <p>{{ $t('phone_number') }}</p>
                  </div>
                </div>
                <div class="footer-contact-links-divider"></div>
                <div class="footer-contact-link-wrapper">
                  <div class="image-wrapper footer-contact-link-icon">
                    <div class="icon-footer"> <i class="omfi-envelope"></i> </div>
                  </div>
                  <div class="footer-contact-link-content">
                    <h6>{{ $t('write_to_us') }}</h6>
                    <p>info@azureresort.uz</p>
                  </div>
                </div>
                <div class="footer-contact-links-divider"></div>
                <div class="footer-contact-link-wrapper">
                  <div class="image-wrapper footer-contact-link-icon">
                    <div class="icon-footer"> <i class="omfi-location"></i> </div>
                  </div>
                  <div class="footer-contact-link-content">
                    <h6>{{ $t('address') }}</h6>
                    <p>{{ $t('location') }}</p>
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
                <h3 class="widget-title">{{ $t('company_title') }}</h3>
              </div>
              <div class="widget-text">
                <p>{{ $t('about_description') }}</p>
                <div class="social-icons">
                  <ul class="list-inline">
                    <li><a href="https://wa.me/998947779955" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                    </li>
                    <li><a href="https://www.facebook.com/@azureresort.uz" target="_blank"><i
                          class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://t.me/azureresort" target="_blank"><i
                          class="fa-brands fa-telegram"></i></a></li>
                    <!-- <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- quick links -->
          <div class="col-md-3 offset-md-1 widget-area">
            <div class="widget clearfix usful-links">
              <h3 class="widget-title">{{ $t('quick_links') }}</h3>
              <ul>
                <li><a href="/#about">{{ $t('about') }}</a></li>
                <!-- <li><a href="cars.html">{{ $t('cars') }}</a></li> -->
                <!-- <li><a href="car-types.html">{{ $t('car_types') }}</a></li> -->
              </ul>
            </div>
          </div>
          <!-- subscribe -->
          <!-- <div class="col-md-4 widget-area">
            <div class="widget clearfix">
              <h3 class="widget-title">{{ $t('subscribe') }}</h3>
              <p>{{ $t('subscribe_description') }}</p>
              <div class="widget-newsletter">
                <form action="#">
                  <input type="email" :placeholder="$t('email_placeholder')" required>
                  <button type="submit"><i class="ti-arrow-top-right"></i></button>
                </form>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <!-- bottom footer -->
      <div class="bottom-footer-text">
        <div class="row copyright">
          <div class="col-md-12">
            <p class="mb-0">&copy;2024 <a href="#">{{ $t('company_title') }}</a>. {{ $t('all_rights_reserved') }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

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