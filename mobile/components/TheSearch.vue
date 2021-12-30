<template>
    <div class="search" :class="{active : counter.$state.showSearch}">
        <div class="wrap-search">
            <input type="text" placeholder="Masukkan kata kunci...">
        </div>
    </div>
</template>

<script setup>
import { useCounter } from "~/store/counter";
const counter = useCounter();
</script>