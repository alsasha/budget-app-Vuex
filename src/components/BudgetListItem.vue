<template>
  <div>
    <div  class="list-item" v-for="(item, prop) in getList" :key="prop"
    v-show="item.type ===  'OUTCOME'? filter['outcome']: filter.income">
      <i :class="icon(item.type)"></i>
      <span class="budget-comment">{{ item.comment }}</span>
      <span :style='{"color": color(item.type)}' class="budget-value">{{ item.value }}</span>
      <el-button @click='deleteItem(item.id)' type="danger" size="mini" icon="el-icon-delete" circle></el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'BudgetListItem',
  props: {
    filter: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters('listItems', ['getList']),
  },
  methods: {
    ...mapActions('listItems', ['deleteProperty']),
    deleteItem(id) {
      this.$confirm('Do you want do delete this item?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        });
        this.deleteProperty(id);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    },
    icon(type) {
      return type === 'INCOME' ? 'el-icon-top' : 'el-icon-bottom';
    },
    color(type) {
      return type === 'INCOME' ? 'green' : 'red';
    }
  }
}
</script>

<style scoped>
  .list-item {
    display: flex;
    padding: 10px 15px;
    align-items: center;
  }

  .budget-value{
    font-weight: bold;
    margin: 0 20px 0 auto;
  }
</style>