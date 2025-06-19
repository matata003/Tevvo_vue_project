<template>
  <nav class="navbar">
    <div class="navbar-title">Pokémon Explorer</div>
    <div class="nav-links">
      <router-link to="/home" class="nav-link">Home</router-link>
      <router-link to="/" class="nav-link">Logout</router-link>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  background-color: #ffcb05;
  color: #2a75bb;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  flex-wrap: wrap;
}

.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  text-decoration: none;
  color: #2a75bb;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
