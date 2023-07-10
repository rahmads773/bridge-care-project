<!-- eslint-disable vue/no-parsing-error -->
<script setup>

import { useRoute } from 'vue-router';


let navLinks = [];

function state(){

 if  (!useRoute().meta.isPatient) 
navLinks = ['Profile', 'Dossier-Medicale', 'Therapie-Actuelle', 'Carte-Sanitaire'];

else 
navLinks = ['Carte-Sanitaire', 'Dossier-Medicale', 'Therapie-Actuelle'];
console.log(navLinks)

}

state()
console.log(navLinks)
</script>



<template>
    <div :class="!useRoute().meta.isPatient ? 'bg-gray-200' : 'bg-white' ">
        <div class="flex w-2/3 ml-auto py-4 nav-container"  >
         
            <router-link v-for="(link, index) in navLinks" :key="index" class="py-2 px-6" :to ="link" >
                <div>{{ link }}</div>
            </router-link>
        </div>
    </div>
</template>






<style scoped>
.nav-container{
    flex-wrap: wrap;
}
@media (max-width:956px) {
    .nav-container{
        justify-content: center;
        width: 100%;
    gap: 10px;
    }
}
a{
    transition: .3s;
}
a:hover,a:active{
   font-weight: 500;
   border-bottom: 3px solid rgba(128, 128, 128, 0.764);
}

</style>
