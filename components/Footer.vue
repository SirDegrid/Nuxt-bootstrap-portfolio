<template>
    <footer class="text-center text-white custom-footer" style="background-color: #008083;">
      <!-- Grid container -->
      <div class="container pt-4">
        <div class="row">
          <div class="col-lg-6 text-lg-start">
            <h1 class="footer-name">Maggie Cameron</h1>
          </div>
          <div class="col-lg-6 text-lg-end">
            <!-- Section: Social media -->
            <div class="d-inline-block">
              <!-- Linkedin -->
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/maggie-cameron-877b82106/?originalSubdomain=uk"
                role="button"
                target="_blank"
                data-mdb-ripple-color="dark"
              >
                <font-awesome-icon class="icon-color fa-3x" icon="fa-brands fa-linkedin" />
              </a>
  
              <!-- Github -->
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://github.com/SirDegrid"
                role="button"
                target="_blank"
                data-mdb-ripple-color="dark"
              >
                <font-awesome-icon class="icon-color fa-3x" icon="fa-brands fa-square-github" />
              </a>
            </div>
            <!-- Section: Social media -->
          </div>
        </div>
        <ul class="text-end mt-4">
          <li>0400 000 000</li>
          <li>info@maggie-cameron.com</li>
        </ul>
      </div>
      <!-- Grid container -->
    </footer>
  </template>
  
  <script>
    import {
      MDBInput,
      MDBTextarea,
      MDBBtn,
    } from "mdb-vue-ui-kit";
    import {
      ref
    } from "vue";
    export default {
      components: {
        MDBInput,
        MDBTextarea,
        MDBBtn,
      },
      setup() {
        const nameCustomValidation = ref("");
        const emailCustomValidation = ref("");
        const subjectCustomValidation = ref("");
        const messageCustomValidation = ref("");
        const copyCustomValidation = ref(false);
  
        const statusRef = ref(null);
        const checkValidation = () => {
          let isDataValid = true;
          let statusMessage = "";
  
          if (nameCustomValidation.value === "") {
            statusMessage +=
              '<p class="note note-danger"><strong>Name</strong> cannot be empty</p>';
            isDataValid = false;
          }
  
          if (emailCustomValidation.value === "") {
            statusMessage +=
              '<p class="note note-danger"><strong>Email</strong> cannot be empty</p>';
            isDataValid = false;
          } else {
            const re =
              /^(([^<>()[]\.,;:s@"]+(.[^<p>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  
            if (!re.test(emailCustomValidation.value)) {
              statusMessage += '<p class="note note-danger"><strong>Email</strong> is invalid</p>';
              isDataValid = false;
            }
          }
  
          if (subjectCustomValidation.value === "") {
            statusMessage +=
              '<p class="note note-danger"><strong>Subject</strong> cannot be empty</p>';
            isDataValid = false;
          }
          if (messageCustomValidation.value === "") {
            statusMessage +=
              '<p class="note note-danger"><strong>Message</strong> cannot be empty</p>';
            isDataValid = false;
          }
          return {
            isDataValid,
            statusMessage
          };
        };
  
        const validateForm = (e) => {
          const formData = new FormData(e.target);
  
          const {
            isDataValid,
            statusMessage
          } = validateForm();
  
          if (!isDataValid) {
            statusRef.value.innerHTML = statusMessage;
            return;
          }
  
          fetch('/api/contact', {
              method: 'POST',
              body: formData,
              mode: 'cors'
            })
            .then((response) => {
              response.json();
            })
          then((response) => {
              // handle errors
              if (response.errors) {
                response.errors.forEach(({
                  msg
                }) => {
                  statusRef.value.innerHTML += `<p class="note note-danger">${msg}</p>`
                });
                return;
              }
              // If mail was sent successfully, reset all elements with attribute 'name'
              nameCustomValidation.value = ''
              emailCustomValidation.value = ''
              subjectCustomValidation.value = ''
              messageCustomValidation.value = ''
              copyCustomValidation.valule = false
  
              statusRef.value.innerHTML = `<p class="note note-success">${response.msg}</p>`;
            })
            .catch((err) => {
              statusRef.value.innerHTML += `<p class="note note-danger">${err}</p>`
            })
            .finally(() => {
              setTimeout(() => {
                statusRef.value.innerHTML = '';
              }, 2000)
            })
        };
  
        return {
          nameCustomValidation,
          emailCustomValidation,
          subjectCustomValidation,
          messageCustomValidation,
          statusRef,
          validateForm
        };
      },
    }
  </script>
  
  <style scoped>
  .footer-name {
    color: #015f60;
  }
  
  .icon-color {
    color: #015f60;
  }
  
  .custom-footer {
    height: 200px;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 20px;
  }
  
  li {
    text-align: right;
  }
  </style>