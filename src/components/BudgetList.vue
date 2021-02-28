<template>
  <div class="budget-list-wrap">
    <div class='buttons-wrap'>
      <el-button @click='filterBudgetList("OUTCOME")' type="danger" size="mini">Show outcomes</el-button>
      <el-button @click='filterBudgetList("INCOME")' type="success" size="mini">Show incomes</el-button>
      <el-button @click='filterBudgetList("ALL")'  type="primary" size="mini">Show all</el-button>
    </div>

    <el-card :header="header">
      <template v-if="!isEmpty">
        <BudgetListItem :filter="filter"/>
      </template>
      <el-alert v-else :title="emptyTitle" type="info" :closable="false"
      ></el-alert>
    </el-card>
  </div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem';
import { mapGetters } from 'vuex';

export default {
  name: 'BudgetList',
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
    filter: {
      'outcome': true,
      'income': true
    }
  }),
  computed: {
    ...mapGetters('listItems', ['getList']),
    isEmpty() {
      return !Object.keys(this.getList).length;
    },
  },
  created() {
      this.filterBudgetList('ALL');
  },
  components: {
    BudgetListItem
  },
  methods: {
    filterBudgetList(type) {
      if (type === 'OUTCOME') {
        this.filter.outcome = true;
        this.filter.income = false;
      } else if (type === 'INCOME') {
        this.filter.outcome = false;
        this.filter.income = true;
      } else {
        this.filter.outcome = true;
        this.filter.income = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .budget-list-wrap {
    max-width: 500px;
    margin: auto;
    text-align: center;
  }

  .buttons-wrap {
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 0 20px;
  }

</style>
