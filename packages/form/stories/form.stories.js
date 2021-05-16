import lzForm from '../'
import lzFormItem from '../../formitem/'
import lzInput from '../../input/'
import lzButton from '../../button/'

export default {
  title: 'lzForm',
  component: lzForm
}

export const Login = () => ({
  components: { lzForm, lzFormItem, lzInput, lzButton },
  template: `
		<lz-form class="form" ref="form" :model="user" :rules="rules">
			<lz-form-item label="用户名" prop="username">
				<lz-input :value="user.username" @input="user.username = $event" placeholder="请输入用户名"></lz-input>
				<!-- <lz-input v-model="user.username"></lz-input> -->
			</lz-form-item>
			<lz-form-item label="密码" prop="password">
				<lz-input type="password" v-model="user.password"></lz-input>
			</lz-form-item>
			<lz-form-item>
				<lz-button type="primary" @click="login">登 录</lz-button>
			</lz-form-item>
		</lz-form>
	`,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      // console.log('button')
      // return false
			console.info(this.$refs.form,"this.$refs.form")
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})