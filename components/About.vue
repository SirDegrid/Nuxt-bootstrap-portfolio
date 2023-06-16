<template>
    <section id="about" class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 d-flex flex-column flex-md-row"> 
            <img src="../static/maggie_head.jpeg" class="my-auto order-1 order-md-1 img-fluid" width="100%"/>
            <div class="name-about order-2 order-md-2">
              <h2 class="about-name">Maggie Cameron - Software Engineer</h2>
              <p>
                Hello from about. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet necessitatibus eos cupiditate architecto? Tempore autem, ratione nulla, maiores quas, quod harum repellat similique praesentium repellendus excepturi ullam error non molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum laudantium id voluptatum ut esse eos.
              </p>
              <ul class="skills list-inline">
                <li class="list-inline-item text-wrap">JavaScript</li>
                <li class="list-inline-item text-wrap">Ruby on Rails</li>
                <li class="list-inline-item text-wrap">Bootstrap</li>
                <li class="list-inline-item text-wrap">Vue</li>
                <li class="list-inline-item text-wrap">React</li>
                <li class="list-inline-item text-wrap">PostgreSQL</li>
                <li class="list-inline-item text-wrap">Express</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  .about-name {
    color: #006060;
    display: inline-block;
    border-bottom: 4px solid #ffc76c;
    font-family: 'Libre Baskerville', serif;
  }
  
  .section {
    padding-top: 150px;
    min-height: 200px;
  }
  
  p {
    color: #707070;
    padding-top: 20px;
    padding-bottom: 15px;
    font-family: 'Montserrat', sans-serif;
  }
  
  .name-about {
    padding-left: 3em;
  }
  
  .my-auto {
    padding-bottom: 30px;
  }
  
  ul {
    font-family: 'Libre Baskerville', serif;
    color: #006060;
    list-style-type: none;
    margin-bottom: 50px;
  }
  
  .list-inline-item {
    margin-right: 20px;
  }
  
  @media (max-width: 576px) {
    .list-inline-item {
      display: block;
      margin-bottom: 5px;
    }
  }
  </style>
  