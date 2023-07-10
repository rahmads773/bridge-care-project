<template>
    <div class="lg:w-1/3 w-full lg:absolute">
        <div class="lg:w-4/5 w-11/12 mt-8 mx-auto mb-8 p-8 bg-white rounded-md shadow-2xl">
            <div class="flex  flex-col">
                <div class="flex flex-col gap-4 mb-12">
                    <img class="w-24 h-24 mx-auto rounded-full" src="../assets/images/defaults/profile-picute.png" alt="profile-picture">
                    <div class="text-center text-2xl text-primary">Dr. Benamour <br> Kaouther</div>
                    <div class="text-center secondary-color text-lg">Medecin</div>
                    <div class="text-center secondary-color text-lg">Specialiste en Cardiologie</div>
                </div>
                <div class="flex flex-col gap-4 text-gray-600 font-medium mb-6">
                    <span>Lieux :</span>
                    <span>Service :</span>
                </div>
                <hr class="mb-6 bg-gray-400">
                <div class="flex flex-col gap-4 text-gray-600 font-medium mb-6">
                    <span>Date de Naissance :</span>
                    <span>Age :</span>
                    <span>Email :</span>
                    <span>N d'ordre :</span>
                </div>
                <hr class="bg-gray-400">
            </div>
        </div>
    </div>
</template>

<style scoped>
hr {
    height: 2px;
}

</style>