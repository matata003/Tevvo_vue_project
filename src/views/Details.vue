<template>
  <div class="details">
    <Navbar />

    <div class="details-card">
      <img :src="imageUrl" :alt="pokemon.name" />
      <h2>{{ pokemon.name }}</h2>

      <div class="info-section">
        <p><strong>Height:</strong> {{ pokemon.height }}</p>
        <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
        <p>
          <strong>Types:</strong>
          <span v-for="t in pokemon.types" :key="t.type.name" class="type-pill">
            {{ t.type.name }}
          </span>
        </p>
        <p>
          <strong>Abilities:</strong>
          <span v-for="a in pokemon.abilities" :key="a.ability.name">
            {{ a.ability.name }}<span v-if="!isLastAbility(a)">, </span>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const pokemon = ref({})
const imageUrl = ref('')

const fetchPokemon = async () => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
    pokemon.value = res.data
    imageUrl.value =
      res.data.sprites.other['official-artwork'].front_default ||
      res.data.sprites.front_default
  } catch (err) {
    console.error('Error fetching Pokémon:', err)
  }
}

onMounted(() => {
  fetchPokemon()
})

const isLastAbility = ability =>
  pokemon.value.abilities.indexOf(ability) === pokemon.value.abilities.length - 1
</script>

<style scoped>
.details {
  min-height: 100vh;
  background: #f1f8ff;
  padding: 0;
}

.details-card {
  background: white;
  max-width: 600px;
  margin: 40px auto;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.details-card img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 20px;
  text-transform: capitalize;
  color: #0077b6;
}

.info-section p {
  font-size: 16px;
  margin: 10px 0;
}

.type-pill {
  background-color: #caf0f8;
  color: #0077b6;
  border-radius: 12px;
  padding: 3px 10px;
  margin: 0 5px;
  font-size: 14px;
  display: inline-block;
}
</style>
