<template>
	<div>
		<main-loader v-if="isLoading" />
		<div v-cloak>
			<div>
				<main-slide :slidesImage="slidesImage" />
				<main-about />
				<!-- <main-service /> -->
				<main-search />
				<!-- <main-products :products="availableRooms" /> -->
				<!-- <main-category /> -->
				<main-process />
				<main-video />
				<!-- <main-client /> -->
				<main-faq />
				<!-- <main-blog /> -->
				<main-talk />
			</div>
		</div>
	</div>

</template>

<script setup lang="ts">

const isLoading = ref(true)

const slidesImage = [
	{ src: '/assets/img/sunny/1.webp' },
	{ src: '/assets/img/sunny/2.webp' },
	{ src: '/assets/img/sunny/3.webp' }
]

onMounted(() => {
	setTimeout(() => {
		isLoading.value = false
	}, 1000)
})

const availableRooms = {
	count: 5,
	next: null,
	previous: null,
	results: [
		{
			id: 1,
			category: 1,
			title: 'Room 1',
			price: 100,
			options: {
				'bed': '1',
				'air_conditioner': true,
				'wifi': true,
				'breakfast': true,
				'parking': true,
				'balcony': true,
				'view': 'sea'
			},
			photos: [
				{
					id: 1,
					original_photo: 'https://via.placeholder.com/150',
					thumbnail: 'https://via.placeholder.com/150',
					photo_date: '2021-10-01',
					product: 1
				}
			],
			category_data: {
				id: 1,
				title: 'Single Room',
				description: 'Single Room Description'
			},
			is_active: true,
		},
		{
			id: 2,
			category: 2,
			title: 'Room 2',
			price: 200,
			options: {
				'bed': '2',
				'air_conditioner': true,
				'wifi': true,
				'breakfast': true,
				'parking': true,
				'balcony': true,
				'view': 'sea'
			},
			photos: [
				{
					id: 2,
					original_photo: 'https://via.placeholder.com/150',
					thumbnail: 'https://via.placeholder.com/150',
					photo_date: '2021-10-01',
					product: 2
				}
			],
			category_data: {
				id: 2,
				title: 'Double Room',
				description: 'Double Room Description'
			},
			is_active: true,
		},
		{
			id: 3,
			category: 3,
			title: 'Room 3',
			price: 300,
			options: {
				'bed': '3',
				'air_conditioner': true,
				'wifi': true,
				'breakfast': true,
				'parking': true,
				'balcony': true,
				'view': 'sea'
			},
			photos: [
				{
					id: 3,
					original_photo: 'https://via.placeholder.com/150',
					thumbnail: 'https://via.placeholder.com/150',
					photo_date: '2021-10-01',
					product: 3
				}
			],
			category_data: {
				id: 3,
				title: 'Triple Room',
				description: 'Triple Room Description'
			},
			is_active: true,
		},
		{
			id: 4,
			category: 4,
			title: 'Room 4',
			price: 400,
			options: {
				'bed': '4',
				'air_conditioner': true,
				'wifi': true,
				'breakfast': true,
				'parking': true,
				'balcony': true,
				'view': 'sea'
			},
			photos: [
				{
					id: 4,
					original_photo: 'https://via.placeholder.com/150',
					thumbnail: 'https://via.placeholder.com/150',
					photo_date: '2021-10-01',
					product: 4
				},
				{
					id: 5,
					original_photo: 'https://via.placeholder.com/150',
					thumbnail: 'https://via.placeholder.com/150',
					photo_date: '2021-10-01',
					product: 4
				}
			],
			category_data: {
				id: 4,
				title: 'Quad Room',
				description: 'Quad Room Description'
			},
			is_active: true,
		},
		{
			id: 5,
			category: 5,
			title: 'Room 5',
			price: 500,
			options: {
				'bed': '5',
				'air_conditioner': true,
				'wifi': true,
				'breakfast': true,
				'parking': true,
				'balcony': true,
				'view': 'sea'
			},
			photos: [
				{
					id: 6,
					original_photo: 'https://via.placeholder.com/150',
					thumbnail: 'https://via.placeholder.com/150',
					photo_date: '2021-10-01',
					product: 5
				}
			],
			category_data: {
				id: 5,
				title: 'Penthouse',
				description: 'Penthouse Description'
			},
			is_active: true,
		}
	]
}

</script>