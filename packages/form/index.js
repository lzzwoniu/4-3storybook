import lzForm from './src/Form.vue'

lzForm.install = Vue => {
	Vue.component(lzForm.name, lzForm)	
}

export default lzForm