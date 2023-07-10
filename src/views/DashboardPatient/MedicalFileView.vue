<!-- patient vue -->
<template>
    <div class="flex flex-col gap-12 bg-gray-100 rounded p-4">
        <div class="flex flex-col gap-6">
            <div>
                <div class="flex justify-between">
                    <h2 class="text-2xl text-slate-700">Analyse Biologique</h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo tenetur dignissimos cum sequi rerum, architecto in ipsam laboriosam totam quam nesciunt harum eligendi dolorem minus quae quidem quod? Consequatur.</p>
            <div class="flex gap-6  p-6">
                <div class="relative w-1/6">
                    <img class=" rounded-md drop-shadow-sm" src="../../assets//images/defaults/pdf-thumbnai.jpg" alt="pdf-thumnbail">
                    <a href="https://drive.google.com/file/d/125SW5mZwkL5LQI8Mk-CVz-XcDOKYXkZc/view" class="block absolute top-0 left-0 w-full h-full" target="_blank"></a>
                </div>
                <div class="relative w-1/6">
                    <img class=" rounded-md drop-shadow-sm" src="../../assets//images/defaults/pdf-thumbnai.jpg" alt="pdf-thumnbail">
                    <a href="https://drive.google.com/file/d/125SW5mZwkL5LQI8Mk-CVz-XcDOKYXkZc/view" class="block absolute top-0 left-0 w-full h-full" target="_blank"></a>
                </div>
                <div class="relative w-1/6">
                    <img class=" rounded-md drop-shadow-sm" src="../../assets//images/defaults/pdf-thumbnai.jpg" alt="pdf-thumnbail">
                    <a href="https://drive.google.com/file/d/125SW5mZwkL5LQI8Mk-CVz-XcDOKYXkZc/view" class="block absolute top-0 left-0 w-full h-full" target="_blank"></a>
                </div>
                

            </div>
        </div>
        <div class="flex flex-col gap-6">
            <div>
                <div class="flex justify-between">
                    <h2 class="text-2xl text-slate-700">Analyse Radiologique</h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo tenetur dignissimos cum sequi rerum, architecto in ipsam laboriosam totam quam nesciunt harum eligendi dolorem minus quae quidem quod? Consequatur.</p>
            <div>
                <div class="flex flex-col gap-6">
                    <a href="https://drive.google.com/file/d/14TTQfYMm16zELZ4Urioe4t6_hX0wLI4o/view" target="_blank"  class="special-btn bg-primary flex items-center justify-between sm:w-1/3 medi p-4">
                      <span class="text-white text-lg">Radio</span>
                      <img class="h-4" src="../../assets/svg/chevron.svg" alt="chevron">
                    </a>
                    <button class="special-btn bg-primary flex items-center p-4 justify-between sm:w-1/3">
                        <span class="text-white text-lg">IRM</span>
                        <img class="h-4" src="../../assets/svg/chevron.svg" alt="chevron">
                    </button>
                    <button class="special-btn bg-primary flex items-center p-4 justify-between sm:w-1/3">
                        <span class="text-white text-lg">Scanner</span>
                        <img class="h-4" src="../../assets/svg/chevron.svg" alt="chevron">
                    </button>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <div>
                <div class="flex justify-between">
                    <h2 class="text-2xl text-slate-700">Therapie</h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo tenetur dignissimos cum sequi rerum, architecto in ipsam laboriosam totam quam nesciunt harum eligendi dolorem minus quae quidem quod? Consequatur.</p>
            <div>
                <div class="flex flex-col gap-6">
                    <button class="special-btn bg-primary flex items-center p-4 justify-between sm:w-1/3">
                        <span class="text-white text-lg">Psychologique</span>
                        <img class="h-4" src="../../assets/svg/chevron.svg" alt="chevron">
                    </button>
                    <router-link  to="/profile/OrdonnanceP" class="special-btn bg-primary flex items-center justify-between sm:w-1/3 medi p-4">
                      <span class="text-white text-lg">Médicamenteux</span>
                      <img class="h-4" src="../../assets/svg/chevron.svg" alt="chevron">
                    </router-link>
                    <button class="special-btn bg-primary flex items-center p-4 justify-between sm:w-1/3">
                        <span class="text-white text-lg">Chirurgical</span>
                        <img class="h-4" src="../../assets/svg/chevron.svg" alt="chevron">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.medi{
    background-color: #3cc680;
}

</style>
