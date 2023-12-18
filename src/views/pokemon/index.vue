<template>
  <div>
    <!-- <selectpok v-on:selectedPokemon="handleSelectedPokemon"></selectpok> -->
    <infopok></infopok>
    <!-- <div v-if="selectedPokemon">
      <h2>Selected Pokemon: {{ selectedPokemon }}</h2>
    </div> -->
  </div>
</template>

<script>
import selectpok from './select_pok.vue'
import infopok from './infopok.vue'

export default {
  components: {
    selectpok,
    infopok
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
