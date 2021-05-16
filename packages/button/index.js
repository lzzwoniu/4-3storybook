import lzButton from './src/Button.vue'

lzButton.install = Vue => {
	Vue.component(lzButton.name, lzButton)	
}

export default lzButton