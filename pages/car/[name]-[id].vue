<script setup>
definePageMeta({
	layout: 'custom',
	validate({ params }) {
		const { cars } = useCars();
		const car = cars.find((car) => car.id === parseInt(params.id));
		if (!car.value) {
			throw createError({
				statusCode: 404,
				message: `Car with ID of ${params.id} does not exist`,
			});
		}
	},
});

useHead({
	title: toTitleCase(route.params.name),
});

const route = useRoute();
const { cars } = useCars();
const { toTitleCase } = useUtilities();

const car = computed(() => {
	return cars.find((car) => car.id === parseInt(route.params.id));
});
</script>

<template>
	<div v-if="car">
		<CarDetailHero :car="car" />
		<CarDetailAttributes :features="car.features" />
		<CarDetailDescription :description="car.description" />
		<CarDetailContact />
	</div>
</template>
