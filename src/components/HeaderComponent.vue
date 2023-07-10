<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectPatient() {
    router.push({
        path: '/login',
        query: {
            type: 'patient'
        }
    })
}

function redirectUser() {
    router.push({
        path: '/login',
        query: {
            type: 'user'
        }
    })
}

function redirectPH() {
    router.push({
        path: '/login',
        query: {
            type: 'userPH'
        }
    })
}



</script>

<template>
    <div>
        <div class="bg-gradient-blue h-12" />
        <div class="flex flex-wrap justify-between items-center mx-12 my-3 container-flex">
            <div>
                <router-link to="/">
                    <img src="../assets/images/bridge-care-logo.png" alt="bridge-care-logo" class="h-16">
                </router-link>
            </div>
            <div class="flex flex-wrap gap-8 btn-con">
                <button @click="redirectPatient()" class="bg-white rounded-full px-6 py-1 drop-shadow-lg flex gap-4 items-center">
                    <img class="h-6" src="../assets/svg/patient.svg" alt="patient">
                    <span>Je suis patient</span>
                </button>
                <button @click="redirectUser()" class="bg-gradient-blue text-white rounded-full px-6 py-1 drop-shadow-lg flex gap-4 items-center">
                    <img class="h-6" src="../assets/svg/user.svg" alt="usert">
                    <span>Je suis Medecin</span>
                </button>
                <button @click="redirectPH()" class="bg-gradient-blue text-white rounded-full px-6 py-1 drop-shadow-lg flex gap-4 items-center">
                    <img class="h-6" src="../assets/svg/user.svg" alt="usert">
                    <span>Je suis Pharmacien</span>
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped>
@media (max-width:1090px) {
    .container-flex{
    justify-content: center;
    gap: 18px;
    }
}
@media (max-width:791px){
.container-flex .btn-con{
justify-content: center;
}
}
@media (max-width:461px){
    .container-flex .btn-con button{
justify-content: center;
align-items: center;
width: 100%;
}
}
</style>