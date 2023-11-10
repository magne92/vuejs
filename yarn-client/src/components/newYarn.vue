<template>
   <div class="newYarn" v-if="viewNewYarn">
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
        </div>
</template>
  
<script>
  export default {
    data() {
      return {
        contentLoaded: false      
        };
    },
    methods: {
          
    }
    // other options...
  };
  </script>
  
  <style>
  /* Your CSS here */
  </style>