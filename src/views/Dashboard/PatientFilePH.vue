<template>
    <div class="flex flex-col gap-12 bg-gray-100 rounded-lg p-6">
        <div class="flex flex-col gap-6">
            <div>
                <div class="flex justify-between analyse">
                    <h2 class="text-2xl text-slate-700 ">Analyse Biologique</h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
            <p>Accédez aux résultats d'analyses biologiques pour mieux comprendre les besoins des patients, évaluer les effets des médicaments et fournir des conseils personnalisés en tant que pharmacien. Utilisez cette ressource pour recommander les produits et les traitements les plus appropriés, en tenant compte des résultats des analyses biologiques.</p>
            <div class="flex gap-6 sm:p-6 flex-col sm:flex-row">
                <div class="relative sm:w-1/6">
                    <img class=" rounded-md drop-shadow-sm" src="../../assets//images/defaults/pdf-thumbnai.jpg" alt="pdf-thumnbail">
                    <a href="https://drive.google.com/file/d/125SW5mZwkL5LQI8Mk-CVz-XcDOKYXkZc/view" class="block absolute top-0 left-0 w-full h-full" target="_blank"></a>
                </div>
                <div class="relative sm:w-1/6">
                    <img class=" rounded-md drop-shadow-sm" src="../../assets//images/defaults/pdf-thumbnai.jpg" alt="pdf-thumnbail">
                    <a href="https://drive.google.com/file/d/125SW5mZwkL5LQI8Mk-CVz-XcDOKYXkZc/view" class="block absolute top-0 left-0 w-full h-full" target="_blank"></a>
                </div>
                <div class="relative sm:w-1/6">
                    <img class=" rounded-md drop-shadow-sm" src="../../assets//images/defaults/pdf-thumbnai.jpg" alt="pdf-thumnbail">
                    <a href="https://drive.google.com/file/d/125SW5mZwkL5LQI8Mk-CVz-XcDOKYXkZc/view" class="block absolute top-0 left-0 w-full h-full" target="_blank"></a>
                </div>
                

            </div>
        </div>
        <div class="flex flex-col gap-6">
            <div>
                <div class="flex justify-between analyse">
                    <h2 class="text-2xl text-slate-700">Therapie</h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
            <p>Explorez les différentes approches thérapeutiques disponibles, notamment la thérapie médicamenteuse, la thérapie psychologique et la thérapie chirurgicale de votre patient. Ces informations peuvent aider á fournir des conseils éclairés aux patients, répondre à leurs questions sur les traitements et les aider à mieux comprendre les options thérapeutiques disponibles tout en restant en contact avec le médecin.</p>
            <div>
                <div class="flex flex-col gap-6">
                    <button class="special-btn bg-primary flex items-center p-4 justify-between sm:w-1/3">
                        <span class="text-white text-lg">Psychologique</span>
                        <img class="h-4" src="../../assets/svg/chevron.svg" alt="chevron">
                    </button>
                    <router-link  to="/dashboardPh/OrdonnanceP" class="special-btn bg-primary flex items-center justify-between sm:w-1/3 medi p-4">
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
