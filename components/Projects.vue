<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2 class="projects-title">Projects</h2>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <a href="https://github.com/SirDegrid/project1" class="card-link" target="_blank">
                <div class="card h-100">
                  <img src="../static/beef_butcher.png" class="card-img-top" alt="Beef Butcher thumb">
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Beef Butcher</h5>
                    <p class="card-text">A Ruby on Rails application associating cuts of meat with classic dishes, and classic dishes with wine pairings. Full CRUD functionality.</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col">
              <a href="https://github.com/SirDegrid/client-barpretender" class="card-link" target="_blank">
                <div class="card h-100">
                  <img src="../static/barpretender.png" class="card-img-top" alt="Barpretender thumb">
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">BarPretender</h5>
                    <p class="card-text">A React app with Ruby on Rails API database. The app lets users find cocktails based on ingredients at hand, with full CRUD functionality.</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col">
              <a href="https://github.com/SirDegrid" class="card-link" target="_blank">
                <div class="card h-100">
                  <img src="../static/example_website.png" class="card-img-top" alt="Example project thumb">
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Next Project</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque consectetur fugiat nemo voluptate commodi ipsum sint distinctio delectus.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-title {
  color: #006060;
  display: inline-block;
  border-bottom: 4px solid #ffc76c;
  font-family: 'Libre Baskerville', serif;
}

.section {
  padding-top: 150px;
}

.card {
  font-family: 'Montserrat', sans-serif;
  color: #707070;
}

.col {
  padding-top: 40px;
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.card-link:hover .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card-link .card {
  transition: 0.3s;
}
</style>
