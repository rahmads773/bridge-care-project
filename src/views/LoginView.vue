<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

console.log(router.currentRoute.value);

function login() {
    if(router.currentRoute.value.query.type === 'patient')
        router.push('/profile/Dossier-Medicale')

   else if(router.currentRoute.value.query.type === 'userPH')
    router.push('/dashboardPh/medical-files')

    else if(router.currentRoute.value.query.type === 'user')
    router.push('/dashboard/medicals-files')
}

</script>

<template>
    <div class="flex items-center justify-center h-screen bg-primary" >
        <div class="sm:w-3/4 w-full lg:h-3/4 h-screen bg-white mx-auto drop-shadow-2xl border-2 border-primary grid lg:grid-cols-2 grid-cols-1 grid-rows-2 lg:grid-rows-1">
            <div class="relative w-full h-full">
                <img class="absolute inset-0 object-cover w-full h-full" src="../assets/images/carousel-background.jpg" alt="background" />
                <div class="absolute inset-0 bg-primary opacity-80"></div>
                <div class="absolute inset-0 sm:p-10 md:p-16 lg:p-20  p-4">
                    <img class="sm:w-1/2 w-2/5 lg:mb-24 mb-12" src="../assets/svg/logo-white.svg" alt="bridge-care-logo">
                    <div >
                        <h1 class="text-white text-4xl lg:mb-12 mb-6 title-manage">Manage your patient's Document</h1>
                        <p class="text-white leading-normal p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui adipisci id magni sint vitae inventore, repellat doloribus maxime ullam molestiae mollitia a quis. Velit libero expedita vel obcaecati molestias assumenda.</p>
                    </div>
                </div>
            </div>
            <div class="w-full h-full flex justify-center items-center">
                <div class="sm:w-1/2 w-4/5">
                    <h2 class="text-primary text-3xl mb-12">Login</h2>
                    <form class="flex flex-col gap-8">
                        <input type="email" id="email" name="email" placeholder="Email" class="flex-1 py-2 border-b-2 border-gray-400 focus:border-accent transition-all duration-500  placeholder-gray-600 outline-none">
                        <input type="password" id="password" name="password" placeholder="Password" class="flex-1 py-2 border-b-2 border-gray-400 focus:border-accent transition-all duration-500  placeholder-gray-600 outline-none">
                        <button @click.prevent="login()" class="bg-primary hover:bg-accent transition-all duration-500 py-2 px-4 text-white ml-auto rounded w-full sm:w-fit">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width:525px) {
    .title-manage{
        font-size: 25px;
    font-weight: bold;
}
p{
    font-size: 14px;
}
}
input::placeholder{
    transition: .5s;
}
input:focus::placeholder{
    opacity: 0;
}
</style>