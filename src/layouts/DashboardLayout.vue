<script setup>
import HeaderLinksComponent from '../components/HeaderLinksComponent.vue'
import SideViewComponent from '../components/SideViewComponent.vue';
import NavLinksComponent from '../components/NavLinksComponent.vue';

</script>

<template>
    <div>
        <HeaderLinksComponent />
        <div class="relative">
            <NavLinksComponent />
            <SideViewComponent />
            <div class="bg-primary w-full min-h-screen h-full ">
                <div class="w-2/3 ml-auto p-4 files-con">
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