<template>
  <div>
    <!-- About -->
    <section id="about" class="about section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-30">
            <div class="content">
              <div class="section-subtitle">{{ $t('company_title') }}</div>
              <div class="section-title">{{ $t('company_subtitle_1') }} <span>{{ $t('company_subtitle_2') }}</span>
              </div>
              <p class="mb-30">{{ $t('company_subtitle_3') }}</p>
              <ul class="list-unstyled list mb-30">
                <li>
                  <div class="list-icon"> <span class="ti-check"></span> </div>
                  <div class="list-text">
                    <p>{{ $t('commercial_vehicles') }}</p>
                  </div>
                </li>
                <li>
                  <div class="list-icon"> <span class="ti-check"></span> </div>
                  <div class="list-text">
                    <p>{{ $t('passenger_vehicles') }}</p>
                  </div>
                </li>
              </ul> <a href="about.html" class="button-4">{{ $t('read_more') }}<span
                  class="ti-arrow-top-right"></span></a>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1 col-md-12">
            <div class="item"> <img src="/assets/img/about.jpg" class="img-fluid" alt="">
              <div class="curv-butn icon-bg">
                <a href="https://youtu.be/1LxcTt1adfY" class="vid">
                  <div class="icon"> <i class="ti-control-play"></i> </div>
                </a>
                <div class="br-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                      fill="#ffffff"></path>
                  </svg>
                </div>
                <div class="br-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                      fill="#ffffff"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="line-vr-section"></div>
  </div>
</template>