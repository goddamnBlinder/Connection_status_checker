
const Pending = document.querySelector(".status-pending");



async function connectionStatus(){
    try {
      const fetchResult = await fetch("https://cdn.pixabay.com/photo/2023/04/04/04/50/sunset-7898466_1280.jpg"
      + (new Date ()).getTime());
      return fetchResult.status >= 200 && fetchResult.status < 300
    } catch (error) {
      console.log("connection is down");
      Pending.textContent = 'you are currently Offline';
     
      
  }
  
}


//Observe the connction
setInterval(async() => {
  const result = await connectionStatus();
  if (result) {
    Pending.style.display = 'none';
    connected.style.display = 'block';
  }
}, 1000); 


//CHecks the connection when the page Loads
window.addEventListener("load", async (event) => {
  if(connectionStatus()) {
    Pending.style.display = 'none';
    connected.style.display = 'block';
  } else{
    Pending.style.display = 'none';
    disconnected.style.display = 'block';
    
  }
})