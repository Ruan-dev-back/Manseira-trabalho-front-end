<template>
  <aside class="sidebar">
    <section>
      <h2>Aluno</h2>
      <RouterLink to="/feed">Aulas em destaque</RouterLink>
      <RouterLink to="/my-videos">Meus videos</RouterLink>
      <RouterLink to="/my-playlists">Minhas playlists</RouterLink>
      <RouterLink to="/notifications">Notificacoes</RouterLink>
      <RouterLink to="/profile/me">Meu perfil</RouterLink>
    </section>

    <section>
      <h2>Admin</h2>
      <RouterLink to="/admin/dashboard">Dashboard</RouterLink>
      <RouterLink to="/admin/reports">Denuncias</RouterLink>
      <RouterLink to="/admin/users">Usuarios</RouterLink>
      <RouterLink to="/admin/videos">Videos</RouterLink>
    </section>
  </aside>
</template>
