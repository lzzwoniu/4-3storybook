<template>
	<form>
		<slot />
	</form>
</template>

<script>
export default {
	name: "lzForm",
	props: {
		model: {
			type: Object
		},
		rules: {
			type: Object
		},
	},
	provide() {
		return {
			form: this
		}
	},
	methods: {
		validate (cb) {
			const task = this.$children.filter(child => child.prop).map(child => child.validate())
			Promise.all(task).then(() => cb(true)).catch(() => cb(false))
		}
	}
};
</script>
<style>

</style>