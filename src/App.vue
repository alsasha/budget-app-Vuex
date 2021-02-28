<template>
  <div id="app">
    <Form @onFormSubmit='onSubmit'/>
    <TotalBalance />
    <BudgetList/>
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import Form from '@/components/Form';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    BudgetList,
    TotalBalance,
    Form
  },
  methods: {
    ...mapActions('listItems', ['setProperty']),
    onSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      };
      if (newObj.type === 'OUTCOME') {
        newObj.value = -Math.abs(newObj.value);
      }
      this.setProperty(newObj);
    },

  }
};
</script>

<style>
#app {
}
</style>
