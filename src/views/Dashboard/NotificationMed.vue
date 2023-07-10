
<script setup>


function ToggleActive(whatever,event) {
    event.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("mess")[0].classList.toggle("active")
}



function ToggleMainActive(what,event) {
    if(event.target.classList.contains("title")){
    event.target.parentElement.getElementsByClassName("texts")[0].classList.toggle("active")
    event.target.getElementsByClassName("chevron")[0].classList.toggle("active")
    }
   
  
}






</script>


<template>
    <div class="flex flex-col gap-12 bg-gray-100 rounded-lg p-6">
    <div class="main patients" >
     <div class="title flex justify-between rounded p-3 cursor-pointer"  @click="ToggleMainActive(what, $event)">
        <h2 class="text-xl text-white relative">Patients</h2>
        <img class="rotate-90 w-8 h-auto text-black chevron cursor-default" src="../../assets/svg/chevron.svg" alt="chevron" >
     </div>
    <div class="texts h-0 opacity-0 active">
        <div class="text">
       <div class="info flex bg-white p-3 rounded gap-8 items-center" >
        <img src="../../assets/images/defaults/profile-picute.png" alt="profile" class="w-9 rounded-full">
   
       <div class="new flex justify-between flex-1 items-center">
      <div>
        <h3 class="text-lg">Nouveau message  <div class="bg-red-700 w-2 h-2 rounded-full inline-block ml-1 mb-1"></div></h3>
       <span class="text-slate-500"> Nom Prénom </span> 
       <span class="text-slate-400 text-sm"> - Il y a 16H</span>
      </div>
      <div class="icon" >
<img src="../../assets/svg/cloud-black-shape-with-three-dots-inside-svgrepo-com.svg" alt="cloud" class=" w-7 h-auto mr-3 cursor-pointer" @click="ToggleActive(whatever, $event)">
</div>
       </div>
     
        </div>
        <div class="mess p-3 bg-white rounded flex justify-between gap-6 h-0 opacity-0 active">
            <div class="more">
                <span class="block">Num: <span class="text-slate-500 text-sm block">0569836799</span></span>
                <span class="block">Consulté le: <span class="text-slate-500 text-sm">06/07/2023</span></span>
            </div>
            <p>Chère Dr. Benamour Kaouther,<br> j'ai développé une réaction allergique liée à un médicament et j'aimerais obtenir votre avis sur la marche à suivre.</p>
       </div>
     </div>
        <div class="text">
       <div class="info flex bg-white p-3 rounded gap-8 items-center" >
        <img src="../../assets/images/defaults/profile-picute.png" alt="profile" class="w-9 rounded-full">
   
       <div class="new flex justify-between flex-1 items-center">
      <div>
        <h3 class="text-lg">Nouveau message  <div class="bg-red-700 w-2 h-2 rounded-full inline-block ml-1 mb-1"></div></h3>
       <span class="text-slate-500"> Nom Prénom </span> 
       <span class="text-slate-400 text-sm"> - Il y a 16H</span>
      </div>
      <div class="icon"  >
<img src="../../assets/svg/cloud-black-shape-with-three-dots-inside-svgrepo-com.svg" alt="cloud" class=" w-7 h-auto mr-3 cursor-pointer"  @click="ToggleActive(whatever, $event)">
</div>
       </div>
     
        </div>
        <div class="mess p-3 bg-white rounded flex justify-between gap-6 h-0 opacity-0">
            <div class="more">
                <span class="block">Num: <span class="text-slate-500 text-sm block">0569836799</span></span>
                <span class="block">Consulté le: <span class="text-slate-500 text-sm">06/07/2023</span></span>
            </div>
            <p>Chère Dr. Benamour Kaouther,<br> j'ai développé une réaction allergique liée à un médicament et j'aimerais obtenir votre avis sur la marche à suivre.</p>
       </div>
     </div>
        <div class="text">
       <div class="info flex bg-white p-3 rounded gap-8 items-center"  >
        <img src="../../assets/images/defaults/profile-picute.png" alt="profile" class="w-9 rounded-full">
   
       <div class="new flex justify-between flex-1 items-center">
      <div>
        <h3 class="text-lg">Nouveau message  <div class="bg-red-700 w-2 h-2 rounded-full inline-block ml-1 mb-1"></div></h3>
       <span class="text-slate-500"> Nom Prénom </span> 
       <span class="text-slate-400 text-sm"> - Il y a 16H</span>
      </div>
      <div class="icon" >
<img src="../../assets/svg/cloud-black-shape-with-three-dots-inside-svgrepo-com.svg" alt="cloud" class=" w-7 h-auto mr-3 cursor-pointer"  @click="ToggleActive(whatever, $event)">
</div>
       </div>
     
        </div>
        <div class="mess p-3 bg-white rounded flex justify-between gap-6 h-0 opacity-0">
            <div class="more">
                <span class="block">Num: <span class="text-slate-500 text-sm block">0569836799</span></span>
                <span class="block">Consulté le: <span class="text-slate-500 text-sm">06/07/2023</span></span>
            </div>
            <p>Chère Dr. Benamour Kaouther,<br> j'ai développé une réaction allergique liée à un médicament et j'aimerais obtenir votre avis sur la marche à suivre.</p>
       </div>
     </div>
    </div>
    </div>
    <div class="main pharmaciens">
     <div class="title flex justify-between rounded p-3 cursor-pointer" @click="ToggleMainActive(what, $event)" >
        <h2 class="text-xl text-white relative">Pharmaciens</h2>
        <img class="rotate-90 w-8 h-auto text-black chevron cursor-default" src="../../assets/svg/chevron.svg" alt="chevron">
     </div>
    <div class="texts h-0 opacity-0 active" >
        <div class="text">
       <div class="info flex bg-white p-3 rounded gap-8 items-center" >
        <img src="../../assets/images/defaults/profile-picute.png" alt="profile" class="w-9 rounded-full">
   
       <div class="new flex justify-between flex-1 items-center">
      <div>
        <h3 class="text-lg">Nouveau message  <div class="bg-red-700 w-2 h-2 rounded-full inline-block ml-1 mb-1"></div></h3>
       <span class="text-slate-500"> Nom Prénom </span> 
       <span class="text-slate-400 text-sm"> - Il y a 16H</span>
      </div>
      <div class="icon" >
<img src="../../assets/svg/cloud-black-shape-with-three-dots-inside-svgrepo-com.svg" alt="cloud" class=" w-7 h-auto mr-3 cursor-pointer" @click="ToggleActive(whatever, $event)">
</div>
       </div>
     
        </div>
        <div class="mess p-3 bg-white rounded flex  gap-6 h-0 opacity-0">
            <div class="more">
                <span class="block mr-3">Num: <span class="text-slate-500 text-sm block">0569836799</span></span>
            </div>
            <div>
                <p class="def">Je suis Dr.Boudjema Houssem, pharmacien d'officine</p>
            <p>Chère Dr. Benamour Kaouther,<br> je voulais savoir votre avis sur mon patient qui a developpé un réaction allergique suite à votre traitement.</p>
            </div>
       </div>
     </div>
       
        <div class="text">
       <div class="info flex bg-white p-3 rounded gap-8 items-center" >
        <img src="../../assets/images/defaults/profile-picute.png" alt="profile" class="w-9 rounded-full">
   
       <div class="new flex justify-between flex-1 items-center">
      <div>
        <h3 class="text-lg">Nouveau message  <div class="bg-red-700 w-2 h-2 rounded-full inline-block ml-1 mb-1"></div></h3>
       <span class="text-slate-500"> Nom Prénom </span> 
       <span class="text-slate-400 text-sm"> - Il y a 16H</span>
      </div>
      <div class="icon" >
<img src="../../assets/svg/cloud-black-shape-with-three-dots-inside-svgrepo-com.svg" alt="cloud" class=" w-7 h-auto mr-3 cursor-pointer" @click="ToggleActive(whatever, $event)">
</div>
       </div>
     
        </div>
        <div class="mess p-3 bg-white rounded flex  gap-6 h-0 opacity-0">
            <div class="more">
                <span class="block mr-3">Num: <span class="text-slate-500 text-sm block">0569836799</span></span>
            </div>
            <div>
                <p class="def">Je suis Dr.Boudjema Houssem, pharmacien d'officine</p>
            <p>Chère Dr. Benamour Kaouther,<br> le médicament célébrex (gélule 200mg) est en rupture depuis 4 mois. Je suggère de le remplacer par celecomexe (gélule 200mg) ou célécobrex(gélule 200mg) qui sont toujours disponible sur le marché. <br> Merci d'avance. </p>
            </div>
       </div>
     </div>
       

    </div>
    </div>
    </div>
</template>


<style>
.conn{
    min-height:100vh;
}

.main .title{
background-color: #464c52;
}
.main .title h2::before{
  
    position: absolute;
    right: -31px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #cd3036;
    padding: 9px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
.main.patients .title h2::before{
    content: "3";
}
.main.pharmaciens .title h2::before{
content: "2";
}
.main.medecins .title h2::before{
content: "2";
}
.mess{
    background-color: #3cc6804a;
}
@media (max-width:767px){
.mess{
    flex-direction:column;
}

}
.more{
    border-right: 1px solid #3cc680;
    padding-right: 10px;
}
@media (max-width:767px){
.more{
    border:0;
    
}

}
.mess{
    transition: .5s;
}
.mess p{
    display: none;
}
.mess.active p{
    display:block;
}
.mess.active{
    /* height: 150px; */
    opacity: 1;
    height: fit-content;
    min-height: fit-content;
    /* transform: translateY(0); */
}
.info{
    position: relative;
    z-index: 5;
}
@media (max-width:767px) {
    .info{
    flex-direction: column;
    gap: 15px;
    align-items: normal;
    }
}

@media (max-width:767px) {
    .new{
        align-items: flex-end;
    }
}
@media (max-width:376px) {
    .new{
        flex-direction:column;
        align-items: flex-start;
        gap:10px;
    }
}
.def{
    margin-bottom: 15px;
    font-weight: bold;
}
.title{
    position: relative;
    z-index: 5;
}
.chevron{
    transition: .5s;
}
.chevron.active{
    transform: rotate(-90deg);
}
.texts{
    position:relative;

    transition: .5s;
}
.texts.active{
    opacity: 1;
    height: fit-content;
    min-height: fit-content;

}
</style>