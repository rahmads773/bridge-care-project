<script setup>
import HeaderLinksComponent from '../components/HeaderLinksComponent.vue'
import SideViewPhComponent from '../components/SideViewPhComponent.vue';
import NavLinksComponent from '../components/NavLinksComponent.vue';
</script>

<template>
    <div>
        <HeaderLinksComponent />
        <div class="relative">
            <NavLinksComponent />
            <SideViewPhComponent />
            <div class="bg-primary w-full min-h-screen h-full">
                <div class="w-2/3 ml-auto p-4 files-con">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>