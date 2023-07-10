<script setup>
</script>
    
    <template>
    <div class="flex flex-col gap-12 bg-gray-100 rounded p-4">
        <div class="flex flex-col gap-5">
            
                <div class="flex justify-between">
                    <h2 class="text-2xl text-slate-700">Profil Patient</h2>
                </div>
                <hr>
                <div class="info mb-6">
                    <label for="name">Nom Complet:</label>
                    <br>
                    <input type="text" id="name"  class="w-full md:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3 pl-px" placeholder="Type...">
                </div>
                <div class="info mb-6">
                    <label for="date">Date de naissance:</label>
                    <br>
                    <input type="date" name="date" id="date" class="w-full md:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3 pl-px">
                </div>
                <div class="info mb-6">
                    <label for="sexe" class="flex">Sexe:</label>
                    <br class="mb-2">
                    <input type="checkbox" name="homme" id="Homme" class="mr-2">
                    <label for="Homme">Homme</label>
                    <br>
                    <input type="checkbox" name="femme" id="femme" class="mr-2">
                    <label for="femme">Femme</label>
                </div> 
                <div class="info mb-6">
                    <label for="ad">Adresse:</label>
                    <br>
                    <input type="text" id="ad"  class="w-full md:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3 pl-px" placeholder="Type...">
                </div> 
                <div class="info mb-6">
                    <label for="num">Numéro de Téléphone:</label>
                    <br>
                    <input type="text" id="num"  class="w-full md:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3 pl-px" placeholder="Type...">
                </div> 
                <div class="info mb-6">
                    <label for="name">Adresse Email:</label>
                    <br>
                    <input type="email" id="email"  class="w-full md:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3 pl-px" placeholder="Type...">
                </div> 
                <div class="info mb-6">
                    <label for="grp">Groupe Sanguin:</label>
                    <br>
                    <input type="text" id="grp"  class="w-full md:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3 pl-px" placeholder="Type...">
                </div> 
                <div class="info mb-6">
                    <label for="allergie">Allergies Connues:</label>
                    <br>
                    <input type="text" id="allergie"  class="w-full md:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3 pl-px" placeholder="Type...">
                </div> 
                <div class="info mb-6">
                    <label for="mal">Maladies préexistantes:</label>
                    <br>
                    <input type="text" id="mal"  class="w-full md:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3 pl-px" placeholder="Type...">
                </div> 
                <div class="info mb-6">
                    <label for="malr">Médicaments régulièrement pris:</label>
                    <br>
                    <input type="text" id="malr"  class="w-full md:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3 pl-px" placeholder="Type...">
                </div> 
                <div class="info mb-6">
                    <label for="antc">Antécédents médicaux importants:</label>
                    <br>
                    <input type="text" id="antc"  class="w-full md:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3 pl-px" placeholder="Type...">
                </div> 
                <div class="info mb-6">
                    <label for="contact">Contact d'urgence (nom, relation, numéro de téléphone):</label>
                    <br>
                    <input type="text" id="contact"  class="w-full md:w-1/2 bg-transparent border-b-2 border-emerald-300 p-3 pl-px" placeholder="Type...">
                </div>
            
        </div>
    
    </div>
</template>

