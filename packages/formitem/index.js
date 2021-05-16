import lzFormItem from './src/FormItem.vue'

lzFormItem.install = Vue => {
	Vue.component(lzFormItem.name, lzFormItem)	
}

export default lzFormItem