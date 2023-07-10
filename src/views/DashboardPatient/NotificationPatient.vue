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
    <div class="main medecins" >
     <div class="title flex justify-between rounded p-3 cursor-pointer"  @click="ToggleMainActive(what, $event)">
        <h2 class="text-xl text-white relative">Médecins</h2>
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
            <p>Cher [Nom du patient],<br>je suis désolé d'apprendre les effets indésirables que vous avez subis. Je vous invite à prendre rendez-vous pour évaluer de près la situation et trouver une solution adaptée à votre traitement.</p>
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
            <p>Cher [Nom du patient],<br>je suis désolé d'apprendre les effets indésirables que vous avez subis. Je vous invite à prendre rendez-vous pour évaluer de près la situation et trouver une solution adaptée à votre traitement.</p>
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
            <p>Cher [Nom du patient],<br> merci pour votre demande. Je vais vérifier les médicaments que vous prenez actuellement et les nouveaux médicaments qui vous ont été prescrits afin de vous fournir des conseils précis sur les éventuelles interactions médicamenteuses. Votre sécurité et votre santé sont ma priorité.
</p>
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
            <p>Cher [Nom du patient],<br> merci pour votre demande. Je vais vérifier les médicaments que vous prenez actuellement et les nouveaux médicaments qui vous ont été prescrits afin de vous fournir des conseils précis sur les éventuelles interactions médicamenteuses. Votre sécurité et votre santé sont ma priorité.</p>
            </div>
       </div>
     </div>
       

    </div>
    </div>
    </div>
</template>


