<script setup>

// const bullets =  document.querySelectorAll(".bullets div")



</script>


<template>
    <div>
        <div class="p-16 ">
            <div class="flex justify-between mb-16 text-con">
                <div class=" md:w-3/5">
                    <h1 class="text-5xl mb-4 leading-normal">Soigner mieux <br> en soignant ensemble</h1>
                    <p class="leading-relaxed" >Bridge care aide l'ensemble des acteurs de l'écosystème de santé à soigner ensemble, <br> en leur permettant de mobiliser les données de santé et innovations les plus pertinentes <br> pour le soin.</p>
                </div>
               
            </div>
        </div>
    </div>
</template>
<style scoped>
.active{
    background-color: white;
}
@media (max-width:767px) {
    .text-con{
        display: block;
        text-align: center;
    }
    .text-con > div{
        margin: 20px auto;
    }
    .text-con > div h1{
     font-size: 2.5rem;
    }
}
@media (max-width:400px) {
    .text-con > div h1{
        font-size: 2rem;
    font-weight: bold;
    }
}
</style>