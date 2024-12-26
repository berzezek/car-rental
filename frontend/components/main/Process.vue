<template>
	<!-- Process -->
	<section id="process" data-scroll-index="5" class="process section-padding">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-12 text-center mb-30">
					<div class="section-subtitle">{{ $t('process.steps') }}</div>
					<div class="section-title">{{ $t('common.company_title') }} <span>{{ $t('process.title') }}</span></div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 mb-30">
					<div class="item" @click="goToUrl('/rooms')">
						<div class="text">
							<h5>{{ $t('process.choose_a_product') }}</h5>
							<p>{{ $t('process.choose_a_product_desc') }}</p>
						</div>
						<div class="numb">
							<div class="numb-curv">
								<div class="number">01.</div>
								<div class="shap-left-top">
									<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
										<path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
											fill="#ffffff"></path>
									</svg>
								</div>
								<div class="shap-right-bottom">
									<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
										<path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
											fill="#ffffff"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-30">
					<div class="item" @click="goToUrl('/#contact')">
						<div class="text">
							<h5>{{ $t('process.come_in_contact') }}</h5>
							<p>{{ $t('process.come_in_contact_desc') }}</p>
						</div>
						<div class="numb">
							<div class="numb-curv">
								<div class="number">02.</div>
								<div class="shap-left-top">
									<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
										<path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
											fill="#ffffff"></path>
									</svg>
								</div>
								<div class="shap-right-bottom">
									<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
										<path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
											fill="#ffffff"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-30">
					<div class="item" @click="goToUrl('https://maps.google.com/maps?ll=41.516724,69.973838&z=15&t=m&hl=en&gl=UZ&mapclient=embed&cid=99159389175023363')">
						<div class="text">
							<h5>{{ $t('process.enjoy_driving') }}</h5>
							<p>{{ $t('process.enjoy_driving_desc') }}</p>
						</div>
						<div class="numb">
							<div class="numb-curv">
								<div class="number">03.</div>
								<div class="shap-left-top">
									<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
										<path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
											fill="#ffffff"></path>
									</svg>
								</div>
								<div class="shap-right-bottom">
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
			<div class="row justify-content-center">
				<div class="col-md-12 text-center mt-15">
					<p><span class="ti-info"></span> {{ $t('process.process_info') }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">

const localePath = useLocalePath()
const router = useRouter()

const goToUrl = (url: string) => {
	// Проверяем, является ли URL внутренним маршрутом
	if (url === '/rooms' || url === '/#contact') {
		// Выполняем внутреннюю навигацию
		router.push(localePath(url))
	} else {
		// Открываем внешний URL в новом окне
		window.open(url, '_blank')
	}
}

</script>

<style scoped>
.item {
	cursor: pointer !important;
}

.item:hover {
	background-color: #28808E;
}
</style>