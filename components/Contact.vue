<template>
    <section id="contact" class="section">
    <section class="border p-4 d-flex justify-content-center mb-4">
    <ClientOnly>
        <form class="text-center needs-validation" style="width: 100%; max-width: 300px" novalidate
      @submit.prevent="checkForm">
      <h2 class="contact-title">Get in touch</h2>
      <br>
      <br>
      <br>
      <!-- Name input -->
      <MDBInput label="Name" v-model="nameMDBValidation" wrapperClass="mb-4" required
        invalidFeedback="Please provide your name." />
      <!-- Email input -->
      <MDBInput type="email" label="Email address" v-model="emailMDBValidation" wrapperClass="mb-4" required
        invalidFeedback="Please provide your email." />
      <!-- Subject input -->
      <MDBInput label="Subject" v-model="subjectMDBValidation" wrapperClass="mb-4" required
        invalidFeedback="Please provide mail subject." />
      <!-- Message input -->
      <MDBTextarea wrapperClass="mb-4" label="Message" v-model="messageMDBValidation" required
        invalidFeedback="Please provide a message text." />

      <!-- Mail copy -->
      <MDBCheckbox label="Send me copy" v-model="copyMDBValidation" />

      <!-- Submit button -->
      <MDBBtn id="button" block class="my-4" type="submit">Send</MDBBtn>

    </form>
    </ClientOnly>
    </section>
    </section>
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
.contact-title {
  color: #006060;
    display: inline-block;
    border-bottom: 4px solid #ffc76c;
}

.section {
  padding-top: 100px;
  /* background-color: #fafafa; */
}

#button {
    background-color: #008083;
    color: white;
}
</style>