const checkbox = document.getElementById("check");
const slider = document.getElementById("slider");
const ampm = document.getElementById("am-pm");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const mainTime = document.getElementById("main-time");
const mainContainer = document.getElementById("main-container");
hours.innerHTML = `<h1>${new Date().getHours()}</h1>`;
minutes.innerHTML = `<h1>${new Date().getMinutes()}</h1>`;
seconds.innerHTML = `<h1>${new Date().getSeconds()}</h1>`;
const date = new Date().getDate();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const year = new Date().getFullYear();
document.getElementById("date-container").innerHTML = `<h1>${date} ${month[new Date().getMonth()]}, ${year}</h1>`;

// time things
const tempSec = new Date().getSeconds();
const tempMin = new Date().getMinutes();
const tempHour = new Date().getHours();
hours.innerHTML = tempHour < 10 ? `<h1>0${tempHour}</h1>` : `<h1>${tempHour}</h1>`;
minutes.innerHTML = tempMin < 10 ? `<h1>0${tempMin}</h1>` : `<h1>${tempMin}</h1>`;
seconds.innerHTML = tempSec < 10 ? `<h1>0${tempSec}</h1>` : `<h1>${tempSec}</h1>`;

const amtopm = () => {
    if(checkbox.checked){
        slider.innerHTML = `<span class="twentyfour">12 <br> hours</span>`;
        ampm.hidden = false;
        twelve();
    } else {
        slider.innerHTML = `<span class="twelve">24 <br> hours</span>`;
        ampm.hidden = true;
        twentyfour();
    }
}
checkbox.addEventListener("change", amtopm);

const twentyfour = () => {

    let tempSec = new Date().getSeconds();
    let tempMin = new Date().getMinutes();
    let tempHour = new Date().getHours();
    hours.innerHTML = tempHour < 10 ? `<h1>0${tempHour}</h1>` : `<h1>${tempHour}</h1>`;
    if(tempSec == 0){
        seconds.innerHTML = `<h1>60</h1>`;
        minutes.innerHTML = tempMin < 10 ? `<h1>0${tempMin}</h1>` : `<h1>${tempMin}</h1>`;
    } else if (tempSec < 10){
        seconds.innerHTML = `<h1>0${tempSec}</h1>`;
        minutes.innerHTML = tempMin < 10 ? `<h1>0${tempMin}</h1>` : `<h1>${tempMin}</h1>`;
    }else {
        seconds.innerHTML = `<h1>${tempSec}</h1>`;
    }
}
const twelve = () => {
    
    let tempSec = new Date().getSeconds();
    let tempMin = new Date().getMinutes();
    let tempHour = new Date().getHours();
    ampm.innerHTML = tempHour > 11 ? `<h1>PM</h1>` : `<h1>AM</h1>`;
    tempHour = tempHour % 12;
    hours.innerHTML = tempHour < 10 ? `<h1>0${tempHour}</h1>` : `<h1>${tempHour}</h1>`;
    if(tempSec == 0){
        seconds.innerHTML = `<h1>60</h1>`;
        minutes.innerHTML = tempMin < 10 ? `<h1>0${tempMin}</h1>` : `<h1>${tempMin}</h1>`;
    } else if (tempSec < 10){
        seconds.innerHTML = `<h1>0${tempSec}</h1>`;
        minutes.innerHTML = tempMin < 10 ? `<h1>0${tempMin}</h1>` : `<h1>${tempMin}</h1>`;
    }else {
        seconds.innerHTML = `<h1>${tempSec}</h1>`;
    }
    
}

const screenCorrector = () => {
    const width = window.innerWidth;
    if(width < 1000){
        document.getElementById("main-body").style.paddingTop = "4em";
        document.getElementById("sec-colon").hidden = true;
        document.getElementById("seconds").hidden = true;
        document.getElementById("minute-colon").hidden = !document.getElementById("minute-colon").hidden;

        mainTime.querySelectorAll("div>h1").forEach((element) => {
            element.style.fontSize = "3em"; 
        });
        mainContainer.style.height = "30vh";
        document.getElementById("date-container").innerHTML = `<h1>${date} ${month[new Date().getMonth()].slice(0,3)}, ${year}</h1>`;
        document.getElementById("date-container").style.height = "10vh";
        document.getElementById("date-container").querySelector("h1").style.fontSize = "2.5em";
    } else {
        document.getElementById("main-body").style.paddingTop = "";
        document.getElementById("sec-colon").hidden = false;
        document.getElementById("seconds").hidden = false;

        mainTime.querySelectorAll("div>h1").forEach((element) => {
            element.style.fontSize = "10em"; 
        });
        mainContainer.style.height = "50vh";
        document.getElementById("date-container").innerHTML = `<h1>${date} ${month[new Date().getMonth()]}, ${year}</h1>`;
        document.getElementById("date-container").style.height = "15vh";
        document.getElementById("date-container").querySelector("h1").style.fontSize = "3.5em";
    }

}

const timerInterval = setInterval(() => {
    amtopm();
    screenCorrector();
}, 1000);