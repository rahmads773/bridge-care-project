<script setup>
import HeaderLinksComponent from '../components/HeaderLinksComponent.vue'

</script>

<template>
    <div>
        <HeaderLinksComponent />
        <div class="relative">
            <div class="bg-primary w-full min-h-screen h-full ">
                <div class="w-full ml-auto sm:p-4 p-0 files-con ">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@media (max-width:1024px) {
    .files-con{
        width: 100%;
    }
}
</style>