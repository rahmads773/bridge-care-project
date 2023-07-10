
<script setup>


function ph1(){
const place1 = document.querySelector(".place-1")
const place2 = document.querySelector(".place-2")
const place3 = document.querySelector(".place-3")
const place4 = document.querySelector(".place-4")

const Ph1 = document.querySelector(".ph-available-1")
const Ph2 = document.querySelector(".ph-available-2")
const Ph3 = document.querySelector(".ph-available-3")
const Ph4 = document.querySelector(".ph-available-4")

place1.classList.add("active")
place2.classList.remove("active")
place3.classList.remove("active")
place4.classList.remove("active")

Ph1.classList.add("active")
Ph2.classList.remove("active")
Ph3.classList.remove("active")
Ph4.classList.remove("active")


}
function ph2(){
    const place1 = document.querySelector(".place-1")
const place2 = document.querySelector(".place-2")
const place3 = document.querySelector(".place-3")
const place4 = document.querySelector(".place-4")

const Ph1 = document.querySelector(".ph-available-1")
const Ph2 = document.querySelector(".ph-available-2")
const Ph3 = document.querySelector(".ph-available-3")
const Ph4 = document.querySelector(".ph-available-4")

place1.classList.remove("active")
place2.classList.add("active")
place3.classList.remove("active")
place4.classList.remove("active")

Ph1.classList.remove("active")
Ph1.classList.add("hidden")
Ph2.classList.add("active")
Ph3.classList.remove("active")
Ph4.classList.remove("active")
}
function ph3(){
    const place1 = document.querySelector(".place-1")
const place2 = document.querySelector(".place-2")
const place3 = document.querySelector(".place-3")
const place4 = document.querySelector(".place-4")

const Ph1 = document.querySelector(".ph-available-1")
const Ph2 = document.querySelector(".ph-available-2")
const Ph3 = document.querySelector(".ph-available-3")
const Ph4 = document.querySelector(".ph-available-4")

place1.classList.remove("active")
place2.classList.remove("active")
place3.classList.add("active")
place4.classList.remove("active")

Ph1.classList.remove("active")
Ph1.classList.add("hidden")
Ph2.classList.remove("active")
Ph3.classList.add("active")
Ph4.classList.remove("active")
}
function ph4(){
    const place1 = document.querySelector(".place-1")
    
const place2 = document.querySelector(".place-2")
const place3 = document.querySelector(".place-3")
const place4 = document.querySelector(".place-4")

const Ph1 = document.querySelector(".ph-available-1")
const Ph2 = document.querySelector(".ph-available-2")
const Ph3 = document.querySelector(".ph-available-3")
const Ph4 = document.querySelector(".ph-available-4")

place1.classList.remove("active")
place2.classList.remove("active")
place3.classList.remove("active")
place4.classList.add("active")

Ph1.classList.remove("active")
Ph1.classList.add("hidden")
Ph2.classList.remove("active")
Ph3.classList.remove("active")
Ph4.classList.add("active")
}

</script>

<template>
    
     <div class="con-lieu bg-gray-100 rounded-lg lg:p-6 md:p-10 p-2 w-full lg:w-4/5 m-auto sm:flex items-center justify-center">
        <div class="relative">
            <h2 class="text-center mt-5 mb-20 text-3xl font-bold">Trouver une pharmacie ouverte </h2>
      <div class="flex sm:flex-row flex-col gap-14">
      <div class="places">
<div class="place place-1 mb-3 py-2 px-7 bg-white rounded text-center text-xl cursor-pointer active" @click="ph1()">Alger</div>
<div class="place place-2 mb-3 py-2 px-7 bg-white rounded text-center text-xl cursor-pointer"  @click="ph2()">Oran</div>
<div class="place place-3 mb-3 py-2 px-7 bg-white rounded text-center text-xl cursor-pointer"  @click="ph3()">Constantine</div>
<div class="place place-4 mb-3 py-2 px-7 bg-white rounded text-center text-xl cursor-pointer" @click="ph4()">Annaba</div>
      </div>
<div class="ph ph-available-1 text-lg">
<div class="date mb-4 font-bold">Vendredi le 07/07/2023</div>
<ul>
<li class="mb-3">Pharmacie k.halim</li>
<li class="mb-3">Pharmacie H.hayet</li>
<li class="mb-3">Pharmacie N.kamel</li>
<li class="mb-3">Pharmacie R.redwan</li>
</ul>
</div>
<div class="ph ph-available-2 text-lg hidden">
<div class="date mb-4 font-bold">Vendredi le 07/07/2023</div>
<ul>
<li class="mb-3">Pharmacie k.sofiane</li>
<li class="mb-3">Pharmacie H.halima</li>
<li class="mb-3">Pharmacie N.tawfik</li>
<li class="mb-3">Pharmacie R.hanane</li>
</ul>
</div>
<div class="ph ph-available-3 text-lg hidden">
<div class="date mb-4 font-bold">Vendredi le 07/07/2023</div>
<ul>
<li class="mb-3">Pharmacie k.hanadi</li>
<li class="mb-3">Pharmacie H.aymen</li>
<li class="mb-3">Pharmacie N.sayf eddine</li>
<li class="mb-3">Pharmacie R.rafik</li>
</ul>
</div>
<div class="ph ph-available-4 text-lg hidden">
<div class="date mb-4 font-bold">Vendredi le 07/07/2023</div>
<ul>
<li class="mb-3">Pharmacie k.houssem</li>
<li class="mb-3">Pharmacie H.radia</li>
<li class="mb-3">Pharmacie N.feriel</li>
<li class="mb-3">Pharmacie R.yousef</li>
</ul>
</div>
        </div>
      </div>
      
    </div>
</template>
<style scoped>
.con-lieu{
    height: 100vh;
}
h2{
    color: #333;
}
.place{
    width: 300px;
    transition: .5s;
}
@media (max-width:576px) {
    .place{
        width: 100%;
    }
}
.place:hover,.place.active{
background-color: #46dc91ac;
}
.ph.active{
    display: block;
}
/* .ph{
    position: absolute;
    right: -127px;
    background: white;
    padding: 10px;
    border-radius: 6px;
} */
</style>