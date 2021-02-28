import Vue from 'vue';

const listItems = {
  namespaced: true,
  state: {
    list: {
      1: {
        id: 1,
        type: 'INCOME',
        value: 100,
        comment: 'Some income'
      },
      2: {
        id: 2,
        type: 'OUTCOME',
        value: -50,
        comment: 'Some outcome'
      }
    }
  },
  mutations: {
    ADD_PROP(state, prop) {
      Vue.set(state.list, prop.id, prop);
    },
    DELETE_PROP(state, id) {
      Vue.delete(state.list, id);
    }
  },
  actions: {
    setProperty({ commit }, newProp) {
      commit("ADD_PROP", newProp);
    },
    deleteProperty({ commit }, id) {
      commit("DELETE_PROP", id);
    }
  },
  getters: {
    getList: ({ list }) => list,
    getTotal: ({ list }) => {
      return Object.values(list).reduce((acc, item) =>  acc += item.value, 0);
    }
  },
}

export default listItems;