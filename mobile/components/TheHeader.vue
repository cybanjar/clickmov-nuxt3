<template>
  <nav>
    <div class="nav-left">
      <div class="menu-hamburger" @click="counter.$state.showSidebar = !counter.$state.showSidebar">
        <span></span>
      </div>
      <NuxtLink to="/">
        <img class="logo" src="../assets/images/Logo.png" alt="Moov">
      </NuxtLink>
    </div>
    <div class="nav-right">
      <a href="#">
        <img class="img-live" src="../assets/images/live.png" alt="">
      </a>
      <div class="search-open" @click="counter.$state.showSearch = !counter.$state.showSearch">
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useCounter } from "~/store/counter";
const counter = useCounter();

</script>

<style>
</style>