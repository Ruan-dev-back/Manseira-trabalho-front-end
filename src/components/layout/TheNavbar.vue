<template>
  <header class="navbar">
    <RouterLink class="brand" to="/">
      <span class="brand-mark">ES</span>
      <span>EduStream</span>
    </RouterLink>

    <nav class="navbar-links" aria-label="Navegacao principal">
      <RouterLink to="/feed">Feed</RouterLink>
      <RouterLink to="/search">Buscar</RouterLink>
      <RouterLink to="/videos/upload">Enviar video</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>
</template>
