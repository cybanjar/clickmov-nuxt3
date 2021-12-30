<template>
  <div>
    <ul class="list-category">
      <li class="list-c" v-for="(item, index) in state.category" :key="index">
        <a href="#">
          <img :src="item['img']" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import data from "../data/dummy.json";

const state = reactive({
  category: [],
});

const dataDummy = data;
state.category = dataDummy.category;
</script>

<style lang="scss">
ul.list-category{
  display: flex;
  overflow-x: scroll;
  max-width: 980px;
  li.list-c {
    margin-right: 20px;
    list-style: none;
    a {
      text-decoration: none;
    }
  }
}
</style>
