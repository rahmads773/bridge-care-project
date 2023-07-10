//TO DO : Add Show Medical File.
<template>
    <div>
        <div class="relative w-1/2 text-white text-lg mb-12 search">
            <input type="search" name="serch" placeholder="Search"
                class="bg-transparent w-full h-12 px-5 pr-10 rounded-full text-sm border-white border-2 placeholder-white"/>
            <button type="submit" class="absolute right-0 top-0 h-full mr-4 flex items-center justify-center">
                <img class="h-4 w-4" src="../../assets/svg/search-icon.svg" alt="search-icon">
            </button>
        </div>
       <div class="files-holder overflow-x-auto">
        <div class="flex text-white font-light mb-8">
            <div class="w-5/12">Nom/Prenom</div>
            <div class="w-3/12">CODE ID</div>
            <div class="w-4/12 text-center">Derniere mise a jour</div>
        </div>
        <router-link to="/dashboard/Dossier-Medicale" v-for="i in 7" :key="i" class="flex text-white py-4 border-b-2 border-gray-400 cursor-pointer">
            
            <div class="w-5/12">User Username</div>
            <div class="w-3/12">P_000{{ i }}</div>
            <div class="w-4/12 flex justify-between items-center">
                <div>Jeudi 24 Juin 2023, 12:30 PM</div>
                <img class="h-8" src="../../assets/svg/chevron.svg" alt="cevron">
            </div>
        </router-link>
       </div>
    </div>
</template>

<style>
input:focus{
    outline: none;
}
input:focus::placeholder{
    opacity: 0;
}
input::placeholder{
    transition: .5s;
}
@media (max-width:856px) {
    .search{
        width: 100%;
    }
}
.files-holder > div , .files-holder > a{
    min-width:400px ;
}
</style>
