import lzSteps from './src/Steps.vue'

lzSteps.install = Vue => {
	Vue.component(lzSteps.name, lzSteps)	
}

export default lzSteps