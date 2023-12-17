import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '',
  },
  getters: {
    getName: state => state.name,
  },
  mutations: {
    updateName(state, newName) {
      state.name = newName;
    },
  },
  actions: {
    saveToLocalStorage({ state }) {
      localStorage.setItem('vuex_state', JSON.stringify(state));
    },

    loadFromLocalStorage({ commit }) {
      const savedState = localStorage.getItem('vuex_state');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        commit('updateName', parsedState.name);
      }
    },
    // SAVE DATA
    saveToFile({ state }) {
      const jsonState = JSON.stringify(state);
      const blob = new Blob([jsonState], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'poke_data.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
    },
    // LOAT DATA
    loadFromFile({ commit }, file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsedState = JSON.parse(event.target.result);
          commit('updateName', parsedState.name);
        } catch (error) {
          console.error('Error parsing JSON from file:', error);
        }
      };
      reader.readAsText(file);
    }
  },
  modules: {
  }
})
