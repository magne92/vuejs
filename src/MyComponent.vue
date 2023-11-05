<template>
    <div id="yarn_content">
        <div class="yarn" v-if='contentLoaded' v-for="yarn in yarn_data" :key='yarn.id'>
            <div class="yarn_title" >
                <p>{{yarn.type}}</p>
                <p>Pinne: {{ yarn.stick }}</p>
                <p>Fasthet: {{ yarn.thickness }}</p>
                <p>Merke: {{ yarn.brand }}</p>
            </div>
            <div class="yarn_entities"><span v-for=" ent in yarn.entities" :key="ent.id">{{ ent.color}} {{ ent.amount}}</span></div>
        </div> 
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
                this.message = data.message;
                this.yarn_data = data
                console.log(this.yarn_data)
                this.contentLoaded = true
            })
            .catch(error => {
                this.message = 'Error: ' + error.message;
            });
    }    
    },
    // other options...
  };
  </script>
  
  <style>
  /* Your CSS here */
  </style>