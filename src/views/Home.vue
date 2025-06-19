<template>
  <div class="home">
    <Navbar />
    <div class="content">
      <h2>Pokémon Explorer</h2>
      <input
        v-model="search"
        type="text"
        placeholder="Search for a Pokémon..."
      />

      <div class="pokemon-list">
        <div
          v-for="pokemon in filteredPokemons"
          :key="pokemon.name"
          class="pokemon-card"
          @click="goToDetails(pokemon)"
        >
          <img :src="getImageUrl(pokemon.url)" :alt="pokemon.name" />
          <h3>{{ pokemon.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const pokemons = ref([])
const search = ref('')
const router = useRouter()

const fetchPokemons = async () => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    pokemons.value = res.data.results
  } catch (err) {
    console.error('Error fetching Pokémon:', err)
  }
}

onMounted(() => {
  fetchPokemons()
})

const filteredPokemons = computed(() =>
  pokemons.value.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

const goToDetails = pokemon => {
  const id = pokemon.url.split('/').filter(Boolean).pop()
  router.push({ name: 'Details', params: { id } })
}

const getImageUrl = url => {
  const id = url.split('/').filter(Boolean).pop()
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #f1f8ff;
  padding: 0;
}
.content {
  padding: 20px;
  max-width: 1000px;
  margin: auto;
}
h2 {
  text-align: center;
  color: #0077b6;
  margin-bottom: 20px;
}
input {
  display: block;
  margin: 0 auto 30px auto;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  border: 1px solid #ccc;
}
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}
.pokemon-card {
  background: white;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.pokemon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.pokemon-card img {
  width: 80px;
  height: 80px;
}
</style>
