<template>
  <div class="total-value" :style='{"color": color}'>
    Balance: {{ getTotal }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TotalBalance',
  computed: {
    ...mapGetters('listItems', ['getTotal']),
    color() {
      return this.getTotal > 0 ? 'green'
        : this.getTotal === 0 ? 'black'
        : 'red';
    }
  },
}
</script>

<style scoped>
  .total-value {
    font-size: 26px;
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
  }
</style>