<script setup>
const route = useRoute();
const { data: cars, refresh } = await useFetchCars(route.params.city, {
	minPrice: route.query.minPrice,
	maxPrice: route.query.maxPrice,
	make: route.params.make,
});

watch(
	() => route.query,
	() => refresh(),
);
</script>

<template>
	<div>
		<CarCards :cars="cars" v-if="cars.length" />
		<h1 class="text-red-600" v-else>No Cars Found With Filters</h1>
	</div>
</template>
