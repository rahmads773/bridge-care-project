<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import CarouselComponent from "../components/CarouselComponent.vue";


function toggleActive(){
const burger =  document.querySelector(".burger-menu")
const ulList =  document.querySelector(".header-links")

burger.classList.toggle("active")
ulList.classList.toggle("active")


}


</script>




<script>
export default {
  mounted() {
    let counter = 0;
    const carousel = document.querySelector(".bg-carousel");
    this.startInterval(counter,carousel); // Start the interval when the component is mounted
  },
  beforeUnmount() {
    this.stopInterval(); // Clear the interval before the component is destroyed
  },
  methods: {
    startInterval(count,car) {
      this.intervalId = setInterval(() => {
  
  if(count === 4){
    car.classList.remove(`bg-carousel3`)
    count = 0;
  }
  car.classList.add(`bg-carousel${count}`)
  car.classList.remove(`bg-carousel${count - 1}`)
  count++;
      }, 4000);
    },
    stopInterval() {
      clearInterval(this.intervalId);
    },
   
  },
};



</script>


<template>
  <div>

    <HeaderComponent />
    <div class="bg-carousel bg-carousel0  relative">
      <div class="bg-primary opacity-70 text-white">
        <div class="flex justify-end items-center opacity-100 ul-con">
          <ul class="flex gap-8 mx-16 my-12 header-links">
            <li class="py-2 m-2"><a class="text-lg" href="#">Accueil</a></li>
            <li class="py-2 m-2"><a class="text-lg" href="#qui">Qui somme-nous ?</a></li>
            <li class="py-2 m-2"><a class="text-lg" href="#offres">Offres</a></li>
            <li class="py-2 m-2"><a class="text-lg" href="#actualité">Actualités</a></li>
            <li class="py-2 m-2"><a class="text-lg" href="#partenaire">Partenaires</a></li>
            <li class="py-2 m-2"><a class="text-lg" href="#contact">Contact</a></li>
            
          </ul>
          <div class="burger-menu cursor-pointer" @click="toggleActive()">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <CarouselComponent ref="carouselComponent"   />
      </div>
    </div>
    <div>
      <div class="flex flex-wrap justify-center gap-6 items-center sm:p-16 p-9" id="offres">

        <router-link
          class="p-8 sm:w-80  rounded-md bg-gradient-white shadow-2xl flex flex-col gap-6 justify-center text-center" to="/login?type=user"
        >
          <img class="h-36 w-44 m-auto" src="../assets/svg/dov.svg" alt="doc" />
          <h3 class="text-2xl text-primary">Medecins</h3>
          <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
        </router-link>
        <router-link 
          class="bg-gradient-blue-vertical p-8 sm:w-80 rounded-md shadow-2xl flex flex-col gap-6 justify-center text-center patient" to="/login?type=patient"
        >
          <img class="h-36 w-42 m-auto" src="../assets/svg/heart.svg" alt="heart" />
          <h3 class="text-2xl text-accent text-white">Patients</h3>
          <p class="text-white">Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
        </router-link>

        <router-link
          class="p-8 sm:w-80  rounded-md bg-gradient-white shadow-2xl flex flex-col gap-6 justify-center text-center " to="/login?type=user"
        >
          <img class="h-36 w-48 text-center m-auto" src="../assets/svg/pills.svg" alt="pills" />
          <h3 class="text-2xl text-primary">Pharmaciens</h3>
          <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
        </router-link>

       
      </div>
      <div class="lg:p-20 p-10" id="qui" ref="qui">
        <h2 class="text-primary text-3xl text-center mb-6">
          Nous formons un collectif avec tous les acteurs de la santé
        </h2>
        <p class="text-center leading-loose">
          Nous sommes une équipe passionnée qui se consacre à améliorer la santé et le bien-être grâce à des solutions numériques innovantes. Notre mission est de connecter les professionnels de la santé, les patients et les pharmacies pour offrir des soins de qualité et faciliter l'accès aux services médicaux. Découvrez notre engagement et notre travail en explorant notre site.
        </p>
      </div>
    </div>
    <div class="w-4/5 mx-auto mb-24" id="actualité" >
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-3 lg:grid-rows-1 gap-6">
        <div class="text-white bg-primary p-4 lg:mr-10 mr-0 rounded md:w-full">
          <h2 class="mb-6 text-3xl font-bold">Actualités</h2>
          <p class="leading-loose opacity-80">
            Restez informé(e) des dernières actualités et découvertes en matière de santé grâce à notre rubrique dédiée. Notre équipe éditoriale vous propose des articles informatifs et pertinents sur les avancées médicales, les conseils de santé et les tendances en bien-être. Explorez nos actualités pour rester à jour et prendre soin de votre santé et de votre bien-être.
          </p>
        </div>
    
          
            <!-- first row -->
          <div class="grid grid-flow-row gap-6 ">
          <div class="relative w-full h-full img-con">
            <router-link to="/article/EvenConf" class="title" >Evènements et conférences </router-link>
            <img
              class="absolute inset-0 object-cover w-full h-full rounded"
              src="../assets/images/featured-1.png"
              alt="featured-1"
            />
          </div>
          <div class="relative w-full h-full img-con">
            <router-link to="/article/newMed" class="title">Nouvelle médicales</router-link>
            <img
              class="absolute inset-0 object-cover w-full h-full rounded"
              src="../assets/images/featured-2.jpg"
              alt="featured-2"
            />
          </div>
        </div>
        <!-- second row -->
        <div class="grid grid-flow-row gap-6 ">
          <div class="relative w-full h-full img-con">
            <router-link to="/article/ConseilSante" class="title">Conseils de santé</router-link>
            <img
              class="absolute inset-0 object-cover w-full h-full rounded"
              src="../assets/images/featured-3.jpg"
              alt="featured-3"
            />
          </div>
          <div class="relative w-full h-full img-con">
            <router-link to="/article/FindPh" class="title" >Trouvez une pharmacie ouverte en tout temps </router-link>
            <img
              class="absolute inset-0 object-cover w-full h-full rounded"
              src="../assets/images/featured-4.jpg"
              alt="featured-4"
            />
          </div>
        </div>
          
      
      </div>
    </div>
    <div class="lg:p-10" id="partenaire">
        <h2 class="text-primary text-3xl text-center mb-12">
          Nos Partenaires
        </h2>
    <div class="flex p-4 md:gap-8 gap-10 flex-wrap justify-center">
       <div class="box relative sm:w-96 w-full">
       <div class="info-box bg-white p-3 rounded shadow-2xl sm:text-left text-center">
        <img src="../assets/images/defaults/profile-picute.png" alt="profile" class="w-14 rounded-full sm:absolute">
          <h3 class="sm:text-xl text-lg my-4 font-semibold text-center">Dr. Hamid Sarhan</h3>
          <div>
            <p class="text-lg text-blue">Specialiste en: </p>
            <span class=" text-base">Cardiologie</span>
          </div>
          <div>
            <p class="text-lg text-blue">Lieu:</p>
            <span class=" text-base">Annaba rue Ben Mhidi</span> 
          </div>
       </div>
       <div class="testemonials h-1 text-white bg-blue">
         <div class="test border-b p-3 hidden">
            <div class="rate flex items-center flex-wrap">
              <h4 class="font-semibold text-lg mr-4">Kamal.R</h4>
              <span class="flex">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
              </span>
            </div>
            <p class="text-slate-200">Dr hamid Compétent et attentif</p>
         </div>
         <div class="test border-b p-3 hidden">
            <div class="rate flex items-center flex-wrap">
              <h4 class="font-semibold text-lg mr-4">Rachid.L</h4>
              <span class="flex">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
              </span>
            </div>
            <p class="text-slate-200">un médecin très compétent </p>
         </div>
       </div>
       </div>
       <div class="box relative sm:w-96 w-full">
       <div class="info-box bg-white p-3 rounded shadow-2xl sm:text-left text-center">
        <img src="../assets/images/defaults/profile-picute.png" alt="profile" class="w-14 rounded-full sm:absolute">
          <h3 class="sm:text-xl text-lg my-4 font-semibold text-center">Dr. Hamid Sarhan</h3>
          <div>
            <p class="text-lg text-pink">Specialiste en: </p>
            <span class=" text-base">Ophtalmologie</span>
          </div>
          <div>
            <p class="text-lg text-pink">Lieu:</p>
            <span class=" text-base"> Annaba rue Didouch Mourad</span> 
          </div>
       </div>
       <div class="testemonials h-1 text-white bg-pink">
         <div class="test border-b p-3 hidden">
            <div class="rate flex items-center flex-wrap">
              <h4 class="font-semibold text-lg mr-4">Kamal.R</h4>
              <span class="flex">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
              </span>
            </div>
            <p class="text-slate-200">Compétent et attentif</p>
         </div>
         <div class="test border-b p-3 hidden">
            <div class="rate flex items-center flex-wrap">
              <h4 class="font-semibold text-lg mr-4">Rachid.L</h4>
              <span class="flex">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
              </span>
            </div>
            <p class="text-slate-200">un médecin très compétent </p>
         </div>
       </div>
       </div>
       <div class="box relative sm:w-96 w-full">
       <div class="info-box bg-white p-3 rounded shadow-2xl sm:text-left text-center">
        <img src="../assets/images/defaults/profile-picute.png" alt="profile" class="w-14 rounded-full sm:absolute">
          <h3 class="sm:text-xl text-lg my-4 font-semibold text-center">Dr B.Houssem</h3>
          <div>
            <p class="text-lg text-green">Pharmacien:</p>
            <span class=" text-base">d'officine</span>
          </div>
          <div>
            <p class="text-lg text-green">Lieu:</p>
            <span class=" text-base">Annaba RUE.H.l</span> 
          </div>
       </div>
       <div class="testemonials h-1 text-white bg-green">
         <div class="test border-b p-3 hidden">
            <div class="rate flex items-center flex-wrap">
              <h4 class="font-semibold text-lg mr-4">Kamal.R</h4>
              <span class="flex">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
              </span>
            </div>
            <p class="text-slate-200">Compétent et attentif</p>
         </div>
         <div class="test border-b p-3 hidden">
            <div class="rate flex items-center flex-wrap">
              <h4 class="font-semibold text-lg mr-4">Rachid.L</h4>
              <span class="flex">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
                 <img src="../assets/svg/star-svgrepo-com.svg" alt="star" class="w-4">
              </span>
            </div>
            <p class="text-slate-200">un pharmacien très compétent </p>
         </div>
       </div>
       </div>
    </div>
      </div>
    <FooterComponent />
  </div>
</template>


<style scoped>


.bg-blue{
  background-color: #016e9cbd;
}
.text-blue{
  color:#016d9c;
}
.bg-pink{
background-color: #d83654c8;
}
.text-pink{
  color: #d83653;
}
.bg-green{
background-color: #19804bcd;

}
.text-green{
  color: #19804b;
}
@media (max-width:791px) {
  .ul-con{
    padding: 30px 10px;
  }

}
@media (max-width:791px) {
  .header-links{
    position: absolute;
    flex-direction: column;
    left: 0;
    top: 15px;
    width: 100%;
    color: black;
    margin: 0;
    padding: 14px 10px;
    opacity: 0;
    height: 0;
    z-index: -1;
    transition: .5s;
    background-image: linear-gradient(to bottom, rgb(0 108 155), #6dc5cb);
  }
  .header-links.active{
    opacity: 1;
    height: 98%;
    z-index: 20;
    justify-content: center;
    align-items: center;
  }
  .header-links.active  li a{
  color: black;
    font-size: 1.5rem;
}
}

.header-links  li{
position: relative;

}
.header-links  li::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 4px;
  height: 1.5px;
  width: 0;
  background-color: #fff;
transition: .5s;

}
.header-links.active  li::before{
background-color: black;
}
.header-links  li:hover::before{
  width: 100%;
}
/* start burger */
.burger-menu{
  margin-right: 15px;
width: 30px;
height: 30px;
position: relative;
display: none;
}

@media (max-width:791px){
  .burger-menu{
    display: block;
    z-index: 50;
  }
}
.burger-menu span{
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: .5s;
} 
.burger-menu.active span:nth-of-type(2){
  transform: rotate(-45deg);
}
.burger-menu.active span:first-child{
  transform: rotate(45deg);
    top: 7px;
}
.burger-menu span:nth-of-type(2){
  top:8px ;
}
.burger-menu span:last-of-type{
  top: 16px;
}
.burger-menu.active span:last-of-type{
  opacity: 0;
}
/* end burger */
#offres a{
  transition: .5s;
}
#offres a.patient{
  transform: scale(1.04);
}
#offres a:hover{
  transform: scale(1.02) translateY(-10px);
}
#offres a.patient:hover{
  transform:scale(1.04) translateY(-10px);
}
#actualité .img-con::before{
  content: "";
    position: absolute;
    width: 100%;
    height: 0;
    background-color: #00000056;
    border-radius: 6px;
    z-index: 1;
    transition: .5s;
   left: 0;
    right: 0;
    top: 0;
    
}
#actualité .img-con:hover::before{
  width: 100%;
  height: 100%;
}
#actualité .title{
  position: absolute;
    color: #fff;
    padding:3px 5px;
    border-radius: 4px;
    z-index: 5;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 19px;
    text-align: center;
    font-weight: bold;
    opacity: 0;
    transition: .5s;
}
#actualité .img-con:hover .title{
  opacity: 1;
}
#actualité .img-con img{
  transition: .5s;
}
#actualité .img-con:hover img{
  filter: blur(1px);
  -webkit-filter: blur(1px);
}
#partenaire .box .info-box img{
  left: 15px;
    top: -26px;
}
#partenaire .box .info-box div p{
    font-weight: bold;
}
#partenaire .box .info-box div span{
  color: #333;
  font-weight: 500;
}
#partenaire .box .testemonials{
  transition: .5s;
}
#partenaire .box:hover .testemonials{
  border-radius: 4px;
  height:fit-content;
  min-height:fit-content;
  padding: 10px;
}
#partenaire .box:hover .testemonials .test{
display:block;
}
</style>