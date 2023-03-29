/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = 'd09f152174b01db975149ad1d9929862&units=imperial';

const genButton = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();
/* 
 A click event for async calling by the use of promise chaining 
 where you will pass the the mix of API and user responses, to POST endpoint on server side.
*/ 
genButton.addEventListener('click', async() => {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    if (zipCode === '') {
        alert('Please, Enter a Zip code!!');
    }
    else if (feelings === '') {
        alert('Please, Enter you feelings!!');
    } else {
        await getURL(zipCode)
        .then((resData) => {
            const temp = resData.main.temp;
            return temp; 
        })
        .then(temp => {
            return postData(temp, feelings)
        })
        .then(() => {
            return getData ();
        })
        .then(reqData => {
            return updateUI(reqData)
        })
        .catch(error => {
            console.log('ERROR',error);
        })
    }
});

// The API Key variable is passed as a parameter to fetch().
async function getURL(zipCode) {
    try{
        const URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
        const response = await fetch(URL);
        const resData = await response.json();
        if (resData.cod === '404'){
            alert(`City Not found!!\nPlease, Enter a valid Zip code!!`)
        }
        else{
            /* const temp = resData.main.temp; */
            return resData;
        } 
    }
    catch(error) {
        console.log(error);
    }
}

/* 
 An asynchronous function to add a new entry in the app's endpoint (the named JS object) 
 consisting of the data received from the client side POST through the url ("/saveData")
*/
const postData = async (temp, feelings) => {
        const response = await fetch ("/saveData",{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              date: newDate,
              temp,
              feelings
            })
        })
        try {
            const newData = await response.json();
            return newData
        } catch (err) {
        console.log("ERROR!!", err);
    }
}

// An asynchronous function to fetch the data from the app endpoint through the url ("/getData")
async function getData () {
    const request = await fetch("/getData");
    const reqData = await request.json();
    console.log(reqData);
    return reqData
}

async function updateUI(reqData){
    document.getElementById('date').textContent = `Today's date is: ${reqData.date}`;
    document.getElementById('temp').textContent = `Today's temprature is: ${reqData.temp}°F`;
    document.getElementById('content').textContent = `Your're feeling: ${reqData.feelings}`;
}