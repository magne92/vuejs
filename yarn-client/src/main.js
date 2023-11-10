// Create a Vue application
import { createApp } from 'vue';
import App from './App.vue'; // Assuming you have an App.vue as the root component
import newYarn from './components/newYarn.vue';

const app = createApp(App);

// Register the newYarn component globally
app.component('new-yarn', newYarn);

app.mount('#app');



/* 

const app = Vue.createApp({
app.component('newYarn', newYarn)

// Define your data properties
data() {
    return {
        currentComponent: newYarn,
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
});

// Mount your application to the DOM element
app.mount('#app'); */