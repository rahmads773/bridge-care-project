<template>
    
    <div class="flex flex-col gap-12 bg-gray-100 rounded-lg p-6">
        <div class="flex  flex-col">
                <div class="flex flex-col gap-4 mb-12">
                    <img class="w-24 h-24 mx-auto rounded-full" src="../../assets/images/defaults/profile-picute.png" alt="profile-picture">
                    <div class="text-center text-2xl text-primary">Dr. Benamour <br> Kaouther</div>
                    <div class="text-center secondary-color text-lg">Medecin</div>
                    <div class="text-center secondary-color text-lg">Specialiste en Cardiologie</div>
                </div>
                <div class="flex flex-col gap-4 text-gray-600 font-medium mb-6">
                    <div class="info ">
                        <label for="lieu">Lieux:</label>
                        <input type="text" id="lieu" class="ml-4 bg-transparent relative" placeholder="Type..." >
                    </div>
                    <div class="info ">
                        <label for="service">Services:</label>
                        <input type="text" id="service" class="ml-4 bg-transparent" placeholder="Type...">
                    </div>
                </div>
                <hr class="mb-6 bg-gray-400">
                <div class="flex flex-col gap-4 text-gray-600 font-medium mb-6" placeholder="Type...">
                    <div class="info ">
                        <label for="date">Date de Naissance:</label>
                        <input type="date" id="date" class="ml-4 bg-transparent">
                    </div>
                    <div class="info ">
                        <label for="age">Age:</label>
                        <input type="number" id="age" class="ml-4 bg-transparent" placeholder="Type...">
                    </div>
                    <div class="info ">
                        <label for="mail">Email:</label>
                        <input type="email" id="mail" class="ml-4 bg-transparent" placeholder="Type...">
                    </div>
                    <div class="info ">
                        <label for="no">N d'ordre:</label>
                        <input type="text" id="no" class="ml-4 bg-transparent" placeholder="Type...">
                    </div>
                </div>
                <hr class="bg-gray-400">
                <RouterLink to="/dashboard/NotificationMed" class="noti special-btn bg-primary flex items-center p-4 justify-between sm:w-1/4 relative rounded">
                        <span class="text-white text-lg">Notifications</span>
                        <img src="../../assets/svg/bell.svg" alt="notification" class="w-5">
                    </RouterLink>
            </div>
    
    </div>
</template>
<style>
.noti::after{
    content: "3";
    position: absolute;
    right: -10px;
    top: -10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #cd3036;
    padding: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>


