<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>
<template>
  <div class="container-auth">
    <div class="content-header">
      <img src="@/assets/header_auth.jpg" alt="Header auth" />
      <div class="header-gradient"></div>
    </div>
    <div class="content-views">
      <div class="header-forms-sign-in-sign-up">
        <div class="item-link">
          <router-link to="/auth/sign-in">Ingreso</router-link>
        </div>
        <div class="item-link">
          <router-link to="/auth/sign-up">Registro</router-link>
        </div>
      </div>
      <div class="form-container">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-auth {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(143, 222, 223, 0.433);
}
.content-header {
  width: 100%;
  height: 40%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
}
.content-header img {
  max-width: 100%;
  height: min-instrinsic;
  z-index: 1;
}
.content-header .header-gradient {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(60, 90, 143, 0.8);
}
.content-views {
  width: 30%;
  z-index: 2;
  min-height: 80%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.content-views .header-forms-sign-in-sign-up {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: 2rem 0;
  width: 100%;
}
.header-forms-sign-in-sign-up a.router-link-exact-active {
  color: rgb(234, 122, 42);
  border-bottom: 2px solid rgb(234, 122, 42);
  padding-bottom: 0.3rem;
}
.header-forms-sign-in-sign-up a {
  color: rgb(139, 139, 139);
  text-decoration: none;
}
.content-views .form-container {
  width: 90%;
  margin: 0 auto;
}
</style>
