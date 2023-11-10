<template>
  <!-- <div id="app"> -->
         <h1>GARN</h1>
         <new-yarn></new-yarn> 
         <button v-if="!viewAllYarn" @click="return_to_viewAllYarn">Tilbake</button>
         <button v-if="!viewNewYarn" @click="newYarn">Nytt garn</button>
         <div v-if="viewAllYarn" id="yarn_content">
             <div @click="changeYarn(yarn.id)" class="yarn" v-if='contentLoaded' v-for="yarn in yarn_data" :key='yarn.id'>
                 <div class="yarn_title" >
                     <p>{{yarn.type}}</p>
                     <p>Pinne: {{ yarn.stick }}</p>
                     <p>Fasthet: {{ yarn.thickness }}</p>
                     <p>Merke: {{ yarn.brand }}</p>
                 </div>
                 <div class="yarn_entities"><span v-for=" ent in yarn.entities" :key="ent.id">{{ ent.color}} {{ ent.amount}}</span></div>
             </div> 
         </div>
         <div class="activeYarn" v-if="viewEditYarn">
             <div class="yarn_title_active" >
                 <p>{{activeYarn.type}}</p>
                 <p>Pinne: {{ activeYarn.stick }}</p>
                 <p>Fasthet: {{ activeYarn.thickness }}</p>
                 <p>Merke: {{ activeYarn.brand }}</p>
             </div>
             <div class="yarn_entities_active"><div class='yarn_entity_edit' v-for=" ent in activeYarn.entities" > 
                <div @click="editYarn_dec(ent)"> - </div> 
                <div>{{ ent.color}} {{ ent.amount}} </div> 
                <div @click="editYarn_inc(ent)">+</div>
            </div>
        </div>
         </div>
         <!-- <div class="newYarn" v-if="viewNewYarn">
             <p>{{this.message}}</p>
             <label for="type">Type</label>
             <input type="text" v-model="typeValue" name="type"><br>
             <label for="stick">Pinne</label>
             <input type="number" v-model="stickValue" name="stick"><br>
             <label for="thickness">Fasthet</label>
             <input type="number" v-model="thicknessValue" name="thickness"><br>
             <label for="brand">Merke</label>
             <input type="text" v-model="brandValue" name="brand"><br>
             <button @click="addYarn()">Legg til</button>
         </div> -->
        
    <!--  </div> -->
 </template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'

export default {

data() {
    return {
        //currentComponent: newYarn,
        currentView: true,
        contentLoaded: false,
        viewAllYarn: true,
        viewEditYarn: false,
        viewNewYarn: false,
        viewing_YarnID: NaN,
        message: '',
        content: '',
        yarn_data: NaN
    }
},

methods: {
fetchData() {
        fetch('/data')
            .then(response => {
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                //this.message = data.message;
                this.yarn_data = data
                console.log(this.yarn_data)
                this.contentLoaded = true
            })
            .catch(error => {
                this.message = 'Error: ' + error.message;
            })
        },

editYarn_inc(ent){
    ent.amount++
    console.log(ent)
    console.log("entities:",this.activeYarn.entities)
    console.log(this.activeYarn.entities.indexOf(ent))
},
editYarn_dec(ent){
    
    ent.amount--
    if (ent.amount < 0){
        ent.amount = 0
    }
    console.log(ent)
    console.log("entities:",this.activeYarn.entities)
    console.log(this.activeYarn.entities.indexOf(ent))
},

return_to_viewAllYarn(){
    this.viewAllYarn = true  
    this.viewEditYarn = false
    this.viewNewYarn = false
},

changeYarn(id) {
    console.log(id)
    this.viewing_YarnID = id
    this.viewEditYarn = true
    this.viewAllYarn = false
    this.activeYarn = this.yarn_data[id]
    console.log(this.activeYarn)
},

newYarn() {
    this.viewEditYarn = false
    this.viewAllYarn = false
    this.viewNewYarn = true
},

addYarn() {
    console.log('addyarn')
    fetch('/add_yarn',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: this.typeValue, // Replace with the data you want to send
            stick: this.stickValue,
            thickness: this.thicknessValue,
            brand: this.brandValue
        }),
    })
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            this.message = data.message;
            this.fetchData()
        })
        .catch(error => {
            this.message = 'Error: ' + error.message;
        });
    },

}, // end methods

mounted: function() {
    this.fetchData()
    console.log("loaded data")
    }
}



// Mount your application to the DOM element
//app.mount('#app'); 
</script>



<style scoped>

.yarn_entity_edit {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-shadow: 1px 3px 5px black;
    padding: 1vh;
    margin: 1vh;
    width: 15vh;
    font-size: 3vh;
    text-align: center;
}

.yarn_entities_active {
    display: flex;
    flex-direction: column;
    padding: 2vh;
    flex-wrap: wrap;
    align-items: center;
}

</style>
