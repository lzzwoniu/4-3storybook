import lzInput from '../'

export default {
  title: 'lzInput',
  component: lzInput
}

export const Text = () => ({
  components: { lzInput },
  template: '<lg-input v-model="value"></lg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { lzInput },
  template: '<lg-input type="password" v-model="value"></lg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
