<template>
	<div>
		<section class="faq section-padding mt-15">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center mb-30">
						<div class="section-subtitle">{{ $t('faq.subtitle') }}</div>
						<div class="section-title">{{ $t('faq.title') }}</div>
					</div>
					<div class="col-md-12">
						<div class="accordion" id="faqAccordion">
							<div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
								<h2 class="accordion-header" :id="`heading-${index}`">
									<button
										class="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										:data-bs-target="`#collapse-${index}`"
										aria-expanded="true"
										:aria-controls="`collapse-${index}`"
									>
										{{ $t(faq.question) }}
									</button>
								</h2>
								<div
									:id="`collapse-${index}`"
									class="accordion-collapse collapse"
									:class="{ show: index === 0 }"
									aria-labelledby="`heading-${index}`"
									data-bs-parent="#faqAccordion"
								>
									<div class="accordion-body">
										{{ $t(faq.answer) }}
									</div>
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

<script setup lang="ts">
const faqs = [
	{
		question: 'faq.question_1',
		answer: 'faq.answer_1',
	},
	{
		question: 'faq.question_2',
		answer: 'faq.answer_2',
	},
	{
		question: 'faq.question_3',
		answer: 'faq.answer_3',
	},
	{
		question: 'faq.question_4',
		answer: 'faq.answer_4',
	},
	{
		question: 'faq.question_5',
		answer: 'faq.answer_5',
	},
];
</script>
