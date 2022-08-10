<script lang="ts">
import IconArrow from "../../components/icons/IconArrow.vue";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  // type inference enabled
  data() {
    return {
      name: "",
      username: "",
      password: "",
    };
  },
  components: {
    IconArrow,
  },
  mounted() {
    this.name; // type: string | undefined
    this.username; // type: string | undefined
    this.password; // type: string | undefined
  },
  methods: {
    async registerNewUser($event: Event) {
      $event.preventDefault();
      try {
        await axios.post("http://localhost:3000/api/users", {
          name: this.name,
          username: this.username,
          password: this.password,
        });
        // this.$toast.success("Usuario creado correctamente");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
<template>
  <form @submit="registerNewUser" class="sign-up">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        v-model="name"
        placeholder="Nombre"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        v-model="username"
        placeholder="Usuario"
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Contraseña"
        v-model="password"
      />
    </div>
    <div class="button-section">
      <button type="submit" class="btn-submit">
        <i>
          <iconArrow />
        </i>
      </button>
    </div>
  </form>
</template>
<style scoped>
.sign-up {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sign-up .form-group {
  margin: 1rem 0 2rem 0;
  width: 100%;
}

.form-group input {
  outline: none !important;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  width: 100%;
  border-radius: 25px;
  line-height: 2rem;
  font-size: 1.2rem;
}

.button-section {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100%;
  transform: translate(0, -50%);
  border-radius: 50%;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.button-section button {
  background: #df663d;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none !important;
}

.button-section button i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  fill: rgb(255, 255, 255);
}
</style>
