<script setup>
import { ref } from 'vue';
import { send } from '@emailjs/browser';

const lastnameInput = defineModel('lastname');
const firstnameInput = defineModel('firstname');
const emailInput = defineModel('email');
const objectInput = defineModel('object');
const messageInput = defineModel('message');

const formError = ref({
  lastnameErr: '',
  firstnameErr: '',
  emailErr: '',
  objectErr: '',
  messageErr: '',
});

function sendMail() {
  const emailFormat = new RegExp(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/);
  let hadError = false;

  if (!lastnameInput.value > 0) {
    formError.value.lastnameErr = '* Veuillez renseigner votre nom.';
    hadError = true;
  } else {
    formError.value.lastnameErr = '';
  }

  if (!lastnameInput.value > 0) {
    formError.value.firstnameErr = '* Veuillez renseigner votre prenom.';
    hadError = true;
  } else {
    formError.value.firstnameErr = '';
  }

  if (!emailInput.value > 0) {
    formError.value.emailErr = '* Veuillez préciser une adresse e-mail.';
    hadError = true;
  } else if (!emailFormat.test(emailInput.value)) {
    formError.value.emailErr = '* Veuillez entrer une adresse e-mail valide.';
    hadError = true;
  } else {
    formError.value.emailErr = '';
  }

  if (!objectInput.value > 0) {
    formError.value.objectErr = '* Veuillez préciser un objet.';
    hadError = true;
  } else {
    formError.value.objectErr = '';
  }

  if (!messageInput.value > 0) {
    formError.value.messageErr = '* Veuillez préciser un message.';
    hadError = true;
  } else {
    formError.value.messageErr = '';
  }

  if (!hadError) {
    const env = import.meta.env;
    const email = {
      lastname: lastnameInput.value,
      firstname: firstnameInput.value,
      email: emailInput.value,
      object: objectInput.value,
      message: messageInput.value,
    };

    try {
      send(env.VITE_SERVICE_ID, env.VITE_TEMPLATE_ID, email, {
        publicKey: env.VITE_PUBLIC_KEY,
      });

      lastnameInput.value = '';
      firstnameInput.value = '';
      emailInput.value = '';
      objectInput.value = '';
      messageInput.value = '';
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<template>
  <section id="contact">
    <h3>Me contacter par mail</h3>
    <form id="contact-form" action="">
      <div class="form-part lastname">
        <label for="lastname">Votre nom:</label>
        <input
          v-model="lastnameInput"
          type="text"
          id="lastname"
          name="lastname"
        />
        <p v-if="formError.lastnameErr.length > 0" class="error">
          {{ formError.lastnameErr }}
        </p>
      </div>
      <div class="form-part firstname">
        <label for="firstname">Votre prenom:</label>
        <input
          v-model="firstnameInput"
          type="text"
          id="firstname"
          name="firstname"
        />
        <p v-if="formError.firstnameErr.length > 0" class="error">
          {{ formError.firstnameErr }}
        </p>
      </div>
      <div class="form-part email">
        <label for="email">Votre e-mail:</label>
        <input v-model="emailInput" type="text" id="email" name="email" />
        <p v-if="formError.emailErr.length > 0" class="error">
          {{ formError.emailErr }}
        </p>
      </div>
      <div class="form-part object">
        <label for="object">Objet:</label>
        <input v-model="objectInput" type="text" id="object" name="object" />
        <p v-if="formError.objectErr.length > 0" class="error">
          {{ formError.objectErr }}
        </p>
      </div>
      <div class="form-part message">
        <label for="message">Votre message:</label>
        <textarea v-model="messageInput" name="message" id="message"></textarea>
        <p v-if="formError.messageErr.length > 0" class="error">
          {{ formError.messageErr }}
        </p>
      </div>
      <div class="form-part send-btn">
        <button type="button" @click="sendMail()">Envoyer</button>
      </div>
    </form>
  </section>
</template>

<style lang="less">
@import '../../style/variable.less';

#contact {
  margin-top: 50px;
  width: 100%;
  h3 {
    color: @strong;
    text-align: center;
    font-size: @d-xl;
    margin-bottom: 50px;
    @media screen and (max-width: 600px) {
      font-size: @m-xl;
      margin-bottom: 30px;
    }
  }
  #contact-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    margin: auto;
    width: 80%;
    @media screen and (max-width: 600px) {
      gap: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .form-part {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 600px) {
        margin: 5px 0;
      }
      label {
        color: @strong;
      }
      input,
      textarea,
      button {
        background: @light;
        width: 100%;
        border-radius: 15px;
        font-family: @text;
        border: 1.5px solid @strong;
        box-shadow: inset 0 0 4px 4px rgba(@strong, 0.25);
        padding: 15px 10px;
        font-size: @d-m;
        @media screen and (max-width: 600px) {
          font-size: @m-m;
        }
        &:focus {
          border-width: 2.5px;
        }
      }
      textarea {
        resize: none;
        height: 200px;
      }
      button {
        width: 50%;
        cursor: pointer;
        margin: 20px auto;
        font-weight: bold;
        color: @strong;
        @media screen and (max-width: 600px) {
          width: 100%;
        }
      }
      &.lastname {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
      }
      &.firstname {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
      }
      &.email {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
      }
      &.object {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
      }
      &.message {
        grid-row: 3 / 4;
        grid-column: 1 / 3;
      }
      &.send-btn {
        grid-row: 4/ 5;
        grid-column: 1 / 3;
      }
      .error {
        margin: 5px 0 0 5px;
        color: crimson;
        font-weight: normal;
        font-size: @d-s;
        @media screen and (max-width: 600px) {
          font-size: @m-s;
        }
      }
    }
  }
}
</style>
