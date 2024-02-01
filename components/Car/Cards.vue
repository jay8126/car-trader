<script setup>
const { cars } = useCars();
console.log('cars', cars);
</script>

<template>
	<div class="w-full">
		<CarCard v-for="car in cars" :key="car.id" :car="car" />
	</div>
</template>
