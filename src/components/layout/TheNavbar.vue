<template>
  <header class="navbar">
    <RouterLink class="brand" to="/">
      <span class="brand-mark">ES</span>
      <span>EduStream</span>
    </RouterLink>

    <nav class="navbar-links" aria-label="Navegacao principal">
      <RouterLink to="/feed">Feed</RouterLink>
      <RouterLink to="/my-courses">Meus cursos</RouterLink>
      <RouterLink to="/upload">Upload de videoaula</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>
</template>
