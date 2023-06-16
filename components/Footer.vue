<template>
  <footer class="custom-footer" style="background-color: #008083;">
    <div class="container pt-4">
      <div class="row justify-content-lg-end">
        <div class="col-lg-6 d-flex flex-column align-items-end">
          <div class="d-inline-block mb-3">
            <a class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/maggie-cameron-877b82106/?originalSubdomain=uk"
              role="button" target="_blank" data-mdb-ripple-color="dark">
              <font-awesome-icon class="icon-color fa-3x" icon="fa-brands fa-linkedin" />
            </a>
            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/SirDegrid"
              role="button" target="_blank" data-mdb-ripple-color="dark">
              <font-awesome-icon class="icon-color fa-3x" icon="fa-brands fa-square-github" />
            </a>
          </div>
          <ul class="text-end mt-4">
            <li>0400 000 000</li>
            <li>info@maggie-cameron.com</li>
          </ul>
        </div>
      </div>
    </div>
    <img class="footer-logo" src="../static/Footer_full.svg" alt="Maggie Cameron Logo" width="500">
  </footer>
</template>

<script>
</script>

<style scoped>
ul {
  font-family: 'Montserrat', sans-serif;
}

.footer-name {
  color: #015f60;
}

.icon-color {
  color: #015f60;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  text-align: right;
  color: white;
}

.custom-footer {
  padding: 1rem;
}

.footer-logo {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;
}

.custom-footer {
  position: relative;
  padding: 1rem;
}

@media (min-width: 992px) {
  .custom-footer .col-lg-6 {
    display: flex;
    flex-direction: column-reverse;
  }

  .footer-logo {
    max-width: 500px;
  }
}

@media (max-width: 992px) {
  .footer-logo {
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .footer-logo {
    max-width: 300px;
  }
}

@media (max-width: 576px) {
  .footer-logo {
    max-width: 200px;
  }
}

@media (max-width: 480px) {
  .footer-logo {
    max-width: 100px;
  }
}
</style>
