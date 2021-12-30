<template>
    <div class="content-wrapper">
        <div>{{ $route.params }}</div>
        <p>data {{ data }}</p> 
    </div>
</template>

<script setup>
const router = useRouter();
let param = router.currentRoute.value.params;
const { data } = useFetch(`https://suara.com/data/service/terkini?category=video,${param.slug}`);
</script>
