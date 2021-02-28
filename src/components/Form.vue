<template>
  <ElCard class='form-card'>
    <ElForm ref='addItemForm' :model='dataForm' :rules='rules'>
      <ElFormItem label='Select' prop='type'>
        <ElSelect class='form-select' v-model='dataForm.type' placeholder='Select type'>
          <ElOption label='Income' value='INCOME'></ElOption>
          <ElOption label='Outcome' value='OUTCOME'></ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label='Value' prop='value'>
        <ElInput v-model.number='dataForm.value'></ElInput>
      </ElFormItem>
      <ElFormItem label='Comment' prop='comment'>
        <ElInput v-model='dataForm.comment'></ElInput>
      </ElFormItem>
      <ElButton @click='onSubmit' type='primary'>Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: 'Form',
  data() {
    const checkValue = (rule, value, callback) => {
      if (value === 0) {
        return callback(new Error('Please input correct value'));
      }
      callback();
    };

    return {
      dataForm: {
        type: 'INCOME',
        value: 0,
        comment: ''
      },
      rules: {
        type: [
          { required: true, message: 'Please input type', trigger: 'blur' }
        ],
        value: [
          { required: true, message: 'Please input value', trigger: 'change' },
          { type: 'number', message: 'Please input number', trigger: 'change' },
          { validator: checkValue, trigger: 'change' }
        ],
        comment: [
          { required: true, message: 'Please input value', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          this.$emit('onFormSubmit', { ...this.dataForm });
          this.$refs.addItemForm.resetFields();
        }
      });
    }
  }
}
</script>

<style scoped>
  .form-card {
    max-width: 500px;
    margin: auto;
    text-align: center;
  }

  .form-select {
    width: 100%;
  }
</style>