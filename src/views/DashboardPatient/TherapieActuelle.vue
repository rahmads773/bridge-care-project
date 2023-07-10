<template>
 <div class="flex flex-col gap-12 bg-gray-100 rounded p-4">
        <div class="flex flex-col gap-6">
            <div>
                <div class="flex justify-between">
                    <h2 class="text-2xl text-slate-700">Ordonnance Actuelle</h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo tenetur dignissimos cum sequi rerum, architecto in ipsam laboriosam totam quam nesciunt harum eligendi dolorem minus quae quidem quod? Consequatur.</p>
            <div class="flex gap-6  p-6">
                <div class="relative sm:w-1/6">
                    <img class=" rounded-md drop-shadow-sm" src="../../assets//images/defaults/ordonnance_model.png" alt="pdf-thumnbail">
                    <a href="https://drive.google.com/file/d/1NW_4JqFsZYNNYycyytaCKxbsfyGvfuly/view" class="block absolute top-0 left-0 w-full h-full" target="_blank"></a>
                </div>
             
                

            </div>
        </div>
        <div class="flex flex-col gap-6">
            <div>
                <div class="flex justify-between">
                    <h2 class="text-2xl text-slate-700">Automédication durant la période du traitement: </h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
         
            <div>
                <div class="flex flex-col gap-6">
                    <p>Ex: Ibuprofène</p>
                 <input type="text" name="auto" id="auto" class="sm:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3" placeholder="Type...">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <div>
                <div class="flex justify-between">
                    <h2 class="text-2xl text-slate-700">Les plantes médicinales utilisées durant la période du traitement: </h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
         
            <div>
                <div class="flex flex-col gap-6">
                    <p>Ex: Millepertuis</p>
                 <input type="text" name="auto" id="auto" class="sm:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3" placeholder="Type...">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <div>
                <div class="flex justify-between">
                    <h2 class="text-2xl text-slate-700">Les compléments alimentaires pris pendant la période du traitement: </h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
         
            <div>
                <div class="flex flex-col gap-6">
                    <p>Ex: Le Magnésium</p>
                 <input type="text" name="auto" id="auto" class="sm:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3" placeholder="Type...">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <div>
                <div class="flex justify-between">
                    <h2 class="text-2xl text-slate-700">Effet secondaire à signaler:</h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
         
            <div>
                <div class="flex flex-col gap-6">
                    <p>Ex: Douleurs Abdominales</p>
                 <input type="text" name="auto" id="auto" class="sm:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3" placeholder="Type...">
                </div>
            </div>
        </div>
        
    </div>
</template>
