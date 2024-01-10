// Promise object represents the eventual completion (or failure) of an Asynchronus operation and its resulting value


const axiosRequest = require('axios')

axiosRequest.get('https://www.boredapi.com/api/activity').then(response=>{
    console.log(`You could ${response.data.activity}`)
})
.catch(error=>{
    console.error(`ERROR! ${error}`)
})

// The Await operator is used to wait for a Promise. It can only be used inside an async function within regular JS code; however it can be used on its own with JS modules

async function getActivity() {
    try {
        let response = await axiosRequest.get('https:/www.boredapi.com/api/activity')
        console.log(`You could ${response.data.activity}`)
    } catch(error) {
        console.error(`ERROR: ${error}`)
    }
} 
getActivity()