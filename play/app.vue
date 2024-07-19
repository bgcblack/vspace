<template>
  <a-layout>
    <a-layout-content style="padding: 50px">
      <a-form :model="formData" ref="formRef">
        <a-form-item
          label="姓名"
          name="name"
          :rules="[{ required: true, message: '请输入姓名' }]"
        >
          <a-input v-model:value="formData.name" />
        </a-form-item>

        <a-form-item label="邮箱" name="email" :rules="emailRules">
          <a-input v-model:value="formData.email" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" @click="handleSubmit">提交</a-button>
        </a-form-item>
      </a-form>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue'

const formRef = ref(null)

const formData = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
})

const emailRules = [
  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
  { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' },
  {
    validator: (_, value) => {
      console.log(value, '=======')
      if (!value || !value.includes('example.com')) {
        return Promise.reject(new Error('邮箱必须是 example.com 域名'))
      }
      return Promise.resolve()
    },
    trigger: 'blur',
  },
]

const handleSubmit = async () => {
  try {
    await formRef.value.validate()
    console.log('表单验证成功', formData.value)
  } catch (error) {
    console.error('表单验证失败', error)
  }
}
</script>
