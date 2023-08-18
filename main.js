const connected =document.querySelector(".status-online");
const disconnected =document.querySelector(".status-offline");

async function connectionStatus(){
 try {
   const fetchResult = await fetch("https://cdn.pixabay.com/photo/2023/04/04/04/50/sunset-7898466_1280.jpg"
    + (new Date ()).getTime());
    return fetchResult.status >= 200 && fetchResult.status < 300
 } catch (error) {
  console.log("connection is down");
  disconnected.textContent = disconnected.style.display = "block";

 }

}

setInterval(async() => {
   const result = await connectionStatus();
   if (result) {
     connected.textContent = connected.style.display = "block"
   }
}, 5000); 


window.addEventListener("load", () => {
  
})