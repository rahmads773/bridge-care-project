<template>
     <div class="flex flex-col gap-12 bg-gray-100 rounded p-4">
      <div class="flex flex-col gap-6">
            <div>
                <div class="analyse">
                    <h2 class="text-2xl text-slate-700 ">Lire l'ordonnance:</h2>
                </div>
                <hr class="mt-3">
            </div>
            <div class="flex gap-6 sm:p-6 flex-col sm:flex-row">
                <div class="relative sm:w-1/6">
                    <img class=" rounded-md drop-shadow-sm" src="../../assets//images/defaults/ordonnance_model.png" alt="pdf-thumnbail">
                    <a href="https://drive.google.com/file/d/1NW_4JqFsZYNNYycyytaCKxbsfyGvfuly/view" class="block absolute top-0 left-0 w-full h-full" target="_blank"></a>
                </div>
                

            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div>
                <div class="flex justify-between analyse">
                    <h2 class="text-2xl text-slate-700">Contacter le médecin prescripteur:</h2>
                </div>
                <hr class="mt-3">
            </div>
            <textarea class="mt-4 w-full rounded p-3" placeholder="Ecrire..."></textarea>    
            <input type="submit" value="Envoyer" class="lg:w-1/4 cursor-pointer"> 
        </div>
    </div>
</template>

<style scoped>
textarea{
min-height: 200px;

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
input[type="submit"]{
    background-color: #46dc90;
    padding: 10px ;
    border-radius: 6px;
    margin-top: 20px;
}
</style>