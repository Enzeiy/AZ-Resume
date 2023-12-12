window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiURL = 'https://getresumecounter-zn.azurewebsites.net/api/GetResumeCounter?code=Zfw2n0w9MvkJQVSVHKIm4S8ZZaYYhqjEnQxHm8FUw5gdAzFug_FzNQ==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () =>{
    let count =30;
    fetch(functionApiURL).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}