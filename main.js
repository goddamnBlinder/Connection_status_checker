
window.addEventListener('load', (event) => {
    const statusState = document.querySelector(".status");
    statusState.textContent = navigator.online ? "onliine" : "online"
});

window.addEventListener("online", (event) => {
   statusState.textContent = "Online" ;
});

window.addEventListener("offline", (event)=>{
  statusState.textContent = "Offline"
})

const statusState = document.querySelector(".status");
var image = document.querySelector("#img");

async function statusDisplay (){
  statusState.textContent 
}

let car = checkBrand("porche");

function checkBrand(vehicle){
  return vehicle === "Mercedes"? true : false
}

console.log(car);


for(const i = 0; i < 100; i++){
  console.log(i);
}

