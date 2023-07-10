<template>
    <div class="flex items-center justify-center h-screen bg-primary">
        <div class="w-3/4 h-3/4 bg-white mx-auto drop-shadow-2xl border-2 border-primary grid grid-cols-2">
            <div class="relative w-full h-full">
                <img class="absolute inset-0 object-cover w-full h-full" src="../assets/images/carousel-background.jpg" alt="background" />
                <div class="absolute inset-0 bg-primary opacity-80"></div>
                <div class="absolute inset-0 p-12">
                    <img class="w-1/2 mb-24" src="../assets/images/bridge-care-logo.png" alt="bridge-care-logo">
                    <div >
                        <h1 class="text-white text-4xl mb-12">Manage your patient's Document</h1>
                        <p class="text-white leading-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui adipisci id magni sint vitae inventore, repellat doloribus maxime ullam molestiae mollitia a quis. Velit libero expedita vel obcaecati molestias assumenda.</p>
                    </div>
                </div>
            </div>
            <div class="w-full h-full flex justify-center items-center">
                <div class="w-1/2">
                    <h2 class="text-primary text-3xl mb-12">Signup</h2>
                    <form class="flex flex-col gap-8">
                        <input type="text" id="first-name" name="first-name" placeholder="First Name" class="flex-1 py-2 border-b-2 border-gray-400 focus:border-accent transition-all duration-500  placeholder-gray-600 outline-none">
                        <input type="text" id="last-name" name="last-name" placeholder="Last Name" class="flex-1 py-2 border-b-2 border-gray-400 focus:border-accent transition-all duration-500  placeholder-gray-600 outline-none">
                        <input type="email" id="email" name="email" placeholder="Email" class="flex-1 py-2 border-b-2 border-gray-400 focus:border-accent transition-all duration-500  placeholder-gray-600 outline-none">
                        <input type="password" id="password" name="password" placeholder="Password" class="flex-1 py-2 border-b-2 border-gray-400 focus:border-accent transition-all duration-500  placeholder-gray-600 outline-none">
                        <button class="bg-primary hover:bg-accent transition-all duration-500 py-2 px-4 text-white ml-auto rounded">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>