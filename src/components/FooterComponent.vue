<template>
    <div class="bg-primary text-white py-24" id="contact">
        <div class="w-4/5 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-12 grid-cols-1 ">
            <div class="lg:w-4/5 w-3/5 lg:mx-auto">
                <img src="../assets/svg/logo-white.svg" alt="bridge-care-logo">
            </div>
            <div class="w-4/5 mx-auto lg:border-r lg:border-r-accent">
                <h3 class="text-2xl mb-8">SERVICES</h3>
                <ul class="flex flex-col gap-4">
                    <li>Dossiers médicaux électroniques</li>
                    <li>Suivi des médicaments et rappels</li>
                    <li>Suivi de santé personnalisé</li>
                    <li>Formation continue</li>
                    <li>Collaboration multidisciplinaire</li>
                </ul>
            </div>
            <div class="w-4/5 mx-auto lg:border-r lg:border-r-accent">
                <h3 class="text-2xl  mb-8">USEFUL LINKS</h3>
                <div class="flex flex-col gap-4">
                    <a href="https://pubmed.ncbi.nlm.nih.gov" target="_blank">PubMed</a>
                    <a href="https://www.who.int/fr" target="_blank">Who</a>
                    <a href="https://miph.gov.dz/fr/" target="_blank">Miph</a>
                    <a href="https://www.cnpm.org.dz" target="_blank">CNPM</a>
                </div>
            </div>
            <div class="w-4/5 mx-auto contact">
                <h3 class="text-2xl  mb-6">CONTACTS</h3>
                <div class="flex flex-col gap-4 mb-8">
                    <div>
                        <span>06 74 96 86 70</span>
                    </div>
                    <div>
                        <span>06 74 96 86 70</span>
                    </div>
                    <div>
                        <span>info@website.com</span>
                    </div>
                </div>
                <h3 class="text-2xl  mb-6">FOLLOW US</h3>
                
                <div class="social flex gap-2">
                    <a href="https://www.facebook.com/profile.php?id=100094415955155&_rdc=1&_rdr"><img class="w-11" src="../assets/svg/fb.svg" alt="social"></a>
                    <a href="#"><img class="w-11" src="../assets/svg/linkedin.svg" alt="social"></a>
                    <a href="mailto:Bridgecare8@gmail.com?subject=Contact"><img class="w-11" src="../assets/svg/gmail.svg" alt="social"></a>
                    <a href="#"><img class="w-11" src="../assets/svg/youtube.svg" alt="social"></a>
                    <a href="https://www.instagram.com/bridge__care/?fbclid=IwAR3XZLdJp72epq3UkXkqoNWDb0yH7J3gjE7E_i3QLDNYN5VvUf8Y4BTQlzE"><img class="w-11" src="../assets/svg/instagram.svg" alt="social"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact div span{
    opacity: 0.8;
}
.contact .social img{
    transition: .5s;
}
.contact .social img:hover{
transform: rotate(10deg);
}
</style>