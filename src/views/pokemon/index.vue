<template>
  <div>
    <select_pok v-on:selectedPokemon="handleSelectedPokemon"></select_pok>
    <!-- 선택된 포켓몬의 정보를 출력 -->
    <div v-if="selectedPokemon">
      <h2>Selected Pokemon: {{ selectedPokemon }}</h2>
    </div>
  </div>
</template>

<script>
import select_pok from './select_pok.vue'

export default {
  components: {
    select_pok
  },
  data() {
    return {
      selectedPokemon: null
    };
  },
  methods: {
    handleSelectedPokemon(pokemon) {
      this.selectedPokemon = pokemon;
    }
  }
};
</script>
