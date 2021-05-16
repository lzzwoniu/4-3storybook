<template>
	<div class="lg-steps">
		<div class="lg-steps-line"></div>
		<div
		class = "lg-step"
		v-for = "item in count"
		:key = "item"
		:style = "{color: activeCount >= item ? activeColor : defaultColor}"
		>
			{{item}}
		</div>
	</div>
</template>

<script>
import './steps.css'
export default {
	name: 'lzSteps',
	props: {
		count: {
			type: Number,
			default: 3
		},
		activeCount: {
			type: Number,
			default: 2
		},
		defaultColor: {
			type: String,
			default: '#ccc'
		},
		activeColor: {
			type: String,
			default: 'skyblue'
		},
	}
};
</script>
<style>

</style>