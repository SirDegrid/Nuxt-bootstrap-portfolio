<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    <Intro ref="intro" />
    <About ref="about" />
    <Mission />
    <Projects ref="projects" />
    <Contact ref="contact" />
    <Footer />
  </div>
</template>

<script setup>
  useHead({
    title: "Maggie Cameron",
    link: [
      {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
        crossorigin: "anonymous"
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
        crossorigin: "anonymous"
      }
    ]
  })
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');

.d-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.min-vh-100 {
  min-height: 100vh;
}
.flex-grow-1 {
  flex-grow: 1;
}
</style>
