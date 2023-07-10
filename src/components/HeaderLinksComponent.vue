<script setup>


function toggleActive(){
const burger =  document.querySelector(".burger-menu")
const ulList =  document.querySelector(".header-links")

burger.classList.toggle("active")
ulList.classList.toggle("active")
}

</script>


<template>
    <div class="flex flex-wrap justify-between items-center bg-primary px-24 py-4 header">
        <router-link to="/">
            <img class="h-8" src="../assets/svg/logo-white.svg" alt="bridge-care-logo">
        </router-link>
        <div class="flex gap-8 items-center text-white text-lg header-links">
            <router-link to="/">Accueil</router-link>
            <router-link to="/">Qui somme-nous</router-link>
            <router-link to="/">Offres</router-link>
            <router-link to="/">Actualités</router-link>
            <router-link to="/">Contact</router-link>
        </div>
        <div class="burger-menu cursor-pointer" v-on:click="toggleActive()">
            <span></span>
            <span></span>
            <span></span>
          </div>
    </div>
</template>

<style scoped>

@media (max-width:856px) {
    .header{
        gap: 20px;
        padding: 1rem;
    }
  .header-links{
    position: absolute;
    flex-direction: column;
    left: 0;
    top: 77px;
    width: 100%;
    background-color: white;
    background-image: linear-gradient(to bottom, #006c9b, #6dc5cb);
    color: black;
    margin: 0;
    padding: 14px 10px;
    opacity: 0;
    height: 0;
    z-index: -1;
    transition: .5s;
  }
  .header-links > a{
    font-size: 1.5rem;
    color: white;
  }
  .header-links.active{
    opacity: 1;
    height: 100%;
    z-index: 20;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

}

.burger-menu{
  margin-right: 15px;
  margin-top: 15px;
width: 30px;
height: 30px;
position: relative;
display: none;
}

@media (max-width:856px){
  .burger-menu{
    display: block;
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
</style>