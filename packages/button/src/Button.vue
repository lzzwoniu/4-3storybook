<template>
	<div>
		<button @click="handleClick"><slot /></button>
	</div>
</template>

<script>
export default {
	name: "lzButton",
	methods: {
		handleClick (evt) {
			this.$emit('click', evt)
			evt.preventDefault()
		}
	},
};
</script>
<style>

</style>