
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

async function statusDisplay (){
  statusState.textContent 
}


