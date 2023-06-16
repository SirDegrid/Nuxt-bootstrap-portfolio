<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/" @click.prevent="scrollTo('home')">
          <img src="../static/Header.svg" alt="Maggie Cameron Logo" height="70">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav d-flex justify-content-end">
            <li class="nav-item mx-2">
              <a class="nav-link" href="#" @click.prevent="scrollTo('about')">About</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#" @click.prevent="scrollTo('projects')">Projects</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#" @click.prevent="scrollTo('contact')">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo(section) {
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(section);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
.nav-link:hover {
  color: #015f60;
}

.navbar-brand {
  color: white;
}

.nav-link {
  padding-top: 2em;
  color: white;
}

.navbar {
  background-color: #008083;
  font-family: 'Montserrat', sans-serif;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

body {
  padding-top: 56px;
}
</style>
