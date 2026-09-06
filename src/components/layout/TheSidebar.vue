<template>
  <aside class="sidebar">
    <section>
      <h2>Aluno</h2>
      <RouterLink to="/feed">Explorar cursos</RouterLink>
      <RouterLink to="/my-courses">Meus cursos</RouterLink>
    </section>

    <section>
      <h2>Instrutor</h2>
      <RouterLink to="/upload">Upload de videoaula</RouterLink>
    </section>

    <section>
      <h2>Admin</h2>
      <RouterLink to="/admin/dashboard">Dashboard</RouterLink>
      <RouterLink to="/admin/users">Usuarios</RouterLink>
      <RouterLink to="/admin/courses">Cursos</RouterLink>
      <RouterLink to="/admin/categories">Categorias</RouterLink>
    </section>
  </aside>
</template>
