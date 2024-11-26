<template>
	<header class="header slider-fade">
		<div class="owl-carousel owl-theme">
			<!-- Первый слайд -->
			<div class="item bg-img" data-overlay-dark="5" data-background="/assets/img/slider/11.jpg">
				<div class="v-middle caption">
					<div class="container">
						<div class="row">
							<div class="col-lg-12 col-md-12 mb-30">
								<div class="v-middle">
									<h6>{{ $t('premium') }}</h6>
									<h1>{{ $t('company_title') }}</h1>
									<h5>{{ $t('car_1') }} <span>{{ $t('car_1_price') }} <i>{{ $t('per_day') }}</i></span></h5>
									<a href="#0" class="button-1 mt-15 mb-15">
										{{ $t('view_details') }} <span class="ti-arrow-top-right"></span>
									</a>
									<a href="#" data-scroll-nav="1" class="button-2 mt-15 mb-15">
										{{ $t('rent_now') }} <span class="ti-arrow-top-right"></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Второй слайд -->
			<div class="item bg-img" data-overlay-dark="5" data-background="/assets/img/slider/12.jpg">
				<div class="v-middle caption">
					<div class="container">
						<div class="row">
							<div class="col-lg-12 col-md-12 mb-30">
								<div class="v-middle">
									<h6>{{ $t('premium') }}</h6>
									<h1>{{ $t('rental_car') }}</h1>
									<h5>{{ $t('car_2') }} <span>{{ $t('car_2_price') }} <i>{{ $t('per_day') }}</i></span></h5>
									<a href="#0" class="button-1 mt-15 mb-15">
										{{ $t('view_details') }} <span class="ti-arrow-top-right"></span>
									</a>
									<a href="#" data-scroll-nav="1" class="button-2 mt-15 mb-15">
										{{ $t('rent_now') }} <span class="ti-arrow-top-right"></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Третий слайд -->
			<div class="item bg-img" data-overlay-dark="5" data-background="/assets/img/slider/14.jpg">
				<div class="v-middle caption">
					<div class="container">
						<div class="row">
							<div class="col-lg-12 col-md-12 mb-30">
								<div class="v-middle">
									<h6>{{ $t('premium') }}</h6>
									<h1>{{ $t('rental_car') }}</h1>
									<h5>{{ $t('car_3') }} <span>{{ $t('car_3_price') }} <i>{{ $t('per_day') }}</i></span></h5>
									<a href="#0" class="button-1 mt-15 mb-15">
										{{ $t('view_details') }} <span class="ti-arrow-top-right"></span>
									</a>
									<a href="#" data-scroll-nav="1" class="button-2 mt-15 mb-15">
										{{ $t('rent_now') }} <span class="ti-arrow-top-right"></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
