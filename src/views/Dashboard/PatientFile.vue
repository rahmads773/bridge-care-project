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
            <p>La rubrique 'Analyse Biologique' vous offre un accès facile et rapide à une gamme complète d'analyses biologiques de votre patient pour soutenir vos diagnostics et vos décisions de traitement.</p>
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
                    <h2 class="text-2xl text-slate-700">Analyse Radiologique</h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
            <p>La rubrique "Analyse Radiologique" met à la disposition des médecins des résultats d'analyses radiologiques, tels que radiographies, IRM et scanners, pour faciliter leur processus de diagnostic et de prise de décision. Grâce à cette ressource, les médecins peuvent interpréter avec précision les images, identifier les pathologies, détecter les anomalies et planifier des traitements appropriés. En complétant leur expertise clinique, cette rubrique offre des informations visuelles essentielles pour améliorer les soins prodigués aux patients.</p>
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
                <div class="flex justify-between analyse">
                    <h2 class="text-2xl text-slate-700">Therapie</h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
            <p>Bienvenue dans la rubrique 'Thérapie', un espace dédié aux différentes approches de traitement pour répondre aux besoins de vos patients. Que ce soit par le biais de thérapie psychologique, médicamenteuse ou chirurgicale, vous trouverez ici des informations essentielles pour guider vos choix de traitement. Explorez les options thérapeutiques les plus appropriées en fonction des conditions médicales spécifiques de vos patients, en tenant compte de leurs antécédents, de leurs préférences et de leur bien-être général. Notre objectif est de vous fournir des ressources complètes et à jour afin que vous puissiez offrir à vos patients des soins de qualité et personnalisés."</p>
            <div>
                <div class="flex flex-col gap-6">
                    <button class="special-btn bg-primary flex items-center p-4 justify-between sm:w-1/3">
                        <span class="text-white text-lg">Psychologique</span>
                        <img class="h-4" src="../../assets/svg/chevron.svg" alt="chevron">
                    </button>
                    <router-link  to="/dashboard/OrdonnanceP" class="special-btn bg-primary flex items-center justify-between sm:w-1/3 medi p-4">
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
        <div class="flex flex-col gap-6">
            <div>
                <div class="flex justify-between analyse">
                    <h2 class="text-2xl text-slate-700">Compte Rendue de la Visite</h2>
                    <img class="rotate-90 w-8 h-auto text-black" src="../../assets/svg/chevron.svg" alt="chevron">
                </div>
                <hr class="mt-3">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo tenetur dignissimos cum sequi rerum, architecto in ipsam laboriosam totam quam nesciunt harum eligendi dolorem minus quae quidem quod? Consequatur.</p>
            <div>
                <div class="flex flex-col gap-6">
                    <div class="bg-white rounded-lg p-6">
                        <h4 class="text-lg">Compte Rendu 1</h4>
                        <hr class="mt-2">
                        <textarea class="mt-4 w-full" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tempora,soluta aliquam exercitationem vero cum voluptate impedit magnam! Fugiat, voluptas rerum? Deleniti optio provident aspernatur eveniet! Quis reprehenderit dolorum porro!"></textarea>     
                    </div>
                    <div class="bg-white rounded-lg p-6">
                        <h4 class="text-lg">Compte Rendu 2</h4>
                        <hr class="mt-2">
                        <textarea class="mt-4 w-full" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tempora,soluta aliquam exercitationem vero cum voluptate impedit magnam! Fugiat, voluptas rerum? Deleniti optio provident aspernatur eveniet! Quis reprehenderit dolorum porro!"></textarea>     
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
textarea{
    min-height: 144px;

}
textarea:focus{
    outline: none;
}
textarea::placeholder{
    transition: .5s;
}
textarea:focus::placeholder{
    opacity: 0;
}

button.special-btn,
a.special-btn{
    position: relative;
    z-index: 1;
}
button.special-btn::before,
a.special-btn::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #1a1e224a;
    z-index: -1;
    transition: .5s;
}
button.special-btn:hover::before,
a.special-btn:hover::before{
    width: 100%;
}
</style>