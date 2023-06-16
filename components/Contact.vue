<template>
  <section id="contact" class="section">
    <section class="border p-4 d-flex justify-content-center mb-4">
      <ClientOnly>
        <form class="text-center needs-validation" style="width: 100%; max-width: 500px" novalidate @submit.prevent="validateForm">
          <h2 class="contact-title">Get in touch.</h2>
          <br>
          <p>Please fill out the form below - I aim to respond within 24 business hours.</p>
          <br>
          <MDBInput label="Name" v-model="nameCustomValidation" name='name' wrapperClass="mb-4" required invalidFeedback="Please provide your name." />
          <MDBInput type="email" label="Email address" v-model="emailCustomValidation" name='email' wrapperClass="mb-4" required invalidFeedback="Please provide your email." />
          <MDBInput label="Subject" v-model="subjectCustomValidation" wrapperClass="mb-4" name='subject' required invalidFeedback="Please provide mail subject." />
          <MDBTextarea wrapperClass="mb-4" label="Message" v-model="messageCustomValidation" name='message' required invalidFeedback="Please provide a message text." />
          <MDBCheckbox label="Send me copy" v-model="copyMDBValidation" />
          <MDBBtn id="button" block class="my-4" type="submit">Send</MDBBtn>
          <div ref="statusRef"></div>
        </form>
      </ClientOnly>
    </section>
  </section>
</template>

<script>
  import { MDBInput, MDBTextarea, MDBBtn, MDBCheckbox } from "mdb-vue-ui-kit";
  import { ref } from "vue";

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
          statusMessage += '<p class="note note-danger"><strong>Name</strong> cannot be empty</p>';
          isDataValid = false;
        }

        if (emailCustomValidation.value === "") {
          statusMessage += '<p class="note note-danger"><strong>Email</strong> cannot be empty</p>';
          isDataValid = false;
        } else {
          const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

          if (!re.test(emailCustomValidation.value)) {
            statusMessage += '<p class="note note-danger"><strong>Email</strong> is invalid</p>';
            isDataValid = false;
          }
        }

        if (subjectCustomValidation.value === "") {
          statusMessage += '<p class="note note-danger"><strong>Subject</strong> cannot be empty</p>';
          isDataValid = false;
        }
        if (messageCustomValidation.value === "") {
          statusMessage += '<p class="note note-danger"><strong>Message</strong> cannot be empty</p>';
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
          statusMessage,
        } = checkValidation();

        if (!isDataValid) {
          statusRef.value.innerHTML = statusMessage;
          console.log(statusMessage);
          return;
        }

        fetch('http://localhost:3000/api/contact', {
          method: 'POST',
          body: formData,
          mode: 'cors'
        })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            if (response.errors) {
              response.errors.forEach(({ msg }) => {
                statusRef.value.innerHTML += `<p class="note note-danger">${msg}</p>`
              });
              return;
            }
            nameCustomValidation.value = '';
            emailCustomValidation.value = '';
            subjectCustomValidation.value = '';
            messageCustomValidation.value = '';
            copyCustomValidation.valule = false;

            statusRef.value.innerHTML = `<p class="note note-success">${response.msg}</p>`;
          })
          .catch((err) => {
            statusRef.value.innerHTML += `<p class="note note-danger">${err}</p>`;
          })
          .finally(() => {
            setTimeout(() => {
              statusRef.value.innerHTML = '';
            }, 2000);
          });
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
.contact-title {
  color: #006060;
  display: inline-block;
  border-bottom: 4px solid #ffc76c;
  font-family: 'Libre Baskerville', serif;
}

.section {
  padding-top: 120px;
  background-color: #fafafa;
  border: 5px solid #f7f7f7;
}

#button {
  background-color: #008083;
  color: white;
}

form {
  font-family: 'Montserrat', sans-serif;
}

.border {
  border: none !important;
}
</style>
